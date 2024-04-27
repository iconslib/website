<script lang="ts">
  import * as icons from '@iconslib/svelte/ionicons';

  import { page } from '$app/stores';
  import { data as packs } from '$lib/data/packs.json';
  import HeaderPack from '$components/headers/header_pack.svelte';
  import ButtonDefault from '$components/buttons/button_default.svelte';
  import ItemIcon from '$components/items/item_icon.svelte';

  const variantsMap = {
    outline: 'Outline',
    solid: 'Solid',
    sharp: 'Sharp'
  };
  const variant = $derived($page.url.searchParams.get('variant') ?? 'outline');
  const filteredIcons = $derived(
    Object.entries(icons)
      .filter(
        ([key]) =>
          key.includes(variantsMap[variant as keyof typeof variantsMap]) ||
          (variant === 'solid' && !key.includes('Outline') && !key.includes('Sharp'))
      )
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
  );
  const packItem = packs.find((el) => el.slug === 'ionicons')!;
</script>

<HeaderPack data={packItem} />

<div class="mb-5 grid w-full grid-cols-3 gap-5">
  <ButtonDefault label="Outline" isActive={variant === 'outline'} href="?variant=outline" />
  <ButtonDefault label="Solid" isActive={variant === 'solid'} href="?variant=solid" />
  <ButtonDefault label="Sharp" isActive={variant === 'sharp'} href="?variant=sharp" />
</div>

<div class="grid w-full grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-5">
  {#each filteredIcons as [key, icon]}
    <ItemIcon data={{ key, pack: packItem.slug, icon }} />
  {/each}
</div>
