import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLang } from '../src/lib/i18n';

export default function Services() {
  const { t } = useLang();

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">{t.servicesTitle}</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {t.services.map((s,i)=>(
            <div key={i} className="p-6 bg-white rounded shadow">
              <h3 className="font-semibold mb-2">{s}</h3>
              <p className="text-gray-600">Details about {s.toLowerCase()} — explain offerings, pricing, process.</p>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </>
  );
}
