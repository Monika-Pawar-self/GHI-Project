import { Locator, Page } from '@playwright/test'

export class ProposalPage{

page:Page
ckycDoneBy:Locator
customerType:Locator
panNumber:Locator
dob:Locator
proposerLastName: Locator
existingClient:Locator
mobNo: Locator
AD1:Locator
AD2:Locator
AD3:Locator
AD4:Locator
pincode:Locator
sameAD:Locator
hrEmail:Locator
subChannel:Locator
salesRepCode:Locator
tuwCode:Locator
uwCode:Locator
fileUpload:Locator
UploadButton:Locator
uploadCKYC:Locator
uploadDoc:Locator
remark:Locator
upoadButton2:Locator
GetPremium:Locator
Proceed: Locator
FinalizeProposal:Locator
ProceedToPayment:Locator







constructor(page:Page){
this.page = page;

this.ckycDoneBy =this.page.locator('[aria-autocomplete="list"]').nth(0)
this.customerType= this.page.locator("#cust_buss_type")
this.panNumber =this.page.getByPlaceholder("Enter Pan Number")
this.dob = this.page.locator("#proposer_dob")
this.proposerLastName = this.page.locator("#proposer_last_name")
this.existingClient = this.page.locator('[aria-autocomplete="list"]').nth(2)
this.mobNo = this.page.locator("#mobile_no")
this.AD1 = this.page.getByPlaceholder("Address line 1").nth(0)
this.AD2 = this.page.getByPlaceholder("Address line 1").nth(1)
this.AD3 = this.page.getByPlaceholder("Address line 1").nth(2)
this.AD4 = this.page.getByPlaceholder("Address line 1").nth(3)
this.pincode = this.page.locator("#permanent_pincode").nth(0)
this.sameAD = this.page.locator('[for="same_address_toggle"]')
this.hrEmail = this.page.locator("#hr_email")
this.subChannel = this.page.locator('[aria-autocomplete="list"]').nth(8)
this.salesRepCode = this.page.locator("#imd_sales_rep")
this.tuwCode = this.page.locator("#imd_trading_uw")
this.uwCode = this.page.locator("#imd_approving_uw")

this.fileUpload = this.page.locator('[accept=".xlsx, .xls, .csv"]')
this.UploadButton = this.page.locator('[class="btn btn-outline btn-md w-100 mt-7 ng-star-inserted"]')


this.uploadCKYC =this.page.locator('[aria-autocomplete="list"]').nth(9)


this.uploadDoc =this.page.locator('[accept=".pdf, .zip, .tif, .xls, .xlsx, .doc, .docx, .txt, .jpg, .jpeg, .gif, .bmp, .png, Macro, csv, EML, MSG, CSV."]')
this.remark = this.page.locator("#remarks")
this.upoadButton2 = this.page.locator('[class="btn btn-outline btn-md w-100 ng-star-inserted"]')



this.GetPremium = this.page.getByRole("button", {name:"Get Premium"})
//const NetPremium = await page.locator('[class="text-grey font-bold"]').nth(0).textContent()
//console.log(NetPremium);
this.Proceed = this.page.getByRole("button",{name:"Proceed"})
//const ProposalId = await page.locator('[class="text-md font-semibold ng-star-inserted"]').textContent()
//console.log(ProposalId);
this.FinalizeProposal = this.page.getByRole("button", {name:"Finalize Proposal"})
this.ProceedToPayment = this.page.getByRole("button", {name:"Proceed to Payment"})

}


async ProposalEntry(CKYCDoneBy:string, CustomerType:string, PanNumber:string, DateOfBirth:string, ProposerLastName:string,
    ExistingClient:string, CustomerContactNumber:string, AddressLine1:string,AddressLine2:string, AddressLine3:string,
    AddressLine4:string, Pincode:string,HREmail:string, SubChannel:string, SalesRepCode:string, TUWCode:string, UWCode:string,

){

   await this.ckycDoneBy.click()
   await this.page.getByText(CKYCDoneBy, {exact:true}).click()
   await this.customerType.click()
   await this.page.getByText(CustomerType,{exact:true}).nth(1).click()
   await this.panNumber.fill(PanNumber)
   await this.dob.fill(DateOfBirth)
   await this.proposerLastName.fill(ProposerLastName)
   await this.existingClient.click()
   await this.page.getByText(ExistingClient, {exact:true}).click()
   await this.mobNo.fill(CustomerContactNumber)
   await this.AD1.fill(AddressLine1)
   await this.AD2.fill(AddressLine2)
   await this.AD3.fill(AddressLine3)
   await this.AD4.fill(AddressLine4)
   await this.pincode.fill(Pincode)
   await this.sameAD.check()
   await this.hrEmail.fill(HREmail)
   await this.subChannel.click()
   await this.page.getByText(SubChannel, {exact:true}).click()
   await this.salesRepCode.fill(SalesRepCode)
   await this.tuwCode.fill(TUWCode)
   await this.uwCode.fill(UWCode)

   await this.page.mouse.wheel(0,500)

   await this.fileUpload.setInputFiles("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/Member Data.xlsx")
   await this.UploadButton.click()

   await this.uploadCKYC.click()
   await this.page.getByText("CKYC Certificate", {exact:true}).click()


   await this.uploadDoc.setInputFiles("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/RFQ Doc.pdf")
   await this.remark.fill("OK")
   await this.upoadButton2.click({timeout:3000})

   await this.GetPremium.click()
   await this.Proceed.click()
   await this.FinalizeProposal.click()
   await this.ProceedToPayment.click()








}













}