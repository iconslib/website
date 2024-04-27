<script lang="ts">
  import { data as packs } from '$lib/packs.json';
  import ItemPack from '$components/items/item_pack.svelte';
</script>

<div class="w-full mb-10">
  <div class="w-full mb-5">
    <h1 class="w-full font-semibold text-2xl">Packs included</h1>
  </div>

  <div class="w-full grid grid-cols-1 gap-5">
    {#each packs as pack}
      <ItemPack data={pack} />
    {/each}
  </div>
</div>
