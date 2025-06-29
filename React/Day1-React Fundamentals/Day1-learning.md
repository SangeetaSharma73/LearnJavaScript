# Day1

## Lesson 1: `jsx – JavaScript XML

`jsx allows you to write HTML-like syntax inside JavaScript. React uses ```jsx to describe what the UI should look like.

### 📘 1.1 `jsx Syntax Basics

✅ `jsx uses HTML-like tags:

```jsx
const element = <h1>Hello, world!</h1>;
```

- ✅ You must return only one parent element in a ```jsx block.
- ✅ Use camelCase for DOM attributes (e.g., className instead of class).

### 📘 1.2 Embedding Expressions

- ✅ You can use any JavaScript expression inside {}.

```jsx
const name = "Alice";
const age = 25;
const greeting = (
  <h2>
    Hello, {name}. You are {age + 5} years old!
  </h2>
);
```

### 1.3 📘 React Fragments

✅ Use <>...</> to wrap multiple elements without adding extra DOM nodes.

```jsx
return (
  <>
    <h1>Header</h1>
    <p>Paragraph</p>
  </>
);
```

### 1.4 📘 Comments in `jsx

✅ Use {/_ comment here _/} syntax inside `jsx.

```jsx
return (
  <div>
    {/* This is a comment */}
    <p>Hello!</p>
  </div>
);
```

### 📌 Real Example

```jsx
function App() {
  const name = "React";
  const isLoggedIn = true;

  return (
    <>
      <h1>Welcome to {name}!</h1>
      <p>{isLoggedIn ? "You are logged in." : "Please log in."}</p>
      {/* End of content */}
    </>
  );
}
```

## 🟢 Lesson 2: Components in React

Components let you split the UI into independent, reusable pieces.

### ✅ 2.1 Types of Components

React has two types (you’ll mostly use the first):

```txt
Type	Syntax Style	React Hook Compatible?
✅ Functional	function MyComponent() {}	✅ Yes
🔶 Class (Legacy)	class MyComponent extends React.Component	❌ No
```

⚠️ Focus on functional components – they are the modern standard.

### 📘 2.2 Functional Component Example

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Or using arrow functions:

```jsx
const Welcome = ({ name }) => <h1>Hello, {name}</h1>;
You can import and use them in other components:
```

```jsx
function App() {
  return <Welcome name="Sangeeta" />;
}
```

### 📘 2.3 Class Component (for legacy understanding)

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

- 🔸 No useState or hooks in class components.

```txt
🧪 Mini Exercise (Your Turn)
Task: Create 2 components
Greeting — a functional component that takes name and timeOfDay as props and renders:

Good morning, Sangeeta!
In App.jsx or your main file, render Greeting with "Sangeeta" and "morning" as props.
```

## 🟢 Lesson 3: Props (Properties)

### 📘 What Are Props?

- Think of props as parameters you pass to a component.
- They’re read-only and immutable inside the component receiving them.
- They allow component reuse with different data.

### ✅ 3.1 Passing Props

```jsx
const Welcome = (props) => {
  return <h2>Welcome, {props.name}!</h2>;
};
<Welcome name="Sangeeta" />;
```

### ✅ 3.2 Destructuring Props

Cleaner and preferred approach:

```jsx
const Welcome = ({ name }) => <h2>Welcome, {name}!</h2>;
```

- You can destructure in the function parameter or inside the body:

```jsx
const Welcome = (props) => {
  const { name } = props;
  return <h2>Welcome, {name}!</h2>;
};
```

### ✅ 3.3 Default Props

Provide fallback values if a prop isn’t passed:

```jsx
const Profile = ({ name = "Guest" }) => <p>Hello, {name}</p>;
```

Or use Component.defaultProps (less common in function components):

```jsx
Profile.defaultProps = {
  name: "Guest",
};
```

### ✅ 3.4 The children Prop

Allows you to pass JSX content inside a component.

```jsx
const Card = ({ title, children }) => (
  <div className="card">
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
);
// Usage
<Card title="React Card">
  <p>This is content inside the card!</p>
