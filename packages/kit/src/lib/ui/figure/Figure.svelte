<script lang="ts">
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import placeholder from '$lib/assets/icons/placeholder.js';
  import type { Custom, Loaded } from './index.d.ts';

  export let data: unknown;
  const { src, width, height, title, subtitle, description } = data as Metadata;
  const caption = title || subtitle || description;

  let className: ClassName = undefined;
  export { className as class };

  export let custom: Custom = {};

  let space: undefined | number = undefined;
  export { space as width };

  export let nativ = false;
  export let loaded: Loaded = undefined;
  const handleLoad = nativ && loaded ? (ev: Event) => loaded?.call(ev) : undefined;

  export let alt = caption?.toLowerCase() || '';
</script>

<figure
  class={twMerge('relative', className)}
  style:width={space && `${space}px`}>
  <img
    on:load={handleLoad}
    class={twMerge(
      !nativ && 'bg-no-repeat bg-center bg-20% bg-loading',
      'bg-neutral-300',
      custom.image
    )}
    class:lazy={!nativ}
    src={nativ ? src : placeholder}
    data-src={nativ ? undefined : src}
    {width}
    {height}
    {alt}
    decoding="async"
    loading="lazy" />
  {#if caption}
    <figcaption class={twMerge('flex flex-col', custom.caption)}>
      {#if title}
        <span class="font-semibold">{@html title}</span>
      {/if}
      {#if subtitle}
        <span>{@html subtitle}</span>
      {/if}
      {#if description}
        <small>{@html description}</small>
      {/if}
    </figcaption>
  {/if}
</figure>
