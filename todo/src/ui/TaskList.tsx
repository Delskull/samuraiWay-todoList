import {TaskItem} from "./TaskItem.tsx";
import {useTasks} from "../bll/useTasks.tsx";


type Props = {
    selectedTaskId: string | null
    onTaskSelected: (taskId: string | null, boardId:string | null) => void
}

export function TaskList({selectedTaskId, onTaskSelected}: Props) {
    const { tasks } = useTasks()

    if (tasks === null || tasks === undefined) {
        return <div className={'li__div li__span'}>Загрузка...</div>
    }

    if (tasks.length === 0) {
        return <div className={'li__div li__span'}>Задачи отсутствуют</div>
    }

    const handleResetClick = () => {
        onTaskSelected(null,null)
    }

    return <div>
        <button onClick={handleResetClick}>Reset</button>
        <hr/>
        <ul>
            {tasks.map((task) => {
                return <TaskItem
                    key={task.id}
                    task={task}
                    isSelected={task.id === selectedTaskId}
                    onTaskSelected={onTaskSelected}


                />
            })}
        </ul>
    </div>
}


