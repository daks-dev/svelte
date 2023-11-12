<script lang="ts">
  import Nav from '../../../ui/navigate/Nav.js';
  import twMerge from '../../../tailwind/tailwind-merge.js';
  import Link from '../../../ui/navigate/Link.svelte';
  import type { NavItem } from '../../../ui/navigate/index.d.ts';

  let className: ClassName = undefined;
  export { className as class };

  export let link: Partial<NavItem>;
  export let base = '';
  link.base ??= base;
  export let size: number | string = '1.25em';
</script>

<Link
  on:click
  on:dblclick
  on:keypress
  class={twMerge('flex w-full items-center px-4 py-2 lg:w-fit lg:px-2', link.style, className)}
  {size}
  {...Nav.props(link)} />
