import { test, expect } from '@playwright/test';

const BASE = '/Curriculum_java';
const LANGS = ['en', 'es', 'fr'] as const;

test.describe('Portfolio Navigation', () => {
    for (const lang of LANGS) {
        test(`loads ${lang} page without errors`, async ({ page }) => {
            const response = await page.goto(`${BASE}/${lang}/`);
            expect(response?.status()).toBe(200);
            await expect(page.locator('h1')).toContainText('Jesús Valdemar');
        });
    }

    test('root redirects to /es/', async ({ page }) => {
        await page.goto(`${BASE}/`);
        await expect(page).toHaveURL(/\/es\//);
    });

    test('no broken anchor links', async ({ page }) => {
        await page.goto(`${BASE}/es/`);
        const anchors = page.locator('a[href^="#"]');
        const count = await anchors.count();
        for (let i = 0; i < count; i++) {
            const href = await anchors.nth(i).getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = page.locator(href);
                await expect(target).toBeAttached();
            }
        }
    });
});

test.describe('Language Selector (i18n)', () => {
    test('selector is visible and functional', async ({ page }) => {
        await page.goto(`${BASE}/es/`);
        const selector = page.locator('#language-selector');
        await expect(selector).toBeVisible();

        // Open dropdown
        await page.click('#lang-toggle');
        const dropdown = page.locator('#lang-dropdown');
        await expect(dropdown).toHaveClass(/open/);

        // Switch to English
        await page.click('[data-lang="en"]');
        await expect(page).toHaveURL(/\/en\//);
        await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    });

    test('content changes per language', async ({ page }) => {
        await page.goto(`${BASE}/es/`);
        await expect(page.locator('.hero-role')).toContainText('Microservicios');

        await page.goto(`${BASE}/en/`);
        await expect(page.locator('.hero-role')).toContainText('Microservices');

        await page.goto(`${BASE}/fr/`);
        await expect(page.locator('.hero-role')).toContainText('Microservices');
    });
});

test.describe('Interactive Terminal', () => {
    test('terminal renders and accepts input', async ({ page }) => {
        await page.goto(`${BASE}/es/`);
        const terminal = page.locator('#interactive-terminal');
        await expect(terminal).toBeVisible();

        const input = page.locator('#terminal-input');
        await input.fill('help');
        await input.press('Enter');

        const output = page.locator('#terminal-output');
        await expect(output).toContainText('whoami');
    });

    test('unknown command shows error', async ({ page }) => {
        await page.goto(`${BASE}/es/`);
        const input = page.locator('#terminal-input');
        await input.fill('invalid');
        await input.press('Enter');

        await expect(page.locator('.terminal-error')).toBeVisible();
    });
});

test.describe('Responsive Design', () => {
    test('mobile: hamburger menu toggles navigation', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        await page.goto(`${BASE}/es/`);

        const toggle = page.locator('#mobile-toggle');
        await expect(toggle).toBeVisible();

        await toggle.click();
        const navLinks = page.locator('#nav-links');
        await expect(navLinks).toHaveClass(/open/);
    });

    test('desktop: nav links visible without toggle', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 800 });
        await page.goto(`${BASE}/es/`);

        const navLinks = page.locator('#nav-links');
        await expect(navLinks).toBeVisible();
    });
});

test.describe('Sections & Content', () => {
    test('all major sections exist', async ({ page }) => {
        await page.goto(`${BASE}/es/`);
        await expect(page.locator('#hero')).toBeVisible();
        await expect(page.locator('#skills')).toBeVisible();
        await expect(page.locator('#experience')).toBeVisible();
        await expect(page.locator('#contact')).toBeVisible();
    });

    test('experience cards render with company names', async ({ page }) => {
        await page.goto(`${BASE}/es/`);
        const expSection = page.locator('#experience');
        await expect(expSection).toContainText('Stefanini');
        await expect(expSection).toContainText('NTT Data');
    });

    test('bento grid cards are visible', async ({ page }) => {
        await page.goto(`${BASE}/es/`);
        const bentoItems = page.locator('.bento-item');
        const count = await bentoItems.count();
        expect(count).toBeGreaterThanOrEqual(3);
    });
});
