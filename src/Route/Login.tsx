import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
interface User {
  email: string;
  pswd: string;
}
interface LoginProps {
  signin: () => void;
}
const Login: React.FC<LoginProps> = ({ signin }) => {
  const [data, setData] = useState<User>({ email: '', pswd: '' });
  const ref1 = useRef<HTMLHeadingElement>(null);
  const navigate = useNavigate();

  const valupd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const checkUser = () => {
    if (data.email === "admin@gmail.com" && data.pswd === "admin") {
      signin();
      navigate("/menu");
    } else {
      if (ref1.current) ref1.current.innerHTML = "Invalid Credentials...!";
    }
  };
  return (
    <div className="container mt-3">
      <h2>Welcome to Private Routing</h2>
      <h4 className="login-heading">Login to continue</h4>
      <form>
        <div className="mb-3 mt-3">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" onChange={valupd} placeholder="Enter email" name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" onChange={valupd} placeholder="Enter password" name="pswd" />
        </div>
        <div>
          <h5 ref={ref1} className="invalid-credentials" style={{color:"red"}}></h5>
        </div>
        <button type="button" className="btn btn-primary" onClick={checkUser}>Sign in</button>
      </form>
    </div>
  );
};
export default Login;