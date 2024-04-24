export type PackItemType = {
  title: string;
  slug: string;
  license: string;
  icons: number;
  links: {
    website?: string;
    github?: string;
  };
};

export default [
  {
    title: 'Heroicons',
    slug: 'heroicons',
    license: 'MIT',
    icons: 288,
    links: {
      website: 'https://heroicons.com'
    }
  },
  {
    title: 'Ionicons',
    slug: 'ionicons',
    license: 'MIT',
    icons: 1355,
    links: {
      website: 'https://ionicons.com'
    }
  },
  {
    title: 'Feather Icons',
    slug: 'feather',
    license: 'MIT',
    icons: 236,
    links: {
      website: 'https://feathericons.com'
    }
  },
  {
    title: 'Radix Icons',
    slug: 'radix',
    license: 'MIT',
    icons: 180,
    links: {
      website: 'https://www.radix-ui.com/icons'
    }
  }
] satisfies PackItemType[];
