<script lang="ts">
  import { page } from '$app/stores';
  import { Icon, isIcon } from '@daks.dev/svelte-iconify';
  import type { NavBrand } from '@daks.dev/svelte.kit';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import Link from '$lib/shared/link/Link.svelte';

  let className: ClassName = undefined;
  export { className as class };

  export let brand: Partial<NavBrand>;
  export let size: number | string = brand.size ?? '1.25em';
  export let alt = brand.alt ?? 'Главная';

  brand.page ??= brand.home;
</script>

<Link
  class={twMerge(className, brand.class?.link ?? (typeof brand.class === 'string' && brand.class))}
  href="/">
  {#if $page.url.pathname === '/'}
    {#if brand.home}
      {#if isIcon(brand.home)}
        <Icon
          class={twMerge('pointer-events-none', brand.class?.home)}
          icon={brand.home}
          {size}>
          {alt}
        </Icon>
      {:else}
        <img
          class={twMerge('pointer-events-none', brand.class?.home)}
          src={brand.home}
          width={size}
          height={size}
          {alt} />
      {/if}
    {/if}
  {:else if brand.page}
    {#if isIcon(brand.page)}
      <Icon
        class={twMerge('pointer-events-none', brand.class?.page)}
        icon={brand.page}
        {size}>
        {alt}
      </Icon>
    {:else}
      <img
        class={twMerge('pointer-events-none', brand.class?.page)}
        src={brand.page}
        width={size}
        height={size}
        {alt} />
    {/if}
  {/if}
</Link>
