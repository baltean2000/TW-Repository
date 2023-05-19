import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import users from "./Users";

// Salvează datele utilizatorului în localStorage la încărcarea paginii
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Afișează datele utilizatorului din localStorage în consola browserului
console.log(JSON.parse(localStorage.getItem("users")));

ReactDOM.render(<LoginForm />, document.getElementById("root"));
