import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content');

export function getAllPosts() {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir);
  const posts = files.map(filename => {
    const filePath = path.join(postsDir, filename);
    const raw = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(raw);
    const slug = filename.replace(/\.md$/, '');
    return { slug, ...data };
  });
  posts.sort((a,b)=> new Date(b.date) - new Date(a.date));
  return posts;
}

export function getPostBySlug(slug) {
  const filePath = path.join(postsDir, `${slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return { slug, meta: data, content };
}
