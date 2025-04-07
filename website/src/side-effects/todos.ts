export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

export const getProjects = async (setData: React.Dispatch<React.SetStateAction<Todo[]>>): Promise<void> => {
    // fetch
    try {
        const data: Todo[] = await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
        setData(data.slice(0, 10))
    } catch (err) {
        console.warn(err);
        setData([])
    }
}