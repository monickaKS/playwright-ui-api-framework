import { chromium } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();
const Base_URL = process.env.BASE_URL;
export default async() => {
    const browser= await chromium.launch();
    const page = await browser.newPage();
    await page.goto(Base_URL);
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await page.waitForURL(Base_URL + "/web/index.php/dashboard/index");
    await page.context().storageState({path:"state.json"});
    await browser.close();
}