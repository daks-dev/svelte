<script lang="ts">
  import { Figure } from '@daks.dev/svelte.kit';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import Sign, { type SignOptions } from '$lib/ui/sign/index.js';
  import LightboxList from './LightboxList.svelte';
  import LightboxModal from './LightboxModal.svelte';
  import LightboxThumbnail from './LightboxThumbnail.svelte';
  import type { Options, Custom, Loader } from './index.d.ts';

  let className: ClassName = undefined;
  export { className as class };

  export let sources: Metadata[];
  export let thumbnails: Metadata[];

  export let nativ = false;

  export let grid = false;
  export let adaptive = false;
  export let centered = false;
  export let rounded = false;
  export let shadow = false;
  export let scale = false;
  export let grayscale = false;
  export let invert = false;

  export let custom: Partial<Custom> = {};

  export let options: Partial<Options> = {};
  options = Object.assign({ behaviour: 'loop' }, options);

  export let loader: Loader = () => document?.lazyload.update();

  export let sign: true | Partial<SignOptions> = {};
  if (sign === true)
    sign = {
      icon: 'ic:round-zoom-out-map',
      dark: true
    };
  const _sign = <SignOptions>sign;
</script>

<LightboxList
  class={twMerge(
    grid ? 'grid grid-cols-none ' : 'flex flex-wrap',
    centered && 'justify-center',
    className
  )}
  {custom}
  {options}
  {loader}
  {...$$restProps}>
  <svelte:fragment slot="thumbnail">
    {#each thumbnails as data, idx}
      <LightboxThumbnail class={twMerge(sign && 'group relative')}>
        {#if _sign}
          <Sign {..._sign} />
        {/if}
        <Figure
          {data}
          class={twMerge('relative flex flex-col', centered && 'items-center', custom.item)}
          custom={{
            image: twMerge(
              adaptive && 'w-full max-w-full h-auto object-contain',
              rounded && 'rounded',
              shadow && 'drop-shadow-deep hover:drop-shadow-hard',
              scale && 'hover:scale-105',
              grayscale && 'grayscale hover:grayscale-0',
              invert && 'invert hover:invert-0',
              (shadow || scale || grayscale || invert) && 'transition duration-500 ease-in-out',
              custom.inner?.image
            ),
            caption: twMerge(
              'pt-2 flex flex-col',
              centered && 'text-center',
              (shadow || scale) && (adaptive ? 'mt-4' : 'mt-2'),
              custom.inner?.caption
            )
          }}
          {nativ} />
        <link
          rel="image"
          href={sources[idx].src} />
        <link
          rel="thumbnailUrl"
          href={thumbnails[idx].src} />
      </LightboxThumbnail>
    {/each}
  </svelte:fragment>
  {#each sources as { src, width, height, title, subtitle, description }}
    <LightboxModal
      {title}
      {subtitle}
      {description}>
      <img
        class="bg-1/10 bg-loading bg-center bg-no-repeat"
        {src}
        {width}
        {height}
        alt=""
        decoding="async"
        loading="lazy" />
    </LightboxModal>
  {/each}
</LightboxList>
