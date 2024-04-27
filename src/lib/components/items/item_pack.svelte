<script lang="ts">
  import type { PackItemType } from '$lib/types';
  import { LogoGithub, Link } from '@iconslib/svelte/ionicons';

  import ButtonIcon from '$components/buttons/button_icon.svelte';

  interface Props {
    data: PackItemType;
  }

  const { data }: Props = $props();
</script>

<div class="w-full bg-white border-[1px] border-neutral-200 rounded-lg">
  <div class="w-full flex flex-row items-center gap-5 p-5 border-b-[1px] border-neutral-200">
    <a href={`/packs/${data.slug}`}>
      <h2 class="w-full flex-1 font-semibold text-xl hover:underline">{data.title}</h2>
    </a>

    <div class="flex flex-1 gap-3 justify-end">
      {#if data.links.github}
        <ButtonIcon icon={LogoGithub} href={data.links.github} />
      {/if}

      {#if data.links.website}
        <ButtonIcon icon={Link} href={data.links.website} />
      {/if}
    </div>
  </div>
  <div class="w-full flex flex-row gap-5 p-5">
    <div>
      <p>{data.icons} icons</p>
    </div>

    <svg viewBox="0 0 2 2" aria-hidden="true" class="w-0.5 fill-current">
      <circle cx="1" cy="1" r="1"></circle>
    </svg>

    <div>
      <p>{data.license} licence</p>
    </div>
  </div>
</div>
