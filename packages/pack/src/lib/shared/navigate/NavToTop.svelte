<script lang="ts">
  import { fade } from 'svelte/transition';
  import { sineIn, sineOut } from 'svelte/easing';
  import { Icon } from '@daks.dev/svelte-iconify';
  import { scroll } from '@daks.dev/svelte.kit';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';

  let className: ClassName = undefined;
  export { className as class };

  export let scrolled: boolean;
  export let size: number | string = '1.75em';
  export let duration = 300;
  export let speed = duration * 5;

  function handleClck() {
    scroll.toTop({ duration: speed });
  }
</script>

{#if scrolled}
  <button
    in:fade={{
      duration,
      easing: sineIn
    }}
    out:fade={{
      duration,
      easing: sineOut
    }}
    on:click|preventDefault={handleClck}
    class={twMerge(
      'absolute z-10 flex top-full',
      'opacity-50 hover:opacity-100',
      'transition ease-in-out',
      className
    )}
    style:transition-duration={`${duration}ms`}>
    <Icon
      class="pointer-events-none"
      icon="mdi:transfer-up"
      {size} />
  </button>
{/if}
