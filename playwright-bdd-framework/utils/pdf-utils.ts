import fs from "fs";
import * as pdfModule from "pdf-parse-new";

export class PDFUtil {
    static async readPDF(filepath: string): Promise<string> {

        // Check file exists
        if (!fs.existsSync(filepath)) {
            throw new Error(`File does not exist at path: ${filepath}`);
        }

        //Reading file
        //Reads PDF file from disk
         //Converts it into a Buffer (binary data)
        const buffer = fs.readFileSync(filepath);

        // extract actual function from module
        const pdfParse = (pdfModule as any).default;

        // if (typeof pdfParse !== "function") {
        //     throw new Error("pdf-parse-new default export is not a function");
        // }

        const data = await pdfParse(buffer);

        return data.text;
    }
}

// let data= await PDFUtil.readPDF("./files/Data.pdf");
// console.log(data);