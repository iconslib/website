<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { X, Copy, Check } from '@iconslib/svelte/feather';
  import { data as packs } from '$lib/data/packs.json';
  import ButtonIcon from '$components/buttons/button_icon.svelte';
  import ButtonDefault from '$components/buttons/button_default.svelte';

  interface Props {
    data: {
      key: string;
      pack: string;
      html?: string;
      icon?: ComponentType;
    };
    withInfo?: boolean;
  }

  const { data, withInfo = false }: Props = $props();
  const pack = $derived(packs.find((el) => el.slug === data.pack));
  let dialog = $state<HTMLDialogElement>();
  let copied = $state(false);

  const handleCopyKey = () => {
    navigator.clipboard.writeText(data.key);
    copied = true;

    setTimeout(() => (copied = false), 500);
  };
</script>

{#snippet heroicons()}
  {#if data.key.includes('24Outline')}
    {#if data.icon}
      <svelte:component this={data.icon} class="h-8 w-8 stroke-neutral-950" />
    {/if}

    {#if data.html}
      <div class="h-8 w-8 stroke-neutral-950">
        {@html data.html}
      </div>
    {/if}
  {/if}

  {#if data.key.includes('24Solid')}
    {#if data.icon}
      <svelte:component this={data.icon} class="h-8 w-8 fill-neutral-950" />
    {/if}

    {#if data.html}
      <div class="h-8 w-8 fill-neutral-950">
        {@html data.html}
      </div>
    {/if}
  {/if}

  {#if data.key.includes('20Solid')}
    {#if data.icon}
      <svelte:component this={data.icon} class="h-6 w-6 fill-neutral-950" />
    {/if}

    {#if data.html}
      <div class="h-6 w-6 fill-neutral-950">
        {@html data.html}
      </div>
    {/if}
  {/if}

  {#if data.key.includes('16Solid')}
    {#if data.icon}
      <svelte:component this={data.icon} class="h-4 w-4 fill-neutral-950" />
    {/if}

    {#if data.html}
      <div class="h-6 w-6 fill-neutral-950">
        {@html data.html}
      </div>
    {/if}
  {/if}
{/snippet}

{#snippet ionicons()}
  {#if data.icon}
    <svelte:component this={data.icon} class="h-8 w-8 fill-neutral-950 stroke-neutral-950" />
  {/if}

  {#if data.html}
    <div class="h-8 w-8 fill-neutral-950 stroke-neutral-950">
      {@html data.html}
    </div>
  {/if}
{/snippet}

{#snippet feather()}
  {#if data.icon}
    <svelte:component this={data.icon} class="h-8 w-8 stroke-neutral-950" />
  {/if}

  {#if data.html}
    <div class="h-8 w-8 stroke-neutral-950">
      {@html data.html}
    </div>
  {/if}
{/snippet}

{#snippet radix()}
  {#if data.icon}
    <svelte:component this={data.icon} class="h-8 w-8 fill-neutral-950" />
  {/if}

  {#if data.html}
    <div class="h-8 w-8 fill-neutral-950">
      {@html data.html}
    </div>
  {/if}
{/snippet}

{#snippet octicons()}
  {#if data.icon}
    {#if data.key.includes('12')}
      <svelte:component this={data.icon} class="h-4 w-4 fill-neutral-950" />
    {/if}

    {#if data.key.includes('16')}
      <svelte:component this={data.icon} class="h-6 w-6 fill-neutral-950" />
    {/if}

    {#if data.key.includes('24')}
      <svelte:component this={data.icon} class="h-8 w-8 fill-neutral-950" />
    {/if}
  {/if}

  {#if data.html}
    {#if data.key.includes('12')}
      <div class="h-4 w-4 fill-neutral-950">
        {@html data.html}
      </div>
    {/if}

    {#if data.key.includes('16')}
      <div class="h-6 w-6 fill-neutral-950">
        {@html data.html}
      </div>
    {/if}

    {#if data.key.includes('24')}
      <div class="h-8 w-8 fill-neutral-950">
        {@html data.html}
      </div>
    {/if}
  {/if}
{/snippet}

<button
  onclick={() => dialog?.showModal()}
  class="
    w-full overflow-hidden rounded-lg
    border-[1px] border-neutral-200 bg-white hover:bg-neutral-50
  "
>
  <div class="flex h-[8rem] w-full items-center justify-center">
    {#if data.pack === 'heroicons'}
      {@render heroicons()}
    {/if}

    {#if data.pack === 'ionicons'}
      {@render ionicons()}
    {/if}

    {#if data.pack === 'feather'}
      {@render feather()}
    {/if}

    {#if data.pack === 'radix'}
      {@render radix()}
    {/if}

    {#if data.pack === 'octicons'}
      {@render octicons()}
    {/if}
  </div>

  {#if withInfo}
    <div class="w-full bg-neutral-100 p-2 text-xs text-neutral-700">
      {data.pack}
    </div>
  {/if}
</button>

<dialog
  class="
    backdrop:backdrop-blur-xs z-50 w-full max-w-md
    rounded-lg border-[1px] border-neutral-200 bg-white p-5
    backdrop:bg-neutral-900/85 backdrop:p-5
  "
  bind:this={dialog}
>
  <div class="mb-5 flex w-full flex-row items-center gap-5">
    <div class="w-full">
      <h2 class="text-lg font-semibold">{pack?.title}</h2>
    </div>
    <div>
      <ButtonIcon icon={X} onclick={() => dialog?.close()} />
    </div>
  </div>

  <div
    class="
      mb-5 flex h-[8rem] w-full items-center justify-center
      rounded-lg border-[1px] border-neutral-200 bg-white
    "
  >
    {#if data.pack === 'heroicons'}
      {@render heroicons()}
    {/if}

    {#if data.pack === 'ionicons'}
      {@render ionicons()}
    {/if}

    {#if data.pack === 'feather'}
      {@render feather()}
    {/if}

    {#if data.pack === 'radix'}
      {@render radix()}
    {/if}

    {#if data.pack === 'octicons'}
      {@render octicons()}
    {/if}
  </div>

  <div class="mb-5 w-full">
    <div class="relative w-full">
      <input
        type="text"
        value={data.key}
        class="w-full rounded-lg border-[1px] border-neutral-200 bg-white px-5 py-3 outline-none"
        readonly
      />

      <button
        onclick={handleCopyKey}
        disabled={copied}
        class={`
          absolute right-2 top-2 flex h-8 w-8 
          items-center justify-center rounded-lg 
          border-[1px] transition-all ${
            copied
              ? 'border-green-600 bg-green-600 stroke-white'
              : 'border-neutral-200 stroke-neutral-950 hover:bg-neutral-200'
          }
        `}
      >
        {#if copied}
          <Check class="h-4 w-4 " />
        {:else}
          <Copy class="h-4 w-4" />
        {/if}
      </button>
    </div>
  </div>

  <form method="dialog" class="w-full">
    <ButtonDefault type="submit" label="Close" />
  </form>
</dialog>
