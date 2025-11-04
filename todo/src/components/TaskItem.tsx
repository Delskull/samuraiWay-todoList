export function TaskItem (props) {

    const colors = {

        0: '#ffffff',
        1: '#ffd7b5',
        2: '#ffb38a',
        3: '#ff9248',
        4: '#ff6700',
    }

    return <li
        key={props.task.id}
        className={'li__task'}
        onClick={() => {
            props.onTaskSelected(props.task.id,props.task.attributes.boardId)


        }}
        style={
            {
                backgroundColor: colors[props.task.attributes.priority] || 'white',
                border: props.isSelected ? '4px solid blue' : '4px solid black'

            }
        }
    >
        <div className={'li__div'}><span className={'li__span'}> Заголовок: </span> <span style={{
            textDecorationLine: props.task.attributes.status >= 2 ? 'line-through' : 'none'
        }}> {props.task.attributes.title} </span></div>
        <div className={'li__div'}><span
            className={'li__span'}> Статус: </span> {props.task.attributes.status} <input
            type={"checkbox"}
            checked={props.task.attributes.status >= 2}/>
        </div>
        <div className={'li__div'}><span className={'li__span'}> </span> Дата создания
            задачи: {new Date(props.task.attributes.addedAt).toLocaleDateString()}</div>

    </li>
}