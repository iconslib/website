import MiniSearch from 'minisearch';

import { data as library } from '$lib/data/library.json';

const miniSearch = new MiniSearch({
  fields: ['label', 'pack'],
  storeFields: ['key', 'pack']
});

miniSearch.addAll(library);

export const librarySearch = miniSearch;
