import {useEffect, useState} from "react";


const colors: Colors = {

    0: '#ffffff',
    1: '#ffd7b5',
    2: '#ffb38a',
    3: '#ff9248',
    4: '#ff6700',
}


export function TaskList() {
    const [tasks, setTasks] = useState(null)
    const [selectedTaskId, setSelectedTaskId] = useState(null)

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

    return <ul>
        {tasks.map((task) => {
            return <li
                key={task.id}
                className={'li__task'}
                onClick={() => {
                    setSelectedTaskId(task.id)
                 //   setBoardId(task.attributes.boardId)

                }}
                style={
                    {
                        backgroundColor: colors[task.attributes.priority] || 'white',
                        border: selectedTaskId === task.id ? '4px solid blue' : '4px solid black'

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
        })}
    </ul>
}