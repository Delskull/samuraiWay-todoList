import './nullstyle.css'
import './App.css'
import {useState} from "react";

const tasks
    = [
    {
        id: 1,
        title: "Купить продукты на неделю",
        isDone: false,
        addedAt: "1 сентября",
        priority: 2,
    },
    {
        id: 2,
        title: "Полить цветы",
        isDone: true,
        addedAt: "2 сентября",
        priority: 0,
    },
    {
        id: 3,
        title: "Сходить на тренировку",
        isDone: false,
        addedAt: "3 сентября",
        priority: 1,
    },
    {
        id: 4,
        title: "Срочно отправить рабочий отчет",
        isDone: false,
        addedAt: "4 сентября",
        priority: 4,
    },
    {
        id: 5,
        title: "Заплатить за коммунальные услуги",
        isDone: false,
        addedAt: "3 сентября",
        priority: 3,
    },
]




interface Colors {
    [key:number]: string
}
const colors:Colors = {

        0: '#ffffff',
        1: '#ffd7b5',
        2: '#ffb38a',
        3: '#ff9248',
        4: '#ff6700',
    }


function App() {

    let [selectedTaskId, setSelectedTaskId] = useState(null)

    if (tasks === null || tasks === undefined) {
        return <div className={'li__div li__span'}>Загрузка...</div>
    }

    if (tasks.length === 0) {
        return <div className={'li__div li__span'}>Задачи отсутствуют</div>
    }


  return (
        <div>
            <button className={'button'}
                    onClick={ () => {
                setSelectedTaskId(null)
            }}> Сбросить Выделение</button>
            <ul>
                {tasks.map((task) => {
                   return <li
                       key={task.id}
                       className={'li__task'}
                       onClick={ () => {
                        setSelectedTaskId(task.id)
                       }}
                              style={
                       {
                       backgroundColor: colors[task.priority] || 'white',
                           border: selectedTaskId === task.id ? '4px solid blue' : '4px solid black'

                   }
                   }
                   >
                      <div className={'li__div'}> <span className={'li__span'}> Заголовок: </span> <span style={ {
                          textDecorationLine: task.isDone ? 'line-through' : 'none'
                      }}> {task.title} </span> </div>
                       <div className={'li__div'} > <span className={'li__span'}> Статус: </span> {task.isDone} <input  type={"checkbox"} checked={task.isDone} /> </div>
                       <div className={'li__div'}>  <span className={'li__span'}> </span> Дата создания задачи: {task.addedAt}</div>

                   </li>
                })}
            </ul>
        </div>
  )
}

export default App
