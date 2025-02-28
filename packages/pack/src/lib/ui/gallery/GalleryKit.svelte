<script lang="ts">
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import Gallery from './Gallery.svelte';
  import type { Custom } from './index.d.ts';

  let className: ClassName = undefined;
  export { className as class };

  export let custom: Partial<Custom> = {};

  export let dataset: Metadata[] = [];

  export let nativ = false;

  export let grid = false;
  export let adaptive = false;
  export let centered = false;
  export let rounded = false;
  export let shadow = false;
  export let scale = false;
  export let grayscale = false;
  export let invert = false;
</script>

<Gallery
  {dataset}
  class={twMerge(
    grid ? 'grid grid-cols-none' : 'flex flex-wrap',
    centered && 'justify-center',
    className
  )}
  custom={{
    item: twMerge(custom.item, centered && 'items-center'),
    image: twMerge(
      custom.image,
      adaptive && 'w-full max-w-full h-auto object-contain',
      rounded && 'rounded',
      shadow && 'drop-shadow-deep hover:drop-shadow-md',
      scale && 'hover:scale-105',
      grayscale && 'grayscale hover:grayscale-0',
      invert && 'invert hover:invert-0',
      (scale || grayscale || invert) && 'transition duration-500 ease-in-out'
    ),
    caption: twMerge(
      custom.caption,
      centered && 'text-center',
      (shadow || scale) && (adaptive ? 'mt-4' : 'mt-2')
    )
  }}
  {nativ} />
