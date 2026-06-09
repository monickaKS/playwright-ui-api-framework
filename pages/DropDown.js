import{expect} from '@playwright/test'

export class DropDown {
    constructor({page}){
        this.page = page;
        this.Departure = page.locator('#ctl00_mainContent_ddl_originStation1_CTXT');
        this.citiesList = page.locator("tbody tr ul li a");
        this.Arrival = page.locator("#ctl00_mainContent_ddl_destinationStation1_CTXT");
        this.DMonth = page.locator(".ui-datepicker-month").first()
        this.DYear = page.locator(".ui-datepicker-year").first()

    }

    async gotoURL(){
         await this.page.goto("https://rahulshettyacademy.com/dropdownsPractise/");
        expect(this.page).toHaveTitle("QAClickJet - Flight Booking for Domestic and International, Cheap Air Tickets")
    }

    async selectDeparture(cityName){
        await this.Departure.click();
         let cities = await this.page.locator("tbody tr ul li a")
         let countName = await this.page.locator("tbody tr ul li a").allTextContents()
         let citiesCount =  await cities.count()
         let Arrlength = countName.length;
         
    
         for (let i=0; i<Arrlength ;i++){
            const cityText = await countName[i];
            if(cityText?.trim() === cityName){
            await cities.nth(i).click();
             console.log("Selected:", cityText);
             break;
             
            
        }
      }

      
    }

    async selectArrival(cityNameArrival){
        await this.Arrival.click();
         let cities1 = await this.page.locator("#glsctl00_mainContent_ddl_destinationStation1_CTNR#glsctl00_mainContent_ddl_destinationStation1_CTNR ul li a")
         let countName1 = await cities1.allTextContents()
         let citiesCount1 =  await cities1.count()
         let Arrlength1 = countName1.length;
         console.log(countName1)
         console.log(Arrlength1)
         
    
         for (let i=0; i<Arrlength1 ;i++){
            const cityText1 = await countName1[i];
            if(cityText1?.trim() === cityNameArrival){
            await cities1.nth(i).click();
             console.log("Selected:", cityText1);
             break;
             
            
        }
      }
    }

   

}