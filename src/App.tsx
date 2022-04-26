import React from 'react';
import './App.css';
import TodoList from "./TodoList";

// CRUD - create, read, update, delete
// GUI - графический интерфейс   CLI - command line interface

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const App = () => {
    const todoListTitle_1 = "What to learn"
    const todoListTitle_2 = "What to buy"
    const todoListTitle_3 = "What to read"
    const tasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]

    return (
        <div className="App">
            <TodoList
                title={todoListTitle_1}
                tasks={tasks}
            />

        </div>
    );
}

export default App;
