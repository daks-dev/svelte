<script lang="ts">
  import { outside } from '@daks.dev/svelte.kit';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';

  let className: ClassName = undefined;
  export { className as class };

  export let close: () => void;
  export let disabled: boolean;
  export let duration = 300;

  let scrollY: number;
  let navbar: HTMLElement;

  $: scrolled = scrollY > navbar?.clientHeight;
</script>

<svelte:window bind:scrollY />

<div
  bind:this={navbar}
  id="navbar"
  class={twMerge(
    'fixed z-10 top-0 left-0 w-full',
    'text-lg vector-non-scaling-stroke',
    'transition-colors ease-in-out origin-top',
    'overflow--offset',
    className
  )}
  class:scrolled
  class:disabled
  style:transition-duration={`${duration}ms`}>
  <div
    use:outside={close}
    class="
      relative flex flex-wrap justify-end items-center
      wrapper">
    <slot {scrolled} />
  </div>
</div>
