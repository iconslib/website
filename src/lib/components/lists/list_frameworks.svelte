<script lang="ts">
  import { data as frameworks } from '$lib/data/frameworks.json';
  import SvelteIcon from '$components/icons/svelte_icon.svelte';
  import SolidjsIcon from '$components/icons/solidjs_icon.svelte';
  import VueIcon from '$components/icons/vue_icon.svelte';
  import ReactIcon from '$components/icons/react_icon.svelte';
  import ItemFramework from '$components/items/item_framework.svelte';

  const icons = {
    svelte: SvelteIcon,
    solidjs: SolidjsIcon,
    vue: VueIcon,
    react: ReactIcon
  };
</script>

<div class="mb-10 grid w-full grid-cols-2 gap-5 lg:grid-cols-4">
  {#each frameworks as framework}
    {#if framework.isActive}
      <ItemFramework
        icon={icons[framework.slug as keyof typeof icons]}
        href={`/frameworks/${framework.slug}`}
        label={framework.title}
      />
    {:else}
      <ItemFramework
        icon={icons[framework.slug as keyof typeof icons]}
        label={framework.title}
        isDisabled={!framework.isActive}
      />
    {/if}
  {/each}
</div>
