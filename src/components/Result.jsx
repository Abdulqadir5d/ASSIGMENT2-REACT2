// components/Result.jsx
function Result({ marks, color, name, grade }) {
  const isPass = marks >= 50;
  
  return (
    <div style={{ 
      border: `2px solid ${color}`, 
      padding: "15px", 
      margin: "10px 0",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9"
    }}>
      <h2 style={{ color: color }}>{name}'s Result</h2>
      <p><strong>Marks:</strong> {marks}/100</p>
      <p><strong>Grade:</strong> 
        <span style={{ 
          fontWeight: "bold",
          color: grade === "F" ? "red" : "green",
          marginLeft: "10px"
        }}>
          {grade}
        </span>
      </p>
      <p><strong>Status:</strong> 
        <span style={{ 
          color: isPass ? "green" : "red",
          fontWeight: "bold",
          marginLeft: "10px"
        }}>
          {isPass ? "PASS" : "FAIL"}
        </span>
      </p>
    </div>
  );
}

export default Result;