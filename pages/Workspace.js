import {expect} from '@playwright/test';
export class Workspace
{
constructor({page}){
    this.page = page;
    this.Dom = page.getByRole('link',{name :'DOM'});
    this.left = page.locator(".is-pulled-left");
    this.name = page.locator("#fname");
    this.fileMngBtn = page.getByRole('link',{name: 'File management'});
    this.fileUploadBtn = page.locator('input[type="file"]');
    this.clickAlertBtn = page.getByRole('link',{name:'Dialog'});
    this.simpleAlertBtn = page.getByRole('button',{name: 'Simple Alert'})
} 

async verifyMainTitle(){
    await expect(this.page).toHaveTitle( "Workspace | LetCode with Koushik");
}
async clickDom(){
    await expect(this.Dom).toBeVisible();
    await this.Dom.click();
}
async verifyTitle(){
    await expect(this.left).toBeVisible();
}
async fillName(name){
    await this.name.fill(name);
}

async clickFileManagement(){
    await this.fileMngBtn.click();
    await expect(this.page).toHaveTitle('File Upload | LetCode with Koushik');

}

async fileUpload(){
    await this.fileUploadBtn
            .setInputFiles("C:\\Users\\Bharani\\OneDrive\\Documents\\Book1.xlsx");
           
}

async fileDownloadExcel(){
    const [download] = await Promise.all([
         this.page.waitForEvent('download'),
       
        this.page.getByRole('link',{name: 'Download Excel'}).click(),
        
           ]);
        await download.saveAs("C:/Users/Bharani/OneDrive/Documents/Book1.xlsx"),
        await this.page.pause()

}

async clickAlert(){
    await this.clickAlertBtn.click();
    await expect(this.page).toHaveTitle('Alert | LetCode with Koushik');
}

async AcceptSimpleAlert(){
    this.page.on('dialog', async dialog =>{
  console.log(dialog.message());
    await dialog.accept();
    })
  
  await this.simpleAlertBtn.click();
}
   
}
