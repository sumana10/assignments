const pg = require('pg')
require('dotenv').config();
const client = new pg.Client({
    connectionString: process.env.POSTGRE_URL
})
console.log(process.env.POSTGRE_URL)

async function createTable(){
    try {
        await client.connect();
        const res = await client.query(`
            CREATE TABLE users(
                id SERIAL PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                email VARCHAR(50) NOT NULL UNIQUE,
                password VARCHAR(50) NOT NULL
            )
        `)
        console.log('Table is Created');
    } catch (err) {
        console.log(err)
    }
}

async function insertData(name ,email ,password ){
    try {
       await client.connect();
       const data = "INSERT INTO users (name,email,password) VALUES ($1,$2,$3)";
       const values = [name,email,password];
       const res = await client.query(data,values);
       console.log('Data is Inserted');
    } catch (err) {
        console.log(err)
    }finally{
        await client.end();
    }
}
module.exports = insertData;