<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { onMount } from 'svelte';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';

  let className: ClassName = 'max-w-sm';
  export { className as class };

  export let animate = 'animate-pulse hover:animation-paused';

  export let size = '48';

  let visible = false;
  onMount(() => (visible = BROWSER));
</script>

{#if visible}
  <div
    class={twMerge('p-5 space-y-2.5 rounded border border-current shadow', animate, className)}
    aria-hidden="true"
    role="status">
    <slot />
    <div
      class="
        relative h-48 mb-5 overflow-hidden
        flex justify-center items-center rounded
        before:absolute before:inset-0 before:bg-current before:opacity-25">
      <svg
        width={size}
        height={size}
        viewBox="0 0 640 512"
        fill="currentColor">
        <path
          d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
      </svg>
    </div>
    <div class="h-2.5 rounded-full bg-current w-48 mb-5" />
    <div class="h-2 rounded-full bg-current" />
    <div class="h-2 rounded-full bg-current" />
    <div class="h-2 rounded-full bg-current" />
    <div class="flex items-center mt-1.5 space-x-3">
      <svg
        class="w-14 h-14"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" />
      </svg>
      <div class="opacity-50">
        <div class="h-2.5 w-32 rounded-full bg-current mb-2.5" />
        <div class="h-2 w-48 rounded-full bg-current" />
      </div>
    </div>
    <span class="sr-only">Loading...</span>
  </div>
{/if}
