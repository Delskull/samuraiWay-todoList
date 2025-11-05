export function TaskItem ({task,isSelected,onTaskSelected}) {

    const handleSelectClick = () => {
        onTaskSelected(task.id,task.attributes.boardId)
    }
    const colors = {

        0: '#ffffff',
        1: '#ffd7b5',
        2: '#ffb38a',
        3: '#ff9248',
        4: '#ff6700',
    }

    return <li
        key={task.id}
        className={'li__task'}
        onClick={handleSelectClick}
        style={
            {
                backgroundColor: colors[task.attributes.priority] || 'white',
                border: isSelected ? '4px solid blue' : '4px solid black'

            }
        }
    >
        <div className={'li__div'}><span className={'li__span'}> Заголовок: </span> <span style={{
            textDecorationLine: task.attributes.status >= 2 ? 'line-through' : 'none'
        }}> {task.attributes.title} </span></div>
        <div className={'li__div'}><span
            className={'li__span'}> Статус: </span> {task.attributes.status} <input
            type={"checkbox"}
            checked={task.attributes.status >= 2}/>
        </div>
        <div className={'li__div'}><span className={'li__span'}> </span> Дата создания
            задачи: {new Date(task.attributes.addedAt).toLocaleDateString()}</div>

    </li>
}