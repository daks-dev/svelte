<script lang="ts">
  import { Icon } from '@daks.dev/svelte-iconify';
  import { outside } from '@daks.dev/svelte.kit';
  import Option from './Option.svelte';

  let className = '';
  export { className as class };

  //export let lable!: string;
  //export let title = '';
  //export let duration = 300;

  const custom = ['pointer-events-none', 'opacity-0', 'scale-y-75'];

  const close = (node?: HTMLElement) => {
    const el = node?.nextElementSibling;
    el?.classList.contains('pointer-events-none') || el?.classList.add(...custom);
  };

  const toggle = (ev: Event) => {
    const el = (ev.target as HTMLElement).nextElementSibling;
    if (el?.classList.contains('pointer-events-none')) el.classList.remove(...custom);
    else el?.classList.add(...custom);
  };
</script>

<div
  class="relative mt-1
         {className}">
  <button
    use:outside={close}
    on:click|preventDefault|stopPropagation={toggle}
    on:keypress
    type="button"
    class="relative
             w-full py-2 pl-3 pr-10
             rounded-md shadow-sm border border-gray-300 bg-white
             text-left sm:text-sm text-gray-700
             focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
    aria-haspopup="listbox"
    aria-expanded="true"
    aria-labelledby="listbox-label">
    <span class="flex items-center pointer-events-none">
      <!-- Heroicon name: bars-3 -->
      <Icon
        icon="ic:round-menu"
        class="w-6 h-6 text-gray-400" />
      <span class="ml-3 block truncate">Select</span>
    </span>
    <span class="absolute inset-y-0 right-0 ml-3 flex items-center pr-2 pointer-events-none">
      <Icon
        icon="ic:round-unfold-more"
        class="h-6 w-6 text-gray-400 cursor-pointer" />
    </span>
  </button>

  <!--
        Select popover, show/hide based on select state.
  
        Entering: ""
          From: ""
          To: ""
        Leaving: "transition ease-in duration-100"
          From: "opacity-100"
          To: "opacity-0"
  -->
  <ul
    class="
      absolute z-10
      mt-1 py-1 max-h-56 w-full overflow-auto
      rounded-md shadow-lg bg-white
      text-base sm:text-sm
      ring-1 ring-black ring-opacity-5
      focus:outline-none
      transition origin-top
      {custom.join(' ')}"
    tabindex="-1"
    aria-labelledby="listbox-label">
    <Option lable="Option 0" />
    <Option lable="Option 1" />
    <Option lable="Option 2" />
    <!-- More items... -->
  </ul>
</div>
