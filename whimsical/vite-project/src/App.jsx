 import React, { useState, useMemo, useEffect } from 'react'
 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import axios from 'axios';




// const List = props => {
//   const SubList = (number) => <p key={number}>{number}</p>;

//   return (
//     props.numbers.map(SubList)); 
// };
// //whenever there is a change in parent state it will rerender child but it's rendering 
// //only the changes
// function App() {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

//   return (
//     <>
//       <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
//         Plus one
//       </button>
//       <List numbers={numbers} />
//     </>
//   );
// }

//const SubList = React.memo((number, key) => <p key={number}>{number}</p>);
// const List = (props) => {
//   const SubList = (number) => <p key={number}>{number}</p>;

//   const WholeList = useMemo(() => props.numbers.map(SubList), [props.numbers]);

//   return <>{WholeList}</>;
// };

// function App() {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

//   return (
//     <>
//       <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>
//         Plus one
//       </button>
//       <List numbers={numbers} />
//     </>
//   );
// }

// export default App



// function App() {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/data/countries.js');
//         const data = await response.text();
  
//         // Use eval() or Function() to execute the JavaScript code
//         const countries = new Function(`return ${data}`)();
//         console.log(countries);
//         // setData(countries);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
  
//     fetchData();
//   }, []);
  
  
  

//   return (
//     <div>
//       {isLoading && <p>Loading data...</p>}
//       {error && <p>Error fetching data: {error.message}</p>}
//       {data && (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App

//import React from 'react';

// const TodoList = ({ todos }) => {
//   return (
//     <div>
//       {todos.map((todo) => (
//         <div key={todo.id} className="todo-item">
//           <h1>{todo.title}</h1>
//           <h2>{todo.description}</h2>
//           <button>{todo.completed ? 'Completed' : 'Mark as Complete'}</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TodoList;

// import React, { useState } from 'react';

// function CustomButton1({ count, setCount }) {
//   function onClickHandler() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={onClickHandler}>
//       Mujhe {count} baar dabaya
//     </button>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CustomButton1 count={count} setCount={setCount} />
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// function App() {
//   // state? useState
//   const [selectedId, setSelectedId] = useState(1);

//   return <div>
//     <button onClick={() => setSelectedId(1)}>1</button>
    
//     <button onClick={function() {
//       setSelectedId(2);
//     }}>2</button>
    
//     <button onClick={function() {
//       setSelectedId(3);
//     }}>3</button>
    
//     <Todo id={selectedId} />
//   </div>
// }
// function Todo({id}) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then(async (res) => {
//         const json = await res.json();
//         setTodo(json.todo);
//       });
//   }, [id]);

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h4>{todo.description}</h4>
//     </div>
//   );
// }

// export default App;



// const App = () => {
//   const [items, setItems] = useState([
//     { name: 'Chocolates', value: 10 },
//     { name: 'Chips', value: 20 },
//     { name: 'Onion', value: 30 },
//     { name: 'Tomato', value: 30 },
//     // Add more items as needed.
//   ]);

//   let NAME = "";
//   let VALUE = 0;
//   let totalValue = useMemo(() => {
//     let total = 0;
//     for (const item of items) {
//       total += item.value;
//     }
//     console.log("1st");
//     return total;
//   }, [items]);

//   const handleNameChange = (e) => {
//     NAME = e.target.value;
//   };

//   const handleValueChange = (e) => {
//     VALUE = Number(e.target.value);
//   };

//   const addItem = () => {
//     items.push({ name: NAME, value: VALUE });
//     setItems([...items]);
//     console.log(items);
//   };

//   return (
//     <div>
//       <input type='text' placeholder='name' style={{ margin: 10 }} onChange={handleNameChange} /><br />
//       <input type='text' placeholder='value' style={{ margin: 10 }} onChange={handleValueChange} />
//       <button onClick={addItem}>add</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item.name} - Price: ${item.value}</li>
//         ))}
//       </ul>
//       <p>Total Value: {totalValue}</p>
//     </div>
//   );
// };

