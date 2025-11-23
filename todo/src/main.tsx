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
// lesson 24


export const Counter = () => {
    const { count, inc, dec, reset, changeStep} = useCounter(0, 1,3)

    return <div>
        <h2>{count}</h2>
        <h3>⏰ Автосброс через 3 сек</h3>
        <div>
            <button onClick={inc}>Увеличить</button>
            <button onClick={dec}>Уменьшить</button>
            <button onClick={reset}>Сбросить</button>
            <button onClick={changeStep}>Установить шаг 5</button>
        </div>
    </div>
}

export const CounterWithoutAutoReset = () => {
    const { count, inc, dec, reset, changeStep} = useCounter(5, 5,0)
    return <div>
        <h2>{count}</h2>
        <h3>🔒 Без автосброса</h3>
        <div>
            <button onClick={inc}>Увеличить</button>
            <button onClick={dec}>Уменьшить</button>
            <button onClick={reset}>Сбросить</button>
            <button onClick={changeStep}>Установить шаг 5</button>
        </div>
    </div>
}

const useCounter = (startValue:number = 0,startStep:number = 1, autoResetTime:number = 0) => {
    const [count, setCount] = useState(startValue)
    const [step, setStep] = useState(startStep)

    useEffect(() => {
        if (autoResetTime === 0 || autoResetTime === null){
            return
        }
        const intervalID = setInterval(() => {
            setCount(startValue)
        }, autoResetTime * 1000)
        return () => clearInterval(intervalID)
    }, [autoResetTime,startValue])

    const inc = () => {
        setCount(prev => prev + step)

    }
    const dec = () => {
        setCount(prev => prev - step)
    }
    const reset = () => {
        setCount(startValue)
        setStep(startStep)
    }
    const changeStep = () => {
        alert('шаг установлен на 5')
        setStep(5)

    }

    return { count, inc, dec, reset, changeStep}
}






createRoot(document.getElementById('root')!).render(
<div>
<TitleEditor/>
    <GreetingCard/>
    <Counter/>
    <CounterWithoutAutoReset/>

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

