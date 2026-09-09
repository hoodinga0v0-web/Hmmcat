import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../', import.meta.url));
const html = await readFile(path.join(root, 'hmm-cat.html'), 'utf8');
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
if (!html.toLowerCase().startsWith('<!doctype html>') || scripts.length === 0) {
  throw new Error('The standalone game must contain a complete HTML document and its script.');
}
for (const [index, script] of scripts.entries()) {
  new vm.Script(script[1], { filename: `hmm-cat.html:script-${index + 1}` });
}

const destination = path.join(root, '_site');
await mkdir(destination, { recursive: true });
await Promise.all([
  writeFile(path.join(destination, 'index.html'), html),
  writeFile(path.join(destination, 'hmm-cat.html'), html),
  writeFile(path.join(destination, '.nojekyll'), ''),
]);
console.log('GitHub Pages files prepared in _site/');
