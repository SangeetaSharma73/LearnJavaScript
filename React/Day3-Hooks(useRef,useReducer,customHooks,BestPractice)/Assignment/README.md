## useReducer key concepts:

## ✅ export const initialState = [];

- Purpose: This defines the initial state — an empty array.

- It represents a to-do list that starts with no items.

## ✅ export function todoReducer(state, action) {

- Purpose: This is a reducer function.
  It's designed to take:
- state: the current list of todos (an array),
- action: an object describing what to do (e.g., { type: "add", text: "Buy milk" }),
  and return the next state.

## 🔁 switch (action.type) {

This evaluates the type of action being performed ("add", "remove", "toggle", etc.) and handles it accordingly.

## 🟩 Case: "add"

```jsx
return [...state, { id: Date.now(), text: action.text, completed: false }];
```

- Purpose: Adds a new to-do item to the list.
- ...state: copies the existing array.
- { id: Date.now(), text: action.text, completed: false }: creates a new to-do:
- id: a unique timestamp (used for tracking),
- text: comes from action.text (what the user typed),
- completed: set to false by default.
- Result: A new array with all previous todos plus one new one.

## 🟥 Case: "remove"

```jsx
return state.filter((todo) => todo.id !== action.id);
```

- Purpose: Removes a to-do from the list.
- filter(...): creates a new array without the to-do whose id matches action.id.
- Result: The state now has one fewer item.

## 🔁 Case: "toggle"

```jsx
return state.map((todo) =>
  todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
);
```

- Purpose: Toggles the completed status of a to-do (done/undone).
- map(...): loops through each todo.
- If the id matches action.id, it:
- copies the todo: { ...todo }
- flips the completed value: !todo.completed
- Otherwise, it returns the todo unchanged.
- Result: One to-do is marked as done/undone, rest remain the same.

## ❓ Default:

```jsx
default:
return state;
```

- Purpose: If an unknown action type is sent, do nothing — just return the current state.
