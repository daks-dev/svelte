<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';

  let className: ClassName = 'max-w-lg';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  let visible = false;
  onMount(() => (visible = BROWSER));
</script>

{#if visible}
  <div
    class={twMerge('space-y-2.5', animate, className)}
    aria-hidden="true"
    role="status">
    <div class="grid grid-cols-11 gap-y-2.5 gap-x-2">
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-2" />
      <div class="h-2.5 rounded-full bg-current col-span-2" />
      <div class="h-2.5 rounded-full bg-current col-span-5" />
    </div>
    <div class="grid grid-cols-11 gap-y-2.5 gap-x-2">
      <div class="h-2.5 rounded-full bg-current col-span-5" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-5" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-1" />
    </div>
    <div class="grid grid-cols-11 gap-y-2.5 gap-x-2">
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-3" />
      <div class="h-2.5 rounded-full bg-current col-span-2" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-3" />
    </div>
    <div class="grid grid-cols-11 gap-y-2.5 gap-x-2">
      <div class="h-2.5 rounded-full bg-current col-span-4" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-5" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-" />
    </div>
    <div class="grid grid-cols-11 gap-y-2.5 gap-x-2">
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-3" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-2" />
      <div class="h-2.5 rounded-full bg-current col-span-4" />
    </div>
    <div class="grid grid-cols-11 gap-y-2.5 gap-x-2">
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-4" />
      <div class="h-2.5 rounded-full bg-current col-span-2" />
      <div class="h-2.5 rounded-full bg-current opacity-50 col-span-4" />
    </div>
    <span class="sr-only">Loading...</span>
  </div>
{/if}
