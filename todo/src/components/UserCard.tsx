
import './userCard.css'
import type {UserCardTypes} from "../types/UserCard-types.tsx";

export function UserCard({name, age, email, avatar = 'avatar'}:UserCardTypes) {
    return <ul className={'user__card'}>
            <li><img src={avatar}/></li>
            <li> name: {name} </li>
            <li> age: {age} </li>
            <li> email: {email} </li>
        </ul>
}