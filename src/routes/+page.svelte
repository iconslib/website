<script lang="ts">
  import FormSearch from '$components/forms/form_search.svelte';
  import HeaderMain from '$components/headers/header_main.svelte';

  import ListFrameworks from '$components/lists/list_frameworks.svelte';
  import ListPacks from '$components/lists/list_packs.svelte';
</script>

<HeaderMain />

<ListFrameworks />

<div class="mb-10 flex w-full flex-col gap-5">
  <div class="w-full">
    <h1 class="w-full text-2xl font-semibold">Search</h1>
  </div>

  <FormSearch />
</div>

<ListPacks />
