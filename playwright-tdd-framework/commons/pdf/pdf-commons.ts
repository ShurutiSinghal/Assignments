import { expect } from "@playwright/test";
import { PDFUtil } from "../../utils/pdf-utils.js";

export class PDFAssertions {

    static async expectPDFToContain(filepath: string,expectedText: string) {
        const pdfText = await PDFUtil.readPDF(filepath);
        expect(pdfText).toContain(expectedText);
    }

    static async expectPDFNotToContain(filepath: string,unexpectedText: string) {
        const pdfText = await PDFUtil.readPDF(filepath);
        expect(pdfText).not.toContain(unexpectedText);
    }
}