<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import twMerge from '../../app/tailwind/tailwind-merge.js';

  let className: ClassName = 'max-w-sm';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  let visible = false;
  onMount(() => (visible = BROWSER));
</script>

{#if visible}
  <div
    class={twMerge('grid grid-cols-10 gap-y-2.5', animate, className)}
    aria-hidden="true"
    role="status">
    <div class="col-span-3 mb-1.5 h-2.5 rounded-full bg-current" />
    <div class="col-span-9 h-2 rounded-full bg-current" />
    <div class="col-span-full h-2 rounded bg-current" />
    <div class="col-span-8 h-2 rounded bg-current" />
    <div class="col-span-7 h-2 rounded bg-current" />
    <div class="col-span-9 h-2 rounded bg-current" />
    <span class="sr-only">Loading...</span>
  </div>
{/if}
