<script>
  const { ...all } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="-10.5 -9.45 21 18.9" {...all}>
  <circle cx="0" cy="0" r="2" fill="rgb(20 158 202)"></circle>
  <g stroke="currentColor" stroke-width="1" fill="none">
    <ellipse rx="10" ry="4.5" stroke="rgb(20 158 202)"></ellipse>
    <ellipse rx="10" ry="4.5" transform="rotate(60)" stroke="rgb(20 158 202)"></ellipse>
    <ellipse rx="10" ry="4.5" transform="rotate(120)" stroke="rgb(20 158 202)"></ellipse>
  </g>
</svg>
