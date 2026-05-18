import{test,expect} from '@playwright/test'

test("Demo QA practise form",async({page})=>{
//  1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)

await page.goto("https://demoqa.com/automation-practice-form");

// 2. Wait for Page-load
const regForm= await page.locator('//h5[text()="Student Registration Form"]');
await expect(regForm).toBeVisible();

// 3. Enter First name and Last name
const firstName= page.locator('input[id="firstName"]');
await firstName.fill("Rohit");

const lastName= page.locator('input#lastName');
await lastName.fill("Singhal");

// 4. Enter Email
const email= page.locator('input#userEmail');
await email.fill("rohit@gmail.com")

// 5. Select Gender (Male)
await selectGender(page,"Male");

// 6. Enter mobile number
const mobileNo = page.locator('input#userNumber');
await mobileNo.fill("9875589001");

// 7.Select DOB (1-Feb-1991)
await selectdob(page,"1","February","1990");

// 8.Search and Select Computer Science and English
const subject:string[]=['Computer Science','English'];
await selectSubject(page,subject);

// 9.Select Hobbies as Sports and Reading
const hobbies:string[]=["Sports","Reading"]
await selectHobbies(page,hobbies);

// 10.Upload photo
const uploadInput= await page.locator("input#uploadPicture");
const filePath= "myphoto.png";
await uploadInput.setInputFiles(filePath);

// 11.Submit Details
const submitButton= await page.locator("button#submit");
await submitButton.click();

})

async function selectGender(page:any, gender:string) {
    const genderMode= await page.locator(`input[value="${gender}"]`);
    await genderMode.check();
    console.log(`Selected gender: ${gender}`)
    
}

//Function to enter dob
async function selectdob(page:any, date:string,month:string,year:string) {
    const dobInput= await page.locator("input#dateOfBirthInput");
    await dobInput.click();

    //select month
     const monthDropDown= await page.locator('select.react-datepicker__month-select');
     await monthDropDown.selectOption({label:month});

     //select year
     const yearDropDown= await page.locator('select.react-datepicker__year-select')
     await yearDropDown.selectOption({label:year});

     //select Date
     const dateSelect= await page.locator(`//div[contains(@aria-label,"${month}") and text()="${date}"]`);
     await dateSelect.click();
     
    
}

async function selectSubject(page:any,subject:string[]) {
    const subjectInput= await page.locator('div[class*= subjects-auto-complete__input-container]');
    await subjectInput.click();

    const subjectInputInternal = await page.locator("input#subjectsInput");
    for(const sub of subject)
    {
        await subjectInputInternal.fill(sub);
        await subjectInputInternal.press('Enter');
    }
    
}

async function selectHobbies(page:any, hobbies:string[]) {
    
    for(const hobby of hobbies)
    {
        const hobbyLocator= await page.locator(`//label[text()='${hobby}']`);
        await hobbyLocator.click();
    }
}