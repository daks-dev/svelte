<script lang="ts">
  import { beforeNavigate, afterNavigate } from '$app/navigation';
  import { Swiping, Nav, type NavItem } from '@daks.dev/svelte.kit';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import NavbarMenu from './NavbarMenu.svelte';
  import NavbarWrapper from './NavbarWrapper.svelte';
  import ToggleMenu from './components/ToggleMenu.svelte';
  import Waiting from './components/Waiting.svelte';
  import type { Custom } from './index.d.ts';

  let className: ClassName = undefined;
  export { className as class };

  export let custom: Partial<Custom> = {};

  export let links: NavItem[];
  export let scope = Nav.map(links, true);
  export let paging = false;

  export let duration = 300;

  let hidden = true;
  const close = () => (hidden = true);
  const toggle = () => (hidden = !hidden);

  let disabled = false;

  function handleKey(ev: KeyboardEvent): void {
    if (ev.key === 'Escape' && !hidden) {
      ev.preventDefault();
      ev.stopPropagation();
      close();
    }
  }

  beforeNavigate(() => {
    disabled = true;
    close();
  });

  afterNavigate(() => setTimeout(() => (disabled = false), 500));
</script>

<svelte:body on:keydown={handleKey} />

{#if scope.length}
  <Swiping
    {scope}
    {paging} />
{/if}

<NavbarWrapper
  let:scrolled
  class={className}
  {close}
  {disabled}
  {duration}>
  <slot
    name="before"
    {scrolled}
    {close}
    {custom} />

  <Waiting
    class="mr-auto text-gray-400"
    {disabled} />

  <slot
    {scrolled}
    {close}
    {custom} />

  <NavbarMenu
    class={custom.menu}
    classLink={custom.link}
    {links}
    {hidden}
    {duration} />

  <slot
    name="after"
    {scrolled}
    {close}
    {custom} />

  <ToggleMenu
    class={twMerge('lg:hidden ml-4', custom.button)}
    {hidden}
    {toggle} />
</NavbarWrapper>
