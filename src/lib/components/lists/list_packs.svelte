<script lang="ts">
  import { data as packs } from '$lib/data/packs.json';
  import ItemPack from '$components/items/item_pack.svelte';
</script>

<div class="mb-10 w-full">
  <div class="mb-5 w-full">
    <h1 class="w-full text-2xl font-semibold">Packs included</h1>
  </div>

  <div class="grid w-full grid-cols-1 gap-5">
    {#each packs as pack}
      <ItemPack data={pack} />
    {/each}
  </div>
</div>
