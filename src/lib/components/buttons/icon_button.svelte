<script lang="ts">
  interface Props {
    icon: any;
    type?: 'button' | 'submit';
    href?: string;
    label?: string;
  }

  const { icon, type = 'button', href, label }: Props = $props();
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  {...!href ? { type } : { href }}
  class="
    w-full
    border-[1px] bg-white rounded-lg overflow-hidden
  "
>
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
</svelte:element>
