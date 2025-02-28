<script lang="ts">
  import { DEV } from 'esm-env';
  import { page } from '$app/stores';
  import { Icon, type IconifyBundle } from '@daks.dev/svelte-iconify';
  import Bundle from './Bundle.svelte';

  export let meta: Record<string, unknown> = {};
  export let local: string[] = [];
  export let bundles: IconifyBundle[] = [];

  let waiting = false;

  const count =
    local.length +
    (meta && Object.values(meta).reduce((res: number, val) => ((res += val as number), res), 0));

  const upload = async () => {
    waiting = true;
    await fetch(`${$page.url.pathname}/upload`).then(
      (res) => res.ok || alert('Error GET: ' + res.status)
    );
    waiting = false;
  };
</script>

{#if DEV}
  <div class="content flex justify-start items-center mb-8">
    <button
      on:click|preventDefault={upload}
      type="button"
      class="px-3 py-2 mx-2 border-2 rounded"
      disabled={waiting}>
      UPLOAD
    </button>
    {#if waiting}
      <Icon
        icon="svg-spinners:180-ring-with-bg"
        class="w-8 h-8" />
    {:else if meta}
      <div class="flex gap-x-4 ml-auto font-medium text-xs uppercase">
        <span>local <sup>{local.length}</sup></span>
        {#each Object.entries(meta) as [key, val]}
          <span>{key} <sup>{val}</sup></span>
        {/each}
        <span>[{count}]</span>
      </div>
    {/if}
  </div>
{/if}

<div class="content divide-y divide-dotted">
  {#if local.length}
    <Bundle
      prefix="local"
      icons={local} />
  {/if}

  {#each bundles as { prefix, icons }}
    <Bundle
      {prefix}
      icons={Object.keys(icons)} />
  {/each}
</div>
