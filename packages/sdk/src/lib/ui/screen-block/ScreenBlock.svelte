<script lang="ts">
  import { onMount } from 'svelte';
  import twMerge from '../../tailwind/tailwind-merge.js';
  import icon from './default.svg';

  let className: ClassName = 'bg-neutral-100 dark:bg-gray-800';
  export { className as class };

  export let image = icon;
  export let delay: number | string = 75;
  export let duration: number | string = 500;

  let node: HTMLElement;

  function close() {
    node.style.transitionDuration = `${duration}ms`;
    node.style.pointerEvents = node.style.touchAction = 'none';
    node.style.opacity = '0';
    setTimeout(() => node.remove(), Number(duration));
  }

  onMount(() => setTimeout(close, Number(delay)));
</script>

<svelte:head>
  {#if image}
    <link
      rel="preload"
      as="image"
      href={image} />
  {/if}
</svelte:head>

<div
  bind:this={node}
  class={twMerge(
    'fixed left-0 top-0 z-50 h-screen w-screen',
    'flex items-center justify-center',
    'transition-opacity ease-out',
    image && 'bg-25% bg-center bg-no-repeat sm:bg-10% lg:bg-5%',
    className
  )}
  style:background-image={image ? `url(${image})` : undefined}
  aria-hidden
  hidden />
