import {request, test, expect} from '@playwright/test';
import {APIUtils} from '../pages/APIUtils';
const createOrderPayload ={
    
    "orders": [
        {
            "country": "India",
            "productOrderedId": "6960eac0c941646b7a8b3e68"
        }
    ]

}
test('Create Order',async({page})=>{
   const apiContextLogin= await request.newContext();
    const apiUtils = new APIUtils(apiContextLogin);
    const token = await apiUtils.getToken();
    console.log("Login Token is: " + token);
     
    await page.goto("https://rahulshettyacademy.com/client");
       const apiContextCart = await request.newContext({extraHTTPHeaders: {
      Authorization: token,
      'Content-Type': 'application/json'
    }
    });
    const CreateOrderResponse = await apiContextCart.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {data: createOrderPayload});
   expect(CreateOrderResponse.ok()).toBeTruthy();
   const CreateOrderJsonResponse = await CreateOrderResponse.json();
   console.log(CreateOrderJsonResponse);
})