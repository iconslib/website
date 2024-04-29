<script lang="ts">
  import BackgroundSvg from '$lib/images/background.svg';

  import Logo from '$components/global/logo.svelte';
</script>

<div
  class="relative mb-5 mt-10 h-[450px] w-full rounded-lg border-[1px] border-neutral-200 bg-white p-5 lg:p-10"
>
  <div class="absolute left-0 top-0 z-0 h-full w-full">
    <img src={BackgroundSvg} alt="Background" class="h-full w-full object-cover opacity-50" />
  </div>

  <div class="relative z-10 flex h-full w-full flex-col">
    <div class="flex flex-row">
      <a href="/" class="w-[200px]">
        <Logo />
      </a>

      <nav></nav>
    </div>
    <div class="flex flex-1 flex-col justify-end">
      <h1
        class="mb-5 mt-6 text-3xl font-bold leading-9 tracking-tight text-neutral-900 lg:text-5xl"
      >
        Open source icons <br /> for your next project
      </h1>
      <div class="text-xl lg:text-3xl">
        <p>A set of open source icons for you next project.</p>
        <p>High quality, optimized, free.</p>
      </div>
    </div>
  </div>
</div>
