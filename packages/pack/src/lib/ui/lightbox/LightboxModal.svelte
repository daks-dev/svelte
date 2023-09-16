<script lang="ts">
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  export let title: string | null | undefined = undefined;
  export let subtitle: string | null | undefined = undefined;
  export let description: string | null | undefined = undefined;

  const activeItemStore: Writable<number> = getContext('activeItem');

  const id = (getContext('counterItems') as (x: unknown) => number)({
    title,
    subtitle,
    description
  });
</script>

{#if $activeItemStore === id}
  <slot {...$$restProps} />
{/if}
