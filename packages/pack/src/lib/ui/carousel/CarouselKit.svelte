<script lang="ts">
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import Carousel from './Carousel.svelte';
  import type { Custom, Loaded } from './index.d.ts';

  let className: ClassName = undefined;
  export { className as class };
  export let custom: Partial<Custom> = {};

  export let dataset: Metadata[];

  export let check = false;
  let checked = 0;
  const loaded: Loaded = () => checked++;

  export let grayscale = false;
  export let invert = false;

  custom.item = twMerge(custom.item, (grayscale || invert) && 'group');
  (custom.inner ??= {}).image = twMerge(
    custom.inner?.image,
    grayscale && 'grayscale group-hover:grayscale-0',
    invert && 'invert group-hover:invert-0'
  );
</script>

<Carousel
  class={className}
  {custom}
  {dataset}
  {loaded}
  {...$$restProps}>
  <svelte:fragment slot="check">
    {#if check}
      <div class="relative font-semibold text-black/50">
        <span class="absolute bottom-full left-2 mb-2">{checked} <sup>{dataset.length}</sup></span>
      </div>
    {/if}
  </svelte:fragment>
</Carousel>
