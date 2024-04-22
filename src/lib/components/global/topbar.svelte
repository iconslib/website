<script lang="ts">
  import Wrapper from './wrapper.svelte';
  import Logo from './logo.svelte';
</script>

<div class="w-full py-5 fixed top-0 left-0">
  <Wrapper class="flex flex-row px-10">
    <a href="/" class="block w-[200px] h-10">
      <Logo />
    </a>

    <nav></nav>
  </Wrapper>
</div>
