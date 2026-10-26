
import { Page , Locator } from '@playwright/test'

export class UWLogin {

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
TakeOver: Locator
ProcessType: Locator
Reason: Locator
Submit1: Locator
ReassignType: Locator
ReassignTo: Locator
Submit2: Locator

TakeOver1: Locator
ProcessType1: Locator
Reason1: Locator
Submit3: Locator


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

this.TakeOver = this.page.getByRole("button", {name:" Take Over "})
this.ProcessType = this.page.locator("#process_type")
this.Reason = this.page.locator("#reason")
this.Submit1 = this.page.getByRole("button", {name:" Submit "}).nth(1)


this.ReassignType = this.page.locator("#reassign_to_type")
this.ReassignTo = this.page.locator("#reassign_to")
this.Submit2 = this.page.locator('[class="btn btn-outline btn-md w-100 ng-star-inserted"]')

this.TakeOver1 = this.page.getByRole("button", {name:" Take Over "})
this.ProcessType1 = this.page.locator("#process_type")
this.Reason1 = this.page.locator("#reason")
this.Submit3 = this.page.getByRole("button", {name:" Submit "}).nth(1)


}

async LoginToUW(QuoteID:any){

await this.Username.fill("uwlv6nonsme_eb@insillion.com")
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

await this.TakeOver.click()
await this.ProcessType.click()
await this.page.getByText("Review", {exact:true}).click()
await this.Reason.fill("ok")
await this.Submit1.click()


await this.ReassignType.click()
await this.page.getByText("Email", {exact:true}).click()
await this.ReassignTo.fill("uwlv6nonsme_eb@insillion.com")
await this.Submit2.click()

await this.page.reload()

await this.TakeOver1.click()
await this.ProcessType1.click()
await this.page.getByText("Approve", {exact:true}).click()
await this.Reason1.fill("Approved")
await this.Submit3.click()



}




}