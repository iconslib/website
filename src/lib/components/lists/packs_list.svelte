<script lang="ts">
  import packages from '$lib/packs';
  import PackageItem from '$components/items/pack_item.svelte';
</script>

<div class="w-full mb-10">
  <div class="w-full mb-5">
    <h1 class="w-full font-semibold text-2xl">Packages included</h1>
  </div>

  <div class="w-full grid grid-cols-1 gap-5">
    {#each packages as item}
      <PackageItem data={item} />
    {/each}
  </div>
</div>
