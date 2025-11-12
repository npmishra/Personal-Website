import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';
import { useLang } from '../../src/lib/i18n';

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function Blog({ posts }) {
  const { t } = useLang();

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">{t.blogTitle}</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map(p => (
            <div key={p.slug} className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.date}</p>
              <p className="mt-2 text-gray-600">{p.excerpt || ''}</p>
              <Link href={`/blog/${p.slug}`}><a className="text-sky-600 mt-3 inline-block">Read</a></Link>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </>
  );
}
