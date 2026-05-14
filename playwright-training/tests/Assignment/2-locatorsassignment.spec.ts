// Assignment - 1

import{test,expect} from '@playwright/test'

test("Test case for Para bank",async({page})=>{

// 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)

await page.goto("https://parabank.parasoft.com/parabank/index.htm");

// 2.verify application logo is displayed
  
const applicationLogo=page.locator('img[src*="logo"]');
await expect(applicationLogo).toBeVisible();


// 3.Verify application caption displayed as "Experience the difference"

const applicationCaption=page.locator('p.caption');
const expectedText="Experience the difference";
const actualText= await applicationCaption.textContent();
await expect(actualText).toBe(expectedText);
await expect(applicationLogo).toBeVisible();

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
await expect(errorMessage).toBeVisible();
const errorText= await errorMessage.textContent();
await expect(errorText).toBe('Please enter a username and password.');

// 8.Click on admin page link
const adminPageLink=page.locator('ul[class="leftmenu"]>li>a[href*="admin"]');
await adminPageLink.click();

// 9.select the option "soap" from dba mode radio button
const soapradioBtn= page.locator('input[value="soap"]');
//check it is enable
await expect(soapradioBtn).toBeEnabled();
//check it
await soapradioBtn.check();
//Verify 
await expect(soapradioBtn).toBeChecked();

// 10.Scroll to element dropdown
// dropdown for LoanProvider
 const loanProviderDropDown= page.locator('select#loanProvider');
 await loanProviderDropDown.scrollIntoViewIfNeeded();
 

// 11.Select the option web service from the dropdown
//select Web Service
 await loanProviderDropDown.selectOption({label:'Web Service'});
 //verify
 const selectedOption= await loanProviderDropDown.inputValue();
 await expect(selectedOption).toBe('ws');

// 12.click on submit button
const submitButton= page.locator('input[value="submit"]');
await submitButton.click();

// 13.verify submission is successful by validating success message
const successLocator= page.locator('div[id="rightPanel"]>p');
await expect(successLocator).toContainText("Settings saved successfully.");

// 14.Click on services page link
const servicePageLink= page.locator('a[href*="services.htm"]');
await servicePageLink.click();

// 15.wait for service page


// 16.Scroll down till bookstore services table
const bookStoreTable = page.locator('div[id="rightPanel"]>table');
await bookStoreTable.scrollIntoViewIfNeeded();


// 17.get total rows of books store services table
const rows = bookStoreTable.locator('tr');
const rowCount= await rows.count();
console.log("Total Rows:", rowCount);

// 18.get total columns of books store services table


// 19.Print table data (row wise and column wise data)


});

