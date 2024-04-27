<script lang="ts">
  import { page } from '$app/stores';
</script>

<form action="/search" class="w-full">
  <input
    value={$page.url.searchParams.get('query')}
    name="query"
    placeholder="Example: arrow up left ..."
    class="w-full rounded-lg border-[1px] bg-white px-5 py-3"
  />
</form>
