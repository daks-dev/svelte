<script lang="ts">
  import { Icon } from '@daks.dev/svelte-iconify';
  import twMerge from '$lib/assets/tailwindcss/tailwind-merge.js';

  let className: ClassName = 'top-2 left-2';
  export { className as class };

  export let icon = 'mdi:link-variant';

  export let link = false;

  export let small = false;

  export let light = false;
  export let dark = false;
  export let auto = false;
</script>

<Icon
  class={twMerge(
    'absolute z-10',
    small ? 'w-5 h-5' : 'w-7 h-7',
    (auto || light || dark) && 'p-1 rounded-full',
    light
      ? 'bg-white/20'
      : dark
      ? 'bg-black/20'
      : auto
      ? 'bg-black/20 dark:bg-white/20'
      : 'drop-shadow-md',
    link ? 'text-sky-600 dark:text-sky-400' : 'text-white',
    'opacity-70 group-hover:opacity-100',
    'group-hover:mt-1 group-hover:animate-bounce',
    className
  )}
  {icon} />
