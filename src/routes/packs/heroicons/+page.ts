import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  const icons = import(`@iconslib/svelte/heroicons`);

  return {
    icons
  };
};
