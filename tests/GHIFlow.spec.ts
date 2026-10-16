import { test , expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { ExcelUtils } from '../Utils/ExcelUtils'
import { SelectProduct } from '../Pages/SelectProduct'

const URL = "https://rsinsureuat.royalsundaram.net/login/#/login"

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


test ("InsureX Login", async ({page}) =>{
lp = new LoginPage(page)
await lp.LoginIntoApplication(URL,data[0].Username, data[0].Password)
sp = new SelectProduct(page)
await sp.SelectProduct()

}
)

