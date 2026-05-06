//test.only()
//test.skip()
//test.fail()
//test.slow()
//test.fixme()


import {test,expect} from '@playwright/test'

//only this test case is executed
// test.only('test1 ',async({page:any})=>{
//    console.log("test1 executed ..");
// });

//Now this test is skipped and rest 2 are running
// test.skip('test1 ',async({page:any})=>{
//    console.log("test1 executed ..");
// });

// this test fails
// test('test1 ',async({page:any})=>{
//    console.log("test1 executed ..");
//    expect(1).toBe(0); // it will fail 
// });

// Now we know it will fail so instead of fail it skipped
// test.fixme('test1 ',async({page:any})=>{
//    console.log("test1 executed ..");
//    expect(1).toBe(0); // it will fail 
// });

// Now its successful as it a failed test
// test.fail('test1 ',async({page:any})=>{
//    console.log("test1 executed ..");
//    expect(1).toBe(0); // it will fail 
// });

//Now its should fail, but since it pass , that why a failed test
//Not working as per expectations

// test.fail('test1 ',async({page:any})=>{
//    console.log("test1 executed ..");
//    expect(1).toBe(1); // it will pass
// });

//This test fails after 35 sec delay as it waits for 30 sec only
//promise is taking 35 sec

// test('test1 ',async({page:any})=>{
//    console.log("test1 executed ..");
//    expect(1).toBe(1); 
//    await new Promise(resolve=>setTimeout(resolve,35000));
// });

test('test1 ',async({page:any})=>{
    test.slow(); // will wait for 3X times means 90 sec now
   console.log("test1 executed ..");
   expect(1).toBe(1); 
   await new Promise(resolve=>setTimeout(resolve,35000));
   console.log("Test executed after 35 sec delay..")
});



test('test2 ',async({page:any})=>{
   console.log("test2 executed ..");
});

test('test3 ',async({page:any})=>{
   console.log("test3 executed ..");
});
