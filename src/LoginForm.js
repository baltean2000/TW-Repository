import React, { useState } from "react";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor:"bleu"
};

const inputStyle = {
  padding: "10px",
  margin: "10px",
  width: "200px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "#3498db",
  color: "#fff",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer"
};

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Verifică dacă există datele de autentificare în localStorage
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      alert("Autentificare reușită!");
    } else {
      alert("Autentificare eșuată!");
    }
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nume utilizator:</label>
        <input
          type="text"
          id="username"
          style={inputStyle}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Parolă:</label>
        <input
          type="password"
          id="password"
          style={inputStyle}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit" style={buttonStyle}>
        Autentificare
      </button>
    </form>
  );
}

export default LoginForm;
