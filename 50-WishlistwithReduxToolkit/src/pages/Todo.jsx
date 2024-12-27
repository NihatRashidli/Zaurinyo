import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodos,
} from "../redux/features/todoSlice.js";
import "./Todo.css";
import Navbar from "../components/navbar/Navbar.jsx";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState({ id: null, text: "" });
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleEditTodo = (id, text) => {
    setEditTodo({ id, text });
  };

  const handleUpdateTodo = () => {
    dispatch(updateTodo(editTodo));
    setEditTodo({ id: null, text: "" });
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDeleteAllTodos = () => {
    dispatch(deleteAllTodos());
  };

  return (
    <div>
      <Navbar />
      <div className="todo-container">
        <div className="todo">
          <div className="upload-todo">
          <h1>Todo Əlavə Et:</h1>
            <div className="input">
              <div id="poda">
                <div className="glow"></div>
                <div className="darkBorderBg"></div>
                <div className="darkBorderBg"></div>
                <div className="darkBorderBg"></div>

                <div className="white"></div>
                <div className="border"></div>

                <div id="main">
                  <input
                    placeholder="Yeni todo yazın..."
                    type="text"
                    name="text"
                    className="input"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                  />
                  <div id="input-mask"></div>
                  <div id="pink-mask"></div>
                  <div className="filterBorder"></div>

                  <div id="search-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      height="24"
                      fill="none"
                      className="feather feather-search"
                    >
                      <circle
                        stroke="url(#search)"
                        r="8"
                        cy="11"
                        cx="11"
                      ></circle>
                      <line
                        stroke="url(#searchl)"
                        y2="16.65"
                        y1="22"
                        x2="16.65"
                        x1="22"
                      ></line>
                      <defs>
                        <linearGradient
                          gradientTransform="rotate(50)"
                          id="search"
                        >
                          <stop stopColor="#f8e7f8" offset="0%"></stop>
                          <stop stopColor="#b6a9b7" offset="50%"></stop>
                        </linearGradient>
                        <linearGradient id="searchl">
                          <stop stopColor="#b6a9b7" offset="0%"></stop>
                          <stop stopColor="#837484" offset="50%"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <button className="input-button" onClick={handleAddTodo}>
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text">Əlavə Et</span>
            </button>

          {editTodo.id && (
            <div className="modal">
              <input
                type="text"
                value={editTodo.text}
                onChange={(e) =>
                  setEditTodo({ ...editTodo, text: e.target.value })
                }
              />
              <button onClick={handleUpdateTodo}>
                <span class="circle1"></span>
                <span class="circle2"></span>
                <span class="circle3"></span>
                <span class="circle4"></span>
                <span class="circle5"></span>
                <span class="text">Redaktə Et</span>
              </button>
              <button onClick={() => setEditTodo({ id: null, text: "" })}>
                <span class="circle1"></span>
                <span class="circle2"></span>
                <span class="circle3"></span>
                <span class="circle4"></span>
                <span class="circle5"></span>
                <span class="text">Sil</span>
              </button>
            </div>
          )}

          <ul className="ul-todo">
            {todos.map((todo) => (
              <li className="li-todo" key={todo.id}>
                <span>{todo.text}</span>
                <div>
                  <button onClick={() => handleEditTodo(todo.id, todo.text)}>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">Redaktə Et</span>
                  </button>
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                    <span class="circle1"></span>
                    <span class="circle2"></span>
                    <span class="circle3"></span>
                    <span class="circle4"></span>
                    <span class="circle5"></span>
                    <span class="text">Sil</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {todos.length > 0 && (
            <button onClick={handleDeleteAllTodos}>
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text">Bütün Todoları Sil</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
