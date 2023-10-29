<script lang="ts">
  import Icon from '../../../app/iconify/Icon.svelte';
  import twMerge from '../../../assets/tailwind/tailwind-merge.js';

  let className: ClassName = undefined;
  export { className as class };

  export let label = 'toggle menu';

  export let hidden: boolean;
  export let toggle: () => void;
  export let size: number | string = '1.75em';
</script>

<button
  on:click={toggle}
  class={twMerge(className)}
  aria-label="toggle menu"
  aria-expanded={!hidden}
  aria-controls="navbar-menu"
  aria-hidden="true">
  <span class="sr-only">{label}</span>
  <Icon
    class="pointer-events-none"
    icon="ic:round-menu"
    {size} />
</button>
