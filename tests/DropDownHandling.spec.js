import {test,expect} from '@playwright/test';
test('Handle Dropdown', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");
    await expect(page).toHaveTitle("QAClickJet - Flight Booking for Domestic and International, Cheap Air Tickets")
    await page.locator('#ctl00_mainContent_ddl_originStation1_CTXT').click();
    let cities = await page.locator("tbody tr ul li a")
    let countName = await page.locator("tbody tr ul li a").allTextContents()
    let citiesCount =  await cities.count()
    let Arrlength = countName.length;
console.log(Arrlength)
   console.log(countName)
    console.log(citiesCount)
    let cityName ="Chennai (MAA)"
    
        for (let i=0; i<Arrlength ;i++){
            const cityText = await countName[i];
        if(cityText?.trim() === cityName){
            await cities.nth(i).click();
             console.log("Selected:", cityText);
             break;
             
            
        }
    }
  

    //await page.locator('#ctl00_mainContent_ddl_originStation1_CTXT').pressSequentially("Chennai")
    //await expect(page.locator('#ctl00_mainContent_ddl_originStation1_CTXT')).toHaveText('Chennai (MAA)')


})