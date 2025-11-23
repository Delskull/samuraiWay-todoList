import {useState} from "react";

export function useTaskSelection() {
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
    const [boardId, setBoardId] = useState<string | null>(null)

    const onTaskSelected = (taskId: string | null, boardId: string | null) => {
        setSelectedTaskId(taskId)
        setBoardId?.(boardId)
    }
    return {selectedTaskId, boardId, onTaskSelected}
}