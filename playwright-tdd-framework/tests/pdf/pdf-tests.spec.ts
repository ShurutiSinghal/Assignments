import { test } from "@playwright/test";
import { PDFAssertions } from "../../commons/pdf/pdf-commons.js"

test("Validate PDF content", async () => {

    const filePath = "./files/Data.pdf";
    await PDFAssertions.expectPDFToContain(filePath,"DAV PUBLIC SCHOOL , DVC ,MTPS");
});