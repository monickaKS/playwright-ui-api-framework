import {test,expect} from '@playwright/test'
test('Google Sreach function', async({page})=>{
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
    await page.locator('[title="Search"]').fill("chatgpt");
    const ListSelection = await page.locator('ul li div[role ="option"] span')
   
    await expect(ListSelection.first()).toBeVisible();
    const listcount = await ListSelection.count()
  
   
console.log(listcount)
   for (let i=0;i<listcount;i++){
    const text =  await ListSelection.nth(i).textContent();
  
    if(text?.trim()==="chatgpt"){
        await ListSelection.nth(i).click();
        console.log("Selected", text)
        break;
    }
   }
   
})