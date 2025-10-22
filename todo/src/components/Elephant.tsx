import {useState} from "react";
interface PropsOptions {
    onStart?: () => void
}

export function Elephant(props:PropsOptions) {
    const [weight, setWeight] = useState(100)
    const handleFeedUsefull = () => {
        setWeight( weight + 20)
    }
    const handleFeedJunk = () => {
        setWeight( weight - 20)
    }


    return <div>
        <h2>Покорми слона</h2>
        <div style={{
            display:'flex',
            flexDirection: "column",
            width: '200px'
        }}>
        <button onClick={handleFeedUsefull}>Кормить полезной едой 🍌 🥦 🥕</button>
        <button onClick={handleFeedJunk}>Кормить вредной едой 🍔 🍟 🍕</button>
        </div>
    <div style={{fontSize: `${weight}px`}}>🐘</div>
        <button onClick={props.onStart}>Давай сыграем еще раз</button>
    </div>
}