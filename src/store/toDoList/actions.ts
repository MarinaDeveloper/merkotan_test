export const setToDoListAction = (title: string, description: string) => {
    return {
        type: 'toDoList/setToDoList',
        title,
        description,
    }
}