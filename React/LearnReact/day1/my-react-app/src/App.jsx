import { useState } from "react";
import UserCard from "./Components/UserCard";
import ProfileCard from "./Components/ProfileCard";


function App() {
  return (
    <>
      <h1>Hello, React! 🚀</h1>
      <h2>Welcome to My React App</h2>
      <UserCard name="sangeeta" age={22}/>
      <ProfileCard city="mathura" hobby="reading stories"/>
    </>
  );
}

export default App;
