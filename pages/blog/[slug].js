import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { getAllPosts, getPostBySlug } from '../../lib/posts';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticPaths() {
  const posts = getAllPosts();
  return { paths: posts.map(p => ({ params: { slug: p.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();
  return { props: { post: { ...post, contentHtml } } };
}

export default function Post({ post }) {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">{post.meta.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{post.meta.date}</p>
        <article className="prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        <Footer />
      </main>
    </>
  );
}
