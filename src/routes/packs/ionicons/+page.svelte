<script lang="ts">
  import type { ComponentType } from 'svelte';
  import type { PageData } from './$types';
  import { data as packs } from '$lib/packs.json';
  import HeaderPack from '$components/headers/header_pack.svelte';

  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();
  const packItem = packs.find((el) => el.slug === 'ionicons')!;
</script>

<HeaderPack data={packItem} />

{#await data.icons}
  <p>...waiting</p>
{:then icons}
  <div class="w-full grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-5">
    {#each Object.entries(icons) as [key, icon]}
      <div
        class="
          w-full h-[8rem] bg-white rounded-lg border-[1px] border-neutral-200
          flex items-center justify-center
        "
      >
        <svelte:component this={icon as ComponentType} class="w-8 h-8" />
      </div>
    {/each}
  </div>
{/await}
