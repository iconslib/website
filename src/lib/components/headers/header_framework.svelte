<script lang="ts">
  import Logo from '$components/global/logo.svelte';

  interface Props {
    title: string;
  }

  const { title }: Props = $props();
</script>

<div
  class="relative mb-5 mt-10 h-[450px] w-full rounded-lg border-[1px] border-neutral-200 bg-white p-5 lg:p-10"
>
  <div class="absolute left-0 top-0 z-0 h-full w-full">
    <svg
      class="h-full w-full opacity-50"
      viewBox="0 0 240 118"
      preserveAspectRatio="xMidYMid slice"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
    >
      <path style="fill:none" d="M0 0h239.75v117.083H0z" />
      <clipPath id="background">
        <path d="M0 0h239.75v117.083H0z" />
      </clipPath>
      <g clip-path="url(#background)">
        <path
          d="M168.279.061h-.547L142.983 56.19 15.685.061h-1.239L143.01 56.749a.25.25 0 0 0 .33-.128L168.279.061z"
          style="fill:#ffe941"
        />
        <path
          d="m.01 29.545 64.407 28.398a.252.252 0 0 1 .128.33l-25.958 58.871h-.547L63.986 58.3.01 30.091v-.546z"
          style="fill:#05dd51"
        />
        <path
          d="M207.157.061 175.534 71.78l63.976 28.209c0-.292.086-.752.25-1.369v2.002a.254.254 0 0 1-.101-.021l-64.556-28.464a.252.252 0 0 1-.128-.33L206.61.061h.547z"
          style="fill:#3dc1ff"
        />
        <path
          d="M78.904 117.144h.546l18.714-42.441 96.255 42.441h1.239L98.137 74.145a.25.25 0 0 0-.33.127l-18.903 42.872z"
          style="fill:#f065d3"
        />
      </g>
    </svg>
  </div>

  <div class="relative z-10 flex h-full w-full flex-col">
    <div class="flex flex-row">
      <a href="/" class="w-[200px]">
        <Logo />
      </a>

      <nav></nav>
    </div>
    <div class="flex flex-1 flex-col justify-end">
      <h1 class="mb-5 mt-6 text-3xl font-bold tracking-tight text-neutral-900 lg:text-5xl">
        Open source icons <br />for your next {title} project
      </h1>
      <div class="text-xl lg:text-3xl">
        <p>A set of open source icons for you next {title} project.</p>
        <p>High quality, optimized, free.</p>
      </div>
    </div>
  </div>
</div>
