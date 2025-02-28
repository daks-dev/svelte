<script lang="ts">
  import outside from '../../utils/outside.js';
  import twMerge from '../../tailwind/tailwind-merge.js';

  let className: ClassName = undefined;
  export { className as class };

  export let close: () => void;
  export let disabled: boolean;
  export let duration = 300;

  let scrollY: number = 0;
  let navbar: HTMLElement;

  $: scrolled = scrollY > navbar?.clientHeight;
</script>

<svelte:window bind:scrollY />

<div
  bind:this={navbar}
  id="navbar"
  class={twMerge(
    'fixed left-0 top-0 z-10 w-full',
    'text-lg vector-non-scaling-stroke',
    'origin-top transition-colors ease-in-out',
    'overflow-y-offset',
    className
  )}
  class:scrolled
  class:disabled
  style:transition-duration={`${duration}ms`}>
  <div
    use:outside={close}
    class="
      relative flex flex-wrap items-center justify-end
      wrapper-xl">
    <slot {scrolled} />
  </div>
</div>
