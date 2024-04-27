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
    relative block min-w-10 h-10 border-[1px] border-neutral-200 rounded-lg overflow-hidden
    ${isActive ? 'hover:bg-neutral-50 bg-neutral-100' : 'bg-white hover:bg-neutral-100'}
  `}
>
  {#if isDisabled}
    <div class="w-full h-full absolute top-0 left-0 bg-neutral-100/55 z-20"></div>
  {/if}

  <div
    class={`relative z-0 w-full h-full flex flex-row gap-3 items-center justify-center ${label ? 'p-3' : 'p-2'}`}
  >
    {label ? label : null}
  </div>
</svelte:element>
