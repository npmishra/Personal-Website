import React, { createContext, useContext, useEffect, useState } from 'react';

const TEXT = {
  en: {
    name: 'Narayan Prasad Mishra',
    title: 'Developer & Consultant',
    heroDesc: "Hello — I'm Narayan. I build modern, responsive websites.",
    aboutTitle: 'About me',
    aboutText: 'I live in Butwal-12, Nayagaun, Rupandehi, Nepal. I create web projects and consult on digital strategy.',
    servicesTitle: 'Services',
    services: ['Website Development','UI / UX Design','SEO & Performance'],
    blogTitle: 'Latest Posts',
    contactTitle: 'Contact',
    contactText: 'Email: example@domain.com — Replace with your contact details.',
    cta: 'Get in touch'
  },
  ne: {
    name: 'नारायण प्रसाद मिश्र',
    title: 'डेभलपर र कन्सल्टेन्ट',
    heroDesc: 'नमस्ते — म नारायण। म आधुनिक र रिस्पोन्सिभ वेबसाइट बनाउँछु।',
    aboutTitle: 'मेरो बारेमा',
    aboutText: 'म बुटवल-१२, नया गाउँ, रुपन्देहीमा बस्छु। म वेब प्रोजेक्टहरू बनाउँछु र डिजिटल रणनीतिमा सल्लाह दिन्छु।',
    servicesTitle: 'सेवाहरू',
    services: ['वेबसाइट विकास','UI / UX डिजाइन','SEO र प्रदर्शन'],
    blogTitle: 'नयाँ पोस्टहरू',
    contactTitle: 'संपर्क',
    contactText: 'इमेल: example@domain.com — कृपया आफ्नो सम्पर्क विवरण राख्नुहोस्।',
    cta: 'सम्पर्क गर्नुहोस्'
  }
};

const LangContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ne');

  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('site_lang');
    if (saved) setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('site_lang', lang);
  }, [lang]);

  const t = TEXT[lang];

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
