import {useState} from "react";
import {Counter} from "./Counter.tsx";
import {Elephant} from "./Elephant.tsx";



export function Game() {
    const [state, setState] = useState('counter')
    const onFinish = () => {
        setState('elephant')
    }
    const onStart = () => {
        setState('counter')
    }

    return <div>
        {state === 'counter' && <Counter onFinish={onFinish}/>}
        {state === 'elephant' && <Elephant onStart = {onStart}/>}
    </div>
}