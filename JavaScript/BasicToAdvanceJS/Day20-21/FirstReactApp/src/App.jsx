import TaskList from "./components/TaskList/TaskList";
import Topbar from "./components/Topbar/Topbar";
import UserProfile from "./components/UserProfile/UserProfile";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(5);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <Topbar />
      <UserProfile
        img="https://reqres.in/img/faces/1-image.jpg"
        name="George Bluth"
      />
      <br />
      <br />
      <div className="task-list">
        <TaskList type="checkbox" id="task1" checked={true} />
        <TaskList type="checkbox" id="task2" checked={true} />
        <TaskList type="checkbox" id="task3" checked={false} />
      </div>

      <div>
        <h1 style={{ marginLeft: "10px", fontSize: "38px" }}>Count:{count}</h1>
        <button
          onClick={handleIncrease}
          style={{ marginLeft: "10px", fontSize: "38px" }}
        >
          Increase
        </button>
        <button
          onClick={handleDecrease}
          style={{ marginLeft: "10px", fontSize: "38px" }}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
