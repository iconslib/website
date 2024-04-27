<script lang="ts">
  import * as icons from '@iconslib/svelte/radix';

  import { data as packs } from '$lib/packs.json';
  import HeaderPack from '$components/headers/header_pack.svelte';
  import ItemIcon from '$components/items/item_icon.svelte';

  const packItem = packs.find((el) => el.slug === 'radix')!;
</script>

<HeaderPack data={packItem} />

<div class="w-full grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-5">
  {#each Object.entries(icons) as [key, icon]}
    <ItemIcon data={{ key, pack: packItem.slug, icon }} />
  {/each}
</div>
