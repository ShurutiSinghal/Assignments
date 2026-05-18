// Assignment - 1

import{test,expect} from '@playwright/test'

test("Test case for Para bank",async({page})=>{

// 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)

await page.goto("https://parabank.parasoft.com/parabank/index.htm");

// 2.verify application logo is displayed
  
const applicationLogo= await page.locator('img[src*="logo"]');
await expect(applicationLogo).toBeVisible();
console.log(`Para bank logo is displayed..`);

// 3.Verify application caption displayed as "Experience the difference"

const applicationCaption=page.locator('p.caption');
await expect(applicationCaption).toHaveText("Experience the difference");
console.log("Para bank caption is matching the expected value");

// 4.Enter invalid username
const username= page.locator('input[name="username"]');
await username.fill('FakeUser');

// 5.Enter empty Password
const password= page.locator('input[name="password"]')
await password.fill('');

// 6.Click on login button

const loginBtn= page.locator('input[value="Log In"]');
await loginBtn.click();

// 7.Verify the error message "Please enter a username and password."
const errorMessage= page.locator('p.error');
await expect(errorMessage).toHaveText('Please enter a username and password.');
console.log("Error message is displayed and matching the expected output")

// 8.Click on admin page link
//const adminPageLink=page.locator('ul[class="leftmenu"]>li>a[href*="admin"]');
const adminPageLink= page.locator('//a[text()="Admin Page"]')
await adminPageLink.click();

// 9.select the option "soap" from dba mode radio button
// const soapradioBtn= page.locator('input[value="soap"]');
// //check it is enable
// await expect(soapradioBtn).toBeEnabled();
// //check it
// await soapradioBtn.check();
// //Verify 
// await expect(soapradioBtn).toBeChecked();
await selectDBModeRadio(page,"soap");

// 10.Scroll to element dropdown
// dropdown for LoanProvider
 const loanProviderDropDown= page.locator('select#loanProvider');
 await loanProviderDropDown.scrollIntoViewIfNeeded();
 

// 11.Select the option web service from the dropdown
//select Web Service
 await loanProviderDropDown.selectOption({label:'Web Service'});
 //verify
//  const selectedOption= await loanProviderDropDown.inputValue();
//  await expect(selectedOption).toBe('ws');

// 12.click on submit button
const submitButton= await page.locator('input[value="Submit"]');
await submitButton.click();

// 13.verify submission is successful by validating success message
const successLocator= page.locator('div[id="rightPanel"]>p');
await expect(successLocator).toBeVisible();
await expect(successLocator).toHaveText("Settings saved successfully.");
console.log("Setting saved successfully");

// 14.Click on services page link
const servicePageLink= page.locator('//ul[@class="leftmenu"]//a[text()="Services"]');
await servicePageLink.click();
console.log("Service link opened");

// 15.wait for service page
// You can find any element
const bookServicePage= page.locator('//span[text()="Bookstore services:"]');
await expect(bookServicePage).toBeVisible();

// 16.Scroll down till bookstore services table
await bookServicePage.scrollIntoViewIfNeeded();

// 17.get total rows of books store services table
const rows= page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr')
const rowCount= await rows.count();
console.log(`Total rows: ${rowCount}`);

// 18.get total columns of books store services table
const column= page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[1]//td');
const colCount= await column.count();
console.log(`Total rows: ${colCount}`);

// 19.Print table data (row wise and column wise data)
for(let i=1;i<=rowCount;i++)
{
    for(let j=1;j<=colCount;j++)
    {
        const cell= await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[${i}]//td[${j}]`);
        const cellData= await cell.textContent();
        console.log(`Row ${i}  Colummn ${j} : ${cellData}`)
    }
}

});

async function selectDBModeRadio(page:any,mode:string) {
    const accessMode= await page.locator(`input[value="${mode}"]`);
    await accessMode.check();
    console.log(`Selected mode for db is: ${mode}`);
    
}