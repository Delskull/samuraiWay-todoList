import {createRoot} from 'react-dom/client'
import './App.css'
import {Users} from "./components/Users.tsx";
// import {useEffect, useState} from "react";
//
//
//
// export const Counter = () => {
//     const { count, inc } = useCounter(3)
//
//
//
//     return <button onClick={inc}> {count}</button>
// }
//
// const useCounter = (startValue:number = 0) => {
//     const [count,setCount] = useState(startValue)
//     const inc = () => {
//         setCount(count + 1)
//     }
//     useEffect(() => {
//         setInterval(() => {
//             setCount(startValue)
//         },3000)
//     }, []);
//
//     return {count, inc}
// }




createRoot(document.getElementById('root')!).render(
    <div>
        <Users/>
    </div>

)

