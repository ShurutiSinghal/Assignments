import{test,expect} from "@playwright/test"

test("Alert validation for DemoQA",async({page})=>{

// 1. Enter URL and Launch the application (https://demoqa.com/alerts)
await page.goto("https://demoqa.com/alerts");

// 2. Locate Alert buttons to trigger the alerts
const infoAlert= await page.locator("button#alertButton");
const confirmAlert= await page.locator("button#confirmButton");
const promptAlert= await page.locator("button#promtButton");

// 3. Click on the information alert and copy the alert message and then select OK button
page.once('dialog',async dialog=>{
   //Print message
   console.log(await dialog.message());
   //Click OK
   await dialog.accept();

});
await infoAlert.click();

// 4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.
page.once('dialog',async dialog=>{
   //Print message
   console.log(await dialog.message());
   //Click OK
   await dialog.dismiss();

});
await confirmAlert.click();

// 5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.
page.once('dialog',async dialog=>{
   //Print message
   console.log(await dialog.message());
   //Click OK
   await dialog.accept("Playwright");

});
await promptAlert.click();

});