import React from 'react';

// --- Global Styles for Enhanced UI ---
const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: '800px',
    margin: '30px auto',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    borderBottom: '3px solid #007bff',
    paddingBottom: '10px',
  },
  studentBlock: {
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease',
  },
  pass: {
    backgroundColor: '#e6ffed', // Light Green
    border: '1px solid #00c853',
  },
  fail: {
    backgroundColor: '#ffeded', // Light Red
    border: '2px solid #ff4444',
  },
  hrTag: {
    border: 'none',
    borderTop: '1px dashed #ccc',
    margin: '20px 0',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 0',
  },
  gradeSpan: (isFailing) => ({
    fontWeight: '700',
    fontSize: '1.2em',
    padding: '2px 8px',
    borderRadius: '4px',
    color: isFailing ? '#fff' : '#000',
    backgroundColor: isFailing ? '#ff4444' : '#ffc107',
  }),
  statusSpan: (isFailing) => ({
    fontWeight: '600',
    color: isFailing ? '#ff4444' : '#00c853',
  }),
};

// --- Grading Logic ---
const calculateGradeAndStatus = (average) => {
  let grade;
  let status;

  if (average >= 90) { grade = 'A'; status = 'Pass'; } 
  else if (average >= 80) { grade = 'B'; status = 'Pass'; } 
  else if (average >= 70) { grade = 'C'; status = 'Pass'; } 
  else if (average >= 60) { grade = 'D'; status = 'Pass'; } 
  else if (average >= 50) { grade = 'E'; status = 'Pass'; } 
  else { 
    grade = 'F'; 
    status = 'Fail ❌'; // Requirement 2: Fail component
  }

  return { grade, status };
};

// --- Main Component ---
const StudentGrader = ({ students }) => {

  if (!students || students.length === 0) {
    return <div style={styles.container}><p>No student data provided.</p></div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Student Grade Report Card</h2>
      
      {students.map((student, index) => {
        // Calculations
        const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
        const averageScore = totalScore / student.scores.length;
        const roundedAverage = averageScore.toFixed(1);

        // Grading
        const { grade, status } = calculateGradeAndStatus(averageScore);
        const isFailing = status.includes('Fail');
        
        // Dynamic block style based on status
        const blockStyle = isFailing ? styles.fail : styles.pass;

        return (
          <React.Fragment key={index}>
            
            <div style={{ ...styles.studentBlock, ...blockStyle }}>
              <h3 style={{ margin: '0 0 10px 0', color: isFailing ? '#b71c1c' : '#004d40' }}>{student.name}</h3>

              {/* Display Details */}
              <div style={styles.detailRow}>
                <span>Raw Scores:</span>
                <span>{student.scores.join(', ')}</span>
              </div>
              <div style={styles.detailRow}>
                <span>Average Score:</span>
                <span>{roundedAverage}</span>
              </div>
              
              <hr style={{ margin: '10px 0', border: 'none', borderTop: '1px solid #ddd' }} />

              {/* Requirement 3: Print Grade */}
              <div style={styles.detailRow}>
                <span>Final Grade:</span>
                <span style={styles.gradeSpan(isFailing)}>{grade}</span>
              </div>
              
              {/* Requirement 2: Fail Status */}
              <div style={styles.detailRow}>
                <span>Status:</span>
                <span style={styles.statusSpan(isFailing)}>{status}</span>
              </div>
            </div>
            
            {/* Requirement 1: hr (tag) after each result, except the last one */}
            {index < students.length - 1 && <hr style={styles.hrTag} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

// --- Example Data and App Wrapper ---
const sampleStudents = [
    { name: 'Asad', scores: [95, 88, 92] },   // A
    { name: 'Bilal', scores: [75, 80, 78] },   // C
    { name: 'Jabbar', scores: [55, 62, 58] }, // E
    { name: 'Danial', scores: [40, 45, 30] },  // F (Fail)
    { name: 'Adanan', scores: [65, 70, 68] },     // D
];

const App = () => (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f7f6' }}>
        <StudentGrader students={sampleStudents} />
    </div>
);

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
