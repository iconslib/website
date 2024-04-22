import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

import frameworks from '$lib/frameworks';

export const load: PageServerLoad = async ({ params }) => {
  const framework = frameworks.find((el) => el.slug === (params.slug as keyof typeof frameworks));

  if (!framework) {
    error(404, 'No such framework');
  }

  return {
    framework
  };
};
