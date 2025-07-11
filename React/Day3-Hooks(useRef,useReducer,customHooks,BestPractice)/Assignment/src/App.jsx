import UseRef from "./components/UseRef";
import TodoApp from "./components/TodoApp/TodoApp";
import Counter from "./components/CustomHook/Counter";

const App = () => {
  return (
    <>
      <div>
        <h1
          style={{
            color: "blue",
            fontSize: "20px",
            textAlign: "center",
            backgroundColor: "pink",
          }}
        >
          Use Ref : how it's use
        </h1>
        <UseRef />
        <h1
          style={{
            color: "blue",
            fontSize: "20px",
            textAlign: "center",
            backgroundColor: "pink",
          }}
        >
          Use Reducer : how it's use
        </h1>
        <TodoApp />
        <h1
          style={{
            color: "blue",
            fontSize: "20px",
            textAlign: "center",
            backgroundColor: "pink",
          }}
        >
          Custom Hooks : how it's use
        </h1>
        <Counter />
      </div>
    </>
  );
};

export default App;
