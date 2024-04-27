import type { PageServerLoad } from './$types';
import Fuse from 'fuse.js';
import * as Heroicons from '@iconslib/svelte/heroicons';
import * as Ionicons from '@iconslib/svelte/ionicons';
import * as Feather from '@iconslib/svelte/feather';
import * as Radix from '@iconslib/svelte/radix';

import { data as library } from '$lib/library.json';
import { render } from 'svelte/server';

const combinedPacks = {
  heroicons: Heroicons,
  ionicons: Ionicons,
  feather: Feather,
  radix: Radix
};
const fuse = new Fuse(library, {
  keys: [
    'pack', // will be assigned a `weight` of 1
    {
      name: 'label',
      weight: 2
    }
  ]
});

export const load: PageServerLoad = async ({ url }) => {
  const query = url.searchParams.get('query') ?? '';
  const icons = fuse.search(query);
  const iconsRendered = icons.map((el) => {
    const { html } = render(combinedPacks[el.item.pack][el.item.key], { props: {} });

    return { ...el.item, html };
  });

  return {
    icons: iconsRendered
  };
};
