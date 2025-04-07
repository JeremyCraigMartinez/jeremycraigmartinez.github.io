import { useEffect, useState } from "react";
import { getProjects } from "../side-effects/todos";
import type { Todo } from "../side-effects/todos";

const Projects: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getProjects().then(setTodos);
    }, []);

    return (
        <>
            <h1>Projects</h1>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{`${todo.title} by ${todo.userId} is ${todo.completed ? 'complete' : 'incomplete'}`}</li>
                ))}
            </ul>
        </>
    );
}

export default Projects;