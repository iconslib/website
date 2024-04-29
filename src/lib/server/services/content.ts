import path from 'node:path';
import fs from 'node:fs/promises';
import markdownit from 'markdown-it';
import Shiki from '@shikijs/markdown-it';

const markdown: markdownit = markdownit();
markdown.use(
  await Shiki({
    themes: {
      light: 'github-dark',
      dark: 'github-dark'
    }
  })
);

export async function getContent({ path: contentPath }: { path: string }) {
  try {
    const content = await fs.readFile(path.join('src/content', `${contentPath}.md`), 'utf-8');
    const htmlContent = markdown.render(content);

    return { path: contentPath, html: htmlContent };
  } catch (error) {
    console.error(error);
    return null;
  }
}
