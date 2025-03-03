import Navbar from "./components/Navbar";
import Counter from "./components/Counter"
import ECOm from "./components/ECom";
function App(){
  // return <div className="text-9xl bg-red-600 text-white grid-col-4">This is the starting</div>
  return <div>
    <Navbar/>
    <Counter/>
    <ECOm/>
  </div>
}

export default App;