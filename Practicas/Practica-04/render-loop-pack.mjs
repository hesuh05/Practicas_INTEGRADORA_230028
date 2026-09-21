import { readFile, writeFile } from 'node:fs/promises';
import { checkDiagram, diagramHtml, renderDiagram } from '@spexcode/archify';

const source = new URL('./loop-pack-business-model-canvas.json', import.meta.url);
const output = new URL('./loop-pack-business-model-canvas.html', import.meta.url);
const ir = JSON.parse(await readFile(source, 'utf8'));
const result = await checkDiagram('architecture', ir, { evidence: false });

if (!result.ok) {
  console.error(JSON.stringify(result, null, 2));
  process.exitCode = 1;
} else {
  const parts = await renderDiagram('architecture', ir, { evidence: false });
  await writeFile(output, diagramHtml(parts), 'utf8');
  console.log(`Archify validation passed; generated ${output.pathname}`);
}
