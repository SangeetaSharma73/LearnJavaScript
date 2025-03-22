// // Handling click events

// // function Hello(props) {
// //   function handleClick() {
// //     alert(`Hello, ${props.name}! 👋`);
// //   }

// //   return (
// //     <div>
// //       <h2>Hello, {props.name}!</h2>
// //       <button onClick={handleClick}>Click Me</button>
// //     </div>
// //   );
// // }

// // export default Hello;

// // ✅ Handling Input Events (Typing in a Text Box)

// // import Hello from "./component/Hello.jsx";

// // function App() {
// //   // const name = "John";
// //   return (
// //     <div>
// //       <p>👋Welcome to my first React app!</p>
// //       <Hello name="John" />
// //       {/* <Hello name="Alice"/> */}
// //     </div>
// //   );
// // }

// // export default App;

// //forms in react
// //✅ Example: Handling Form Submission

// // import {useState} from 'react';

// // function App(){
// //   const [name,setName] = useState("");

// //   function handleSubmit(event){
// //     event.preventDefault(); //Prevents page reload

// //     alert(`Hello,${name}`);

// //   }

// //   return (
// //     <div>
// //       <h1>React Forms</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input type="text"
// //         value={name}
// //         onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/>

// //         <button type='submit'>Submit</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default App;

// // 📌 Step 7: Conditional Rendering

// // ✅ Example: Show a Message Based on a Condition

// // import {useState} from 'react';

// // function App(){
// //   const [loggedIn,setLoggedIn] = useState(false);

// //   return(
// //     <div>
// //       <h1>{loggedIn ? "welcome Back" : "please Log in"}</h1>
// //       <button onClick={()=>setLoggedIn(!loggedIn)}>

// //         {loggedIn ? "loggedOut" : "login"}
// //       </button>
// //     </div>
// //   );
// // }

// // 📌 Step 8: Rendering Lists (Dynamic Data)
// // What if we want to show multiple items (e.g., a list of users, tasks)?

// // ✅ Example: Rendering a List

// function App(){
//   const users = ["Alice","Bob","charlie"]

//   return (
//     <div>
//       <h1>Users List</h1>
//       <ul>{users.map((user,index)=>(
//         <li key={index}>{user}</li>
//       ))}</ul>
//     </div>
//   )
// }

// // 🚀 What's Happening?

// // .map() loops through users and creates a <li> for each user.
// // key={index} helps React track list items efficiently.

// export default App;

// 📌 Step 9: Adding Items to a List (To-Do App)
// Now, let's modify a list dynamically by allowing users to add tasks.

// ✅ Example: To-Do List with State

// import { useState } from "react";

// function App() {
//   const [tasks, setTasks] = useState([]); // Store list of tasks
//   const [input, setInput] = useState(""); // Store input value

//   function addTask() {
//     if (input.trim() === "") return; // Ignore empty tasks
//     setTasks([...tasks, input]); // Add new task
//     setInput(""); // Clear input after adding
//   }

//   return (
//     <div>
//       <h1>To-Do List ✅</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter a task"
//       />
//       <button onClick={addTask}>Add Task</button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// 🚀 What's Happening?

// useState([]): Stores the list of tasks.
// useState(""): Stores the current input value.
// addTask():
// Adds the task to tasks (using setTasks([...tasks, input])).
// Clears the input field.

// 📌 Step 10: Removing Items from the List
// What if users want to delete tasks?

// ✅ Example: To-Do List with Delete Button

// import { useState } from "react";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [input, setInput] = useState("");

//   function addTask() {
//     if (input.trim() === "") return;
//     setTasks([...tasks, input]);
//     setInput("");
//   }

//   function removeTask(index) {
//     const newTasks = tasks.filter((_, i) => i !== index); // Remove task by index
//     setTasks(newTasks);
//   }

//   return (
//     <div>
//       <h1>To-Do List ✅</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter a task"
//       />
//       <button onClick={addTask}>Add Task</button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task} <button onClick={() => removeTask(index)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// 📌 Step 11: Componentizing the To-Do App
// Right now, our code is all in one file. Let’s split it into components!

// ✅ Create TodoItem.jsx (Task Component)

import "./App.css";
import { useState } from "react";
import TodoItem from "./component/TodoItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  function addTask() {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>To-Do List ✅</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            index={index}
            removeTask={removeTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
