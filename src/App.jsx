// Alternative App.jsx with conditional rendering
import Result from "./components/Result";

// Complete Pass component
function Pass({ position }) {
  return (
    <div style={{ color: "green", padding: "10px", border: "2px solid green" }}>
      <h1>Pass!</h1>
      <p>Your position in class is {position}</p>
    </div>
  );
}

// Complete Fail component
function Fail() {
  return (
    <div style={{ color: "red", padding: "10px", border: "2px solid red" }}>
      <h1>Fail</h1>
      <p>Better luck next time :)</p>
    </div>
  );
}

function calculateGrade(marks) {
  if (marks >= 90 && marks <= 100) return "A";
  if (marks >= 80 && marks < 90) return "B";
  if (marks >= 70 && marks < 80) return "C";
  if (marks >= 60 && marks < 70) return "D";
  if (marks >= 50 && marks < 60) return "E";
  return "F";
}

function App() {
  let students = [
    { name: "Ahmed", marks: 95, color: "green" },
    { name: "Ali", marks: 40, color: "blue" },
    { name: "Zubair", marks: 30, color: "red" },
    { name: "Mujtaba", marks: 85, color: "green" },
    { name: "Sara", marks: 75, color: "orange" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Results with Pass/Fail Components</h1>
      
      {students.map((student, index) => (
        <div key={index}>
          <h3>{student.name}'s Performance:</h3>
          
          {/* Conditional rendering of Pass/Fail components */}
          {student.marks >= 50 ? (
            <Pass position={index + 1} />
          ) : (
            <Fail />
          )}
          
          {/* Result component with grade */}
          <Result
            marks={student.marks}
            color={student.color}
            name={student.name}
            grade={calculateGrade(student.marks)}
          />
          
          {/* HR after each result */}
          <hr style={{ 
            border: "1px solid #ccc", 
            margin: "20px 0",
            width: "100%" 
          }} />
        </div>
      ))}
    </div>
  );
}

export default App;










// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
