<script lang="ts">
  interface Props {
    type?: 'button' | 'submit';
    href?: string;
    label?: string;
    isActive?: boolean;
    isDisabled?: boolean;
    onclick?: () => void;
  }

  const {
    type = 'button',
    href,
    label,
    isActive = false,
    isDisabled = false,
    onclick
  }: Props = $props();
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  {...!href ? { type, disabled: isDisabled } : { href }}
  {onclick}
  role="button"
  tabindex={0}
  class={`
    relative block h-10 min-w-10 overflow-hidden rounded-lg border-[1px] border-neutral-200
    ${isActive ? 'bg-neutral-100 hover:bg-neutral-50' : 'bg-white hover:bg-neutral-100'}
  `}
>
  {#if isDisabled}
    <div class="absolute left-0 top-0 z-20 h-full w-full bg-neutral-100/55"></div>
  {/if}

  <div
    class={`relative z-0 flex h-full w-full flex-row items-center justify-center gap-3 ${label ? 'p-3' : 'p-2'}`}
  >
    {label ? label : null}
  </div>
</svelte:element>
