import React from 'react';

// --- 1. Grading Logic Function ---
/**
 * Calculates the final grade and status for a student based on the criteria.
 * @param {number} average - The student's average score.
 * @returns {{grade: string, status: string}}
 */
const calculateGradeAndStatus = (average) => {
  let grade;
  let status;

  // Requirement 3: Grade assignment logic
  if (average >= 90) {
    grade = 'A';
    status = 'Pass';
  } else if (average >= 80) {
    grade = 'B';
    status = 'Pass';
  } else if (average >= 70) {
    grade = 'C';
    status = 'Pass';
  } else if (average >= 60) {
    grade = 'D';
    status = 'Pass';
  } else if (average >= 50) {
    grade = 'E';
    status = 'Pass';
  } else {
    grade = 'F';
    // Requirement 2: Complete Fail component/status
    status = 'Fail ❌';
  }

  return { grade, status };
};

// --- 2. Main React Component ---
/**
 * A React component to display and grade student results.
 * @param {Object[]} students - Array of student objects: { name: string, scores: number[] }
 */
const StudentGrader = ({ students }) => {

  if (!students || students.length === 0) {
    return <p>No student data provided to the grader.</p>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Student Grade Report</h2>
      
      {students.map((student, index) => {
        // Calculate average score
        const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
        const averageScore = totalScore / student.scores.length;
        const roundedAverage = averageScore.toFixed(1);

        // Calculate grade and status
        const { grade, status } = calculateGradeAndStatus(averageScore);

        const isFailing = status.includes('Fail');

        return (
          // Using a React fragment to group the student's output and the HR tag
          <React.Fragment key={index}>
            <div 
              style={{ 
                padding: '10px', 
                marginBottom: '10px', 
                backgroundColor: isFailing ? '#ffe0e0' : '#f9f9f9',
                border: isFailing ? '2px solid red' : '1px solid #ddd',
                borderRadius: '5px'
              }}
            >
              <h3>{student.name}</h3>
              <p>Scores: **{student.scores.join(', ')}**</p>
              <p>Average Score: **{roundedAverage}**</p>
              
              {/* Requirement 3: Print Grade */}
              <p>Final Grade: <span style={{ fontWeight: 'bold', color: isFailing ? 'red' : 'green' }}>{grade}</span></p>
              
              {/* Requirement 2: Fail component/status */}
              <p>Status: <span style={{ fontWeight: 'bold' }}>{status}</span></p>
            </div>
            
            {/* Requirement 1: hr (tag) after each result, except the last one */}
            {index < students.length - 1 && <hr style={{ borderTop: '1px dashed #bbb' }} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// --- Example Usage Component ---
const App = () => {
    const sampleStudents = [
        { name: 'Alice Smith', scores: [95, 88, 92] },   // Average 91.7 -> A (Pass)
        { name: 'Bob Johnson', scores: [75, 80, 78] },   // Average 77.7 -> C (Pass)
        { name: 'Charlie Brown', scores: [55, 62, 58] }, // Average 58.3 -> E (Pass)
        { name: 'Diana Prince', scores: [40, 45, 30] },  // Average 38.3 -> F (Fail)
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif' }}>
            <StudentGrader students={sampleStudents} />
        </div>
    );
}

export default App;













// // Alternative App.jsx with conditional rendering
// import Result from "./components/Result";

// // Complete Pass component
// function Pass({ position }) {
//   return (
//     <div style={{ color: "green", padding: "10px", border: "2px solid green" }}>
//       <h1>Pass!</h1>
//       <p>Your position in class is {position}</p>
//     </div>
//   );
// }

// // Complete Fail component
// function Fail() {
//   return (
//     <div style={{ color: "red", padding: "10px", border: "2px solid red" }}>
//       <h1>Fail</h1>
//       <p>Better luck next time :)</p>
//     </div>
//   );
// }

// function calculateGrade(marks) {
//   if (marks >= 90 && marks <= 100) return "A";
//   if (marks >= 80 && marks < 90) return "B";
//   if (marks >= 70 && marks < 80) return "C";
//   if (marks >= 60 && marks < 70) return "D";
//   if (marks >= 50 && marks < 60) return "E";
//   return "F";
// }

// function App() {
//   let students = [
//     { name: "Ahmed", marks: 95, color: "green" },
//     { name: "Ali", marks: 40, color: "blue" },
//     { name: "Zubair", marks: 30, color: "red" },
//     { name: "Mujtaba", marks: 85, color: "green" },
//     { name: "Sara", marks: 75, color: "orange" },
//   ];

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Student Results with Pass/Fail Components</h1>
      
//       {students.map((student, index) => (
//         <div key={index}>
//           <h3>{student.name}'s Performance:</h3>
          
//           {/* Conditional rendering of Pass/Fail components */}
//           {student.marks >= 50 ? (
//             <Pass position={index + 1} />
//           ) : (
//             <Fail />
//           )}
          
//           {/* Result component with grade */}
//           <Result
//             marks={student.marks}
//             color={student.color}
//             name={student.name}
//             grade={calculateGrade(student.marks)}
//           />
          
//           {/* HR after each result */}
//           <hr style={{ 
//             border: "1px solid #ccc", 
//             margin: "20px 0",
//             width: "100%" 
//           }} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;










// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
