import {createRoot} from 'react-dom/client'
import './App.css'
import {TaskList} from "./ui/TaskList.tsx";
import {TaskDetails} from "./ui/TaskDetails.tsx";
import {useTaskSelection} from "./bll/useTaskSelection.tsx";


createRoot(document.getElementById('root')!).render(
    <MainPage/>
)

function MainPage() {
    const { selectedTaskId,boardId, onTaskSelected } = useTaskSelection()

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
