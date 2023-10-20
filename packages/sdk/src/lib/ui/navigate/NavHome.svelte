<script lang="ts">
  import { page } from '$app/stores';
  import Icon, { isIcon } from '../../app/iconify/index.js';
  import twMerge from '../../app/tailwind/tailwind-merge.js';
  import Link from './Link.svelte';
  import type { NavBrand } from './index.d.ts';

  let className: ClassName = undefined;
  export { className as class };

  export let brand: Partial<NavBrand>;
  export let size: number | string = brand.size ?? '1.25em';
  export let alt = brand.alt ?? 'Главная';

  brand.page ??= brand.home;
</script>

<Link
  class={twMerge(className, brand.custom?.link)}
  href="/">
  {#if $page.url.pathname === '/'}
    {#if brand.home}
      {#if isIcon(brand.home)}
        <Icon
          class={twMerge('pointer-events-none', brand.custom?.home)}
          icon={brand.home}
          {size}>
          {alt}
        </Icon>
      {:else}
        <img
          class={twMerge('pointer-events-none', brand.custom?.home)}
          src={brand.home}
          width={size}
          height={size}
          {alt} />
      {/if}
    {/if}
  {:else if brand.page}
    {#if isIcon(brand.page)}
      <Icon
        class={twMerge('pointer-events-none', brand.custom?.page)}
        icon={brand.page}
        {size}>
        {alt}
      </Icon>
    {:else}
      <img
        class={twMerge('pointer-events-none', brand.custom?.page)}
        src={brand.page}
        width={size}
        height={size}
        {alt} />
    {/if}
  {/if}
</Link>
