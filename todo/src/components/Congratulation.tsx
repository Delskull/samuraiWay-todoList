
interface PropsOptions {
    startMenu?: () => void
}


export function Congratulation(props:PropsOptions) {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px'
    }}>
        <p style={{
            fontSize: '30px',
            fontWeight: 'bold'
        }}>🎉 Поздравляю! Твой слон наелся здоровой пищи и с улыбкой побежал играть с другими слонами🎉</p>
        <button onClick={props.startMenu}> "Давай сыграем еще раз и покормим другого слона"</button>
        <div style={{fontSize: "200px"}}>😊</div>
    </div>
}