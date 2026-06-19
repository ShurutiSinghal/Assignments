import {exec} from 'child_process';

export class JMeterCommons
{
    //Run command line

    private runCommandLine(command:string):Promise<String>{
        return new Promise((resolve,reject)=>{
            exec(command,(error,stdout,stderr)=>{
                if(error)
                {
                    reject(`Error:${error.message}`);
                }
                else{
                    resolve(stdout);
                }
                console.log(`Command: ${command} executed successfully `);
            });
        });
    }

    //Run Jmeter test plan
    async runJMeterTestPlan(testPlanPath:string):Promise<void>{
        console.log(`Running JMeter test plan :${testPlanPath}`)

        const projectPath= process.cwd();
        const jMeterBasePath= `${projectPath}/step-definitions/load/jmeter`;
        const jMeterToolPath= `${jMeterBasePath}/bin/jmeter.bat`;
        const testPlanFullPath = `${jMeterBasePath}/testplans/${testPlanPath}`;

        console.log(`Generating results and reports for JMETER test plan: ${testPlanPath}`);

        const resultPath= `${jMeterBasePath}/results/TestResults.csv`;
        const reportPath= `${jMeterBasePath}/report-output`;

        //Run the test plan and generate results

        //Creating csv file for result : View result tree
        const command= `"${jMeterToolPath}" -n -t "${testPlanFullPath}" -l "${resultPath}"`

        //Creating report from result
        const reportCommand= `"${jMeterToolPath}" -g "${resultPath}" -o "${reportPath}"`

        await this.runCommandLine(command);
        await this.runCommandLine(reportCommand);
        console.log(`JMeter Test Plan: ${testPlanFullPath} executed successfully. Results sa    ved to: ${resultPath} and report generated at: ${reportPath}`);
    }


        

}

