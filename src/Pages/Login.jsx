import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setLoginTrue, setMyname } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if (username === "alex" && password === "1234") {
      setLoginTrue();
      setMyname(username)
      navigate(`/?name=${username}`);
    }
  };

  return (
    <>
      <div className="lgn">
        <div className="lg-form">
          <h2>Login</h2>
          <form onSubmit={login}>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
