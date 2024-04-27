<script lang="ts">
  import { page } from '$app/stores';
</script>

<form action="/search" class="w-full">
  <input
    value={$page.url.searchParams.get('query')}
    name="query"
    placeholder="Example: arrow up left ..."
    class="w-full px-5 py-3 border-[1px] rounded-lg bg-white"
  />
</form>
