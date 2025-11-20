import {createRoot} from 'react-dom/client'
import './App.css'
import {Game} from "./components/Game.tsx";
import {useEffect, useState} from "react";



const useToggle = (initValue:boolean) => {
    const [isOn, setIsOn] = useState(initValue)

    const toggle = () => {
        setIsOn(!isOn)
    }

    const reset = () => {
        setIsOn(false)
    }

    return {isOn, toggle,setIsOn,reset}
}


export const LightSwitch = () => {
    const {isOn, toggle} =  useToggle(false)

    return (
        <div>
            <h2>{isOn ? "💡 Свет включен" : "🌙 Свет выключен"}</h2>
            <button onClick={toggle}>Переключить свет</button>
        </div>
    )
}

export const TogglePage = () => {
    return (
        <div>
            <LightSwitch />
            <VisibilityToggle/>
            <NotificationSwitch/>
        </div>
    )
}

export const VisibilityToggle = () => {
     const {isOn, setIsOn} = useToggle(false)

    function handleClick(value:boolean) {
        setIsOn(value)
    }


    return <div>
        <div><h2> секретное сообщение </h2></div>
        {isOn && <div>🎉 Это секретное сообщение!</div>}
        <div>
            <button onClick={() =>handleClick(true)}>Показать</button>
            <button onClick={() =>handleClick(false)}>Скрыть</button>
        </div>
    </div>
}

export const NotificationSwitch = () => {
   const {isOn, toggle,setIsOn,reset} = useToggle(true)

    return (
        <div>
            <h2>Настройки уведомлений</h2>
            {isOn && <div>🔔 Уведомления включены</div>}
            {!isOn && <div>🔕 Уведомления выключены</div>}
            <div>
                <button onClick={toggle}>Переключить</button>
                <button onClick={() =>setIsOn(true)}>Включить</button>
                <button onClick={reset}>Сбросить по умолчанию</button>
            </div>
        </div>
    )
}

const useText = (initialText: string = '') => {
    const [text,setText] = useState(initialText)

    const clear = () => {
        setText('')
    }
    const toUpperCase = () => {
        setText(text => text.toUpperCase())
    }
    const toLowerCase  = () => {
        setText(text.toLowerCase())
    }
    return {text,setText,clear,toUpperCase,toLowerCase}
}

const TitleEditor = () => {
   const {text,clear,toUpperCase,toLowerCase,setText} = useText('Заголовок статьи')

    return <div>
        <h2>💬{text || 'Пусто'}</h2>
        <div>
            <button onClick={toUpperCase}>ВЕРХНИЙ РЕГИСТР</button>
            <button onClick={toLowerCase}>нижний регистр"</button>
            <button onClick={() =>{setText('Новый заголовок')}}>Изменить на 'Новый заголовок'</button>
            <button onClick={clear}>Очистить</button>
        </div>
    </div>
}

const GreetingCard = () => {
    const {text,clear,toUpperCase,toLowerCase,setText} = useText('Привет!')

    return <div>
        <h2> 💬 {text} </h2>
        <div>
            <button onClick={toUpperCase}>ГРОМКО</button>
            <button onClick={toLowerCase}>тихо</button>
            <button onClick={() => setText('Добро пожаловать!')}>Сказать 'Добро пожаловать!'</button>
            <button onClick={clear}>Молчать</button>
        </div>
    </div>

}







createRoot(document.getElementById('root')!).render(
<div>
<TitleEditor/>
    <GreetingCard/>

</div>
)
//lesson 23
// function useCounter(initNumber:number,ms:number) {
//     const [value, setValue] = useState(initNumber)
//     useEffect(() => {
//         setInterval(() => {
//             setValue(initNumber)
//         },ms)
//     }, []);
//     return {value,inc:() => setValue(value + 1)}
// }
//
//
// function Counter() {
//     const {value,inc} = useCounter(5,5000)
//     return <div onClick={()=> inc()}>{value}</div>
// }
//
// function Age() {
//     const {value,inc} = useCounter(10,3000)
//     return <div>{value} <button  onClick={()=> inc()}>+</button></div>
// }

//////////////////////////////////////////////////////////////////////////////////

