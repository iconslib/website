<script>
  import '@fontsource-variable/rubik';
  import '../app.css';

  import Wrapper from '$components/global/wrapper.svelte';
</script>

<Wrapper>
  <slot />
</Wrapper>

<style>
  :global(body) {
    background-color: theme(backgroundColor.neutral.100);
    text: theme(textColor.neutral.900);
  }
</style>
