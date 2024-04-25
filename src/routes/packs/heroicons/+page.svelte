<script lang="ts">
  import type { ComponentType } from 'svelte';
  import type { PageData } from './$types';

  import { data as packs } from '$lib/packs.json';
  import HeaderPack from '$components/headers/header_pack.svelte';

  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();
  let variant = $state<'24Outline' | '24Solid' | '20Solid' | '16Solid'>('24Outline');
  const packItem = packs.find((el) => el.slug === 'heroicons')!;
</script>

<HeaderPack data={packItem} />

<button onclick={() => (variant = '24Outline')}>Outline Icons</button>
<button onclick={() => (variant = '24Solid')}>Solid Icons</button>
<button onclick={() => (variant = '20Solid')}>Mini Icons</button>
<button onclick={() => (variant = '16Solid')}>Micro Icons</button>

{#await data.icons}
  <p>...waiting</p>
{:then icons}
  <div class="w-full grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-5">
    {#each Object.entries(icons) as [key, icon]}
      {#if key.includes(variant)}
        <div
          class="
          w-full h-[8rem] bg-white rounded-lg border-[1px] border-neutral-200
          flex items-center justify-center
        "
        >
          <svelte:component this={icon as ComponentType} class="w-8 h-8" />
        </div>
      {/if}
    {/each}
  </div>
{/await}
