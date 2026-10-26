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
- generic [ref=f18e3]:
  - generic [ref=f18e5]:
    - img "Logo" [ref=f18e7]
    - generic [ref=f18e9]:
      - button [ref=f18e10] [cursor=pointer]:
        - img "Dashboard" [ref=f18e11]
      - button [ref=f18e12] [cursor=pointer]:
        - img "User Management" [ref=f18e13]
      - button [ref=f18e14] [cursor=pointer]:
        - img "Quick Links" [ref=f18e15]
      - button [ref=f18e16] [cursor=pointer]:
        - img "QMS" [ref=f18e17]
      - button [ref=f18e18] [cursor=pointer]:
        - img "Support Hub" [ref=f18e19]
    - button [ref=f18e20] [cursor=pointer]:
      - img "Toggle Menu" [ref=f18e21]
  - generic [ref=f18e22]:
    - navigation [ref=f18e24]:
      - generic [ref=f18e25]:
        - button [ref=f18e26] [cursor=pointer]:
          - img "Search" [ref=f18e27]
        - generic [ref=f18e28] [cursor=pointer]:
          - img "User Avatar" [ref=f18e29]
          - generic [ref=f18e30]: saleuser Two two
          - img "Dropdown" [ref=f18e31]
    - generic [ref=f18e35]:
      - generic [ref=f18e36]:
        - navigation [ref=f18e38]:
          - generic [ref=f18e39]: Dashboard >
          - generic [ref=f18e40]: Employee Benefits >
          - generic [ref=f18e41]: Policy Summary
        - generic [ref=f18e42]:
          - button [ref=f18e43] [cursor=pointer]:
            - img "Back" [ref=f18e44]
          - text: Group Personal Accident
        - generic [ref=f18e45]:
          - generic [ref=f18e46]:
            - generic [ref=f18e47]: "Quote Summary | Quotation ID: Q200000017815"
            - img "icon-download" [ref=f18e50] [cursor=pointer]
          - generic [ref=f18e52]:
            - generic [ref=f18e53]: Policy Details
            - generic [ref=f18e55]:
              - generic [ref=f18e57]:
                - generic [ref=f18e58]:
                  - generic [ref=f18e59]: Business Type
                  - generic [ref=f18e60]: New Business
                - generic [ref=f18e61]:
                  - generic [ref=f18e62]: Lead Id
                  - generic [ref=f18e63]: "-"
                - generic [ref=f18e64]:
                  - generic [ref=f18e65]: Agent Code
                  - generic [ref=f18e66]: AG020227
                - generic [ref=f18e67]:
                  - generic [ref=f18e68]: Agent Name
                  - generic [ref=f18e69]: AG020227_FULL_NAME
                - generic [ref=f18e70]:
                  - generic [ref=f18e71]: Originating Location
                  - generic [ref=f18e72]: Chennai Regional Office - C0
                - generic [ref=f18e73]:
                  - generic [ref=f18e74]: Channel
                  - generic [ref=f18e75]: AAR
                - generic [ref=f18e76]:
                  - generic [ref=f18e77]: Proposition Name
                  - generic [ref=f18e78]: Product
                - generic [ref=f18e79]:
                  - generic [ref=f18e80]: Full Name of Company to be Insured
                  - generic [ref=f18e81]: Monika
                - generic [ref=f18e82]:
                  - generic [ref=f18e83]: Insured Email ID
                  - generic [ref=f18e84]: "-"
                - generic [ref=f18e85]:
                  - generic [ref=f18e86]: Insured Mobile Number
                  - generic [ref=f18e87]: "-"
                - generic [ref=f18e88]:
                  - generic [ref=f18e89]: Group type
                  - generic [ref=f18e90]: Employer-Employee
                - generic [ref=f18e91]:
                  - generic [ref=f18e92]: Industry/sector classification
                  - generic [ref=f18e93]: Information Technology
                - generic [ref=f18e94]:
                  - generic [ref=f18e95]: Occupation master
                  - generic [ref=f18e96]: Housewives
                - generic [ref=f18e97]:
                  - generic [ref=f18e98]: Breif Description
                  - generic [ref=f18e99]: "-"
                - generic [ref=f18e100]:
                  - generic [ref=f18e101]: Proposal Basis
                  - generic [ref=f18e102]: Named Policy
                - generic [ref=f18e103]:
                  - generic [ref=f18e104]: Employee Type
                  - generic [ref=f18e105]: Contractual / Off-Roll
                - generic [ref=f18e106]:
                  - generic [ref=f18e107]: Policy Start Date
                  - generic [ref=f18e108]: 20/10/2026
                - generic [ref=f18e109]:
                  - generic [ref=f18e110]: Policy End Date
                  - generic [ref=f18e111]: 19/10/2027
                - generic [ref=f18e112]:
                  - generic [ref=f18e113]: Tenure Type
                  - generic [ref=f18e114]: Annualized
                - generic [ref=f18e115]:
                  - generic [ref=f18e116]: Sum Insured Type
                  - generic [ref=f18e117]: Flat Sum Insured for All
                - generic [ref=f18e118]:
                  - generic [ref=f18e119]: Multiplier on CTC
                  - generic [ref=f18e120]: "-"
                - generic [ref=f18e121]:
                  - generic [ref=f18e122]: Highest Individual Sum Insured
                  - generic [ref=f18e123]: "2000000"
                - generic [ref=f18e124]:
                  - generic [ref=f18e125]: Accumulation Limit
                  - generic [ref=f18e126]: "640000000"
              - generic [ref=f18e127]:
                - paragraph [ref=f18e128]: Members Details
                - generic [ref=f18e129]:
                  - generic [ref=f18e130]:
                    - generic [ref=f18e131]: Total Members
                    - generic [ref=f18e132]: "1600"
                  - generic [ref=f18e133]:
                    - generic [ref=f18e134]: Total Sum Insured
                    - generic [ref=f18e135]: "3200000000"
                  - generic [ref=f18e136]:
                    - generic [ref=f18e137]: Total PA SI
                    - generic [ref=f18e138]: "3200000000"
                  - generic [ref=f18e139]:
                    - generic [ref=f18e140]: Total Premium
                    - generic [ref=f18e141]: "792960"
          - generic [ref=f18e143]:
            - generic [ref=f18e144]: Coverage/Benefits
            - generic [ref=f18e148]:
              - generic [ref=f18e149]:
                - generic [ref=f18e150]: Coverage Type
                - generic [ref=f18e151]: 24 Hrs
              - generic [ref=f18e152]:
                - generic [ref=f18e153]: Death Benefit
                - generic [ref=f18e154]: 100%
              - generic [ref=f18e155]:
                - generic [ref=f18e156]: PTD (Permanent Total Disablement)
                - generic [ref=f18e157]: "-"
              - generic [ref=f18e158]:
                - generic [ref=f18e159]: Loss of Limbs/eyes
                - generic [ref=f18e160]: "-"
              - generic [ref=f18e161]:
                - generic [ref=f18e162]: PPD (Permanent Partial Disablement)
                - generic [ref=f18e163]: "No"
              - generic [ref=f18e164]:
                - generic [ref=f18e165]: TTD (Temporary Total Disablement)
                - generic [ref=f18e166]: "No"
              - generic [ref=f18e167]:
                - generic [ref=f18e168]: Weeks
                - generic [ref=f18e169]: "-"
          - generic [ref=f18e171]:
            - generic [ref=f18e172]: TPA Details
            - generic [ref=f18e176]:
              - generic [ref=f18e177]:
                - generic [ref=f18e178]: TPA Name
                - generic [ref=f18e179]: NON-TPA
              - generic [ref=f18e180]:
                - generic [ref=f18e181]: TPA Percentage
                - generic [ref=f18e182]: "-"
          - generic [ref=f18e184]:
            - generic [ref=f18e185]: Brokerage details
            - generic [ref=f18e187]:
              - generic [ref=f18e188]:
                - paragraph [ref=f18e189]: Brokerage details
                - generic [ref=f18e190]:
                  - paragraph [ref=f18e191]: Brokerage details 1
                  - generic [ref=f18e192]:
                    - generic [ref=f18e193]:
                      - generic [ref=f18e194]: IMD Code
                      - generic [ref=f18e195]: AG020227
                    - generic [ref=f18e196]:
                      - generic [ref=f18e197]: share %
                      - generic [ref=f18e198]: "100"
                    - generic [ref=f18e199]:
                      - generic [ref=f18e200]: Commission%
                      - generic [ref=f18e201]: "7.5"
              - generic [ref=f18e204]:
                - generic [ref=f18e205]: Other Loading
                - generic [ref=f18e206]: "-"
          - generic [ref=f18e208]:
            - generic [ref=f18e209]: Attachments
            - generic [ref=f18e214]:
              - img "file icon" [ref=f18e215]
              - generic [ref=f18e216]:
                - generic [ref=f18e217]: rfq
                - generic [ref=f18e218]: DX200000024712
                - img "icon-eye" [ref=f18e220] [cursor=pointer]
      - generic [ref=f18e221]:
        - generic [ref=f18e222]: Refer to UW
        - generic [ref=f18e225]:
          - generic [ref=f18e226]: "Assigned to: uwlv6nonsme_eb@insillion.com (Group Name : UWLV6 NON-SME EB)"
          - generic [ref=f18e227]:
            - text: "Reason:"
            - list [ref=f18e228]:
              - listitem [ref=f18e229]: Referral Triggered due to Total number of lives exceeds the limit for Sales,
              - listitem [ref=f18e230]: Proposal accumulation limit Rs.640000000 which exceed the Max. threshold limit of Rs.75 Cr for Sales
      - generic [ref=f18e231]:
        - generic [ref=f18e232]: Underwriter History
        - generic [ref=f18e235]:
          - generic [ref=f18e236]: Approved
          - generic [ref=f18e237]: Claimed by uwlv6nonsme_eb@insillion.com
          - generic [ref=f18e238]: Reviewed
          - generic [ref=f18e239]: Ok
          - generic [ref=f18e240]: Claimed by uwlv6nonsme_eb@insillion.com
      - button "Previous" [ref=f18e242] [cursor=pointer]
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