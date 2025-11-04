import {useEffect, useState} from "react";

export function TaskDetails(props) {

    const [selectedTask, setSelectedTask] = useState(null)
    const selectedTaskId = props.selectedTaskId
    const boardId = props.boardId

    useEffect(() => {
        if (!selectedTaskId) {
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