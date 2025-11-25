import {useTaskDetails} from "../bll/useTaskDetails.tsx";
import styles from './TaskDetails.module.css'

type Props = {
    selectedTaskId: string | null
    boardId: string | null
}

export function TaskDetails({selectedTaskId, boardId}:Props) {

    const {taskDetails } = useTaskDetails(selectedTaskId, boardId)


    return <div className={styles.container}>
        <h2> Task details </h2>
        {!taskDetails && !selectedTaskId && 'Task is not selected'}
        {!taskDetails && selectedTaskId && 'Loading...'}
        {taskDetails && selectedTaskId && taskDetails.id !== selectedTaskId && 'Loading...'}
        {taskDetails && selectedTaskId && taskDetails.id == selectedTaskId &&
            <div>
                <ul>
                    <li className={styles.item__list}> Title - {taskDetails.attributes.title}</li>
                    <li className={styles.item__list}> BoardTitle
                        - {taskDetails.attributes.boardTitle}</li>
                    {taskDetails.attributes.description === null ?
                        <li className={styles.item__list}> Description - No description</li> :
                        <li className={styles.item__list}> Description
                            - {taskDetails.attributes.description}</li>}
                </ul>
            </div>
        }
    </div>
}