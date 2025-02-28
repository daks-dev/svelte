<script lang="ts">
  import { Nav, type NavItem } from '@daks.dev/svelte.kit';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import Link from '$lib/shared/link/Link.svelte';

  let className: ClassName = undefined;
  export { className as class };

  export let link: NavItem;
  export let base = '';
  link.base ??= base;
  export let size: number | string = '1.25em';
</script>

<Link
  on:click
  on:dblclick
  on:keypress
  class={twMerge('flex items-center w-full lg:w-fit py-2 px-4 lg:px-2', link.style, className)}
  {size}
  {...Nav.props(link)} />
