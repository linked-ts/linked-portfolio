import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const componentFile = path.join(__dirname, './component/Header/Header.tsx');
const stylesFile = path.join(__dirname, './component/Header/Header.module.scss');

const componentContent = fs.readFileSync(componentFile, 'utf8');

const classRegex = /styles\.(\w+)/g;
const classes = new Set();

let match;
while ((match = classRegex.exec(componentContent)) !== null) {
    classes.add(match[1]);
}

const scssContent = Array.from(classes)
    .map(className => `.${className} {}`)
    .join('\n');

fs.writeFileSync(stylesFile, scssContent, 'utf8');

console.log('Классы успешно добавлены в Header.module.scss');
