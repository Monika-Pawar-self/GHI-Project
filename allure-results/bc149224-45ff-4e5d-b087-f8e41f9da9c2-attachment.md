# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: GPAFlow.spec.ts >> GPA Flow
- Location: tests\GPAFlow.spec.ts:31:5

# Error details

```
Test timeout of 180000ms exceeded.
```

```
Error: 1 Excel test case(s) failed

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 1
```

# Page snapshot

```yaml
- generic [ref=f18e2]:
  - generic [ref=f18e4]:
    - generic [ref=f18e6]:
      - img "Logo" [ref=f18e8]
      - generic [ref=f18e10]:
        - button [ref=f18e11] [cursor=pointer]:
          - img "Dashboard" [ref=f18e12]
        - button [ref=f18e13] [cursor=pointer]:
          - img "User Management" [ref=f18e14]
        - button [ref=f18e15] [cursor=pointer]:
          - img "Quick Links" [ref=f18e16]
        - button [ref=f18e17] [cursor=pointer]:
          - img "QMS" [ref=f18e18]
        - button [ref=f18e19] [cursor=pointer]:
          - img "Support Hub" [ref=f18e20]
      - button [ref=f18e21] [cursor=pointer]:
        - img "Toggle Menu" [ref=f18e22]
    - generic [ref=f18e23]:
      - navigation [ref=f18e25]:
        - generic [ref=f18e26]:
          - button [ref=f18e27] [cursor=pointer]:
            - img "Search" [ref=f18e28]
          - generic [ref=f18e29] [cursor=pointer]:
            - img "User Avatar" [ref=f18e30]
            - img "Dropdown" [ref=f18e31]
      - generic [ref=f18e34]:
        - generic [ref=f18e39]:
          - generic [ref=f18e40]: "LATEST UPDATES:"
          - generic [ref=f18e41]: FASTER PRODUCT PERFORMANCE & SMOOTHER USER JOURNEYS | FASTER PRODUCT PERFORMANCE & SMOOTHER USER JOURNEYS
        - generic [ref=f18e46]:
          - generic [ref=f18e47]:
            - img "A family holding a house model."
          - generic [ref=f18e48]:
            - img "A family holding a house model."
          - generic:
            - generic [ref=f18e49] [cursor=pointer]
            - generic [ref=f18e50] [cursor=pointer]
        - heading "Get a Quick Quote" [level=4] [ref=f18e54]
  - paragraph [ref=f18e61]: Loading...
```

# Test source

```ts
  42  | try {                               //In your Playwright code, we put try inside the for loop and around the method calls because you want to handle failures separately for each Excel row.
  43  | lp = new LoginPage(page)
  44  | await lp.LoginIntoApplication(URL,data[i].Username, data[i].Password)
  45  | 
  46  | 
  47  | await lp.VerifyDashboardPage()
  48  | 
  49  | sp = new SelectProduct(page)
  50  | await sp.SelectProduct()  
  51  | 
  52  | 
  53  | qp = new QuotePage(page)
  54  | await qp.EnterPolicyDetails(data[i].BusinessType, data[i].AgentCode, data[i].BranchName, data[i].Channel, data[i].InsuredName,
  55  |     data[i].GroupType, data[i].Industry,data[i].OccupationMaster, data[i].ProposalBasis, data[i].EmployeeType, data[i].PolicyStartDate,
  56  |     data[i].SumInsuredType
  57  | )
  58  | 
  59  |    
  60  |   
  61  |   const ProceedButton = page.getByRole("button",{name:"Proceed"})
  62  |     
  63  |     if(await ProceedButton.isVisible()){
  64  |      await qp.ClickProceed()
  65  |      await qp.FinalizeQuote()
  66  |      await qp.GetQuoteID()
  67  |    
  68  |     }
  69  |      else
  70  |         {
  71  | 
  72  |     await qp.ReferToUW() 
  73  |     const QuoteID = await qp.GetQuoteID() 
  74  |     uwl = new UWLogin(page)
  75  |     await page.goto(URL)
  76  |     await uwl.LoginToUW(QuoteID)
  77  |     await page.goto(URL)
  78  |     cs = new CommonSearch(page)
  79  |     await cs.CommonSearchOnDashboard(QuoteID)
  80  | 
  81  |     
  82  |   }
  83  |    
  84  |     /*
  85  |     if(QuoteID){
  86  |       ExcelUtils.writeQuoteID("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx","GHI", i+2, QuoteID )
  87  |     }
  88  |       */
  89  | 
  90  |      
  91  |    
  92  |      
  93  |      await qp.ProceedToProposal()
  94  | 
  95  |  
  96  | 
  97  | 
  98  | 
  99  | 
  100 | 
  101 | 
  102 | 
  103 | 
  104 | 
  105 | 
  106 | 
  107 | 
  108 | 
  109 | 
  110 | 
  111 | 
  112 |     // this is try and catch
  113 | 
  114 |     ExcelUtils.writeTestResult("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx","GHI", rowNumber , "Pass")
  115 |      PassedCases ++;
  116 |      console.log(`Excel row ${rowNumber} passed Successfully`);
  117 |     }
  118 | 
  119 |     catch(error){
  120 | 
  121 |         const ErrorMessage = error instanceof Error  //This checks whether error is an instance of JavaScript's built-in Error class.
  122 |         ? error.message
  123 |         : String(error);
  124 | 
  125 |         ExcelUtils.writeTestResult("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx","GHI", rowNumber , "Fail")
  126 |       
  127 |         ExcelUtils.writeErrorMessage("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx","GHI", rowNumber , ErrorMessage)
  128 |         FailedCases ++ ;
  129 |         console.log(`Excel row ${rowNumber} failed:`, ErrorMessage);
  130 |    }
  131 | }
  132 | 
  133 |   console.log("\n========== TEST EXECUTION SUMMARY ==========");
  134 |   console.log(`Total Test Cases : ${TotalCases}`);
  135 |   console.log(`Passed Test Cases: ${PassedCases}`);
  136 |   console.log(`Failed Test Cases: ${FailedCases}`);
  137 |   console.log("****************************************");
  138 | // Fail the overall Playwright test if any Excel row failed
  139 |   expect(
  140 |       FailedCases,
  141 |       `${FailedCases} Excel test case(s) failed`
> 142 |   ).toBe(0);
      |     ^ Error: 1 Excel test case(s) failed
  143 | 
  144 | })
  145 | 
  146 | 
  147 | 
```