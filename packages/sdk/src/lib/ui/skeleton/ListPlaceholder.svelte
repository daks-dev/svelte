<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import twMerge from '../../tailwind/tailwind-merge.js';

  let className: ClassName = 'max-w-md';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  let visible = false;
  onMount(() => (visible = BROWSER));
</script>

{#if visible}
  <div
    role="status"
    class={twMerge(
      'space-y-4 rounded p-5',
      'divide-y divide-current border border-current shadow',
      animate,
      className
    )}
    aria-hidden="true">
    {#each Array(5) as idx}
      <div
        class="flex items-center justify-between pt-4 first:pt-0"
        aria-rowindex={idx}>
        <div>
          <div class="mb-2.5 h-2.5 w-24 rounded-full bg-current opacity-40" />
          <div class="h-2 w-32 rounded bg-current" />
        </div>
        <div class="h-2.5 w-12 rounded-full bg-current opacity-70" />
      </div>
    {/each}
    <span class="sr-only">...loading...</span>
  </div>
{/if}
