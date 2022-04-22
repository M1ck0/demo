import { Link } from "react-router-dom";

import Button from "common/components/button";
import Input from "common/components/input";

import "./login.css";

const Login = () => {
  return (
    <div className="form">
      <Input label="Full Name" type="text" placeholder="John Doe" />
      <Input label="Email" type="email" placeholder="john@gmail.com" />
      <Button title="Login" />
    </div>
  );
};

export default Login;
