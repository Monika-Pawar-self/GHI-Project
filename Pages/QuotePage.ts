import { expect, Locator, Page } from "@playwright/test";

export class QuotePage {

page:Page
QuoteButton: Locator
businessType: Locator
agentCode: Locator
branchName:Locator
channel:Locator
insuredName: Locator
groupType: Locator
industry: Locator
occupationMaster:Locator
proposalBasis: Locator
employeeType: Locator
policyStartDate: Locator
sumInsuredType: Locator
fileupload: Locator
uploadButton: Locator
toaster: Locator
rfqUpload: Locator
uploadButton2: Locator
getPremium: Locator
uwReason: Locator
refferToUW: Locator
alert: Locator
quoteID: Locator


constructor(page:Page) {
this.page = page;

this.QuoteButton = this.page.locator('[class="btn btn-primary btn-md"]')
this.businessType = page.locator('#policy_transaction_type')
this.agentCode = this.page.getByPlaceholder('Enter Agent Code')
this.branchName = this.page.locator('#pol_serv_branch_name')
this.channel =this.page.locator('#imd_channel')
this.insuredName = this.page.locator('#proposer_name_primary_insured')
this.groupType = this.page.locator('#employee_group_type')
this.industry= this.page.locator('#industry_type')
this.occupationMaster = this.page.locator('#occupation_master')
this.proposalBasis = this.page.locator('#proposal_basis')
this.employeeType =this.page.locator('#employee_type')
this.policyStartDate=this.page.getByPlaceholder('Select policy start date')
this.sumInsuredType=this.page.locator('#sum_insured_type')
this.fileupload =this.page.locator('[accept=".xlsx, .xls, .csv"]')
this.uploadButton = this.page.locator('[class="btn btn-outline btn-md w-100 mt-7 ng-star-inserted"]')
this.toaster = this.page.locator('.ngx-toastr.toast-success')
this.rfqUpload= this.page.locator('#fileInput').nth(1)
this.uploadButton2 =this.page.locator('[class="btn btn-outline btn-md w-100 ng-star-inserted"]')
this.getPremium = this.page.getByRole("button",{name:'Get Premium'})
this.uwReason = this.page.locator('[class="review-section-wrapper"]')
this.refferToUW = this.page.getByRole("button",{name:'Refer For UW'})
this.alert = this.page.locator('[role="alert"]')
this.quoteID = this.page.getByText("Quotation ID")


}


async EnterPolicyDetails(BusinessType:string, AgentCode:string , BranchName:string, Channel:string, InsuredName:string,
    GroupType:string, Industry:string , OccupationMaster:string, ProposalBasis:string , EmployeeType:string, PolicyStartDate:string,
    SumInsuredType:string
){
   
    await this.QuoteButton.click()
    // Wait for loading spinner to disappear
        await this.page.locator('.ngx-spinner-overlay').waitFor({
            state: 'hidden',
            timeout: 60000 
             });

    await this.businessType.click();
    await this.page.getByText(BusinessType,{exact: true}).click()
    await this.agentCode.fill(AgentCode)
    await this.branchName.click()
    await this.page.getByText(BranchName,{exact:true}).click()
    await this.channel.click()
    await this.page.getByText(Channel, {exact:true}).click()
    await this.insuredName.fill(InsuredName)
    await this.groupType.click()
    await this.page.getByText(GroupType, {exact:true}).click()
    await this.industry.click()
    await this.page.mouse.wheel(0,500)
    await this.page.getByText(Industry, {exact:true}).click()
    await this.occupationMaster.click()
    await this.page.getByText(OccupationMaster, {exact:true}).click()
    await this.proposalBasis.click()
    await this.page.getByText(ProposalBasis, {exact:true}).click()
    await this.employeeType.click()
    await this.page.getByText(EmployeeType, {exact:true}).click()
    await this.policyStartDate.fill(PolicyStartDate)
    await this.sumInsuredType.click()
    await this.page.getByText(SumInsuredType, {exact:true}).click()
    await this.fileupload.setInputFiles("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/GPA-Non-SME member data named - Flat SI - 1600.xlsx")
    await this.uploadButton.click()
    await expect(this.toaster).toContainText("Success!",{timeout: 60000})
    const fileuploadmessage = await this.toaster.textContent()
    //console.log("Members Data Upload Status:", fileuploadmessage);
    await this.rfqUpload.setInputFiles("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/RFQ Doc.pdf")
    await this.uploadButton2.click()
    await this.getPremium.click({timeout:180000})
    const UWReason = await this.uwReason.textContent()
    //console.log("Case Referred to UW:",UWReason);
    await this.refferToUW.click()
    await expect(this.alert).toContainText("Common UW Pool")
    const AssignedUW = await this.alert.textContent()
    //console.log(AssignedUW);

   const QuoteID1 = await this.quoteID.textContent()
   const QuoteID = QuoteID1?.split(":")[1].trim()
   console.log(QuoteID);
   return QuoteID;
   

    
 

   
    
}














}
