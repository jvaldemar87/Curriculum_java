import siteMetadata from '../data/site-metadata.json';

export type Lang = 'en' | 'es' | 'fr';

export const languages: Record<Lang, { label: string; flag: string }> = {
    en: { label: 'English', flag: '🇺🇸' },
    es: { label: 'Español', flag: '🇲🇽' },
    fr: { label: 'Français', flag: '🇫🇷' },
};

export const defaultLang: Lang = 'es';

export function getLangFromUrl(url: URL): Lang {
    const segments = url.pathname.split('/').filter(Boolean);
    // Account for base path /Curriculum_java/
    const langSegment = segments.find((s) => ['en', 'es', 'fr'].includes(s));
    return (langSegment as Lang) || defaultLang;
}

export function useTranslations(lang: Lang) {
    const ui = siteMetadata.ui[lang] || siteMetadata.ui[defaultLang];
    return ui;
}

export function getSeoData(lang: Lang) {
    return siteMetadata.seo[lang] || siteMetadata.seo[defaultLang];
}

export function getLocalizedPath(lang: Lang, path: string = '') {
    const baseEnv = import.meta.env.BASE_URL;
    const base = baseEnv === '/' ? '' : baseEnv || '';

    // If default lang (es), return root path
    if (lang === defaultLang) {
        return `${base}${path ? '/' + path : '/'}`;
    }

    return `${base}/${lang}${path ? '/' + path : ''}/`;
}
