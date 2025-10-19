import {createRoot} from 'react-dom/client'
import './App.css'
import {UserCard} from "./components/UserCard.tsx";


createRoot(document.getElementById('root')!).render(
    <Users />
)

export function Users() {
    const users = [
        {
            id: 1,
            name: "John",
            age: 32,
            email: "john@gmail.com",
            avatar: "https://tinyurl.com/4ez2s7mt",
        },
        {
            id: 2,
            name: "Alice",
            age: 17,
            email: "alice@yahoo.com",
            avatar: "https://tinyurl.com/ynyx9nhu",
        },
        { id: 3, name: "Mike", age: 44, email: "mike@hotmail.com" },
        {
            id: 4,
            name: "Sarah",
            age: 29,
            email: "sarah@gmail.com",
            avatar: "https://tinyurl.com/yyktspmh",
        },
    ]

    return <div>sdsd</div>
}
