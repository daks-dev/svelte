<script lang="ts">
  import { Icon } from '@daks.dev/svelte-iconify';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';

  let className: ClassName = undefined;
  export { className as class };

  export let disabled: boolean;
  export let size: number | string = '1.25em';
</script>

<div
  class={twMerge(className)}
  class:invisible={!disabled}
  aria-label="waiting"
  aria-hidden>
  <Icon
    icon="svg-spinners:8-dots-rotate"
    {size} />
</div>
