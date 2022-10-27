import "./App.css";
import {useState} from "react";

// function App(){
//     const[age,setAge]=useState( 0);
//     const increaseAge=()=>{
//         setAge(age+1);
//     };
//     return (
//         <div className="App">
//         {age}
//         <button onClick={increaseAge}> Increase Age </button>
//         </div>
//         );
// }


//WTEVER we type will be displayed
// function App() {
//     const [inputValue, setInputValue] = useState("" );
//     const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//     };
//     return (
//     <div className="App">
//     <input type="text" onChange={handleInputChange} />
//     {inputValue}
//     </div>
//     );
//     }



//click on hide
// function App() {
//     const [showText, setShowText] = useState(true);
//     return (
//     <div className="App">
//     <button
//     onClick={() => {
//     setShowText(!showText);
//     }}>
//     Show/Hide
//     </button>
//     {showText && <h1> HI MY NAME IS Thirupathi</h1>}
//     </div>
//     );
// }

function App() {
    const [count, setCount] = useState(0);
    const increase = ()=>{
    setCount(count + 1) ;
    };
    const decrease = () => {
    setCount(count -1);
    };
    const setToZero = () => {
    setCount(0);
    }; 
    return (
        <div className="App">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={setToZero}>Set to Zero</button>
        {count}
        </div>
        );
        }
export default App;