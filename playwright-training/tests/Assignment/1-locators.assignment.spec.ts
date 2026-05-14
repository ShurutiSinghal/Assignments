// Assignment to find all the locators for Para bank 

import{test,expect} from '@playwright/test'

test("Locators of Parabank",async({page})=>{
   
    //Launch paraback website
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    //Locator for admin Logo
    await page.locator('img[src^="images/clear"]');

    //Locator for Parabank Logo
    await page.locator("img[src*='logo']");

    //Locator for caption
    await page.getByText("Experience the difference");

    //header panel 
    await page.locator('div[style*="header-main"]');

    //3buttons:Home, About and Contact: right Menu
    await page.locator('//a[text()="home"]');
    await page.locator('//a[text()="about"]');
    await page.locator('//a[text()="contact"]');
    
    //Locators for left Menu
    //Solutions
    await page.locator('li[class="Solutions"]');

    //About us link
    await page.locator('ul[class="leftmenu"]>li>a[href="about.htm"]')

    //Services link
    await page.locator('ul[class="leftmenu"]>li>a[href="services.htm"]')

    //Products link
    await page.locator('ul[class="leftmenu"]>li>a[href*="products.jsp"]')
    
    //Locations link
    await page.locator('ul[class="leftmenu"]>li>a[href*="contacts.jsp"]')

    //Admin Page link
    await page.locator('ul[class="leftmenu"]>li>a[href*="admin"]');

    ////////////////////////////////////////////////////////////////

    //Customer Login Page
    await page.getByText("Customer Login");

    //Username: textbox
    await page.getByRole('textbox',{name:'username'});

    //Password: textbox
    await page.getByRole('textbox',{name:'password'});

    //Login button
    await page.locator("input[value='Log In']");

    // Forgot Login Info Link
    await page.locator("a[href*='lookup']");

    //Registration Link

    await page.locator("a[href*='register']");

    //////////////////////////////////////////////

    //Footer panel

    //Home
    await page.locator("//a[text()='home']");

    //About Us
    await page.locator("div[id='footerPanel']>ul>li>a[href*='about']")

    //Services
    await page.locator("div[id='footerPanel']>ul>li>a[href*='services']")

    //Products
    await page.locator("div[id='footerPanel']>ul>li>a[href*='products']")

    //Locations
    await page.locator("div[id='footerPanel']>ul>li>a[href*='contacts']")

    //Forums
    await page.locator("div[id='footerPanel']>ul>li>a[href*='forums']")

    //Site Map
    await page.locator("div[id='footerPanel']>ul>li>a[href*='sitemap']")

    //Contact Us
    await page.locator("div[id='footerPanel']>ul>li>a[href='contact.htm']")

    //Copyright
    await page.locator("p.copyright"); //tagname.classname

    //Visit us: website
    await page.locator('ul.visit>li>a[href*="www.parasoft.com"]');
    





    


});