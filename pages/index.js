import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLang } from '../src/lib/i18n';
import Link from 'next/link';

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">{t.name}</h1>
            <p className="text-lg text-gray-700 mb-6">{t.heroDesc}</p>
            <Link href="/contact"><a className="px-6 py-3 bg-sky-600 text-white rounded-lg inline-block">{t.cta}</a></Link>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/IMG_0233.JPG" alt="Narayan photo" className="w-full h-72 object-cover" />
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">{t.aboutTitle}</h2>
          <p className="text-gray-700">{t.aboutText}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">{t.servicesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {t.services.map((s,i)=>(
              <div key={i} className="p-4 bg-white rounded shadow">
                <h3 className="font-medium">{s}</h3>
                <p className="text-sm text-gray-600 mt-2">Quick overview of {s.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">{t.blogTitle}</h2>
          <p className="text-gray-600">Visit the blog page for posts.</p>
        </section>

        <Footer />
      </main>
    </>
  );
}
