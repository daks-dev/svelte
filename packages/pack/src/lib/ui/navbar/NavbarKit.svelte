<script lang="ts">
  import { Nav, type NavBrand, type NavItem } from '@daks.dev/svelte.kit';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import NavHome from '$lib/shared/navigate/NavHome.svelte';
  import NavToTop from '$lib/shared/navigate/NavToTop.svelte';
  import ColorTheme from '$lib/ui/color-theme/ColorTheme.svelte';
  import YandexSearchToggle from '$lib/ui/yandex/search/YandexSearchToggle.svelte';
  import Navbar from './Navbar.svelte';
  import type { Custom } from '$lib/ui/navbar/index.d.ts';

  let className: ClassName = `
    bg-neutral-50 dark:bg-gray-800
    onscroll:bg-neutral-50/95 dark:onscroll:bg-slate-700/95
    shadow-sm dark:shadow-md onscroll:shadow-lg`;
  export { className as class };

  export let custom: Partial<Custom> = {};
  custom = Object.assign(
    {
      menu: `
        text-slate-500 dark:text-slate-400 onscroll:text-slate-500
        -lg:bg-neutral-50/95 -lg:dark:bg-slate-700/95`,
      link: `
        hover:text-sky-500 dark:hover:text-sky-300
        hover:bg-gray-500/50 lg:hover:bg-transparent
        page:text-cyan-700 step:text-slate-800 dark:step:text-slate-300`,
      button: `
        p-2
        text-slate-500 hover:text-slate-800
        dark:text-slate-400 dark:hover:text-slate-200
        disabled:text-gray-500`,
      icon: `
        p-2
        text-cyan-600 hover:text-sky-500 dark:hover:text-sky-300`
    },
    custom
  );

  export let links: NavItem[];
  export let scope = Nav.map(links, true);
  export let paging = false;

  export let duration = 300;
  export let centered = false;
  export let size: number | string = 24;
  export let brand: Partial<NavBrand> = {
    home: 'line-md:home-simple-twotone',
    page: 'line-md:home-simple'
  };
</script>

<Navbar
  let:close
  let:scrolled
  class={className}
  {custom}
  {links}
  {scope}
  {paging}
  {duration}>
  <svelte:fragment
    slot="before"
    let:scrolled
    let:close>
    <NavHome
      class={twMerge('mr-4', custom.button)}
      {brand}
      {size} />

    <slot
      name="before"
      {scrolled}
      {close}
      {custom} />
  </svelte:fragment>

  <svelte:fragment
    slot="after"
    let:scrolled
    let:close>
    <slot
      name="after"
      {scrolled}
      {close}
      {custom} />

    <ColorTheme
      class={twMerge('ml-4', centered ? 'lg:ml-auto' : 'lg:ml-8', custom.button)}
      {size} />

    <YandexSearchToggle
      class={twMerge('ml-4', custom.button)}
      callback={close}
      {size}
      {duration} />

    <NavToTop
      class="
        p-2 mt-2
        hover:bg-slate-500/50
        text-slate-800 dark:text-slate-200
        rounded-full"
      {scrolled} />
  </svelte:fragment>

  <slot
    {scrolled}
    {close}
    {custom} />
</Navbar>
