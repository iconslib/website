<script lang="ts">
  import frameworks from '$lib/frameworks';
  import FrameworkItem from '$components/items/framework_item.svelte';
</script>

<div class="w-full grid grid-cols-4 gap-5 mb-10">
  {#each frameworks as framework}
    {#if framework.isActive}
      <FrameworkItem
        icon={framework.icon}
        href={`/frameworks/${framework.slug}`}
        label={framework.title}
      />
    {:else}
      <FrameworkItem
        icon={framework.icon}
        label={framework.title}
        isDisabled={!framework.isActive}
      />
    {/if}
  {/each}
</div>
