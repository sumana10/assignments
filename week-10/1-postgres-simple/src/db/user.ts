// import { client } from "..";

// /*
//  * Should insert into the users table
//  * Should return the User object
//  * {
//  *   username: string,
//  *   password: string,
//  *   name: string
//  * }
//  */
// export async function createUser(username: string, password: string, name: string) {
    
// }

// /*
//  * Should return the User object
//  * {
//  *   username: string,
//  *   password: string,
//  *   name: string
//  * }
//  */
// export async function getUser(userId: number) {
    
// }

import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
// export async function createUser(username: string, password: string, name: string) {
//     const result = await client.query('INSERT INTO users (username, password, name) VALUES ($1, $2, $3)', [username, password, name]);
//     return result;
// }
// export async function createUser(username: string, password: string, name: string) {
//     const query = 'INSERT INTO users (username, password, name) VALUES ($1, $2, $3)';
//     const values = [username, password, name];
//     await client.query(query, values);
// }

export async function createUser(
    username: string,
    password: string,
    name: string
  ) {
    const query = "INSERT INTO users (username,password,name) VALUES ($1,$2,$3)";
    const result = await client.query(query, [username, password, name]);
  }
/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
// export async function getUser(userId: number) {
//     const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
//     return result.rows[0];

export async function getUser(userId: number) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [userId];
    const result = await client.query(query, values);
    console.log(result.rows[0])
    return result.rows[0];
}

// export async function getUser(userId: number) {
//     const query = "SELECT username,password,name FROM users where id=$1";
//     const result = await client.query(query, [userId]);
//     return result.rows[0];
//   }