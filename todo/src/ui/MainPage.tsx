import {createRoot} from 'react-dom/client'
import '../App.css'
import styles from './MainPage.module.css'
import {TaskList} from "./TaskList.tsx";
import {TaskDetails} from "./TaskDetails.tsx";
import {useTaskSelection} from "../bll/useTaskSelection.tsx";


createRoot(document.getElementById('root')!).render(
    <MainPage/>
)

function MainPage() {
    const { selectedTaskId,boardId, onTaskSelected } = useTaskSelection()

    return <div>
        <div className= {styles.container}>
        <TaskList
            selectedTaskId={selectedTaskId}
            onTaskSelected={onTaskSelected}/>

        <TaskDetails selectedTaskId={selectedTaskId}
                     boardId={boardId}  />
        </div>
    </div>
}
