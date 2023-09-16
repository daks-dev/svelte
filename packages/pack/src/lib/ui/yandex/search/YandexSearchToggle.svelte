<script lang="ts">
  import { fly } from 'svelte/transition';
  import { sineInOut } from 'svelte/easing';
  import { page } from '$app/stores';
  import { outside, uuid } from '@daks.dev/svelte.kit';
  import { Icon } from '@daks.dev/svelte-iconify';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';
  import YandexSearchForm from './YandexSearchForm.svelte';

  let className: ClassName = undefined;
  export { className as class };
  export let classModal: ClassName = 'bg-inherit rounded-lg drop-shadow-lg'; //  'bg-neutral-50/95 dark:bg-slate-700/95 rounded-lg drop-shadow-lg';

  export let duration = 300;
  export let size: number | string = '1.25em';

  export let callback: undefined | (() => void) = undefined;

  let hidden = true;

  const options = {
    y: -128,
    duration,
    easing: sineInOut
  };

  const id = uuid();

  function close(): void {
    hidden = true;
  }

  function toggle(): void {
    callback?.call(null);
    hidden = !hidden;
  }

  function handleKey(ev: KeyboardEvent): void {
    if (ev.key === 'Escape' && !hidden) {
      ev.preventDefault();
      ev.stopPropagation();
      close();
    }
  }

  $: disabled = $page.url.pathname.indexOf('/search') === 0 || undefined;
</script>

<button
  use:outside.withnext={close}
  on:click={toggle}
  on:keydown={handleKey}
  class={twMerge(className)}
  type="button"
  {disabled}
  aria-label="toggle search"
  aria-haspopup={!hidden}
  aria-expanded={!hidden}
  aria-controls={id}>
  <Icon
    class="pointer-events-none"
    icon={`ic:round-search${hidden && !disabled ? '' : '-off'}`}
    {size} />
</button>

{#if !hidden}
  <div
    in:fly={options}
    out:fly={options}
    class={twMerge(
      'absolute z-40 top-full left-1/2 -translate-x-1/2',
      'w-full max-w-xs xs:max-w-md sm:max-w-xl lg:max-w-3xl mt-4 py-8 px-4 sm:px-8',
      classModal
    )}
    {id}>
    <YandexSearchForm
      button
      callback={close} />
  </div>
{/if}
