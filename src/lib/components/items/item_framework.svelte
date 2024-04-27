<script lang="ts">
  interface Props {
    icon: any;
    type?: 'button' | 'submit';
    href?: string;
    label?: string;
    isDisabled?: boolean;
  }

  const { icon, type = 'button', href, label, isDisabled = false }: Props = $props();
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  {...!href ? { type, disabled: isDisabled } : { href }}
  class="relative w-full overflow-hidden rounded-lg border-[1px] bg-white"
>
  {#if isDisabled}
    <div class="absolute left-0 top-0 z-20 h-full w-full bg-neutral-100/55"></div>
  {/if}

  <div class="relative z-0">
    <div class="flex h-12 items-center justify-center p-3">
      <svelte:component this={icon} class="w-6" />
    </div>

    {#if label}
      <div
        class="
        w-full border-t-[1px] border-neutral-200 bg-neutral-50 p-2
        text-center text-sm font-medium uppercase tracking-wide"
      >
        {label ? label : null}
      </div>
    {/if}
  </div>
</svelte:element>
