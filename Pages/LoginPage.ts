
import { Locator , Page } from '@playwright/test'
export class LoginPage {


    Username: Locator
    Password: Locator
    SignInButton: Locator
    page: Page


    constructor(page:Page){

        this.page = page;
      
       this.Username = this.page.getByPlaceholder("Enter Username")
       this.Password = this.page.getByPlaceholder("Enter Password")
       this.SignInButton = this.page.getByRole("button", {name:"Sign In"})


     }

     async LoginIntoApplication(URL:string, Username:string, Password:string){

        await this.page.goto(URL)
        await this.Username.fill(Username)
        await this.Password.fill(Password)
        await this.SignInButton.click()
    }

}