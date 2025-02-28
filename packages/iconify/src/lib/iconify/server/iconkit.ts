import { resolve } from 'node:path';
import { __dirname, access, copyFile, makeDir, rootpath, writeFile } from '$lib/utils/fs.js';

export default async function () {
  const assets = await import(/* @vite-ignore */ rootpath('.svelte-kit/tsconfig.json')).then(
    (val) => {
      val = val.default.compilerOptions.paths['$iconify']?.at(0).slice(3);
      if (val) return val;
      throw new DOMException('Alias $iconify missing', 'Svelte Config');
    }
  );

  await makeDir(rootpath(assets, 'local'));

  let file = rootpath(assets, 'index.ts');
  await access(
    file,
    async () => await copyFile(resolve(__dirname(import.meta.url), 'assets.iconify'), file)
  );

  file = rootpath(assets, 'iconset.json');
  await access(file, async () => await writeFile(file, '{}', 'w+'));

  file = rootpath(assets, 'bundles.json');
  await access(file, async () => await writeFile(file, '[]', 'w+'));

  console.debug('SSR iconify');
}
