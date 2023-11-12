<script lang="ts">
  import Nav from '../../../ui/navigate/Nav.js';
  import twMerge from '../../../tailwind/tailwind-merge.js';
  import Dropdown from '../../../ui/dropdown/Dropdown.svelte';
  import DropdownWrapper from '../../../ui/dropdown/DropdownWrapper.svelte';
  import type { NavItem } from '../../../ui/navigate/index.d.ts';

  let className: ClassName = undefined;
  export { className as class };
  export let classLink: ClassName = undefined;

  export let link: Partial<NavItem>;
  export let size: number | string = '1.25em';
  export let duration = 300;

  // const base = `${link.base ?? ''}${link.href ?? ''}`;
</script>

<Dropdown
  let:id
  let:hidden
  class={twMerge('px-4 py-2 lg:px-2', link.style, classLink, className)}
  {size}
  {...Nav.props(link)}>
  <DropdownWrapper
    {id}
    {hidden}
    class="
      left-2 z-10 max-w-xs origin-top-left divide-y
      divide-neutral-200/95 rounded-md bg-neutral-50/95
      text-base
      shadow-lg shadow-gray-600
      focus:outline-none dark:divide-slate-600/95 dark:bg-slate-700/95 sm:max-w-sm
      md:max-w-md lg:left-1/2
      lg:mt-1 lg:origin-top lg:-translate-x-1/2
      lg:shadow-none lg:drop-shadow-md"
    classLink={twMerge(
      'py-2 px-4 justify-end lg:justify-center',
      'text-right lg:text-center',
      classLink
    )}
    items={link.links}
    base={link.base ?? link.href ?? ''}
    {duration} />
</Dropdown>
