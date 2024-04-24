import type { ComponentType } from 'svelte';
import SvelteIcon from '$components/icons/svelte_icon.svelte';
import SolidjsIcon from '$components/icons/solidjs_icon.svelte';
import VueIcon from '$components/icons/vue_icon.svelte';
import ReactIcon from '$components/icons/react_icon.svelte';

export type FrameworkItemType = {
  icon: ComponentType;
  title: string;
  slug: string;
  package: string;
  links: {
    website?: string;
    github?: string;
  };
  isActive: boolean;
};

export default [
  {
    icon: SvelteIcon,
    title: 'Svelte',
    slug: 'svelte',
    package: '@iconslib/svelte',
    links: {
      website: 'https://svelte'
    },
    isActive: true
  },
  {
    icon: SolidjsIcon,
    title: 'SolidJS',
    slug: 'solidjs',
    package: '@iconslib/solid',
    links: {
      website: 'https://solidjs.com'
    },
    isActive: false
  },
  {
    icon: VueIcon,
    title: 'Vue',
    slug: 'vue',
    package: '@iconslib/vue',
    links: {
      website: 'http://vuejs.org'
    },
    isActive: false
  },
  {
    icon: ReactIcon,
    title: 'React',
    slug: 'react',
    package: '@iconslib/react',
    links: {
      website: 'http://https://react.dev'
    },
    isActive: false
  }
] satisfies FrameworkItemType[];
