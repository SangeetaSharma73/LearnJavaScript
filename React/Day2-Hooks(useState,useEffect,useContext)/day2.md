# day2 - Hooks

## Hooks

In React, a hook is a special function that lets you "hook into" React features — like state, lifecycle, and context — inside a function component.

## ✅ What is useEffect?

- useEffect lets you run side effects in functional components.
- A side effect is anything that affects something outside of the component:

  - data fetching

  - DOM manipulation

  - subscriptions

  - timers

  - logging

In class components, you would have used componentDidMount, componentDidUpdate, and componentWillUnmount.

useEffect replaces them all with a simpler, unified API.

## ✅ Basic Syntax

```jsx
import { useEffect } from "react";

useEffect(() => {
  // side effect code here
});
```

When the component renders, your effect runs after the paint.

## ✅ Example: Logging

```jsx
function Logger({ count }) {
  useEffect(() => {
    console.log(`The count is now ${count}`);
  });
}
```

Here, every time the component renders, the effect will run.

## ✅ Dependency Array

```jsx
useEffect(() => {
  console.log("Count changed");
}, [count]);
```

useEffect runs only when count changes, because of the dependency array.

If the array is empty ([]), the effect runs only once on mount (like componentDidMount).

✅ Best Practices for Dependencies
✅ Always list every external value your effect uses inside the dependency array
✅ ESLint’s react-hooks/exhaustive-deps rule will warn you if you miss something
✅ If you want to avoid re-running, memoize callback functions with useCallback

## ✅ Cleanup Functions

Sometimes effects set up things that need to be cleaned up, like: - event listeners - timers - subscriptions

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

## ✅ Example: Interval

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

Best practice: always clean up timers or listeners to avoid memory leaks.

## ✅ Real Example: Data Fetching

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

## ✅ When to Use useEffect

✔ fetching data
✔ setting up event listeners
✔ interacting with external libraries (charting, maps, etc.)
✔ subscribing to sockets
✔ timers or intervals

Never put pure calculations (like .map) in useEffect. That belongs in render.

## ✅ Summary

🔹 useEffect runs after render
🔹 use the dependency array to control when it runs
🔹 always clean up (return a function) for subscriptions/timers
🔹 think of useEffect as a replacement for lifecycle methods in class components

---

## ✅ What is useContext?

- useContext is a React hook that reads data from a React Context.
- Context is a way to share data globally without having to pass props manually at every level (avoids prop-drilling).
- Think of it as a lightweight global store.

## ✅ How Context Works

There are two parts:
1️⃣ Create the context
2️⃣ Provide the context
3️⃣ Consume the context

### ✅ Step 1: Create a Context

```jsx
import { createContext } from "react";
const ThemeContext = createContext();
```

createContext returns an object with a Provider and a Consumer
we typically use the Provider + useContext (instead of the Consumer component)

## ✅ Step 2: Provide the Context

Wrap a section of your app with the Provider:

```jsx
<ThemeContext.Provider value="dark">
  <MyComponent />
</ThemeContext.Provider>
```

now MyComponent and anything inside can access value="dark".

## ✅ Step 3: Consume the Context

In any child component:

```jsx
import { useContext } from "react";
function MyComponent() {
  const theme = useContext(ThemeContext);
  return <div>The theme is {theme}</div>;
}
```

👉 No props passed! That’s the whole magic.

## ✅ Best Practices

- ✅ keep your context small — don’t put your entire app’s state into a single context
- ✅ split contexts if you have logically different data (e.g., AuthContext vs. ThemeContext)
- ✅ use context for:
  - theme (dark/light)
  - current user
  - language
  - auth token

Avoid putting frequently changing values (like typing text) in context because it will re-render all consumers — use context for stable, globally shared state.

## ✅ Example: AuthContext

```jsx
// AuthContext.js
import { createContext } from "react";
export const AuthContext = createContext(null);
// Provide:
<AuthContext.Provider value={{ user, setUser }}>
  <App />
</AuthContext.Provider>;
// Consume:
const { user, setUser } = useContext(AuthContext);
```

## ✅ Advanced: Nested Context

You can nest contexts if needed:

```jsx
<ThemeContext.Provider value="dark">
  <AuthContext.Provider value={{ user }}>
    <App />
  </AuthContext.Provider>
</ThemeContext.Provider>
```

Each useContext hook only cares about its own context.

## ✅ Example Project

### ✅ Mini global state project idea

Build a theme switcher app:
put a theme ("light" or "dark") in context
allow toggling theme
use a button to switch
show the current theme in a child component without passing it as props

## ✅ Summary

🔹 useContext gives you global state without prop drilling
🔹 wrap your app in a Provider
🔹 consume it anywhere with useContext
🔹 split logically different data into multiple contexts
🔹 avoid putting fast-changing state in context
