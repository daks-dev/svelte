<script lang="ts">
  import type { NavItem } from '@daks.dev/svelte.kit';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import Dropdown from './components/Dropdown.svelte';
  import Link from './components/Link.svelte';

  let className: ClassName = undefined;
  export { className as class };
  export let classLink: ClassName = undefined;

  export let links: NavItem[];
  export let hidden: boolean;
  export let duration = 300;
</script>

<nav
  id="navbar-menu"
  class={twMerge(
    'absolute z-0 left-0 top-full ml-1 -lg:mt-1 lg:static lg:ml-4',
    // 'grid grid-cols-1 lg:auto-cols-max lg:grid-flow-col lg:gap-x-3 2xl:gap-x-5',
    'flex flex-col lg:flex-row lg:flex-nowrap lg:gap-x-3 2xl:gap-x-5',
    'max-w-xs sm:max-w-md lg:max-w-none',
    'font-normal tracking-wide uppercase',
    '-lg:rounded-md -lg:drop-shadow-md',
    '-lg:aria-hidden:opacity-0 -lg:aria-hidden:scale-75 -lg:aria-hidden:disabled',
    'transition ease-in-out origin-top-left',
    // 'first:rounded-t-md last:rounded-b-md',
    className
  )}
  style:transition-duration={`${duration}ms`}
  aria-hidden={hidden}>
  {#each links as link}
    {#if link.links}
      <Dropdown
        on:click
        {classLink}
        {link} />
    {:else}
      <Link
        on:click
        class={twMerge('flex items-center', classLink)}
        {link} />
    {/if}
  {/each}
  <slot />
</nav>
