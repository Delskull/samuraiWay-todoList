import {useEffect, useState} from "react";
import {type GlobalTaskListItemJsonApiData, TaskItem} from "./TaskItem.tsx";



type Props = {
    selectedTaskId: string | null
    onTaskSelected: (taskId: string | null, boardId:string | null) => void
}

export function TaskList({selectedTaskId, onTaskSelected}: Props) {
    const [tasks, setTasks] = useState<Array<GlobalTaskListItemJsonApiData> | null>(null)

    useEffect(() => {
        fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: {
                'api-key': 'a4ac3cd8-354c-4073-b62b-8eac19a5e922'
            }
        }).then(res => res.json())
            .then(json => setTasks(json.data))
    }, []);

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


