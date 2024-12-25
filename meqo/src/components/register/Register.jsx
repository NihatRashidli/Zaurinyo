import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  surname: Yup.string()
    .required("Surname is required")
    .min(4, "Surname must be at least 4 characters long"),
  username: Yup.string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters long"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const navigate = useNavigate();

  const submitForm = async (values, actions) => {
    try {
      const response = await axios.post("http://localhost:3000/users", values);
      

      actions.resetForm();
      navigate("/login");
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        console.error("Error response data:", error.response.data);
      }

      alert(
        "An error occurred: " +
          (error.response?.data?.message || "Please try again.")
      );
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: submitForm,
    validationSchema: RegisterSchema,
  });

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="label-input">
          <div className="label-container">
            <label htmlFor="name">Name:</label>
            {errors.name ? (
              <span className="error-message">{errors.name}</span>
            ) : null}
          </div>
          <input
            type="text"
            id="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <div className="label-container">
            <label htmlFor="surname">Surname:</label>
            {errors.surname ? (
              <span className="error-message">{errors.surname}</span>
            ) : null}
          </div>
          <input
            type="text"
            id="surname"
            value={values.surname}
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <div className="label-container">
            <label htmlFor="username">Username:</label>
            {errors.username ? (
              <span className="error-message">{errors.username}</span>
            ) : null}
          </div>
          <input
            type="text"
            id="username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <div className="label-container">
            <label htmlFor="email">Email:</label>
            {errors.email ? (
              <span className="error-message">{errors.email}</span>
            ) : null}
          </div>
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <div className="label-container">
            <label htmlFor="password">Password:</label>
            {errors.password ? (
              <span className="error-message">{errors.password}</span>
            ) : null}
          </div>
          <input
            type="password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="label-input">
          <div className="label-container">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            {errors.confirmPassword ? (
              <span className="error-message">{errors.confirmPassword}</span>
            ) : null}
          </div>
          <input
            type="password"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <Link to="/login">Already have an account? Sign In</Link>
        <button className="register-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
