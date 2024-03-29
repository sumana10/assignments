/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

// class Todo {
//   constructor() {
//     this.todos = [];
//   }
//   add(todo){
//      this.todos.push(todo);
//   }
//   remove(indexOfTodo){
//      if(indexOfTodo>this.todos.length)return
//      this.todos.splice(indexOfTodo,1);
//    }
//   update(index, updatedTodo){
//      if (index >= this.todos.length) return
//      this.todos[index]=updatedTodo;
//    }
//    getAll(){
//      return this.todos;
//    }
//    get(indexOfTodo){
//      if(indexOfTodo>=this.todos.length)return null;
//      return this.todos[indexOfTodo];
//    }
//    clear(){
//      this.todos=[];
//    }
//  }
 
 
 

class Todo {
  constructor() {
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
  }
  remove(indexOfTodo) {
    if (this.todoList.length == 0) {
    //  throw new Error('todo list is empty');
    return
    }

    if (indexOfTodo >= this.todoList.length || indexOfTodo < 0) {
     // throw new Error('wrong index');
     return
    }

    this.todoList.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if (index >= this.todoList.length || index < 0) {
    //  throw new Error('wrong index');
    return
    }
    this.todoList[index] = updatedTodo;
  }
  getAll() {
    
    return this.todoList;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= this.todoList.length || indexOfTodo < 0) {
      return null;
    }
    return this.todoList[indexOfTodo];
  }
  clear() {
    this.todoList = [];
  }
}




module.exports = Todo;