<script lang="ts">
  import MainHeader from '$components/headers/main_header.svelte';
  import IconButton from '$components/buttons/icon_button.svelte';
  import SvelteIcon from '$components/icons/svelte_icon.svelte';
  import SolidjsIcon from '$components/icons/solidjs_icon.svelte';
  import VueIcon from '$components/icons/vue_icon.svelte';
  import ReactIcon from '$components/icons/react_icon.svelte';
</script>

<MainHeader />

<div class="w-full grid grid-cols-4 gap-5">
  <IconButton icon={SvelteIcon} label="Svelte" href="/frameworks/svelte" />
  <IconButton icon={SolidjsIcon} label="SolidJS" isDisabled />
  <IconButton icon={VueIcon} label="Vue" isDisabled />
  <IconButton icon={ReactIcon} label="React" isDisabled />
</div>
