<script lang="ts">
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';

  let className: ClassName;
  export { className as class };

  export let auto: boolean;
</script>

<button
  on:click
  class={twMerge(
    'absolute z-10 left-1/2 -translate-x-1/2 bottom-1 p-3',
    'rounded-full text-4xl',
    className
  )}
  type="button"
  tabindex="-1">
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor">
    {#if auto}
      <path
        d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z" />
    {:else}
      <path
        d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z" />
    {/if}
  </svg>
</button>
