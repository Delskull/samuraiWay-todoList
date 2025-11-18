import {createRoot} from 'react-dom/client'
import './App.css'
import {TaskList} from "./ui/TaskList.tsx";
import {TaskDetails} from "./ui/TaskDetails.tsx";
import {useState} from "react";



createRoot(document.getElementById('root')!).render(
    <MainPage/>
)

function MainPage() {
    const [selectedTaskId, setSelectedTaskId]= useState<string | null>(null)
    const [boardId, setBoardId]= useState<string | null>(null)

    const onTaskSelected = (taskId:string | null,boardId:string | null) => {
        setSelectedTaskId(taskId)
        setBoardId?.(boardId)

    }
    return <div>
        <div style={{display: 'flex', gap: '30px'}}>
        <TaskList
            selectedTaskId={selectedTaskId}
            onTaskSelected={onTaskSelected}/>

        <TaskDetails selectedTaskId={selectedTaskId}
                     boardId={boardId}  />
        </div>
    </div>
}
