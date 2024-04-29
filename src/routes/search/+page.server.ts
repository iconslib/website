import type { PageServerLoad } from './$types';
import type { ComponentType } from 'svelte';

import { render } from 'svelte/server';
import { librarySearch } from '$server/services/search';
import * as Heroicons from '@iconslib/svelte/heroicons';
import * as Ionicons from '@iconslib/svelte/ionicons';
import * as Feather from '@iconslib/svelte/feather';
import * as Radix from '@iconslib/svelte/radix';
import * as Octicons from '@iconslib/svelte/octicons';

const combinedPacks: {
  [pack: string]: {
    [key: string]: ComponentType;
  };
} = {
  heroicons: Heroicons,
  ionicons: Ionicons,
  feather: Feather,
  radix: Radix,
  octicons: Octicons
};

export const load: PageServerLoad = async ({ url }) => {
  const query = url.searchParams.get('query') ?? '';
  const icons = librarySearch.search(query);
  const iconsRendered = icons.map((el) => {
    const { html } = render(combinedPacks[el.pack][el.key], { props: {} });

    return { key: el.key, pack: el.pack, html };
  });

  return {
    icons: iconsRendered
  };
};
