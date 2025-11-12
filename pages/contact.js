import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLang } from '../src/lib/i18n';

export default function Contact() {
  const { t } = useLang();

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">{t.contactTitle}</h1>
        <p className="text-gray-700 mb-6">{t.contactText}</p>

        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="grid gap-4"
        >
          <input name="name" placeholder="Name" className="p-3 border rounded" />
          <input name="email" placeholder="Email" className="p-3 border rounded" />
          <textarea name="message" rows="6" placeholder="Message" className="p-3 border rounded" />
          <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded">{t.cta}</button>
        </form>

        <Footer />
      </main>
    </>
  );
}
