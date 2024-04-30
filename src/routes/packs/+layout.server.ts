import type { LayoutServerLoad } from './$types';

import { data as packs } from '$lib/data/packs.json';

export const load: LayoutServerLoad = async ({ url }) => {
  const pack = packs.find((el) => url.pathname.includes(el.slug));

  return {
    pack
  };
};
