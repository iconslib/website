import fsp from 'node:fs/promises';
import { v4 as uuid } from 'uuid';

function humanizeClassCase(inputString) {
  const words = inputString.split(/(?=[A-Z])/);
  return words.join(' ').toLowerCase();
}

const preparePacksData = async () => {
  const distFolderPath = 'node_modules/@iconslib/svelte/dist';
  const items = await fsp.readdir(distFolderPath);
  const packs = items.filter((el) => !el.includes('.'));

  const packsFilePath = './src/lib/data/packs.json';
  const packsFileContent = await fsp.readFile(packsFilePath);
  const packsFileContentParsed = JSON.parse(packsFileContent);

  console.log('---> Collect icon packs stats');

  for (const pack of packs) {
    const packFiles = await fsp.readdir(`${distFolderPath}/${pack}/esm`);
    let icons = packFiles.filter((el) => !el.includes('.svelte.d.ts'));

    const packData = packsFileContentParsed.data.find((el) => el.slug === pack);

    if (!packData) {
      throw new Error(`No pack '${pack}' found`);
    }

    packData.icons = icons.length;

    console.log(`---> Collected icon packs stats for '${pack}': ${icons.length}`);
  }

  await fsp.writeFile(packsFilePath, JSON.stringify(packsFileContentParsed));
  console.log(`---> Wrote data to packs.json file: ${packsFilePath}`);
};

const prepareSearchData = async () => {
  const distFolderPath = 'node_modules/@iconslib/svelte/dist';
  const items = await fsp.readdir(distFolderPath);
  const packs = items.filter((el) => !el.includes('.'));

  let library = [];
  const libraryFilePath = './src/lib/data/library.json';

  console.log('---> Building library data from icon packs');

  for (const pack of packs) {
    const packFiles = await fsp.readdir(`${distFolderPath}/${pack}/esm`);
    const icons = packFiles
      .filter((el) => !el.includes('.svelte.d.ts'))
      .map((el) => el.replace('.svelte', ''))
      .map((el) => ({ id: uuid(), key: el, pack, label: humanizeClassCase(el) }));

    library = [...library, ...icons];
  }

  await fsp.writeFile(libraryFilePath, JSON.stringify({ data: library }));

  console.log(`---> Wrote library data to file: ${libraryFilePath}`);
};

const main = async () => {
  await preparePacksData();
  await prepareSearchData();
};

await main();
