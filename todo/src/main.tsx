import {createRoot} from 'react-dom/client'
import './App.css'
import {useState} from "react";




createRoot(document.getElementById('root')!).render(

    <Game/>

)

export function Game() {
   const [activePage, setActivePage] = useState('counter')

    const onFinish = () => {setActivePage('elephant')}

    return <div>

        {activePage === 'counter' && <Counter onFinish = {onFinish}/> }
        {activePage === 'elephant' && <Elephant/> }

    </div>
}


export function Counter(props) {
    const [count, setCount] = useState(1)
    const handleClick= () => {
        setCount(count + 1)
        if (count + 1 === 5 && props.onFinish){
            props.onFinish()
        }

    }
    return <div>
        <button onClick={handleClick}>+ {count}</button>
    </div>
}

function Elephant () {
    return <div style={{fontSize: '100px'}}>🐘</div>
}