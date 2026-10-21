
import xlsx from 'xlsx'

export class ExcelUtils {

  static getExcelData(pathOfFile:string,nameOfFile:string){
      try {
    const wb = xlsx.readFile(pathOfFile)
    const sheet = wb.Sheets[nameOfFile]

     const Data = xlsx.utils.sheet_to_json(sheet)
     return Data;

      }

      catch (error){
    console.log(error)
      }
}

static writeQuoteID(path: string, sheetName: string, rowNumber:number, quoteID: string) {
    const wb = xlsx.readFile(path);
    const sheet = wb.Sheets[sheetName];

    // Column D = QuoteID
    const cell = 'E' + rowNumber;

    // Write Quote ID
    sheet[cell] = { t: 's', v: quoteID };

    // Save Excel file
    xlsx.writeFile(wb, path);
}


   static writeTestResult(path:string, sheetName:string, rowNumber:number, TestResult:string ){
          const wb = xlsx.readFile(path)
          const sheet = wb.Sheets[sheetName]

          const cell = 'C' + rowNumber
          sheet[cell] = {t:'s', v: TestResult}
          xlsx.writeFile(wb,path)

   }

    static writeErrorMessage(path:string, sheetName:string, rowNumber:number, ErrorMessage:string ){
          const wb = xlsx.readFile(path)
          const sheet = wb.Sheets[sheetName]

          const cell = 'D' + rowNumber
          sheet[cell] = {t:'s', v: ErrorMessage}
          xlsx.writeFile(wb,path)

   }





   }


   