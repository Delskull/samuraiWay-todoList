interface PropsOptions {
    startMenu?: () => void
}

export function GameOver(props:PropsOptions) {
    return <div  style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px'
    }}>
        <p  style={{
            fontSize: '30px',
            fontWeight: 'bold'
        }}>У твоего слоника заболел живот и вместо того чтобы играть со своими друзьями он пошел к врачу. В следующий
            раз корми слона правильной пищей, чтобы слоник был здоров</p>
        <button onClick={props.startMenu}>Но не расстраивайся. Давай сыграем еще раз</button>
        <div style={{fontSize: '200px'}}>😥</div>
    </div>
}