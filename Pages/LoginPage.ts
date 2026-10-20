
import { expect, Locator , Page } from '@playwright/test'
export class LoginPage {


    Username: Locator
    Password: Locator
    SignInButton: Locator
    VerifyDashboardPage1: Locator
    page: Page



    constructor(page:Page){

        this.page = page;
      
       this.Username = this.page.getByPlaceholder("Enter Username")
       this.Password = this.page.getByPlaceholder("Enter Password")
       this.SignInButton = this.page.getByRole("button", {name:"Sign In"})
       this.VerifyDashboardPage1 = this.page.locator('[class="mb-4 mt-4 text-lg"]')


     }

     async LoginIntoApplication(URL:string, Username:string, Password:string){

        await this.page.goto(URL)
        await this.Username.fill(Username)
        await this.Password.fill(Password)
        await this.SignInButton.click()
       
    }


    async VerifyDashboardPage(){

    await expect(this.VerifyDashboardPage1).toHaveText("Get a Quick Quote")

    }
    

}
