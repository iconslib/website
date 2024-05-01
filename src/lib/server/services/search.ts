import Fuse from 'fuse.js';

import { data as library } from '$lib/data/library.json';

const search = new Fuse(library, {
  includeScore: true,
  keys: ['label', 'pack', 'tags']
});

export const librarySearch = search;
