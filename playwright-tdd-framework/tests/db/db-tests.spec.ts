import { test} from '@playwright/test';
import { LoginPageSteps } from '../../page-objects/page-steps/login-page-steps.js';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps.js';
import { CookiesPageSteps } from '../../page-objects/page-steps/cookie-page-steps.js';
import dbdata from '../../testdata/db/db.json' with {type:"json"}
import { DBCommons } from '../../commons/db/db-commons.js';

let loginPage: LoginPageSteps;
let homePage: HomePageSteps;
let cookiesPage: CookiesPageSteps;


test.describe('Application UI Tests', () => {

    //Initialize the page objects before each and every test case and lauch the application
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPageSteps(page);
        homePage = new HomePageSteps(page);
        cookiesPage = new CookiesPageSteps(page);
         await loginPage.launchtheApplication();
    });

    //Test Case 1: Verify Cookies popup is displayed. 
    test('Verify Cookies popup is displayed', async () => {
        await cookiesPage.verifyCookiesPopupIsDisplayed();
    })

    //Test Case 2: Verify Cookies popup content from DB
    test('Verify Cookies popup content', async () => {
        // const query  = dbdata["Verify Cookies popup content"];
        // console.log(query);
         const data= await new DBCommons().getData(dbdata["Verify Cookies popup content"]);
        //  const data= await new DBCommons().getData(query);
       await cookiesPage.verifyCookiesPopupIsDisplayed();
       //console.log(data[0]["content"]);
       await cookiesPage.verifyCookiesPopupContent(data[0]["content"]);
    })

     //Test Case : Verify login functionality with valid credentials. from database
    test('Verify login with valid credentials', async () => {
        const query= dbdata["Verify login with valid credentials"];
        console.log(query);
         const data= await new DBCommons().getData(dbdata["Verify login with valid credentials"]);
        await cookiesPage.verifyCookiesPopupIsDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnSelectionButton(data[0]["button"]);
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterBusinessEmailAndPassword(data[0]["username"], data[0]["password"]);
        await loginPage.clickOnLoginButton();
        await homePage.verifyHomePageLaunched();
    })  



})