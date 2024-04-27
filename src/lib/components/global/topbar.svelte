<script lang="ts">
  import Wrapper from './wrapper.svelte';
  import Logo from './logo.svelte';
</script>

<div class="fixed left-0 top-0 w-full py-5">
  <Wrapper class="flex flex-row px-10">
    <a href="/" class="block h-10 w-[200px]">
      <Logo />
    </a>

    <nav></nav>
  </Wrapper>
</div>
