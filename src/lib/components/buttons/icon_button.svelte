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
  class="relative w-full border-[1px] bg-white rounded-lg overflow-hidden"
>
  {#if isDisabled}
    <div class="w-full h-full absolute top-0 left-0 bg-neutral-100/55 z-20"></div>
  {/if}

  <div class="relative z-0">
    <div class="flex items-center justify-center p-3 h-12">
      <svelte:component this={icon} class="w-6" />
    </div>

    {#if label}
      <div
        class="
        w-full border-t-[1px] border-neutral-200 p-2 bg-neutral-50
        font-medium text-sm uppercase tracking-wide text-center"
      >
        {label ? label : null}
      </div>
    {/if}
  </div>
</svelte:element>
