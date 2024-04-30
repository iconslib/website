## @iconslib/svelte

Open source icons for your next Svelte 4/5 project. At this moment includes these icon [packs](/packs).

### Installing

To install the package please run:

```bash
npm install @iconslib/svelte
# or for yarn
yarn add @iconslib/svelte
# or for pnpm
pnpm install @iconslib/svelte
```

### Usage

There are two main ways to use icons from this package, by importing from a pack export or individually, whatever works best for you.

```svelte
<script>
  import { AcademicCap24Outline } from '@iconslib/svelte/heroicons';
  import ArrowDownLeft24Outline from '@iconslib/svelte/heroicons/ArrowDownLeft24Outline';
</script>

<AcademicCap24Outline />
<ArrowDownLeft24Outline />
```

You can pass all the basic SVG props to the component. We prefer Tailwind for styling, so in our case for some solid icons we will use `w-6 h-6 bg-neutral-950`, for icons that are outlined we use `w-6 h-6 stroke-neutral-950`.
