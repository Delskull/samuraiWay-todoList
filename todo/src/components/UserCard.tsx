import './userCard.css'
import type {UserCardTypes} from "../types/UserCard-types.tsx";

const defaultAvatar: string = 'https://placehold.co/128?text=no+photo'
const icon = '🔞'

export function UserCard({name, age, email, avatar = defaultAvatar}:UserCardTypes) {

    return <ul className={'user__card'}>
            <li><img src={avatar} alt={'photo'}/></li>
            <li> name: {name} </li>
            <li> age: {age > 18 ? age: `${icon} ${age}` } </li>
            <li> email: {email} </li>
        </ul>
}