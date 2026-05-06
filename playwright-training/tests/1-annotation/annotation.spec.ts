//test
//test.describe : Group of test

import {test,expect} from '@playwright/test'

test('independent test case',async({page:any})=>{
   console.log("Independent test case executed..");
});

//Group of test case
test.describe('Group1',()=>{

test('test1 ',async({page:any})=>{
   console.log("test1 executed ..");
});

test('test2 ',async({page:any})=>{
   console.log("test2 executed ..");
});

test('test3 ',async({page:any})=>{
   console.log("test3 executed ..");
});

});