// import {useState} from 'react';


// function Hello(props){
   
//    function handleClick(){
//     alert(`Hello, ${props.name}! 👋`);
//    }
   

//    const [count,setCount] = useState(0);
   
//    function decreaseButton() {
//      setCount((prevCount)=>(prevCount>0 ? prevCount-1 : prevCount));
//    }
//    return (
//     <div>
//         <h2>Hello,{props.name}!</h2>
//         <p>Counter: {count}</p>
//         <button onClick={()=>setCount(count+1)}>Increase</button>

//         <button onClick={decreaseButton}>Decrease</button>

//         <button onClick={handleClick}>Click Me</button>
//     </div>
//    )
// }

// export default Hello;

import {useState} from 'react';

function Hello(props){
    const [text,setText] = useState("");

    function handleChange(event){
        setText(event.target.value);
    }

    return(
        <div>
            <h2>Hello,{props.name}</h2>
            <input type="text" value={text} onChange={handleChange} />
            <p>You typed: {text}</p>
        </div>
    );
}

export default Hello;