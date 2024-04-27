<script lang="ts">
  import type { ComponentType } from 'svelte';

  interface Props {
    data: {
      key: string;
      pack: string;
      html?: string;
      icon?: ComponentType;
    };
  }

  const { data }: Props = $props();
</script>

{#snippet heroicons()}
  {#if data.key.includes('24Outline')}
    {#if data.icon}
      <svelte:component this={data.icon} class="w-8 h-8 stroke-neutral-950" />
    {/if}

    {#if data.html}
      <div class="w-8 h-8 stroke-neutral-950">
        {@html data.html}
      </div>
    {/if}
  {/if}

  {#if data.key.includes('24Solid')}
    {#if data.icon}
      <svelte:component this={data.icon} class="w-8 h-8 fill-neutral-950" />
    {/if}

    {#if data.html}
      <div class="w-8 h-8 fill-neutral-950">
        {@html data.html}
      </div>
    {/if}
  {/if}

  {#if data.key.includes('20Solid')}
    {#if data.icon}
      <svelte:component this={data.icon} class="w-6 h-6 fill-neutral-950" />
    {/if}

    {#if data.html}
      <div class="w-6 h-6 fill-neutral-950">
        {@html data.html}
      </div>
    {/if}
  {/if}

  {#if data.key.includes('16Solid')}
    {#if data.icon}
      <svelte:component this={data.icon} class="w-4 h-4 fill-neutral-950" />
    {/if}

    {#if data.html}
      <div class="w-6 h-6 fill-neutral-950">
        {@html data.html}
      </div>
    {/if}
  {/if}
{/snippet}

{#snippet ionicons()}
  {#if data.icon}
    <svelte:component this={data.icon} class="w-8 h-8 fill-neutral-950 stroke-neutral-950" />
  {/if}

  {#if data.html}
    <div class="w-8 h-8 fill-neutral-950 stroke-neutral-950">
      {@html data.html}
    </div>
  {/if}
{/snippet}

{#snippet feather()}
  {#if data.icon}
    <svelte:component this={data.icon} class="w-8 h-8 stroke-neutral-950" />
  {/if}

  {#if data.html}
    <div class="w-8 h-8 stroke-neutral-950">
      {@html data.html}
    </div>
  {/if}
{/snippet}

{#snippet radix()}
  {#if data.icon}
    <svelte:component this={data.icon} class="w-8 h-8 fill-neutral-950" />
  {/if}

  {#if data.html}
    <div class="w-8 h-8 fill-neutral-950">
      {@html data.html}
    </div>
  {/if}
{/snippet}

<div
  class="
    w-full h-[8rem] bg-white rounded-lg border-[1px] border-neutral-200
    flex items-center justify-center
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
</div>