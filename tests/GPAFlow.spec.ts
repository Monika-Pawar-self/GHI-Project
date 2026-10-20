import { test , expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { ExcelUtils } from '../Utils/ExcelUtils'
import { SelectProduct } from '../Pages/SelectProduct'
import { QuotePage } from '../Pages/QuotePage'

const URL = "https://rsinsureuat.royalsundaram.net/login/#/login"


test.setTimeout(180000)

let data: any
try {
data = ExcelUtils.getExcelData("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx", "GHI")
}
catch(e)
{
    console.log(e);
    
}

let lp: LoginPage
let sp: SelectProduct
let qp: QuotePage

test.afterEach("Status", async({}, testInfo )=>{
for(let i=0;i<data.length; i++) {
 if (testInfo.title === data[i].TestResult) {
if (testInfo.status === "passed") {

    ExcelUtils.writeTestResult("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx", "GHI", i+2, "Pass")
}

else
{
    ExcelUtils.writeTestResult("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx", "GHI", i+2, "Fail")
}
}
}

})





test ("GPA Flow", async ({page}) =>{

for(let i=0;i<data.length; i++){
    
lp = new LoginPage(page)
await lp.LoginIntoApplication(URL,data[i].Username, data[i].Password)


await lp.VerifyDashboardPage()

sp = new SelectProduct(page)
await sp.SelectProduct()  


qp = new QuotePage(page)

const QuoteID = await qp.EnterPolicyDetails(data[i].BusinessType, data[i].AgentCode, data[i].BranchName, data[i].Channel, data[i].InsuredName,
    data[i].GroupType, data[i].Industry, data[i].OccupationMaster, data[i].ProposalBasis, data[i].EmployeeType, data[i].PolicyStartDate,
    data[i].SumInsuredType
)

if(QuoteID)
    {ExcelUtils.writeQuoteID("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx",
        "GHI",
        i+2,
        QuoteID )
}

 


  }
})


