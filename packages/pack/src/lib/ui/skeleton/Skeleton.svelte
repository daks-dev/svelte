<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';

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
    <div class="h-2.5 rounded-full bg-current col-span-3 mb-1.5" />
    <div class="h-2 rounded-full bg-current col-span-9" />
    <div class="h-2 rounded bg-current col-span-full" />
    <div class="h-2 rounded bg-current col-span-8" />
    <div class="h-2 rounded bg-current col-span-7" />
    <div class="h-2 rounded bg-current col-span-9" />
    <span class="sr-only">Loading...</span>
  </div>
{/if}
