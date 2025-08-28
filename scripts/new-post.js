#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function generateSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function createTemplate(title, slug, date) {
  return `---
title: "${title}"
slug: "${slug}"
date: "${date}"
excerpt: "Add your post excerpt here - a brief summary of what this post is about."
heroImage: "${slug}.jpg"  # Place your image in public/images/blog/ or use full URL
tags: ["Technology", "Development"]
---

# ${title}

Write your blog post content here using Markdown syntax.

## Introduction

Start with an engaging introduction that hooks your readers.

## Main Content

Develop your ideas with clear sections and examples.

### Key Points

- Use bullet points for clarity
- Include code examples if relevant
- Add images to enhance understanding

## Conclusion

Summarize your key takeaways and provide actionable insights.
`;
}

function sanitizeForLog(input) {
  if (typeof input !== 'string') return '';
  return input.replace(/[\r\n\t]/g, ' ').substring(0, 200);
}

function main() {
  const title = process.argv[2];
  
  if (!title) {
    console.log('Usage: npm run new-post "Your Post Title"');
    console.log('Example: npm run new-post "Getting Started with React"');
    process.exit(1);
  }
  
  const slug = generateSlug(title);
  const filename = `${slug}.md`;
  const filepath = path.join(__dirname, '../src/content/posts', filename);
  
  if (fs.existsSync(filepath)) {
    console.log(`❌ Post "${sanitizeForLog(filename)}" already exists!`);
    process.exit(1);
  }
  
  const date = new Date().toISOString().split('T')[0];
  const template = createTemplate(title, slug, date);
  
  try {
    fs.writeFileSync(filepath, template);
    
    console.log('\n✅ Blog post created successfully!');
    console.log(`📄 File: src/content/posts/${sanitizeForLog(filename)}`);
    console.log(`🔗 URL: /blog/${sanitizeForLog(slug)}`);
    console.log('\n📝 Next steps:');
    console.log('1. Edit the frontmatter (excerpt, tags, heroImage)');
    console.log('2. Write your content in Markdown');
    console.log('3. The post will automatically appear in your blog!');
  } catch (error) {
    console.error('❌ Error creating post:', sanitizeForLog(error.message));
    process.exit(1);
  }
}

main();