import { Client } from 'pg';
import config from '../../config/config.json' with {type: 'json'};

export class DBCommons {

    async getData(Query:string):Promise<Any>
    {
        //Create client instance
        const dbConfig= new Client({
            host: config.db.host,
            port: config.db.port,
            user:config.db.username,
            password: config.db.password,
            database:config.db.database

        })

        //Connect to databse
        await dbConfig.connect();

        //Exceute the Query and getData
        const data= await dbConfig.query(Query);

        //Close connection
        await dbConfig.end();

        return data.rows; //return array of object

    }

}

let db= new DBCommons();
// const query="select content from creatio where tc_name='Verify Cookies popup content'";
// const data= await db.getData(query);
// console.log(data);

const query="select * from creatio where tc_name='Verify Cookies popup content'";
const data= await db.getData(query);
// To get the value on in content
//1st way
// const content = data[0].content;
// console.log(content);

//2nd way
console.log(data[0]["content"]);