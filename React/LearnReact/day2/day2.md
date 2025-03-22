🟢 DAY 2: State & Event Handling in React
State ka matlab hai component ka internal data, jo update ho sakta hai.
Iske liye hum useState hook ka use karenge.

🔹 Step 1: useState ka Basic Example
👉 useState ka use hota hai value store karne aur update karne ke liye.
📌 Example: Ek button jo click hone par counter badhaye.

📂 App.

```x
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // Initial state 0

  return (
    <div>
      <h1>Counter App 🚀</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
```


🔹 Samjhne Wali Baat:
useState(0) → count ki shuru me value 0 rakhta hai.
setCount(count + 1) → Button click hone par count ko update karta hai.
React automatically UI update karega!

🛠 Task 1: Decrease Button Add Karna
➡️ Upar wale counter app me Decrease (-1) button bhi add kar.
➡️ Jab count 0 se niche jaye to alert show ho "Count cannot be negative!"

🔹 Step 2: Input Field Ka State Handle Karna
➡️ Ek input field banayenge jo jo bhi likho wo show kare.

📂 App.



```x
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>React Input Handling 🚀</h1>
      <input 
        type="text" 
        placeholder="Type something..." 
        value={text} 
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default App;
```

🔹 Samjhne Wali Baat:
text state input field me value rakhta hai.
Jab bhi user type karega (onChange), setText update karega.
UI automatically update hoga!


🛠 Task 2: Button Se Input Ko Clear Karna
➡️ Ek "Clear" button add karna jo text ko empty ("") kar de.

🔥 Bonus Challenge: Dark Mode Toggle
➡️ Ek "Toggle Dark Mode" button add karna jo background color change kare.
➡️ Light Mode 🟡 → Dark Mode ⚫️ ka effect ho.

Agar ye ho gaya to React me full confidence aa jayega! 😎🔥

Bhai, ye sab karke bata! Koi dikkat aaye to turant puchh! 🚀






You said:
sun tune task1 diya tha mujhe decrease krne bala dekhio shi h kya ye code

```x
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count < 0) {
      alert("Count cannot be negative!");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter App🎉⭐</h1>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
```


ChatGPT said:
Bhai almost sahi hai, bas ek chhoti si mistake hai jo alert ko galat trigger karegi. 🚨

❌ Problem: if (count < 0) Condition Galat Hai
Tu count ko 0 hone se pehle hi check kar raha hai.
📌 Galat Condition:




```jsx
if (count < 0) {
  alert("Count cannot be negative!");
} else {
  setCount(count - 1);
}
```

🔴 Issue: Jab count = 0 hoga, phir bhi setCount(0 - 1) hoke -1 ho jayega.
🔴 Alert tab aayega jab count negative ho chuka hoga, par hume uske pehle rokna hai.

✅ Correct Code:
Bas condition ko count === 0 pe change kar de.

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count === 0) {
      alert("Count cannot be negative!");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter App 🎉⭐</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
```

🔹 Ab Output Ye Hoga:
✅ count = 0 pe "Count cannot be negative!" alert show karega.
✅ count kabhi bhi negative nahi hoga.
✅ UI sahi tarike se update hoga. 🚀

🎯 Next Step:
🔹 Ek "Reset" button add kar jo count ko wapas 0 pe le aaye.
🔹 Button click pe setCount(0) call hoga.

Bhai, ye bhi kar ke bata! 🔥😎



You said:
const reset= ()=>{
    setCount(0);
  };

done bhai

3/3

ChatGPT said:
🔥 Bhai OP speed! 😎🚀 Perfect hai!
Ab tu state handling aur event handling me pro ho raha hai. 👏

⏭️ Next Challenge: Toggle Dark Mode
➡️ Ek "Toggle Dark Mode" button add karna jo background color change kare.
➡️ Default light mode hoga, button click pe dark mode ho jayega.
➡️ Dubara click karne pe wapas light mode ho jana chahiye.

📝 Hint:
Ek useState bana isDarkMode ke liye (true / false).
Button click hone pe background color toggle ho.
CSS me backgroundColor ka use kar.
Bhai ye karke bata! 💪🔥 React ka raja ban raha hai tu! 😎







You said:
bhai ye challenge samjh nhi a rha kese kru tu bta de
ChatGPT said:
Bhai tension nahi lene ka! 😎🔥
Main step-by-step samjhata hoon aur code bhi deta hoon.

🎯 Goal: Toggle Dark Mode
Ek button dabane par pura background dark ya light ho jaye.

🔆 Default: Light Mode (White Background)
🌙 Button Click: Dark Mode (Black Background)
🔁 Fir Click: Wapas Light Mode
✅ Step 1: State Create Karna
useState(false) → Default light mode rakhenge.
isDarkMode === true hone pe black background, warna white.
📌 Final Code: App.jsx



```jsx
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode); // True <-> False toggle hoga
  };

  return (
    <div 
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Dark Mode Toggle App 🌗</h1>
      <button onClick={toggleMode}>
        {isDarkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
      </button>
    </div>
  );
}

