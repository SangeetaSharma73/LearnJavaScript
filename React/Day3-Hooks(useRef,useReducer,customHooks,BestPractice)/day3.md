# Day3 - Hooks(useRef,useReducer,useCallback,customHooks,Best Practices)

## ✅ What is useRef?

- useRef provides a mutable reference that persist across renders.
- The most common use case is to reference a DOM element directly(like grabbing a focus or measuring a height).
- It also can hold any mutable value without causing re-render.

## ✅ Basic Syntax

```jsx
import { useRef } from "react";

const myRef = useRef(initialValue);
```

- myRef is an object with a .current property.
- React does not re-renders when you change .current.

## ✅ Referencing a DOM Element

```jsx
function InputFocus() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} type="text"/>
      <button onClick={handleClick}>Focus on input<button/>
    </div>
  );
}
```

👉 Here:

- inputRef.current points to the <input> DOM element
- you can call .focus() directly on it/.

## ✅ Best Practices for DOM

✅ only use refs when you can’t do something with React props/state
✅ don’t overuse refs to “control” React rendering
✅ ideal for: - focus

    - scrolling

    - measuring

    - interacting with 3rd-party libraries (charts, animations, etc.)

## ✅ Storing Mutable Values

You can also use useRef as a box for any mutable value that survives renders:

```jsx
function Timer() {
  const count = useRef(0);

  useEffect(() => {
    const id = setInterval(() => {
      count.current += 1;
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <div>Open console to see count</div>;
}
```

👉 Unlike state, updating count.current will not trigger a re-render — but the value is preserved.

## ✅ Comparison with State

```txt
useState                 |     useRef
------------------------------------------------------
trigger re-renders       |  does not trigger re-render
stores state             |  stores mutable reference
declarative updates      |  imperative access
```

## ✅ Cleanup?

Refs themselves don't need cleanup , but you often use them inside an effect that does:

```jsx
useEffect(() => {
  // use ref to attach listener or similar
  return () => {
    // cleanup logic
  };
}, []);
```

## ✅ Summary

✔ use useRef to store a DOM node reference
✔ use it to store values across renders without causing re-render
✔ perfect for:

    - focus/blur

    - scroll

    - measurements

    - external libraries

---

## ✅ What is useReducer?

- useReducer is a hook to manage complex or structured state logic in functional components.

- It is inspired by Redux patterns — but built right into React.

- You describe state transitions in a pure function called a reducer.

- Ideal for:

  - multiple related state variables

  - state that depends on previous state

  - more predictable updates

## ✅ Basic Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

reducer is a function that receives (state, action)
you call dispatch(action) to update the state

## ✅ Reducer Example

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
```

## ✅ Hook Setup

```jsx
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

## ✅ Usage

```jsx
<button onClick={() => dispatch({ type: "increment" })}>+</button>
<button onClick={() => dispatch({ type: "decrement" })}>-</button>
<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
```

## ✅ Full Example

```jsx
import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
```

## ✅ When to use useReducer vs useState

```txt
useState                       |       useReducer
------------------------------------------------------------------
Simple, independent values     | Complex or related state logic
Few fields                     | Many related fields
No complex transitions         | Complex transitions (multiple conditions)
One-off updates                | Shared patterns (like Redux)
```

## ✅ Best Practices

✅ keep reducer pure (no side effects inside the reducer)
✅ organize action types clearly
✅ use constants for action types if the app grows
✅ keep the initial state separately to reset easily
✅ do not mutate state directly in the reducer

✅ Summary
✔ useReducer is a hook for structured state logic
✔ dispatch actions rather than calling setters
✔ state transitions are easy to reason about
✔ especially helpful for forms, wizards, or complex UI flows

## 🚀 Mini challenge for you

### ✅ Make a simple to-do list with useReducer:

- add tasks

- remove tasks

- toggle completed

## 💡 What are custom hooks?

- Custom hooks are just JavaScript functions whose name starts with use and which can call other hooks inside.
- They let you encapsulate reusable logic so you don’t repeat it in multiple components.
- You can share stateful logic across components cleanly.
- Think of them as:

- “functions to reuse hooks code”

## ✅ Why use custom hooks?

👉 keep your components small
👉 separate logic from presentation
👉 reusable across multiple components
👉 easier to test

## ✅ Basic syntax

```jsx
function useMyCustomHook() {
  // call other hooks
  // return data or functions
}
```

## ✅ Simple example: useCounter

Suppose you have a counter you want to reuse:

```jsx
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

export default useCounter;
```

Then in any component:

```jsx
import useCounter from "./useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

✅ Now the counter logic is totally reusable.

✅ Another example: useFetch
Let’s build a small data-fetching hook:

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

export default useFetch;
```

Then use it like this:

```jsx
import useFetch from "./useFetch";

function Posts() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

✅ Look how clean — no messy useEffect inside the component, because the hook encapsulates it.

## ✅ Rules of custom hooks

✅ must start with use
✅ can call other hooks inside (useState, useEffect, etc.)
✅ should not be called conditionally
✅ behave like a normal function otherwise

## ✅ Best practices

- keep hooks focused (single purpose)

- name them clearly (useAuth, useLocalStorage)

- document inputs/outputs

- test them independently if possible

- keep side effects inside useEffect

## 🚀 Mini challenge

### ✅ Build a custom hook called useLocalStorage that:

- takes a key and initialValue

- saves to localStorage

- returns the stored value and a setter

- syncs automatically with localStorage

## 🟦 1️⃣ Keep hooks at the top of components

👉 Always call hooks at the top level of your component or custom hook, never inside conditions, loops, or nested functions.

### Why?

React relies on the order of hooks to work correctly. If you call hooks conditionally, their order may change between renders, which breaks React’s internal hook tracking.

✅ Bad example:

```jsx
function BadComponent() {
  if (someCondition) {
    const [count, setCount] = useState(0); // ❌ DON'T do this
  }
  // ...
}
```

### ✅ Good example:

```jsx
function GoodComponent() {
  const [count, setCount] = useState(0); // 👍 always at top
  if (someCondition) {
    // do something based on count
  }
  return null;
}
```

React’s rule: hooks must be called in the same order every time.

## 🟦 2️⃣ Follow the “Rules of Hooks”

### ✅ Only call hooks in:

✔ React functional components
✔ or inside custom hooks

### ✅ Never call them in:

❌ regular JavaScript functions
❌ class components
❌ nested functions, conditions, or loops

👉 this ensures React can reliably track their state across renders.

## 🟦 3️⃣ Keep side effects minimal

👉 Hooks like useEffect can introduce side effects (data fetching, timers, subscriptions, etc.).
👉 If side effects become too large or complex, they get hard to reason about.

✅ Best practice tips for side effects:

- keep useEffect short and predictable

- move complex logic to a custom hook

- always clean up subscriptions or timers in the cleanup function

- think of useEffect as syncing external systems with your React component

✅ Example:

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(timer); // 🧹 cleanup!
}, []);
```

## ✅ Summary

✔ Always call hooks at the top
✔ Only in function components or other custom hooks
✔ Keep useEffect clean, short, and with proper cleanup
