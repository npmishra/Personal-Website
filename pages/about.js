import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLang } from '../src/lib/i18n';

export default function About() {
  const { t } = useLang();
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">{t.aboutTitle}</h1>
        <p className="text-gray-700 mb-6">{t.aboutText}</p>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Background</h3>
          <p className="text-gray-600">You can put experience, skills, and education here.</p>
        </div>

        <Footer />
      </main>
    </>
  );
}
