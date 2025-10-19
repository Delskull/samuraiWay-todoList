import {createRoot} from 'react-dom/client'
import './App.css'
import {Users} from "./components/Users.tsx";


createRoot(document.getElementById('root')!).render(
    <div>
        <Users/>
    </div>

)

