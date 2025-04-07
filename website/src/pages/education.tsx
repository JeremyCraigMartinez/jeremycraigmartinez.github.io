import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { getProjects } from "../side-effects/todos";
import type { Todo } from "../side-effects/todos";
import { actionIncrement, actionDecrement } from "../store/actions";

const Education: React.FC = () => {
    const count = useSelector((state: RootState) => state.home.count);
    const dispatch = useDispatch();

    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        getProjects(setTodos)
    }, [])

    const sortedList = useMemo(() => todos.sort(
        (a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })
    ), [todos])

    return (
        <>
            <h1>Education</h1>

            <ul>
                {sortedList.map(item => (
                    <li>{item.title}</li>
                ))}
            </ul>

            <hr />
            <p>The current count is {count + todos.length}</p>
            <button onClick={() => dispatch(actionIncrement())}>Add</button>
            <button onClick={() => dispatch(actionDecrement())}>Remove</button>
        </>
    );
}

export default Education;