
import { Page , Locator } from '@playwright/test'

export class CommonSearch {
  
Username: Locator
Password: Locator
SignInButton: Locator
page: Page
Search: Locator
SelectLOB:Locator
SelectProduct: Locator
SearchBy: Locator
Input: Locator
Submit: Locator
DataLink: Locator

constructor(page:Page){

this.page = page;
this.Username = this.page.getByPlaceholder("Enter Username")
this.Password = this.page.getByPlaceholder("Enter Password")
this.SignInButton = this.page.getByRole("button", {name:"Sign In"})
this.Search = this.page.locator('[alt="Search"]')
this.SelectLOB = this.page.locator('[aria-autocomplete="list"]').nth(0)
this.SelectProduct = this.page.locator("#product")
this.SearchBy = this.page.locator('[formcontrolname="searchBy"]')
//await page.getByText("By Quote Id", {exact:true}).nth(0).click()
this.Input=this.page.locator('[formcontrolname="searchText"]')
this.Submit = this.page.locator('[type="submit"]')
this.DataLink = this.page.locator('[class="truncate-multi-line word-break underline-on-hover ng-star-inserted"]').nth(0)


}



async CommonSearchOnDashboard(QuoteID:any){

await this.Username.fill("salesuser2@commercial.royalsundaram.net")
await this.Password.fill("889188")
await this.SignInButton.click()
await this.Search.click()
await this.SelectLOB.click()
await this.page.getByText("Employee Benefits", {exact:true}).click()
await this.SelectProduct.click()
await this.page.getByText("Group Personal Accident").click()

await this.SearchBy.click()
await this.Input.fill(QuoteID)
await this.Submit.click()
await this.DataLink.click()
}



}