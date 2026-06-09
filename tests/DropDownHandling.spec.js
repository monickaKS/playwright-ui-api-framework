import {test,expect} from '@playwright/test';
import { DropDown } from '../pages/DropDown';
import Flight from '../testData/Flight.json';
test('Handle Dropdown', async({page})=>{
   const dropDown = new DropDown({page});
   await dropDown.gotoURL();
   await dropDown.selectDeparture(Flight.DepartureCity);
   await dropDown.selectArrival(Flight.ArrivalCity);


})