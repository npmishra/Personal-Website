import '../styles/globals.css';
import { LanguageProvider } from '../src/lib/i18n';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
