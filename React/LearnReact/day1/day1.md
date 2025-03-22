🟢 DAY 1: React Setup + Components & Props
Aaj React ka setup karenge aur components ka concept samjhenge.

🔹 Aaj Ka Padhai Plan (Step-by-Step) 📖
1️⃣ React Install Karna (Vite Se Fast Setup)
Pehle React install karega using Vite:

💻 Terminal Command:
```sh
npm create vite@latest my-react-app --template react
cd my-react-app
npm install
npm run dev
```
🔹 Ye command React ko install kar degi aur project start ho jayega.

2️⃣ JSX (HTML + JavaScript Mix)
👉 JSX ka use hota hai React me HTML likhne ke liye.

💡 Example:
```jsx
const MyComponent = () => {
  return <h1>Hello, React! 🚀</h1>;
};
```
🔹 Isme normal HTML nahi likh sakte, sirf JSX use hota hai.



3️⃣ Functional Components
React me sab kuch components ke form me hota hai.
📌 Example:

```jsx
const Welcome = () => {
  return <h2>Welcome to My React App</h2>;
};
```

export default Welcome;
🔹 Ye ek component hai jo ek h2 tag return kar raha hai.

4️⃣ Props (Component Communication)
👉 Props ka use ek component se dusre component ko data bhejne ke liye hota hai.

📌 Example:

```jsx
const UserCard = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
};


const App = () => {
  return <UserCard name="Sangeeta" age={22} />;
};
```
🔹 Yaha UserCard component ko name aur age props mil rahe hain jo App component bhej raha hai.

🛠 Aaj Ka Task:
✅ React install karna aur project start karna
✅ Ek "User Profile Card" component banana jo props se data le
✅ JSX aur Functional Components practice karna

