<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import twMerge from '../../tailwind/tailwind-merge.js';

  let className: ClassName = 'max-w-sm';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  let visible = false;
  onMount(() => (visible = BROWSER));
</script>

{#if visible}
  <div
    role="status"
    class={twMerge('rounded border border-current p-5 shadow', animate, className)}
    aria-hidden="true">
    <div class="mb-2.5 h-2.5 w-32 rounded-full bg-current" />
    <div class="mb-10 h-2 w-48 rounded-full bg-current" />
    <div class="mt-4 flex items-baseline space-x-6">
      <div class="h-72 w-full rounded-t-lg bg-current opacity-50" />
      <div class="h-56 w-full rounded-t-lg bg-current" />
      <div class="h-72 w-full rounded-t-lg bg-current opacity-50" />
      <div class="h-64 w-full rounded-t-lg bg-current" />
      <div class="h-80 w-full rounded-t-lg bg-current opacity-50" />
      <div class="h-72 w-full rounded-t-lg bg-current" />
      <div class="h-80 w-full rounded-t-lg bg-current opacity-50" />
    </div>
    <span class="sr-only">...loading...</span>
  </div>
{/if}
