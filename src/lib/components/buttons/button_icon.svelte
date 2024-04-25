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
  class="
    relative block min-w-10 h-10 border-[1px] border-neutral-200 bg-white rounded-lg overflow-hidden
    hover:bg-neutral-100
  "
>
  {#if isDisabled}
    <div class="w-full h-full absolute top-0 left-0 bg-neutral-100/55 z-20"></div>
  {/if}

  <div
    class={`relative z-0 w-full h-full flex flex-row gap-3 items-center justify-center ${label ? 'p-3' : 'p-2'}`}
  >
    <svelte:component this={icon} class="h-6 w-6 text-neutral-200" />

    {label ? label : null}
  </div>
</svelte:element>