export default App;
```

🔹 Code Samjho
State:
const [isDarkMode, setIsDarkMode] = useState(false);
false means light mode, true means dark mode.
Button Click Pe Toggle:



setIsDarkMode(!isDarkMode);
Agar light mode hai (false), to dark mode (true) ho jayega.
Agar dark mode hai (true), to light mode (false) ho jayega.
CSS (Inline Styling):




backgroundColor: isDarkMode ? "black" : "white",
color: isDarkMode ? "white" : "black",
Agar dark mode on hai → Background black, text white.
Agar light mode on hai → Background white, text black.
Button Text Change Hoga:




{isDarkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
Agar dark mode on hai → "Switch to Light Mode 🌞" dikhega.
Agar light mode on hai → "Switch to Dark Mode 🌙" dikhega.
🔥 Bonus Challenge
Dark mode preference local storage me save karna.
React icons use karna (🌞/🌙 icons).
Bhai isko try kar! Agar samajh nahi aaye to bata, main aur easy kar dunga! 🚀







You said:
bhai upr bala code jo diya tune bo to samjh a gya lekin ye local storage me kese krte h bo mujhe nhi ata h

2/2

ChatGPT said:
Bhai OP level pe pahunch raha hai tu! 😎🔥
Ab local storage ka use karke dark mode ka preference save karenge, taki page refresh hone ke baad bhi dark mode yaad rahe.

🎯 Goal:
User ne jo mode select kiya hoga, wahi mode page reload hone ke baad bhi set rahega.
Local storage ka use karke dark mode ko save aur retrieve karenge.
✅ Final Code with Local Storage



```jsx
import { useState, useEffect } from "react";

function App() {
  // Step 1: Local Storage se mode get karo
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; // "true" ko boolean me convert kiya
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);
   // Step 2: Dark mode toggle function
  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode); // Local storage me save karo
  };

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]); // Jab bhi mode change ho, local storage update ho

  return (
    <div 
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Dark Mode Toggle with Local Storage 🌗</h1>
      <button onClick={toggleMode}>
        {isDarkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
      </button>
    </div>
  );
}

