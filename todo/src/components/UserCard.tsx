export function UserCard({id, name, age, email, avatar = 'avatar'}) {
    return <div>
        <ul>
            <li><img src={avatar}/></li>
            <li> name: {name} </li>
            <li> age: {age} </li>
            <li> email: {email} </li>
        </ul>
    </div>
}