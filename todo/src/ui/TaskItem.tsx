import type {GlobalTaskListItemJsonApiData} from "../dal/api.ts";
import styles from './TaskItem.module.css'
import clsx from "clsx";


type Props = {
    task: GlobalTaskListItemJsonApiData
    isSelected: boolean
    onTaskSelected: (taskId: string, boardId: string) => void
}

export function TaskItem({task, isSelected, onTaskSelected}: Props) {

    const handleSelectClick = () => {
        onTaskSelected(task.id, task.attributes.boardId)
    }

    const listClassName = clsx({
        [styles.list]: true,
        [styles.list__item_select]: isSelected ,
        [styles.list__item_select_status]: task.attributes.status >= 2 && !isSelected

    })
    const listItemClassName = clsx({
        [styles.list__item]: true,


    })
    const listThrowLine = clsx({
        [styles.list__item_throw]: task.attributes.status >=2
    })

    return <li
        key={task.id}
        className={listClassName}
        onClick={handleSelectClick}
    >
        <div className={listItemClassName }><span className={styles.list__item_content}> Заголовок: </span>
            <span className={listThrowLine}> {task.attributes.title} </span>
        </div>
        <div className={listItemClassName}>Статус:  {task.attributes.status}
            <input
            type={"checkbox"}
            checked={task.attributes.status >= 2}/>
        </div>
        <div className={listItemClassName}>
            Дата создания задачи: {new Date(task.attributes.addedAt).toLocaleDateString()}
        </div>

    </li>
}