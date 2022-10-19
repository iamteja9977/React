import "./App.css";//for normal styling
// import styles from "./App.module.css"; //other way of writing css

// function App() {
//   return (
//     <div className="App">
//       <Job salary={90000} position="Senior SDE" company="Amazon" />
//       <Job salary={12000} position="Junior SDE" company="Google" />
//       <Job salary={10000} position="Project Manager" company="Netflix" />
//     </div>
//   );
// }

// const Job = (props) => {
//   return (
//     <div>
//       <h1> {props.salary}</h1>
//       <h1> {props.position}</h1>
//       <h1> {props.company}</h1>
//     </div>
//   );
// };

// way1 styling
// function App(){
//   return(
//     <div ClassName="App">
//        <h1 ClassName="name"> Thirupathi</h1>
//     </div>

//     );
// }

// way2 styling
// function App(){
//   return(
//     <div ClassName={styles.App}>
//        <h1 ClassName={styles.name}> Thirupathi</h1>
//     </div>

//     );
// }


//ternary operator
// function App(){
//   const age=19;
//   const isGreen=true;
//   // if(age>=18){
//   //     return <h1>OVER AGE</h1>;
//   // }
//   // else{
//   //     return<div className="APP2"> UNDER AGE</div>;

//   // }
//   return<div className="App">
//       {age>=18 ?<h1> OVER AGE</h1> :<h1>UNDER AGE</h1>}
//       <h1 style={{color: isGreen ?"green" :"red"}}> i'm a scholar at Codeforindia foundation</h1>
//       {isGreen && <button> THIS IS A BUTTON</button>}
//   </div>;

// }

//lists in react
// function App() {
//   const names = ["Pedro", "Jake" , "Jessica", "Mike" , "Dustin" , "Lukas"];
//   return (
//   <div className="App">
//   {names.map((name, key) => {
//   return <h1 key={key}> {name} </h1>;
//   })}
//   </div>
//   );
//   }
  
//arrray of objects
// function App() {
//   const users=[
//   { name: "Pedro" , age: 21 },
//   { name: "Jake" , age: 25 },
//   { name: "Jessica" , age : 45 },
//   ];
//   return (
//     <div className="App">
//     {users.map((user, key) => {
//     return(
//           <div>
//           {user.name} {user.age}
//           </div>
//     );

//     })}
//     </div> 
//     );
//     }

//same with using components
import {User} from "./User"
function App() {
  const users=[
  { name: "Pedro" , age: 21 },
  { name: "Jake" , age: 25 },
  { name: "Jessica" , age : 45 },
  ];
  return (
    <div className="App">
    {users.map((user, key) => {
    return <User name={user.name} age={user.age} />;
    })}
    </div>
    );
    }
    // const User = (props) =>{
    // return(
    // <div>
    // {props.name} {props.age}
    // </div>
    // );
    // };


export default App;