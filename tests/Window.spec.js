import{test,expect} from '@playwright/test';
test('@smoke Window Handle Test', async ({ page }) => {
    await page.goto("https://demoqa.com/browser-windows?utm_source=chatgpt.com");
const context = page.context();
    const [tabNewPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator("#tabButton").click()

]);
const[windowNewPage] = await Promise.all([
    context.waitForEvent('page'),
    page.locator("#windowButton").click()
    
])
console.log(await tabNewPage.locator("#sampleHeading").textContent());
console.log(await windowNewPage.locator("#sampleHeading").textContent());
});