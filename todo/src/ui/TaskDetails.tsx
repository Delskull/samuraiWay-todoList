import {useEffect, useState} from "react";
import {getTask, type TaskDetailsData} from "../dal/api.ts";


type Props = {
    selectedTaskId: string | null
    boardId: string | null
}

export function TaskDetails({selectedTaskId, boardId}:Props) {

    const [selectedTask, setSelectedTask] = useState<TaskDetailsData | null>(null)


    useEffect(() => {
        if (!selectedTaskId || !boardId) {
            setSelectedTask(null)
            return
        }

        getTask(boardId,selectedTaskId)
            .then(json => setSelectedTask(json.data))
    }, [selectedTaskId, boardId]);

    return <div className={'info__block'}>
        <h2> Task details </h2>
        {!selectedTask && !selectedTaskId && 'Task is not selected'}
        {!selectedTask && selectedTaskId && 'Loading...'}
        {selectedTask && selectedTaskId && selectedTask.id !== selectedTaskId && 'Loading...'}
        {selectedTask && selectedTaskId && selectedTask.id == selectedTaskId &&
            <div>
                <ul>
                    <li className={'li__description'}> Title - {selectedTask.attributes.title}</li>
                    <li className={'li__description'}> BoardTitle
                        - {selectedTask.attributes.boardTitle}</li>
                    {selectedTask.attributes.description === null ?
                        <li className={'li__description'}> Description - No description</li> :
                        <li className={'li__description'}> Description
                            - {selectedTask.attributes.description}</li>}
                </ul>
            </div>
        }
    </div>
}