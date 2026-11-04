import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://valdemarbenitez.uk',

    output: 'static',
    i18n: {
        defaultLocale: 'es',
        locales: ['en', 'es', 'fr'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    vite: {
        css: {
            devSourcemap: true,
        },
    },
});
