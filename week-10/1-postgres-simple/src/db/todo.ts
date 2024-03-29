// import { client } from "..";
// /*
//  * Function should insert a new todo for this user
//  * Should return a todo object
//  * {
//  *  title: string,
//  *  description: string,
//  *  done: boolean,
//  *  id: number
//  * }
//  */
// export async function createTodo(userId: number, title: string, description: string) {
    
// }
// /*
//  * mark done as true for this specific todo.
//  * Should return a todo object
//  * {
//  *  title: string,
//  *  description: string,
//  *  done: boolean,
//  *  id: number
//  * }
//  */
// export async function updateTodo(todoId: number) {

// }

// /*
//  *  Get all the todos of a given user
//  * Should return an array of todos
//  * [{
//  *  title: string,
//  *  description: string,
//  *  done: boolean,
//  *  id: number
//  * }]
//  */
// export async function getTodos(userId: number) {

// }

// import { client } from "..";
// import { QueryResult } from "pg";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
// export async function createTodo(
//   userId: number,
//   title: string,
//   description: string
// ) {
//   const result: QueryResult<any> = await client.query(
//     "INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *",
//     [userId, title, description]
//   );

//   return result.rows[0];
// }
interface TODO {
    id: number;
    title: string;
    description: string;
    done: boolean;
    // Additional properties if present in your database schema
}
// export async function createTodo(userId: number, title: string, description: string): Promise<TODO> {
//     try {
//       const queryText = `
//           INSERT INTO todos (user_id, title, description)
//           VALUES ($1, $2, $3)
//           RETURNING *`;
//       const values = [userId, title, description];
//       const result = await client.query(queryText, values);
  
//       if (result && result.rows && result.rows.length > 0) {
//       //  const todoId = result.rows[0].id;
//         return result.rows[0] as TODO;
//       } else {
//         console.error('Error inserting todo: No rows returned');
//         throw new Error('No rows returned');
//       }
//     } catch (err) {
//       console.error('Error executing query:', err);
//       throw err;
//     }
// }



/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
// export async function updateTodo(todoId: number) {
//     const result: QueryResult<any> = await client.query('UPDATE todos SET done = true WHERE id = $1 RETURNING *', [todoId]);
//     return result.rows[0];
// }

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
// export async function getTodos(userId: number) {
//     const result: QueryResult<any> = await client.query('SELECT * FROM todos WHERE user_id = $1', [userId]);
//     return result.rows;
// }

import { client } from "..";
import { QueryResult } from "pg";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
// export async function createTodo(
//   userId: number,
//   title: string,
//   description: string
// ) {
//   const result: QueryResult<any> = await client.query(
//     "INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *",
//     [userId, title, description]
//   );

//   return result.rows[0];
// }
// export async function createTodo(userId: number, title: string, description: string) {
//   const query = "INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *";
//   const values = [userId, title, description];
//   const result = await client.query(query, values);
//   return result.rows[0];
// }
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  const query =
    "INSERT INTO todos (user_id,title,description) VALUES ($1,$2,$3) RETURNING *";
  const result = await client.query(query, [userId, title, description]);
  return result.rows[0];
}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
// export async function updateTodo(todoId: number) {
//  // await client.connect();
//   const query = 'UPDATE todos SET done = true WHERE id = $1 RETURNING *';
//   const values = [todoId];
//   const result = await client.query(query, values);
//  // await client.end();
//   return result.rows[0];
// }

export async function updateTodo(todoId: number) {
  const query = "UPDATE todos SET done=true where id=$1 RETURNING *";
  const result = await client.query(query, [todoId]);
  return result.rows[0];
}
/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
// export async function getTodos(userId: number) {
//     const result: QueryResult<any> = await client.query('SELECT * FROM todos WHERE user_id = $1', [userId]);
//     return result.rows;
// }
export async function getTodos(userId: number) {
 // await client.connect();
  const query = 'SELECT * FROM todos WHERE user_id = $1';
  const values = [userId];
  const result = await client.query(query, values);
 // await client.end();
  return result.rows;
}
// export async function getTodos(userId: number) {
//   const query =
//     "SELECT title,description,done,id FROM todos where user_id=$1 RETURNING*";
//   const result = await client.query(query, [userId]);
//   return result.rows;
// }