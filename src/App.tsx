import React from 'react';
import './App.css';
import ToDoList from "./ToDoList";

// CRUD - create, read, update, delete
//GUI - графический интерфейс   CLI - command line interface
function App() {
    return (
        <div className="App">
            <ToDoList />
            <ToDoList />
            <ToDoList />
            <ToDoList />

        </div>
    );
}

export default App;
