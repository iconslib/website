<script lang="ts">
  import * as icons from '@iconslib/svelte/octicons';

  import { page } from '$app/stores';
  import { data as packs } from '$lib/data/packs.json';
  import HeaderPack from '$components/headers/header_pack.svelte';
  import ItemIcon from '$components/items/item_icon.svelte';
  import ButtonDefault from '$components/buttons/button_default.svelte';

  const variantsMap = {
    micro: '12',
    mini: '16',
    normal: '24'
  };
  const variant = $derived($page.url.searchParams.get('variant') ?? 'normal');
  const filteredIcons = $derived(
    Object.entries(icons)
      .filter(([key]) => key.includes(variantsMap[variant as keyof typeof variantsMap]))
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
  );
  const packItem = packs.find((el) => el.slug === 'octicons')!;
</script>

<HeaderPack data={packItem} />

<div class="mb-5 grid w-full grid-cols-3 gap-5">
  <ButtonDefault label="Normal" isActive={variant === 'normal'} href="?variant=normal" />
  <ButtonDefault label="Mini" isActive={variant === 'mini'} href="?variant=mini" />
  <ButtonDefault label="Micro" isActive={variant === 'micro'} href="?variant=micro" />
</div>

<div class="grid w-full grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-5">
  {#each filteredIcons as [key, icon]}
    <ItemIcon data={{ key, pack: packItem.slug, icon }} />
  {/each}
</div>
