import{test} from '../pages/fixtures';
import{expect} from '@playwright/test';


test ('alert popup handling', async({WorkSpacePage}) =>{
    await WorkSpacePage.clickAlert();
    await WorkSpacePage.AcceptSimpleAlert();

    })