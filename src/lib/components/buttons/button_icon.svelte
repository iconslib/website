<script lang="ts">
  import type { ComponentType } from 'svelte';

  type Props = {
    icon: ComponentType;
    type?: 'button' | 'submit';
    href?: string;
    label?: string;
    target?: string;
    isDisabled?: boolean;
    onclick?: () => void;
  };

  const {
    icon,
    type = 'button',
    target,
    href,
    label,
    isDisabled = false,
    onclick
  }: Props = $props();
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  {...!href ? { type, disabled: isDisabled } : { href, target }}
  {onclick}
  role="button"
  tabindex={0}
  class="
    relative block h-10 min-w-10 overflow-hidden rounded-lg border-[1px] border-neutral-200 bg-white
    hover:bg-neutral-100
  "
>
  {#if isDisabled}
    <div class="absolute left-0 top-0 z-20 h-full w-full bg-neutral-100/55"></div>
  {/if}

  <div
    class={`relative z-0 flex h-full w-full flex-row items-center justify-center gap-3 ${label ? 'p-3' : 'p-2'}`}
  >
    <svelte:component this={icon} class="h-6 w-6 fill-neutral-950 stroke-neutral-950" />

    {label ? label : null}
  </div>
</svelte:element>
