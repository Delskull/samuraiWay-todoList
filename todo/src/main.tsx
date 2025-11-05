import {createRoot} from 'react-dom/client'
import './App.css'
import {TaskList} from "./components/TaskList.tsx";
import {TaskDetails} from "./components/TaskDetails.tsx";
import {useState} from "react";



createRoot(document.getElementById('root')!).render(
    <MainPage/>
)

function MainPage() {
    const [selectedTaskId, setSelectedTaskId]= useState(null)
    const [boardId, setBoardId]= useState(null)

    const onTaskSelected = (taskid,boardId) => {
        setSelectedTaskId(taskid)
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