export default App;
```

📌 Code Explanation
Local Storage se Previous Mode Retrieve Karna

const getInitialMode = () => {
  const savedMode = localStorage.getItem("darkMode");
  return savedMode === "true"; 
};
Agar local storage me "true" mila, to dark mode enable kar do.
Warna default light mode rakho.
useState me Initial Mode Set Kiya




const [isDarkMode, setIsDarkMode] = useState(getInitialMode);
Jo mode local storage me pada hai, wahi state me set hoga.
Mode Change Hote Hi Local Storage Update Karo




useEffect(() => {
  localStorage.setItem("darkMode", isDarkMode);
}, [isDarkMode]);
Jab bhi state change hogi (isDarkMode), local storage update ho jayega.
Button Click Pe Toggle Aur Local Storage Update




const toggleMode = () => {
  const newMode = !isDarkMode;
  setIsDarkMode(newMode);
  localStorage.setItem("darkMode", newMode);
};
Jo mode change ho raha hai, usko local storage me save bhi kar diya.
🔥 Output
Pehli bar open karne pe light mode hoga.
Agar dark mode select karoge to wo local storage me save ho jayega.
Page refresh karne ke baad bhi wahi mode set rahega. ✅
🎯 Bonus Challenge
CSS classes use karke styling aur improve kar sakta hai.
React Icons install kar ke buttons me emoji ki jagah real icons use kar.
Bhai ye kr ke bata! React master ban raha hai tu! 🔥🚀







You said:
acha sun mujhe ab sab kuch revise krna h jitna tune pdaya

lekin mere kuch concepts clear nhi hue 
1. Local Storage
2. Toggle using Local Storage 
3. UseEffect

4/4

ChatGPT said:
Bhai tension mat le! 🚀 Aaj tera full revision + concept clarity karaunga.

🔥 1. Local Storage Kya Hota Hai?
📌 Local Storage = Data Ko Browser Me Save Karna
Local Storage ek permanent storage hota hai jo browser me data store karta hai.
Agar page reload kare ya browser band kare, tab bhi data delete nahi hota.
Yeh key-value pairs me data store karta hai (jaise Python ka dictionary).
Sirf string format me store hota hai, to agar object store karna hai to ON.stringify() use karna padta hai.
✅ Basic Operations in Local Storage
Operation	Code
Data Store	localStorage.setItem("key", "value")
Data Retrieve	localStorage.getItem("key")
Data Remove	localStorage.removeItem("key")
Clear All Data	localStorage.clear()
📌 Example 1: Save & Retrieve a Name



// Data Save Karna
localStorage.setItem("username", "Sangeeta");

// Data Retrieve Karna
const name = localStorage.getItem("username");
console.log(name); // Output: Sangeeta

// Data Delete Karna
localStorage.removeItem("username");
📌 ON Data Store Karna
Local Storage sirf strings accept karta hai, to agar object ya array store karna hai, to ON.stringify() use karna padega.




const user = { name: "Sangeeta", age: 22 };

// Object ko String bana ke Store Karo
localStorage.setItem("user", ON.stringify(user));

// String ko Wapas Object me Convert Karo
const retrievedUser = ON.parse(localStorage.getItem("user"));

console.log(retrievedUser.name); // Output: Sangeeta
🔥 2. Toggle using Local Storage
Agar ek switch (toggle button) use karke dark mode ya koi bhi setting save karni ho, to Local Storage ka use karte hain.

✅ Toggle Dark Mode with Local Storage



import { useState, useEffect } from "react";

function App() {
  // 🔹 Local Storage se mode retrieve karna
  const getInitialMode = () => {
    return localStorage.getItem("darkMode") === "true"; 
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  // 🔹 Mode Toggle Function
  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode); // Local Storage update karna
  };

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div 
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <h1>{isDarkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
      <button onClick={toggleMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;
📌 Kaise Kaam Kar Raha Hai?
Page load hote hi getInitialMode() function check karega ki pehle se localStorage me "darkMode" hai ya nahi.
Agar "true" mila to isDarkMode = true set hoga.
Button click karne pe mode toggle hoga aur localStorage update ho jayega.
useEffect ka kaam hai ki jab bhi isDarkMode change ho, localStorage update ho.
🔥 3. useEffect Explained
📌 useEffect Kya Hota Hai?
useEffect ek hook hai jo React me side effects handle karta hai.
Kabhi bhi state ya props change hoti hai, to useEffect run hota hai.
Mostly API calls, DOM update, Local Storage update, event listeners, timers ke liye use hota hai.
✅ Basic Syntax



useEffect(() => {
  // Ye code tab run hoga jab component render hoga
}, []);
📌 3 Types of useEffect
1️⃣ Component Mount (Sirf Ek Baar)
Jab component first time load hoga tabhi chalega.



useEffect(() => {
  console.log("Component Mounted!");
}, []); // ✅ Empty dependency array = Sirf ek baar chalega
2️⃣ Component Update (Jab State Change Ho)
Jab bhi count change hoga, useEffect chalega.



const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed: ${count}`);
}, [count]); // ✅ Ye sirf tab chalega jab count change hoga
3️⃣ Component Unmount (Cleanup Function)
Jab component destroy ho raha ho, tab ye function chalega.



useEffect(() => {
  console.log("Component Mounted!");

  return () => {
    console.log("Component Unmounted!");
  };
}, []);
🔥 Recap (Short Notes)
Concept	Summary
Local Storage	Browser me data store karne ke liye, jo reload ke baad bhi save rahta hai.
setItem()	Data save karne ke liye.
getItem()	Data retrieve karne ke liye.
removeItem()	Ek key delete karne ke liye.
clear()	Poora local storage delete karne ke liye.
useEffect	Jab bhi state ya component update ho, tab ye function chalega.
useEffect with Empty []	Sirf ek baar chalega (mounting time).
useEffect with Dependency [state]	Jab state change hogi tab chalega.
useEffect Cleanup Function	Jab component unmount hoga tab chalega.
🔥 Ab Ek Final Challenge Tere Liye 😈
Ek form bana jisme user apna naam enter kare aur woh naam localStorage me save ho. Jab page reload kare, to wahi naam dikhna chahiye!

