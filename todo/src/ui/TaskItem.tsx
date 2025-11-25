import type {GlobalTaskListItemJsonApiData} from "../dal/api.ts";
import styles from './TaskItem.module.css'


type Props = {
    task: GlobalTaskListItemJsonApiData
    isSelected: boolean
    onTaskSelected: (taskId: string, boardId: string) => void
}

export function TaskItem({task, isSelected, onTaskSelected}: Props) {

    const handleSelectClick = () => {
        onTaskSelected(task.id, task.attributes.boardId)
    }

    const className = styles.list + ' ' + (isSelected ? styles.list__item_select : '')

    return <li
        key={task.id}
        className={className}
        onClick={handleSelectClick}
    >
        <div className={styles.list__item}><span className={styles.list__item_content}> Заголовок: </span> <span
            style={{
                textDecorationLine: task.attributes.status >= 2 ? 'line-through' : 'none'
            }}> {task.attributes.title} </span></div>
        <div className={styles.list__item}><span
            className={styles.list__item_content}> Статус: </span> {task.attributes.status} <input
            type={"checkbox"}
            checked={task.attributes.status >= 2}/>
        </div>
        <div className={styles.list__item}><span className={styles.list__item_content}> </span> Дата создания
            задачи: {new Date(task.attributes.addedAt).toLocaleDateString()}</div>

    </li>
}