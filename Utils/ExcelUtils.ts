
import xlsx from 'xlsx'

export class ExcelUtils {

  static getExcelData(pathOfFile:string,nameOfFile:string){
      try {
    const wb = xlsx.readFile(pathOfFile)
    const sheet = wb.Sheets[nameOfFile]

     const Data = xlsx.utils.sheet_to_json(sheet)

     return Data
      }

      catch (error){
    console.log(error)
      }
}

   }


   const data = ExcelUtils.getExcelData("D:/Playrwright Automation/Playwright Projects/GHI/Testdata/TestData.xlsx", "GHI")

   console.log(data);
   