</Card>;
```

## 🟢 Lesson 4: State Management with useState

**📘 What is State?**
State allows your component to remember values between renders. It enables dynamic UI updates when data changes (e.g., counter, input, toggle, etc.).

### ✅ 4.1 Using useState

🧠 Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

- state → current value
- setState → function to update it
- useState → React hook that manages state
- 🔔 Only callable inside function components or custom hooks.

✅ Example: Counter

```jsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};
```

### ✅ 4.2 Multiple States

You can use useState as many times as needed:

```jsx
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
};
```

- Each state is independent.

### ✅ 4.3 Updating State Correctly

🚫 Wrong

```jsx
setCount(count + 1); // May cause issues in async scenarios
```

✅ Safe Functional Update

```js
setCount((prevCount) => prevCount + 1);
```

- This ensures you're working with the latest state value.

```txt
   🧪 Exercise (Your Turn)
    Build a simple counter component:
    Start from count = 0
    Add two buttons:
    ➕ "Increment"
    ➖ "Decrement"
    Display current count
    Use setCount(prev => prev + 1) and setCount(prev => prev - 1)
```

## 🟢 Lesson 5: Event Handling in React

React uses its own event system called Synthetic Events, which wraps around the browser's native events to provide consistency across all browsers.

### ✅ 5.1 Basic Event Handling

You handle events using camelCase syntax and pass a function reference.

```jsx
<button onClick={handleClick}>Click Me</button>
```

```jsx
const handleClick = () => {
  alert("Button clicked!");
};
```

- 🔔 Don’t call the function directly like onClick={handleClick()} — it will run on render.

### ✅ 5.2 Passing Arguments to Event Handlers

You can pass arguments like this:

```jsx
<button onClick={() => handleClick("Sangeeta")}>Greet</button>
```

```jsx
const handleClick = (name) => {
  alert(`Hello, ${name}!`);
};
```

- 🔎 You wrap it in an arrow function so it doesn’t run immediately on render.

### ✅ 5.3 Event Object

React passes a synthetic event object by default:

```jsx
const handleChange = (e) => {
  console.log(e.target.value);
};
```

```jsx
<input type="text" onChange={handleChange} />
```

### ✅ 5.4 Binding (for class components only)

This is relevant only for old class components. You don't need .bind(this) in modern function components.

```txt
🧪 Mini Exercise for You
Build a component Q5_Events:

Features:
A button that, when clicked, alerts your name (e.g., “Hello, Sangeeta!”)

An input field where you type your name

A button that logs the input value to the console
```

## 🟢 Lesson 6: Conditional Rendering in React

React allows you to conditionally render elements based on state, props, or logic.

### ✅ 6.1 Using if/else (inside function)

```jsx
if (isLoggedIn) {
  return <h1>Welcome Back!</h1>;
} else {
  return <h1>Please Sign In</h1>;
}
```

### ✅ 6.2 Ternary Operator (in JSX)

```jsx
<h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>
```

### ✅ 6.3 Logical AND (&&)

```jsx
{
  isAdmin && <p>You have admin privileges</p>;
}
```

Only renders if isAdmin is true.

### ✅ 6.4 Short-Circuit Fallback (Optional)

You can also do:

```jsx
{
  message || "No message to display";
}
```

If message is falsy, it shows the fallback.

🧪```txt
Your Challenge: Q6_ConditionalRendering
Build a simple component with:
A useState hook to track login status (isLoggedIn)

A button to toggle login/logout

Use conditional rendering to show:

"Welcome, Sangeeta!" if logged in

"Please log in" if logged out

🟡 Optional:

Show a different button label: “Logout” when logged in, “Login” when logged out

```

```

## 🟢 Lesson 7: Lists & Keys

React uses .map() to loop over arrays and render components or elements dynamically.

### ✅ 7.1 Rendering Lists with .map()

```jsx
const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);
```

🔑 Each child in a list needs a unique key prop. More on that below.

### ✅ 7.2 The key Prop

Keys help React identify which items have changed, are added, or removed. They must be unique and stable (don't use index unless you must).

```jsx
const users = [
  { id: 1, name: "Sangeeta" },
  { id: 2, name: "Rahul" },
];

return (
  <ul>
    {users.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

**🔥 Why Not Always Use index as key?**
Using index works but can cause bugs when items are reordered or deleted. Only use it when:

- List is static and never changes, or
- No unique identifier is available

```txt
🧪 Your Challenge: Q7_ListsAndKeys
Build a simple component that:

1. Has an array of tasks or users:

const users = [
  { id: 1, name: "Sangeeta" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Ayesha" },
];
2. Renders them in a <ul> with each name in a <li>
3. Uses user.id as the key
```
