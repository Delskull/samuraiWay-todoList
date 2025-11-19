import {createRoot} from 'react-dom/client'
import './App.css'
import {Game} from "./components/Game.tsx";
import {useEffect, useState} from "react";


createRoot(document.getElementById('root')!).render(
<div>
<Game/>

</div>
)
//lesson 23
// function useCounter(initNumber:number,ms:number) {
//     const [value, setValue] = useState(initNumber)
//     useEffect(() => {
//         setInterval(() => {
//             setValue(initNumber)
//         },ms)
//     }, []);
//     return {value,inc:() => setValue(value + 1)}
// }
//
//
// function Counter() {
//     const {value,inc} = useCounter(5,5000)
//     return <div onClick={()=> inc()}>{value}</div>
// }
//
// function Age() {
//     const {value,inc} = useCounter(10,3000)
//     return <div>{value} <button  onClick={()=> inc()}>+</button></div>
// }