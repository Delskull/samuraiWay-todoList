import {createRoot} from 'react-dom/client'
import './App.css'
import {Header} from "./components/Header.tsx";
import {TaskList} from "./components/TaskList.tsx";
import {TaskDetails} from "./components/TaskDetails.tsx";
import {Footer} from "./components/Footer.tsx";
import {PageTitle} from "./components/PageTitle.tsx";


createRoot(document.getElementById('root')!).render(
    <MainPage/>
)

function MainPage() {
    return <div>
        <Header/>
        <PageTitle/>
        <div style={{display: 'flex', gap: '30px'}}>
        <TaskList/>
        <TaskDetails/>
        </div>

    </div>
}
