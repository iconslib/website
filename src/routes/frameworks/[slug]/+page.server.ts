import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

import { data as frameworks } from '$lib/data/frameworks.json';

export const load: PageServerLoad = async ({ params }) => {
  const framework = frameworks.find((el) => el.slug === (params.slug as keyof typeof frameworks));

  if (!framework || !framework.isActive) {
    error(404, 'No such framework');
  }

  return {
    slug: params.slug
  };
};