// export default App;


// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import About from './About';

// function App() {
//   const handleClick = () => {
//     console.log('App function called!');
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home handleClick={handleClick} />} />
//         <Route path="/about" element={<About handleClick={handleClick} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Home({ handleClick }) {
//   return <button onClick={handleClick}>Call App Function</button>;
// }

// // function About() {
// //   return <h1>About</h1>;
// // }

// export default App;



// const Content = () => <p>This is the content.</p>;

// const Updatecontent = () => <p>My name is Anthony</p>;

// // Wrapper using children prop
// const ChildrenWrapper = ({ children, updatechildren }) => {
//   return (
//     <div className="children-wrapper">
//       <h2>Using Children Prop:</h2>
//       <h2>What</h2>
//       {children}
//       <h2>is</h2>
//       {updatechildren}
//       <p>Hello again</p>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <ChildrenWrapper
//         children={<Content />}
//         updatechildren={<Updatecontent />}
//       />
//     </div>
//   );
// };

// export default App;




// function App() {
//   const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   fetch("https://sum-server.100xdevs.com/todos")
  //   .then(async function(res){
  //     const response = await res.json()
  //     setTodos(response.data)
  //     console.log(response.data.todos)
  //   })
//   // },[])
//   useEffect(() => {
//     fetch('https://sum-server.100xdevs.com/todos')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Data received:', data);
//       setTodos(data.todos)
//     })
//     .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//     });
  
//   }, []);
  

//   return (
//   <>
//   <RenderTodo todos = {todos} ></RenderTodo>
// </>
//   )
// }

// function RenderTodo({todos}){
//  // var filteredTodo = todos.filter((todo) => todo.title === title)[0]
//   console.log(todos[0])
//   return <div>
//            <h1>{todos[0]?.title}</h1>         
//           <h2>{todos[0]?.description}</h2>    
//         </div>
// }

// export default App

// import { useState } from "react"
// import axios from "axios"
// import { useNavigate, Link } from "react-router-dom"

// export default function App(){

//     const navigate = useNavigate();
//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('');
//     async function submit(e){
//         e.preventDefault();
        
//         try{
//             await axios.post("http://localhost:8000/",{
//                 email,password
//             })
//             .then(res=>{
//                 if(res.data=="exist"){
//                    navigate('/home',{state:{id:email}})
//                  console.log(res.data)
//                 }else if(res.data="notexist"){
//                     alert("User not found");
//                 }
//             })
//             .catch(e=>{
//                 alert("wrong details");
//                 console.log(e);
//             })
//         }
//         catch(e){
//             console.log(e);
//         }
//     }


//     return <div className="login">
//         <h1>Login</h1>
//         <form action="POST">
//             <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" name="Email" id="Email"/>
//             <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" name="password" id="password"/>
//             <input type="submit" onClick={submit} />
//         </form>
//         <br />
//         <p>OR</p>
//         <br />
//         {/* <Link to="/signup">SignUp</Link> */}
//     </div>
// }

// import React from 'react'

// const App = () => {
//   return (
//     <div className='text-3xl font-bold underline'>App color is orange</div>
//   )
// }

// export default App


import {  totalNotificationsCounter, notifications } from "./Components/recoil/Recoil";
import { RecoilRoot, useRecoilValue } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <MainAPP />
    </RecoilRoot>
  );
}
function MainAPP() {
  const networkValues = useRecoilValue(notifications);
   const totalNotificationsValue = useRecoilValue(totalNotificationsCounter);

   console.log(totalNotificationsValue);

  return (
    <>
       <button>Home </button>
       <button> My Network {networkValues.networks > 99 ? "99+" : networkValues.networks}</button>
       <button> Jobs {networkValues.jobs}</button>
       <button> Messaging {networkValues.messaging}</button>
       <button>Notifications {networkValues.notifications}</button> 
       <button>Me {totalNotificationsValue}</button> 
    </>
  );
}



