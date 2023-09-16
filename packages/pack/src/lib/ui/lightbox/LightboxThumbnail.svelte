<script lang="ts">
  import { getContext } from 'svelte';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import type { Custom } from './index.d.ts';

  let className: ClassName = undefined;
  export { className as class };

  export let custom: Partial<Custom> = {};

  export let tag = 'div';

  export let id: number = (getContext('counterThumbnails') as () => number)();

  const openImage: (id: number) => void = getContext('openImage');
</script>

<svelte:element
  this={tag}
  on:click={() => openImage(id)}
  role="button"
  tabindex="-1"
  class={twMerge('lightbox-thumbnail cursor-zoom-in', className)}
  {...$$restProps}>
  <slot {custom} />
</svelte:element>
