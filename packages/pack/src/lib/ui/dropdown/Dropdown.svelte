<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { Icon, isIcon } from '@daks.dev/svelte-iconify';
  import { outside, uuid, type NavItem } from '@daks.dev/svelte.kit';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import Link from '$lib/shared/link/Link.svelte';
  import DropdownWrapper from './DropdownWrapper.svelte';

  export let classWrapper: ClassName = undefined;
  let classLink: ClassName =
    'py-2 px-4 bg-inherit hover:bg-gray-400/25 rounded border border-gray-500/50';
  export { classLink as class };

  export let label: undefined | string = undefined;

  export let href: undefined | string = undefined;
  export let base: undefined | string = undefined;

  export let inline = false;
  export let sign = !isIcon(label);
  export let size: number | string = '1.25em';

  export let items: undefined | NavItem[] = undefined;

  const id = uuid();

  let hidden = true;

  function close() {
    hidden = true;
  }

  function handleClick(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    hidden = !hidden;
  }

  function handleDblClick(ev: Event) {
    if (href && $page.url.pathname !== href) {
      ev.stopPropagation();
      close();
      goto(href);
    }
  }

  function handleKey(ev: KeyboardEvent) {
    if (ev.key === 'Escape' && !hidden) {
      ev.stopPropagation();
      close();
    }
  }
</script>

<div
  use:outside={close}
  on:click={close}
  on:keydown={handleKey}
  role="button"
  tabindex="-1"
  class={twMerge('relative', inline ? 'inline-flex' : 'flex', classWrapper)}>
  <Link
    on:click={handleClick}
    on:dblclick={handleDblClick}
    class={twMerge('flex items-center w-fit min-w-full', classLink)}
    {label}
    {href}
    {base}
    {size}
    pointer
    aria-expanded={!hidden}
    aria-haspopup={!hidden}
    aria-controls={id}>
    <svelte:fragment slot="after">
      {#if sign}
        <Icon
          icon="ic:round-chevron-right"
          class="pointer-events-none"
          rotate={hidden ? ($page.url.pathname.indexOf(`${href}/`) === 0 ? 90 : 45) : -45}
          size="1em" />
      {/if}
    </svelte:fragment>
  </Link>

  {#if items}
    <DropdownWrapper
      {id}
      {hidden}
      {items}
      {base}>
      <slot {hidden} />
    </DropdownWrapper>
  {:else}
    <slot
      {id}
      {hidden} />
  {/if}
</div>
