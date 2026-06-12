import {test,expect} from '@playwright/test';
import { DropDown } from '../pages/DropDown';
import Flight from '../testData/Flight.json';
test('Handle Dropdown', async({page})=>{
   const dropDown = new DropDown({page});
   await dropDown.gotoURL();
   await dropDown.ClickDeparture();
   await dropDown.selectCity(Flight.DepartureCity)
   await dropDown.ClickArrival();
   await dropDown.selectCity(Flight.ArrivalCity);


})