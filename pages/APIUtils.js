import {expect,test,request} from '@playwright/test';
export class APIUtils {
    constructor(apiContextLogin){
        this.apiContextLogin = apiContextLogin;
        
    
    }

    async getToken(){
        const payLoad = {userEmail:"monicka0810@gmail.com",userPassword:"Aaradhya@3101"}
        const LoginResponse = await this.apiContextLogin.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {data: payLoad})
        expect(LoginResponse.ok()).toBeTruthy();
        const LoginJson = await LoginResponse.json();
        return LoginJson.token;
    }



}