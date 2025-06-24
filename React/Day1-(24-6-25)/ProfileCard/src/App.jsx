import AllProfile from "./component/AllProfile";
import Q1_Jsx from "./component/Q1_Jsx";
import Q2_Component from "./component/Q2_Component";
import Q3_Props from "./component/Q3_Props";
import Q4_State from "./component/Q4_State";
import Q5_EventHandling from "./component/Q5_EventHandling";
import Q6_ConditionalRendering from "./component/Q6_ConditionalRendering";
import Q7_ListsAndKeys from "./component/Q7_ListsAndKeys";
function App() {
  return (
    <>
      <Q1_Jsx />
      <Q2_Component name="Sangeeta" timeOfDay="morning" />
      <Q3_Props title="Sangeeta">
        <p>This is content inside the card!</p>
      </Q3_Props>
      <Q4_State />
      <Q5_EventHandling />
      <Q6_ConditionalRendering />
      <Q7_ListsAndKeys />
      <AllProfile />
    </>
  );
}

export default App;
