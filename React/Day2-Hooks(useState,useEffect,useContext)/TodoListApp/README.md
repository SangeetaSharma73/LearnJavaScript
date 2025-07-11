# Day2- Hooks

## what is useState?

- useState is a hook that lets you add state to a functional component.
- Before hooks, you
  could only use in class components- now you can do
  it in any component.

## How to use useState ?

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 0 is the initial state

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

👉 Here:

- count is the current state.
- setCount is the updater function.
- you always call setCount(newValue) to change the state.

## How does useState work?

- useState(initialValue) returns a pair:
  [stateValue,setStateValue]
- React remembers the state between renders.
- when you call the setter, React re-renders the
  component with the updated value.

## Best Practices with useState

### Use minimal state

- don't store derived values in state (e.g if you have an array, don't also store its length in state- calculate it from the array)

### ✅ Avoid complex nested state

- if you have deeply nested objects, consider splitting them or using useReducer

### ✅ Functional updates

- If the new state depends on the old state, use the callback form:

```jsx
setCount((prevCount) => prevCount + 1);
```

This avoids bugs if multiple updates happen quickly.

### ✅ Use one state per concept

instead of:

```jsx
const [form, setForm] = useState({ name: "", email: "" });
```

sometimes better to break it apart:

```jsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
```

```txt
useState to manage todo items
```

## ✅ What is useEffect?

useEffect lets you run side effects in functional components.

A side effect is anything that affects something outside of the component:

- data fetching
- DOM manipulation
- subscriptions
- timers
- logging

In class components, you would have used componentDidMount, componentDidUpdate, and componentWillUnmount.

- useEffect replaces them all with a simpler, unified API.

✅ Basic Syntax

```jsx
import { useEffect } from "react";

useEffect(() => {
  // side effect code here
});
```

When the component renders, your effect runs after the paint.

### ✅ Example: Logging

```jsx
function Logger({ count }) {
  useEffect(() => {
    console.log(`The count is now ${count}`);
  });
}
```

Here, every time the component renders, the effect will run.

✅ Dependency Array

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

- useEffect runs only when count changes, because of the dependency array.

- If the array is empty ([]), the effect runs only once on mount (like componentDidMount).

## ✅ Best Practices for Dependencies

- ✅ Always list every external value your effect uses inside the dependency array
- ✅ ESLint’s react-hooks/exhaustive-deps rule will warn you if you miss something
- ✅ If you want to avoid re-running, memoize callback functions with useCallback
- ✅ Cleanup Functions
  Sometimes effects set up things that need to be cleaned up, like:

1. event listeners
2. timers
3. subscriptions

You can return a cleanup function from your useEffect:

```jsx
useEffect(() => {
  console.log("mount");

  return () => {
    console.log("unmount");
  };
}, []);
```

👉 This cleanup runs when the component is about to unmount or before the next effect runs.

✅ Example: Interval

```jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Timer: {seconds}</p>;
}
```

- sets up a timer
- cleans it up with clearInterval

### Best practice: always clean up timers or listeners to avoid memory leaks.

✅ Real Example: Data Fetching

```jsx
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []); // only on mount

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### ✅ When to Use useEffect

✔ fetching data
✔ setting up event listeners
✔ interacting with external libraries (charting, maps, etc.)
✔ subscribing to sockets
✔ timers or intervals

Never put pure calculations (like .map) in useEffect. That belongs in render.

✅ Summary
🔹 useEffect runs after render
🔹 use the dependency array to control when it runs
🔹 always clean up (return a function) for subscriptions/timers
🔹 think of useEffect as a replacement for lifecycle methods in class components

```txt
useEffect to load/save from localStorage
```
