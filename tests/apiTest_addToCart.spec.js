import{test,expect,request} from '@playwright/test';
import {APIUtils} from '../pages/APIUtils';

const payloadCart={
    _id: "69eb20fdf86ba51a65825589",
    product: {
        _id: "6960eae1c941646b7a8b3ed3",
        productName: "ADIDAS ORIGINAL",
        productCategory: "electronics",
        productSubCategory: "mobiles",
        productPrice: 11500,
        productDescription: "Apple phone",
        productImage: "https://rahulshettyacademy.com/api/ecom/uploads/productImage_1767959265156.jpg",
        productRating: "0",
        productTotalOrders: "0",
        productStatus: true,
        productFor: "women",
        productAddedBy: "admin",
        __v: 0
    }
}

test("API test case", async({page})=>{
     
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
    const apiResponseCart = await apiContextCart.post("https://rahulshettyacademy.com/api/ecom/user/add-to-cart",
    {data: payloadCart})
    expect(apiResponseCart.ok()).toBeTruthy();
    const cartJsonResponse = await apiResponseCart.json();
    console.log(cartJsonResponse);
    //await page.pause();


})

