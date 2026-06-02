import{test,expect} from '@playwright/test';
test('Window Handle Test', async ({ page }) => {
    await page.goto("https://demoqa.com/browser-windows?utm_source=chatgpt.com");
const context = page.context();
    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator("#tabButton").click()
]);
console.log(await newPage.title());
});