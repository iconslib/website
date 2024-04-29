import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

import { data as frameworks } from '$lib/data/frameworks.json';
import { getContent } from '$server/services/content';

export const load: PageServerLoad = async ({ params }) => {
  const framework = frameworks.find((el) => el.slug === (params.slug as keyof typeof frameworks));

  if (!framework || !framework.isActive) {
    error(404, 'No such framework');
  }

  const pageContent = await getContent({ path: `/frameworks/svelte` });

  if (!pageContent) {
    error(404, 'No content for framework');
  }

  return {
    slug: params.slug,
    content: pageContent
  };
};
