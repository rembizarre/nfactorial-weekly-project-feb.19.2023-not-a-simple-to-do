import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";

export default function App() {
  //hooks for todos array, displaying active todos and todos type
  const [todos, setTodos] = useState([]);
  const [activeTodos, setActiveTodos] = useState([]);
  const [todoType, setTodoType] = useState("");

  //function to display selected type of todos
  const onTypeChange = (type) => {
    setTodoType(type);
    changeActiveTodos();
  };

  //function to filter active todos depending on selected type of todos
  const changeActiveTodos = () => {
    if (todoType === "To do") {
      setActiveTodos(todos.filter((item) => item.trashed === false));
    } else if (todoType === "Done") {
      setActiveTodos(todos.filter((item) => item.completed === true && item.trashed === false));
    } else if (todoType === "Trash") {
      setActiveTodos(todos.filter((item) => item.trashed === true));
    }
  };

  //function to change todo completion
  const checkedChange = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
        
      })
    );
  };


  //function to move todo into trash
  const trashedChange = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.trashed = !item.trashed;
        }
        return item
      })
    );
  };

  //function to delete forever
  const deleteChange = (id) => {
    setTodos(
      todos.filter((item) => {
        if (item.id === id) {
          return false
        }
        return true
      })
    );
  };

  //function to add new Todo
  const addTodo = (name) => {
    //identifying max id to create unique id for each todo
    let maxId = 0;
    if (todos.length !== 0) {
      maxId = todos.sort((a, b) => b.id - a.id)[0].id;
    }
    //adding new todo
    const newTodos = todos;
    newTodos.push({
      id: maxId + 1,
      name: name,
      completed: false,
      trashed: false,
    });
    // to display "To do" section immediately after adding new todo irrespectively to active type displayed at the moment of adding new todo
    onTypeChange("To do");
  };
  //hook to track changes in active todos
  useEffect(() => {
    changeActiveTodos();
  }, [todoType, todos]);

  return (
    <div className="flex container">
      <Header />
      <Navigation
        onTypeChange={(type) => onTypeChange(type)}
        addTodo={(name) => addTodo(name)}
        getTodoType={todoType}
      />
      <TodoList
        todos={activeTodos}
        checkedChange={(id) => checkedChange(id)}
        trashedChange={(id) => trashedChange(id)}
        deleteChange={(id) => deleteChange(id)}
        todoType={todoType}
      />
      <Footer />
    </div>
  );
}

