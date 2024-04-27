<script lang="ts">
  import * as icons from '@iconslib/svelte/heroicons';

  import { page } from '$app/stores';
  import { data as packs } from '$lib/packs.json';
  import HeaderPack from '$components/headers/header_pack.svelte';
  import ButtonDefault from '$components/buttons/button_default.svelte';
  import ItemIcon from '$components/items/item_icon.svelte';

  const variantsMap = {
    outline: '24Outline',
    solid: '24Solid',
    mini: '20Solid',
    micro: '16Solid'
  };
  const variant = $derived($page.url.searchParams.get('variant') ?? 'outline');
  const filteredIcons = $derived(
    Object.entries(icons)
      .filter(([key]) => key.includes(variantsMap[variant as keyof typeof variantsMap]))
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
  );
  const packItem = packs.find((el) => el.slug === 'heroicons')!;
</script>

<HeaderPack data={packItem} />

<div class="w-full grid grid-cols-4 gap-5 mb-5">
  <ButtonDefault label="Outline" isActive={variant === 'outline'} href="?variant=outline" />
  <ButtonDefault label="Solid" isActive={variant === 'solid'} href="?variant=solid" />
  <ButtonDefault label="Mini" isActive={variant === 'mini'} href="?variant=mini" />
  <ButtonDefault label="Micro" isActive={variant === 'micro'} href="?variant=micro" />
</div>

<div class="w-full grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-5">
  {#each filteredIcons as [key, icon]}
    <ItemIcon data={{ key, pack: packItem.slug, icon }} />
  {/each}
</div>
