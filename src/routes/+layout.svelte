<script>
  import '@fontsource-variable/rubik';
  import '../app.css';

  import Wrapper from '$components/global/wrapper.svelte';
</script>

<Wrapper class="mb-10">
  <slot />
</Wrapper>

<style>
  :global(body) {
    background-color: theme(backgroundColor.neutral.50);
    text: theme(textColor.neutral.900);
  }
</style>
