<script lang="ts">
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  //import chevronSvg from './chevron.svg';
  import type { Options } from '../index.js';

  export let options: Partial<Options>;

  export let next: boolean = false;

  export let countItems: number;
  export let activeItem: number;

  $: disabled =
    options.behaviour !== 'loop' && (next ? activeItem === countItems - 1 : activeItem === 0);
</script>

<button
  on:click|preventDefault|stopPropagation
  {disabled}
  class={twMerge(
    'absolute z-20 inset-y-0',
    'hidden items-center',
    next ? 'right-0 justify-end' : 'left-0 justify-start',
    'w-1/5 md:w-1/6 xl:w-1/12',
    'text-gray-200/50 hover:text-white disabled:text-black',
    'lg:bg-black/25 hover:bg-black/50 active:bg-transparent',
    'hover:cursor-pointer'
  )}
  class:xs:flex={!disabled || options.behaviour !== 'hide'}>
  <span
    class="
      p-2 linecap-round linejoin-round text-5xl
      hover:scale-125 transition-all duration-300 ease-in"
    class:rotate-180={!next}>
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
    </svg>
  </span>
</button>
