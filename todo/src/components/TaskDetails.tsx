import {useEffect, useState} from "react";


type TaskDetailsData = {
    id:	string
    type:	string
    attributes: TaskDetailsDto
}

type TaskDetailsDto = {
    id:	string
    title:	string
    description: string | null
boardId:	string
boardTitle:	string
order:	number
status: 0 | 1 | 2 | 3
priority: 0 | 1 | 2 | 3 | 4
startDate:	{}
deadline:	{}
addedAt:	string
updatedAt: string
attachments: Array<string>
}
type Props = {
    selectedTaskId: string | null
    boardId: string | null
}

export function TaskDetails({selectedTaskId, boardId}:Props) {

    const [selectedTask, setSelectedTask] = useState<TaskDetailsData | null>(null)


    useEffect(() => {
        if (!selectedTaskId) {
            setSelectedTask(null)
            return
        }

        fetch('https://trelly.it-incubator.app/api/1.0/boards/' + boardId + '/tasks/' + selectedTaskId, {
            headers: {
                'api-key': 'a4ac3cd8-354c-4073-b62b-8eac19a5e922'
            }
        }).then(res => res.json())
            .then(json => setSelectedTask(json.data))
    }, [selectedTaskId]);

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