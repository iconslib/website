<script lang="ts">
  import Wrapper from './wrapper.svelte';
  import Logo from './logo.svelte';
</script>

<div class="w-full">
  <Wrapper class="flex flex-row p-5">
    <a href="/" class="w-[200px] h-10">
      <Logo />
    </a>

    <nav></nav>
  </Wrapper>
</div>
