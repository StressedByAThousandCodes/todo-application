"use client"

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleTask: (
        id: string,
        complete: boolean
    ) => void
}

export function TaskItem( { id, title, complete, toggleTask: toggleTask }: TodoItemProps ) {
    return <li className="flex gap-1 items-center">
        <input 
            id={id} 
            type="checkbox" 
            defaultChecked={complete} 
            onChange={event => toggleTask(id, event.target.checked) }
            className="cursor-pointer peer" />
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{ title }</label>
    </li>
}