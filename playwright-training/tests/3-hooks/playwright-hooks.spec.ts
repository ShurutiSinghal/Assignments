//Important methods
//beforeAll
//afterAll
//beforeEach
//afterEach

import {test, expect} from '@playwright/test'

test.describe("Group1",async()=>{
 
test('test1',async({page:any})=>{
    console.log("Executing group1 test case 1...");
});

test('test2',async({page:any})=>{
    console.log("Executing  group1 test case 2..");
});

test('test3',async({page:any})=>{
    console.log("Executing  group1 test case 3..");
});

});


test.describe("Group2",async()=>{

test.beforeAll(async()=>{
    console.log("*****************Before all******************");
});

test.afterAll(async()=>{
    console.log("////////////////////After all////////////////////////");
});

test.beforeEach(async()=>{
    console.log("^^^^^^^^^^^^^^^^^^^^^Before each ^^^^^^^^^^^^^^^^^^^^^^^^^^^");
});

test.afterEach(async()=>{
    console.log("................After each.........................");
})
 
test('test1',async({page:any})=>{
    console.log("Executing  group2 test case 1...");
});

test('test2',async({page:any})=>{
    console.log("Executing  group2 test case 2..");
});

test('test3',async({page:any})=>{
    console.log("Executing  group2 test case 3..");
});

});

