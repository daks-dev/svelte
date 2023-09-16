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
    class={twMerge(
      'w-full p-5 rounded-md shadow',
      'border border-current divide-y divide-current',
      animate,
      className
    )}>
    <slot />
    <div class="flex space-x-4">
      <div class="h-10 w-10 rounded-full bg-current" />
      <div class="flex-1 space-y-5">
        <div class="h-2.5 rounded-full bg-current" />
        <div class="space-y-2.5 opacity-50">
          <div class="grid grid-cols-3 gap-x-2 gap-y-2.5">
            <div class="h-2 rounded bg-current col-span-2" />
            <div class="h-2 rounded bg-current col-span-1" />
          </div>
          <div class="h-2 rounded bg-current" />
        </div>
      </div>
    </div>
  </div>
{/if}
