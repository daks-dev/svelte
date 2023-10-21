<script lang="ts">
  import twMerge from '../../assets/tailwind/tailwind-merge.js';
  import placeholder from '../../assets/images/placeholder.js';

  export let data: unknown;
  const { src, width, height, title, subtitle, description } = data as ImageMetainfo;
  const caption = title || subtitle || description;

  let className: ClassName = undefined;
  export { className as class };

  export let custom: Record<string, ClassName> = {};

  let space: undefined | number = undefined;
  export { space as width };

  export let native = false;
  export let loaded: ((x?: Event | HTMLElement) => void) | undefined = undefined;

  const handleLoad = native && loaded ? (ev: Event) => loaded?.call(ev) : undefined;

  export let alt = caption ? caption.toLowerCase() : '';
</script>

<figure
  class={twMerge('relative', className)}
  style:width={space && `${space}px`}>
  <img
    on:load={handleLoad}
    class={twMerge(
      !native && 'bg-20% bg-loading bg-center bg-no-repeat',
      'bg-neutral-300',
      custom.image
    )}
    class:lazy={!native}
    src={native ? src : placeholder}
    data-src={native ? undefined : src}
    {width}
    {height}
    {alt}
    decoding="async"
    loading="lazy" />
  {#if caption}
    <figcaption class={twMerge('flex flex-col', custom.caption)}>
      {#if title}
        <span class={twMerge('font-semibold', custom.title)}>{@html title}</span>
      {/if}
      {#if subtitle}
        <span class={twMerge(custom.subtitle)}>{@html subtitle}</span>
      {/if}
      {#if description}
        <small class={twMerge(custom.description)}>{@html description}</small>
      {/if}
    </figcaption>
  {/if}
</figure>