// import { useContext, useState } from 'react'
// import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
// import { countAtom, eventSelector } from './store/atoms/count';


// function Count(){
//   console.log("at count");
//   return(
//     <div>
//      <CountRenderer />
//       <Button />
//     </div>
//   )
// }

// function CountRenderer(){
//   const count = useRecoilValue(countAtom) ;
//   console.log(" at count renderer");
//   const isEven = useRecoilValue(eventSelector) ;
//   return(
//     <div>
//       {count}
//       {isEven ? <EvenMessage/>: null}
//     </div>
//   )
// }

// function Button(){
//  const [count, setCount] = useRecoilState(countAtom);
//   console.log(" at button");
//   return(
//     <div>

//       <button onClick={()=>{
//          setCount(count+1)
//       }}>Increase</button>

//       <button onClick={()=>{
//          setCount(count-1)
//       }}>Decrease</button>

//     </div>
//   )
// }
// function EvenMessage(){
//   const isEven = useRecoilValue(eventSelector) ;
//     console.log("even msg re renders");
//     return(
//       <div>
//         {isEven ? "It is even": null}
//       </div>
//     )

// }

// export default App;



//count.js code

// import React, { useState } from 'react';

// function App() {
//   const [todos, setTodos] = useState([
//     { id: 1, title: "Go to gym", description: "Need to hit the gym from 7-9 PM" },
//     { id: 2, title: "Go to class", description: "Need to go to the class from 4-7 PM" },
//     { id: 3, title: "Eat food", description: "Need to eat food from 2-4 PM" }
//   ]);

//   function addTask() {
//     setTodos([...todos, { id: 4, title: "New task", description: "Description for the new task" }]);
//   }

//   return (
//     <div>
//       <button onClick={addTask}>ADD TASK</button>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h4>{description}</h4>
//     </div>
//   );
// }

// export default App;

// import MarkdownRender from './MarkdownRender';

// const markdownContent = `
// <h1 align="center">Hi there, I'm Sumana👋</h1>

// <h3 align="center">I am a Developer and Content Creator 👩‍💻✍</h3>

// <img align="right" alt="coding" width="400" src="https://miro.medium.com/max/1400/1*qdAW1TjCN57h1lbuuzvchg.gif">

// <p align="left"> <img src="https://komarev.com/ghpvc/?username=sumana10&label=Profile%20views&color=0e75b6&style=flat" alt="sumana10" /> </p>

// - 🔭 I’m currently working on **NFT Market Place**

// - 🌱 I’m currently learning **Blockchain Development**

// - 🥅 2023 Goals: **Learn more about web3**

// - 💬 Ask me about **react, solidity, blockchain**

// - 📫 How to reach me **sumana.developer@gmail.com**

// - ⚡ Fun fact **I am a big fan of Cute Doodling🎨🐣**

// ### Connect with me:

// [![Github](https://skillicons.dev/icons?i=github)](https://github.com/sumana10)
// [![Linkedin](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/sumana-das)
// [![Stackoverflow](https://skillicons.dev/icons?i=stackoverflow)](https://stackoverflow.com/users/sumana)



// ## Languages and Tools:
// ### Programming Languages
// [![Programming Languages](https://skillicons.dev/icons?i=c,cpp,java,js,ts,php,rust,solidity&theme=light)](https://skillicons.dev)
// ### Frontend Development
// [![Frontend Development](https://skillicons.dev/icons?i=react,bootstrap,html,css,redux,tailwind,mui,figma,styledcomponents&theme=light)](https://skillicons.dev)
// ### Backend Development
// [![Backend Development](https://skillicons.dev/icons?i=nodejs,nextjs,express,mysql,mongodb,ipfs,graphql,firebase,heroku,netlify&theme=light)](https://skillicons.dev)
// ### Others
// [![Others](https://skillicons.dev/icons?i=wordpress,jest,docker,git,github,vscode,replit,postman,vite&theme=light)](https://skillicons.dev)


