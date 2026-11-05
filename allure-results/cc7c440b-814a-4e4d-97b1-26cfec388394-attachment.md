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
- generic [ref=f12e3]:
  - generic [ref=f12e5]:
    - img "Logo" [ref=f12e7]
    - generic [ref=f12e9]:
      - button [ref=f12e10] [cursor=pointer]:
        - img "Dashboard" [ref=f12e11]
      - button [ref=f12e12] [cursor=pointer]:
        - img "User Management" [ref=f12e13]
      - button [ref=f12e14] [cursor=pointer]:
        - img "Quick Links" [ref=f12e15]
      - button [ref=f12e16] [cursor=pointer]:
        - img "QMS" [ref=f12e17]
      - button [ref=f12e18] [cursor=pointer]:
        - img "Support Hub" [ref=f12e19]
    - button [ref=f12e20] [cursor=pointer]:
      - img "Toggle Menu" [ref=f12e21]
  - generic [ref=f12e22]:
    - navigation [ref=f12e24]:
      - generic [ref=f12e25]:
        - button [ref=f12e26] [cursor=pointer]:
          - img "Search" [ref=f12e27]
        - generic [ref=f12e28] [cursor=pointer]:
          - img "User Avatar" [ref=f12e29]
          - generic [ref=f12e30]: uwlv six nonsme eb
          - img "Dropdown" [ref=f12e31]
    - generic [ref=f12e35]:
      - generic [ref=f12e36]:
        - navigation [ref=f12e38]:
          - generic [ref=f12e39]: Dashboard >
          - generic [ref=f12e40]: Employee Benefits >
          - generic [ref=f12e41]: Policy Summary
        - generic [ref=f12e42]:
          - button [ref=f12e43] [cursor=pointer]:
            - img "Back" [ref=f12e44]
          - text: Group Personal Accident
        - generic [ref=f12e45]:
          - generic [ref=f12e46]:
            - generic [ref=f12e47]: "Quote Summary | Quotation ID: Q200000017826"
            - img "icon-download" [ref=f12e50] [cursor=pointer]
          - generic [ref=f12e52]:
            - generic [ref=f12e53]: Policy Details
            - generic [ref=f12e55]:
              - generic [ref=f12e57]:
                - generic [ref=f12e58]:
                  - generic [ref=f12e59]: Business Type
                  - generic [ref=f12e60]: New Business
                - generic [ref=f12e61]:
                  - generic [ref=f12e62]: Lead Id
                  - generic [ref=f12e63]: "-"
                - generic [ref=f12e64]:
                  - generic [ref=f12e65]: Agent Code
                  - generic [ref=f12e66]: AG020227
                - generic [ref=f12e67]:
                  - generic [ref=f12e68]: Agent Name
                  - generic [ref=f12e69]: AG020227_FULL_NAME
                - generic [ref=f12e70]:
                  - generic [ref=f12e71]: Originating Location
                  - generic [ref=f12e72]: Chennai Regional Office - C0
                - generic [ref=f12e73]:
                  - generic [ref=f12e74]: Channel
                  - generic [ref=f12e75]: AAR
                - generic [ref=f12e76]:
                  - generic [ref=f12e77]: Proposition Name
                  - generic [ref=f12e78]: Product
                - generic [ref=f12e79]:
                  - generic [ref=f12e80]: Full Name of Company to be Insured
                  - generic [ref=f12e81]: Monika
                - generic [ref=f12e82]:
                  - generic [ref=f12e83]: Insured Email ID
                  - generic [ref=f12e84]: "-"
                - generic [ref=f12e85]:
                  - generic [ref=f12e86]: Insured Mobile Number
                  - generic [ref=f12e87]: "-"
                - generic [ref=f12e88]:
                  - generic [ref=f12e89]: Group type
                  - generic [ref=f12e90]: Employer-Employee
                - generic [ref=f12e91]:
                  - generic [ref=f12e92]: Industry/sector classification
                  - generic [ref=f12e93]: Information Technology
                - generic [ref=f12e94]:
                  - generic [ref=f12e95]: Occupation master
                  - generic [ref=f12e96]: Housewives
                - generic [ref=f12e97]:
                  - generic [ref=f12e98]: Breif Description
                  - generic [ref=f12e99]: "-"
                - generic [ref=f12e100]:
                  - generic [ref=f12e101]: Proposal Basis
                  - generic [ref=f12e102]: Named Policy
                - generic [ref=f12e103]:
                  - generic [ref=f12e104]: Employee Type
                  - generic [ref=f12e105]: Contractual / Off-Roll
                - generic [ref=f12e106]:
                  - generic [ref=f12e107]: Policy Start Date
                  - generic [ref=f12e108]: 20/10/2026
                - generic [ref=f12e109]:
                  - generic [ref=f12e110]: Policy End Date
                  - generic [ref=f12e111]: 19/10/2027
                - generic [ref=f12e112]:
                  - generic [ref=f12e113]: Tenure Type
                  - generic [ref=f12e114]: Annualized
                - generic [ref=f12e115]:
                  - generic [ref=f12e116]: Sum Insured Type
                  - generic [ref=f12e117]: Flat Sum Insured for All
                - generic [ref=f12e118]:
                  - generic [ref=f12e119]: Multiplier on CTC
                  - generic [ref=f12e120]: "-"
                - generic [ref=f12e121]:
                  - generic [ref=f12e122]: Highest Individual Sum Insured
                  - generic [ref=f12e123]: "2000000"
                - generic [ref=f12e124]:
                  - generic [ref=f12e125]: Accumulation Limit
                  - generic [ref=f12e126]: "640000000"
              - generic [ref=f12e127]:
                - paragraph [ref=f12e128]: Members Details
                - generic [ref=f12e129]:
                  - generic [ref=f12e130]:
                    - generic [ref=f12e131]: Total Members
                    - generic [ref=f12e132]: "1600"
                  - generic [ref=f12e133]:
                    - generic [ref=f12e134]: Total Sum Insured
                    - generic [ref=f12e135]: "3200000000"
                  - generic [ref=f12e136]:
                    - generic [ref=f12e137]: Total PA SI
                    - generic [ref=f12e138]: "3200000000"
                  - generic [ref=f12e139]:
                    - generic [ref=f12e140]: Total Premium
                    - generic [ref=f12e141]: "792960"
          - generic [ref=f12e143]:
            - generic [ref=f12e144]: Coverage/Benefits
            - generic [ref=f12e148]:
              - generic [ref=f12e149]:
                - generic [ref=f12e150]: Coverage Type
                - generic [ref=f12e151]: 24 Hrs
              - generic [ref=f12e152]:
                - generic [ref=f12e153]: Death Benefit
                - generic [ref=f12e154]: 100%
              - generic [ref=f12e155]:
                - generic [ref=f12e156]: PTD (Permanent Total Disablement)
                - generic [ref=f12e157]: "-"
              - generic [ref=f12e158]:
                - generic [ref=f12e159]: Loss of Limbs/eyes
                - generic [ref=f12e160]: "-"
              - generic [ref=f12e161]:
                - generic [ref=f12e162]: PPD (Permanent Partial Disablement)
                - generic [ref=f12e163]: "No"
              - generic [ref=f12e164]:
                - generic [ref=f12e165]: TTD (Temporary Total Disablement)
                - generic [ref=f12e166]: "No"
              - generic [ref=f12e167]:
                - generic [ref=f12e168]: Weeks
                - generic [ref=f12e169]: "-"
          - generic [ref=f12e171]:
            - generic [ref=f12e172]: TPA Details
            - generic [ref=f12e176]:
              - generic [ref=f12e177]:
                - generic [ref=f12e178]: TPA Name
                - generic [ref=f12e179]: NON-TPA
              - generic [ref=f12e180]:
                - generic [ref=f12e181]: TPA Percentage
                - generic [ref=f12e182]: "-"
          - generic [ref=f12e184]:
            - generic [ref=f12e185]: Brokerage details
            - generic [ref=f12e187]:
              - generic [ref=f12e188]:
                - paragraph [ref=f12e189]: Brokerage details
                - generic [ref=f12e190]:
                  - paragraph [ref=f12e191]: Brokerage details 1
                  - generic [ref=f12e192]:
                    - generic [ref=f12e193]:
                      - generic [ref=f12e194]: IMD Code
                      - generic [ref=f12e195]: AG020227
                    - generic [ref=f12e196]:
                      - generic [ref=f12e197]: share %
                      - generic [ref=f12e198]: "100"
                    - generic [ref=f12e199]:
                      - generic [ref=f12e200]: Commission%
                      - generic [ref=f12e201]: "7.5"
              - generic [ref=f12e204]:
                - generic [ref=f12e205]: Other Loading
                - generic [ref=f12e206]: "-"
          - generic [ref=f12e208]:
            - generic [ref=f12e209]: Attachments
            - generic [ref=f12e214]:
              - img "file icon" [ref=f12e215]
              - generic [ref=f12e216]:
                - generic [ref=f12e217]: rfq
                - generic [ref=f12e218]: DX200000024743
                - img "icon-eye" [ref=f12e220] [cursor=pointer]
      - generic [ref=f12e222]:
        - generic [ref=f12e223]: "Total Premium: ₹ 7,92,960"
        - generic [ref=f12e226]:
          - generic [ref=f12e227]: Total Premium Breakup
          - generic [ref=f12e228]:
            - generic [ref=f12e229]: Net Premium
            - generic [ref=f12e230]: ₹ 6,72,000
          - generic [ref=f12e231]:
            - generic [ref=f12e232]: Premium+ TPA Fees
            - generic [ref=f12e233]: ₹ 6,72,000
          - generic [ref=f12e234]:
            - generic [ref=f12e235]: GST
            - generic [ref=f12e236]: ₹ 1,20,960
          - generic [ref=f12e237]:
            - generic [ref=f12e238]: Gross Premium
            - generic [ref=f12e239]: ₹ 7,92,960
      - generic [ref=f12e240]:
        - generic [ref=f12e241]: Refer to UW
        - generic [ref=f12e244]:
          - generic [ref=f12e245]: "Assigned to: G000000000200 (Group Name : UWLV5A NON-SME EB)"
          - generic [ref=f12e246]:
            - text: "Reason:"
            - list [ref=f12e247]:
              - listitem [ref=f12e248]: Referral Triggered due to Total number of lives exceeds the limit for Sales,
              - listitem [ref=f12e249]: Proposal accumulation limit Rs.640000000 which exceed the Max. threshold limit of Rs.75 Cr for Sales
      - generic [ref=f12e250]:
        - generic [ref=f12e251]: Underwriter History
        - generic [ref=f12e254]:
          - generic [ref=f12e255]: Reviewed
          - generic [ref=f12e256]: Ok
          - generic [ref=f12e257]: Claimed by uwlv6nonsme_eb@insillion.com
      - generic [ref=f12e261]:
        - generic [ref=f12e262] [cursor=pointer]: Reassign to UW
        - generic [ref=f12e268]:
          - generic [ref=f12e269]:
            - generic [ref=f12e272]:
              - generic [ref=f12e273]: Reassign To Type *
              - generic [ref=f12e276]:
                - generic [ref=f12e278]:
                  - generic [ref=f12e279]: Email
                  - combobox [disabled] [ref=f12e281] [cursor=pointer]
                - status [ref=f12e282]
            - generic [ref=f12e285]:
              - generic [ref=f12e286]: Reassign To *
              - textbox "Select an option" [disabled] [ref=f12e289]: uwlv6nonsme_eb@insillion.com
          - button "Submit" [active] [ref=f12e295] [cursor=pointer]
      - button "Previous" [ref=f12e298] [cursor=pointer]
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