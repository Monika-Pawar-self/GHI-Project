import { test , expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { ExcelUtils } from '../Utils/ExcelUtils'
import { SelectProduct } from '../Pages/SelectProduct'
import { QuotePage } from '../Pages/QuotePage'
import { UWLogin } from '../Pages/UWLogin'
import { CommonSearch } from '../Pages/CommonSearch'


const URL = "https://rsinsureuat.royalsundaram.net/login/#/login"

test.setTimeout(180000)

let data: any;

try { 
    data = ExcelUtils.getExcelData("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx","GHI")
    }

catch(e){
    console.log(e);
}

let lp: LoginPage
let sp: SelectProduct
let qp: QuotePage
let uwl: UWLogin
let cs: CommonSearch




test.beforeEach ("Quote Flow", async ({page}) =>{

 let TotalCases = data.length;
 let PassedCases = 0;
 let FailedCases = 0; 
 let QuoteID:string;
 

 for(let i=0;i < data.length; i++){
 const rowNumber = i+2

try {                               //In your Playwright code, we put try inside the for loop and around the method calls because you want to handle failures separately for each Excel row.
lp = new LoginPage(page)
await lp.LoginIntoApplication(URL,data[i].Username, data[i].Password)
await lp.VerifyDashboardPage()
sp = new SelectProduct(page)
await sp.SelectProduct()  

qp = new QuotePage(page)
await qp.EnterPolicyDetails(data[i].BusinessType, data[i].AgentCode, data[i].BranchName, data[i].Channel, data[i].InsuredName,
    data[i].GroupType, data[i].Industry,data[i].OccupationMaster, data[i].ProposalBasis, data[i].EmployeeType, data[i].PolicyStartDate,
    data[i].SumInsuredType
)

        await qp.ClickProceed()
        await qp.FinalizeQuote()
        await qp.ProceedToProposal()

      
    // this is try and catch

    ExcelUtils.writeTestResult("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx","GHI", rowNumber , "Pass")
     PassedCases ++;
     console.log(`Excel row ${rowNumber} passed Successfully`);
    }

    catch(error){

        const ErrorMessage = error instanceof Error  //This checks whether error is an instance of JavaScript's built-in Error class.
        ? error.message
        : String(error);

        ExcelUtils.writeTestResult("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx","GHI", rowNumber , "Fail")
      
        ExcelUtils.writeErrorMessage("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx","GHI", rowNumber , ErrorMessage)
        FailedCases ++ ;
        console.log(`Excel row ${rowNumber} failed:`, ErrorMessage);
   }
}

  console.log("\n========== TEST EXECUTION SUMMARY ==========");
  console.log(`Total Test Cases : ${TotalCases}`);
  console.log(`Passed Test Cases: ${PassedCases}`);
  console.log(`Failed Test Cases: ${FailedCases}`);
  console.log("****************************************");
// Fail the overall Playwright test if any Excel row failed
  expect(
      FailedCases,
      `${FailedCases} Excel test case(s) failed`
  ).toBe(0);

})




// NSTP Flow 

test ("GPA NSTP", async ({page}) =>{

 let TotalCases = data.length;
 let PassedCases = 0;
 let FailedCases = 0; 
 let QuoteID:string;
 

 for(let i=0;i < data.length; i++){
 const rowNumber = i+2

try {                               //In your Playwright code, we put try inside the for loop and around the method calls because you want to handle failures separately for each Excel row.
lp = new LoginPage(page)
await lp.LoginIntoApplication(URL,data[i].Username, data[i].Password)


await lp.VerifyDashboardPage()

sp = new SelectProduct(page)
await sp.SelectProduct()  


qp = new QuotePage(page)
await qp.EnterPolicyDetails(data[i].BusinessType, data[i].AgentCode, data[i].BranchName, data[i].Channel, data[i].InsuredName,
    data[i].GroupType, data[i].Industry,data[i].OccupationMaster, data[i].ProposalBasis, data[i].EmployeeType, data[i].PolicyStartDate,
    data[i].SumInsuredType
)

    await qp.ReferToUW() 
    const QuoteID = await qp.GetQuoteID() 
    uwl = new UWLogin(page)
    await page.goto(URL)
    await uwl.LoginToUW(QuoteID)
    await page.goto(URL)
    cs = new CommonSearch(page)
    await cs.CommonSearchOnDashboard(QuoteID)
    await qp.ProceedToProposal()

  
    if(QuoteID){
      ExcelUtils.writeQuoteID("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx","GHI", i+2, QuoteID )
    }
      

    // this is try and catch

    ExcelUtils.writeTestResult("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx","GHI", rowNumber , "Pass")
     PassedCases ++;
     console.log(`Excel row ${rowNumber} passed Successfully`);
    }

    catch(error){

        const ErrorMessage = error instanceof Error  //This checks whether error is an instance of JavaScript's built-in Error class.
        ? error.message
        : String(error);

        ExcelUtils.writeTestResult("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx","GHI", rowNumber , "Fail")
      
        ExcelUtils.writeErrorMessage("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx","GHI", rowNumber , ErrorMessage)
        FailedCases ++ ;
        console.log(`Excel row ${rowNumber} failed:`, ErrorMessage);
   }
}

  console.log("\n========== TEST EXECUTION SUMMARY ==========");
  console.log(`Total Test Cases : ${TotalCases}`);
  console.log(`Passed Test Cases: ${PassedCases}`);
  console.log(`Failed Test Cases: ${FailedCases}`);
  console.log("****************************************");
// Fail the overall Playwright test if any Excel row failed
  expect(
      FailedCases,
      `${FailedCases} Excel test case(s) failed`
  ).toBe(0);

})




