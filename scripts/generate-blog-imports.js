#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../src/content/posts');
const blogLibPath = path.join(__dirname, '../src/lib/blog.ts');

// Read all markdown files in the posts directory
const markdownFiles = fs.readdirSync(postsDir)
  .filter(file => file.endsWith('.md'))
  .map(file => path.basename(file, '.md'));

// Generate import statements
const imports = markdownFiles.map((fileName, index) => {
  const varName = fileName.replace(/-/g, '') + 'Md';
  return `import ${varName} from '/src/content/posts/${fileName}.md?raw';`;
}).join('\n');

// Generate array of imports
const arrayItems = markdownFiles.map((fileName) => {
  const varName = fileName.replace(/-/g, '') + 'Md';
  return `    ${varName}`;
}).join(',\n');

console.log('Found markdown files:', markdownFiles);
console.log('\nGenerated imports:');
console.log(imports);
console.log('\nArray items:');
console.log(`[\n${arrayItems}\n]`);

console.log('\nTo add a new blog post:');
console.log('1. Create a new .md file in src/content/posts/');
console.log('2. Run this script to see the new imports');
console.log('3. Update src/lib/blog.ts with the new imports');