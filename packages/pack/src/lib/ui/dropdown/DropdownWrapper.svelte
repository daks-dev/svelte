<script lang="ts">
  import type { NavItem } from '@daks.dev/svelte.kit';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import Link from '$lib/shared/link/Link.svelte';

  let classWrapper: ClassName =
    'z-10 bg-neutral-50/95 dark:bg-slate-700/95 rounded-md drop-shadow-md';
  export { classWrapper as class };
  export let classLink: ClassName = 'py-2 px-4 hover:bg-gray-400/25';

  export let id: string | undefined = undefined;
  export let hidden: boolean;

  export let items: NavItem[] | undefined = undefined;
  export let base = '';

  export let origin = 'top';
  export let duration = 300;
</script>

<!-- style:transform-origin={origin} -->
<div
  {id}
  class={twMerge(
    'absolute flex flex-col w-max min-w-full overflow-hidden',
    'aria-hidden:opacity-0 aria-hidden:scale-75 aria-hidden:disabled',
    'transition-all ease-in-out',
    classWrapper
  )}
  class:top-full={origin.includes('top')}
  class:bottom-full={origin.includes('bottom')}
  style:transition-duration={`${duration}ms`}
  aria-orientation="vertical"
  aria-hidden={hidden}
  tabindex={hidden ? -1 : undefined}
  role="menu">
  {#if items}
    {#each items as item}
      <Link
        on:click={item.handle}
        class={twMerge('flex items-center w-full', classLink)}
        {base}
        {...item} />
    {/each}
  {:else}
    <slot />
  {/if}
</div>
