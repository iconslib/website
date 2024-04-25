<script lang="ts">
  import type { PackItemType } from '$lib/packs';

  import { Link, LogoGithub } from '@iconslib/svelte/ionicons';

  import BackgroundSvg from '$lib/images/background.svg';
  import Logo from '$components/global/logo.svelte';
  import ButtonIcon from '$components/buttons/button_icon.svelte';

  interface Props {
    data: PackItemType;
  }

  const { data }: Props = $props();
</script>

<div
  class="relative w-full h-[450px] bg-white border-[1px] border-neutral-200 rounded-lg p-10 mt-10 mb-5"
>
  <div class="absolute top-0 left-0 z-0 w-full h-full">
    <img src={BackgroundSvg} alt="Background" class="w-full h-full object-cover opacity-50" />
  </div>

  <div class="w-full h-full relative flex flex-col z-10">
    <div class="flex flex-row">
      <a href="/" class="w-[200px]">
        <Logo />
      </a>

      <nav></nav>
    </div>
    <div class="flex flex-1 flex-col justify-end mb-5">
      <h1 class="mt-6 mb-5 font-bold leading-9 tracking-tight text-neutral-900 md:text-5xl">
        {data.title}.
      </h1>
      <div class="text-3xl">
        <p>A set of open source high quality icons for you next project.</p>
        <p>MIT licensed, optimized, free.</p>
      </div>
    </div>
    <div class="flex flex-row gap-5">
      {#if data.links.github}
        <ButtonIcon icon={LogoGithub} href={data.links.github} label="GitHub" />
      {/if}

      {#if data.links.website}
        <ButtonIcon icon={Link} href={data.links.website} label="Website" />
      {/if}
    </div>
  </div>
</div>
