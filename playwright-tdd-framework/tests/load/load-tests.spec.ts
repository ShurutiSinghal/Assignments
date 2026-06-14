import {test,expect} from '@playwright/test'
import { JMeterCommons } from '../../commons/jmeter/jmeter-commons.js'

test.describe("JMeter load test for GIT",()=>{
    let jMeter:  JMeterCommons;

    test.beforeEach(()=>{
        jMeter= new JMeterCommons();
    })

    test("Run GIT JMeter test for 100 users",async()=>{
        test.setTimeout(300000);
        const testPlan= 'LoadTest.jmx';
        await jMeter.runJMeterTestPlan(testPlan);
    })

})