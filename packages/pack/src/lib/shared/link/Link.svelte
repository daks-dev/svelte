<script lang="ts">
  import { page } from '$app/stores';
  import { Nav } from '@daks.dev/svelte.kit';
  import { IconTest } from '@daks.dev/svelte-iconify';

  export let label: undefined | string = undefined;

  export let href: undefined | string = undefined;
  export let target: undefined | string = undefined;

  export let rel: undefined | string = undefined;
  export let itemprop: undefined | string = undefined;
  export let role: undefined | string = undefined;

  export let handle: undefined | ((x?: Event) => unknown) = undefined;

  export let base = '';
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
