<script lang="ts">
  import { onMount } from 'svelte';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
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
    'fixed z-50 top-0 left-0 w-screen h-screen',
    'flex justify-center items-center',
    'transition-opacity ease-out',
    image && 'bg-no-repeat bg-center bg-25% sm:bg-10% lg:bg-5%',
    className
  )}
  style:background-image={image ? `url(${image})` : undefined}
  aria-hidden
  hidden />
