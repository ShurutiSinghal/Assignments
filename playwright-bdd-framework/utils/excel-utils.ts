import fs from "fs"
import xlxs from "xlsx"

export class ExcelUtil{

    static readExcel(filePath:string,sheetName:string):any{

        //check file exists
        if(!fs.existsSync(filePath))
            throw new Error(`File does not exists at path:${filePath}`)

        //Read workbook
        const workbook=xlxs.readFile(filePath)

        //Get sheet
        const sheet= workbook.Sheets[sheetName]

        //check sheet
        if(!sheet)
              throw new Error(`Sheet: ${sheetName} does not exists in workbook`)

       //read excel data and convert to json
       return xlxs.utils.sheet_to_json(sheet);
            
    }
}

let data= ExcelUtil.readExcel("./files/MyData.xlsx","Sheet1");
console.log(data);