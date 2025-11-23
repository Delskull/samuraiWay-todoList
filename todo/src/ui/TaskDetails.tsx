import {useTaskDetails} from "../bll/useTaskDetails.tsx";


type Props = {
    selectedTaskId: string | null
    boardId: string | null
}

export function TaskDetails({selectedTaskId, boardId}:Props) {

    const {taskDetails } = useTaskDetails(selectedTaskId, boardId)


    return <div className={'info__block'}>
        <h2> Task details </h2>
        {!taskDetails && !selectedTaskId && 'Task is not selected'}
        {!taskDetails && selectedTaskId && 'Loading...'}
        {taskDetails && selectedTaskId && taskDetails.id !== selectedTaskId && 'Loading...'}
        {taskDetails && selectedTaskId && taskDetails.id == selectedTaskId &&
            <div>
                <ul>
                    <li className={'li__description'}> Title - {taskDetails.attributes.title}</li>
                    <li className={'li__description'}> BoardTitle
                        - {taskDetails.attributes.boardTitle}</li>
                    {taskDetails.attributes.description === null ?
                        <li className={'li__description'}> Description - No description</li> :
                        <li className={'li__description'}> Description
                            - {taskDetails.attributes.description}</li>}
                </ul>
            </div>
        }
    </div>
}