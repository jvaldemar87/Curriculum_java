import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://jvaldemar87.github.io',
    base: '/Curriculum_java',
    output: 'static',
    i18n: {
        defaultLocale: 'es',
        locales: ['en', 'es', 'fr'],
        routing: {
            prefixDefaultLocale: true,
        },
    },
    vite: {
        css: {
            devSourcemap: true,
        },
    },
});
