import {useState} from "react";
import {Congratulation} from "./Congratulation.tsx";
import {GameOver} from "./GameOver.tsx";

interface PropsOptions {
    onStart?: () => void
}

export function Elephant(props: PropsOptions) {
    const [weight, setWeight] = useState(100)
    const handleFeedUsefull = () => {
        setWeight(weight + 20)
    }
    const handleFeedJunk = () => {
        setWeight(weight - 20)
    }
    const renderElephant = () => {
        return <div>
            <h2>Покорми слона</h2>
            <div style={{
                display: 'flex',
                flexDirection: "column",
                width: '200px'
            }}>
                <button onClick={handleFeedUsefull}>Кормить полезной едой 🍌 🥦 🥕</button>
                <button onClick={handleFeedJunk}>Кормить вредной едой 🍔 🍟 🍕</button>
            </div>
            <div style={{fontSize: `${weight}px`}}>🐘</div>
        </div>

    }

    return <div>
        {weight >= 200 && <Congratulation startMenu={props.onStart}/>}
        {weight > 20 && weight < 200 && renderElephant()}
        {weight <= 20 && <GameOver startMenu={props.onStart}/>}

    </div>
}

