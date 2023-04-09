import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"

function Login() {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");

  let text1 = "1234";
  let pass2 = "1234";

  return (
    <div className="login">
        <h1>Login</h1>
      <input
        className="password"
        type="text"
        value={text}
        onChange={(e) => {
            setText(e.target.value)
        }}
      />
      <input
        className="password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button>
        {text == text1 && pass == pass2 ? (
          <Link to="/home">Login</Link>
        ) : (
          "Login"
        )}
      </button>
    </div>
  );
}

export default Login;
