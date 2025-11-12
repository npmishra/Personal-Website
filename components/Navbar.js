import Link from 'next/link';
import { useLang } from '../src/lib/i18n';

export default function Navbar() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/IMG_0233.JPG" alt="avatar" className="w-12 h-12 rounded-full object-cover border" />
          <div>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-gray-500">{t.title}</div>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <Link href="/"><a className="text-sm">Home</a></Link>
          <Link href="/about"><a className="text-sm">About</a></Link>
          <Link href="/services"><a className="text-sm">Services</a></Link>
          <Link href="/blog"><a className="text-sm">Blog</a></Link>
          <Link href="/contact"><a className="text-sm">Contact</a></Link>

          <div className="flex items-center gap-2 ml-4">
            <button className={`px-2 py-1 rounded ${lang==='ne'?'bg-sky-600 text-white':'bg-white border'}`} onClick={()=>setLang('ne')}>NE</button>
            <button className={`px-2 py-1 rounded ${lang==='en'?'bg-sky-600 text-white':'bg-white border'}`} onClick={()=>setLang('en')}>EN</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
