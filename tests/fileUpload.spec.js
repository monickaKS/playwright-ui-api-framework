import {test} from '../pages/fixtures';  
import { expect } from '@playwright/test';

test('example page title', async ({ WorkSpacePage }) => {

 await WorkSpacePage.verifyMainTitle();
 await WorkSpacePage.clickFileManagement();
 await WorkSpacePage.fileUpload();
 await WorkSpacePage.fileDownloadExcel();
  
});