// ## GitHub Stats:
// <img align="left" src="https://github-readme-stats-red-eta.vercel.app/api?username=sumana10&show_icons=true&locale=en" alt="sumana10" />


// <!-- ### 🐍 Watch Snake eating my contribution -->

// <!--![snake.svg](https://github.com/sumana10/sumana10/blob/b9fa6e2b02339fbd9ec0e1756758208fcfd0aeb5/snake.svg)-->
//     `

// const App = () => (
//   <MarkdownRender content={markdownContent} />
 
// );

// export default App;

// const App = () =>{

//   //  const[id,setID]=useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://apigenerator.dronahq.com/api/fL8zCNXG/notification");
//         console.log(response.data)
//        // setNetworkCount(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//     return(

//         //  <>

//         // // <button onClick={()=>{setID(1)}}>1</button>

//         // // <button onClick={()=>{setID(2)}}>2</button>

//         // // <button onClick={()=>{setID(3)}}>3</button>

//         // // <button onClick={()=>{setID(4)}}>4</button>

//         // // <Todo id={id}/>

//         // </>
//         <>
//         </>

//     )

// }

// // function Todo({id}){

// //   const[todos,setTodos]=useState({});

// //   useEffect(() => {
// //     const fetchcall = async (id) => {
// //       const response = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
// //       const data = await response.data;
// //       console.log(data.todo);
// //       setTodos(data.todo);
// //     };
  
// //     fetchcall(id);
// //   }, [id]);
  
// // //   useEffect(() => {
// // //     fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
// // //         .then((response) => response.json())
// // //         .then((result) => {
// // //            // console.log(result.data);
// // //           //  setTodos(result.todo);
// // //         });
// // //         fetchcall(id)
// // // }, [id]);


// //     return(

// //     <>

// //     <h3>{id}</h3>

// //     <div>

// //         <h2>{todos?.title}</h2>

// //         <h4>{todos?.description}</h4>

// //     </div>

// //     </>)

// // }
// // import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
// // import { useState } from "react";
// // import { atom } from "recoil";

// // const App = () => {
// //   console.log(" at app");
// //   return (
// //     <div>
// //       <RecoilRoot>
// //          <Todo/>
// //          <ToDoRenderer/>
// //       </RecoilRoot>
// //     </div>
// //   )
// // }


// // const ToDoRenderer = () =>{
// //     const todos = useRecoilValue(todosAtom);
// //     return (
// //         <div>
// //           {todos.map((todo, index)=>(
// //             <div key={index}>
// //                 <h1>{todo.title}</h1>
// //                 <h2>{todo.description}</h2>
// //             </div>
// //           ))}
// //         </div>
// //     );
// // }

// // const Todo = () =>{
// //     const [todos, setTodos] = useRecoilState(todosAtom);
// //     const [todo, setTodo] = useState('');
// //     const [description, setDescription] = useState('');
// //     const addTodo = ()=>{
// //         if (todo && description) {
           
// //             setTodos([...todos, {title: todo, description: description}]);
// //             setTodo('');
// //             setDescription('');
// //             console.log("todo:", todo, "description:", description);
           
// //         }
// //     };
// //     return (
// //         <div>
// //             <div>
// //                 <input placeholder="Enter Todo" onChange={(e)=>setTodo(e.target.value)}/>
// //             </div>
// //             <div>
// //                 <input placeholder="Enter Description" onChange={(e)=> setDescription(e.target.value)}/>
// //             </div>
// //             <div>
// //                 <button onClick={addTodo}>Add Todo</button>
// //             </div>
// //         </div>
// //     );
// // }

// // const todosAtom = atom({
// //     key: "todosAtom",
// //     default: []
// // });

 export default App;