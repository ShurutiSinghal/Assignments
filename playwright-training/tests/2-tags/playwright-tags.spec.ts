import {test, expect} from '@playwright/test'

test('test1',{tag:'@regression'},async({page:any})=>{
    console.log("Executing test case 1...");
});

test('test2',{tag:'@sanity'},async({page:any})=>{
    console.log("Executing test case 2..");
});

test('test3',{tag:'@smoke,@sanity'},async({page:any})=>{
    console.log("Executing test case 3..");
});


test('test4',{tag:['@regression','@smoke']},async({page:any})=>{
    console.log("Executing test case 4..");
});