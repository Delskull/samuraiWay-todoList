export type GetTaskOutput = {
    data: TaskDetailsData
}
export type TaskDetailsData = {
    id:	string
    type:	string
    attributes: TaskDetailsDto
}

type TaskDetailsDto = {
    id:	string
    title:	string
    description: string | null
    boardId:	string
    boardTitle:	string
    order:	number
    status: 0 | 1 | 2 | 3
    priority: 0 | 1 | 2 | 3 | 4
    startDate:	{}
    deadline:	{}
    addedAt:	string
    updatedAt: string
    attachments: Array<string>
}



export const getTask = (boardId:string,selectedTaskId:string) => {
    const promise: Promise<GetTaskOutput> = fetch('https://trelly.it-incubator.app/api/1.0/boards/' + boardId + '/tasks/' + selectedTaskId, {
        headers: {
            'api-key': 'a4ac3cd8-354c-4073-b62b-8eac19a5e922'
        }
    }).then(res => res.json())
    return promise
}

export type GlobalTaskListResponse = {
    data:GlobalTaskListItemJsonApiData[]
}

type GlobalTaskListItemDto = {
    id: string
    title: string
    boardId: string
    status: 0 | 1 | 2 | 3
    priority: 0 | 1 | 2 | 3 | 4
    addedAt: string
    attachmentsCount: number
}

export type GlobalTaskListItemJsonApiData = {
    id: string
    type: string
    attributes: GlobalTaskListItemDto
}


export const getTasks = () => {
    const promise: Promise<GlobalTaskListResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        headers: {
            'api-key': 'a4ac3cd8-354c-4073-b62b-8eac19a5e922'
        }
    }).then(res => res.json())
    return promise
}