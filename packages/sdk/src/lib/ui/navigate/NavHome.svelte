<script lang="ts">
  import { page } from '$app/stores';
  import Icon, { isIcon } from '../../app/iconify/index.js';
  import twMerge from '../../tailwind/tailwind-merge.js';
  import Link from './Link.svelte';
  import type { NavBrand } from './index.d.ts';

  let className: ClassName = undefined;
  export { className as class };

  export let brand: Partial<NavBrand>;
  const { custom = {}, label = 'home page', size = '1.25em', alt = '', ...icon } = brand;
  icon.page ??= icon.home;
</script>

<Link
  class={twMerge(className, brand.custom?.link)}
  href="/"
  aria-label={label}>
  <span class="sr-only">{@html label}</span>
  {#if $page.url.pathname === '/'}
    {#if icon.home}
      {#if isIcon(icon.home)}
        <Icon
          class={twMerge('disabled', custom.home)}
          icon={icon.home}
          {size}>
          {alt}
        </Icon>
      {:else}
        <img
          class={twMerge('disabled', custom.home)}
          src={icon.home}
          width={size}
          height={size}
          {alt} />
      {/if}
    {/if}
  {:else if icon.page}
    {#if isIcon(icon.page)}
      <Icon
        class={twMerge('pointer-events-none', custom.page)}
        icon={icon.page}
        {size}>
        {alt}
      </Icon>
    {:else}
      <img
        class={twMerge('pointer-events-none', custom.page)}
        src={icon.page}
        width={size}
        height={size}
        {alt} />
    {/if}
  {/if}
</Link>
