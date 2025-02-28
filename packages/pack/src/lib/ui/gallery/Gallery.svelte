<script lang="ts">
  import { onMount } from 'svelte';
  import { Figure } from '@daks.dev/svelte.kit';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import type { Custom } from './index.d.ts';

  let className: ClassName = undefined;
  export { className as class };

  export let custom: Partial<Custom> = {};
  custom.caption = twMerge('pt-2 flex flex-col', custom.caption);

  export let dataset: Metadata[];

  export let nativ = false;

  if (!nativ) onMount(() => document?.lazyload.update());
</script>

<div class={twMerge(className)}>
  {#each dataset as data}
    <Figure
      {data}
      class={twMerge('flex flex-col', custom.item)}
      {custom}
      {nativ} />
    {#if !nativ}
      <link
        rel="image"
        href={data.src} />
    {/if}
  {/each}
</div>
