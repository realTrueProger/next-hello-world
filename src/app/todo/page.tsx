"use client"

import {useState} from "react";

type ToDo = {
    id: number;
    text: string;
}

export default function ToDoList() {
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState<ToDo[]>([]);

    const handleAddToDo = () => {
        const todo = text.trim();

        if (todo) {
            setToDos(prev => [...prev, {id: Date.now(), text: todo}]);
            setText("");
        }
    }

    return (
        <>
            <div>To Do page</div>
            <input type="text"
                   value={text}
                   onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddToDo}>Add to Do</button>
            <ul>
                {toDos.map(todo => (<li key={todo.id}>{todo.text}</li>))}
            </ul>
        </>
    )
}