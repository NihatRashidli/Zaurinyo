import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useUserList } from "../context/UserProvider";

const loginSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters long"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useUserList();

  const submitForm = async (values, actions) => {
    try {
      const res = await axios.get("http://localhost:3000/users");

      const user = res.data.find(
        (user) =>
          user.username === values.username && user.password === values.password
      );

      if (user) {
        const updatedUser = { ...user, isLogin: true };

        await axios.put(
          `http://localhost:3000/users/${updatedUser.id}`,
          updatedUser
        );

        console.log("Navigating to /home");

        setLoggedInUser(updatedUser);

        navigate("/home");
        toast.success("Login successful!");
      } else {
        toast.error("Invalid username or password.");
      }

      actions.resetForm();
    } catch (error) {
      toast.error("An error occurred during login.");
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: submitForm,
    validationSchema: loginSchema,
  });

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          {errors.username && <p className="error">{errors.username}</p>}
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={values.username}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          {errors.password && <p className="error">{errors.password}</p>}
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <a href="/register">Sign Up?</a>
        <button type="submit" className="register-btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
