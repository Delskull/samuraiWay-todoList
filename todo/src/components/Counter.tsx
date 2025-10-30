import {useState} from "react";

interface PropsOptions {
    onFinish?: () => void
}

export function Counter(props:PropsOptions) {
    const [count, setCount] = useState(1)


    return <div>
        <h1>Нажми на кнопку 4 раза, чтобы увидеть слона</h1>
    <button onClick={() => {
        setCount(count + 1)
        if (count === 4 && props.onFinish) {
            props.onFinish()
            setCount(1)
        }
    }}>
        + {count}
    </button>
    </div>
}