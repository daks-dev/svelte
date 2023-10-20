<script lang="ts">
  import { page } from '$app/stores';
  import { IconTest } from '../../app/iconify/index.js';
  import Nav from './Nav.js';

  export let label: string | undefined = undefined;

  export let href: string | undefined = undefined;
  export let base: string | undefined = undefined;

  export let target: string | undefined = undefined;

  export let rel: string | undefined = undefined;
  export let role: string | undefined = undefined;
  export let itemprop: string | undefined = undefined;

  export let handle: ((...x: unknown[]) => unknown) | undefined = undefined;

  export let disallow = false;

  const item = new Nav({
    label,
    href,
    target,
    rel,
    itemprop,
    role,
    handle,
    base,
    disallow
  });

  export let size: undefined | number | string = undefined;
  export let pointer = false;
  item.pointer = pointer;

  $: item.pathname = $page.url.pathname;
</script>

<!-- sveltekit:prefetch / sveltekit:prefetch -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
  this={item.tag}
  on:click
  on:dblclick
  on:keydown
  class:select-none={true}
  class:inherit={item.tag === 'button'}
  class:disabled={item.active && !item.pointer}
  {...item.props}
  {...$$restProps}>
  <slot name="before" />
  <IconTest
    class="pointer-events-none"
    icon={label}
    {size}>
    <slot />
  </IconTest>
  <slot name="after" />
</svelte:element>
