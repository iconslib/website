<script lang="ts">
  import type { PageData } from './$types.js';

  import HeaderMain from '$components/headers/header_main.svelte';
  import FormSearch from '$components/forms/form_search.svelte';
  import ItemIcon from '$components/items/item_icon.svelte';

  interface Props {
    data: PageData;
  }

  const { data } = $props();
</script>

<HeaderMain />

<div class="mb-5 flex w-full flex-col gap-5">
  <div class="w-full">
    <h1 class="w-full text-2xl font-semibold">Search results</h1>
  </div>

  <div class="w-full">
    <FormSearch />
  </div>

  <div class="grid w-full grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-5">
    {#each data.icons as icon}
      <ItemIcon data={icon} />

      <!--<div
        class="
            w-full h-[8rem] bg-white rounded-lg border-[1px] border-neutral-200
            flex items-center justify-center
          "
      >
        

        {#if match.pack === 'ionicons'}
          <svelte:component
            this={Ionicons[match.key as keyof typeof Heroicons] as ComponentType}
            class="w-8 h-8 fill-neutral-950 stroke-neutral-950"
          />
        {/if}

        {#if match.pack === 'feather'}
          <svelte:component
            this={Feather[match.key as keyof typeof Heroicons] as ComponentType}
            class="w-8 h-8 fill-neutral-950"
          />
        {/if}
      </div>-->
    {/each}
  </div>
</div>
