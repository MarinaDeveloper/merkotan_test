import { IToDoItem } from "types/IToDoItem";

export const selectToDoList = (state: {toDoListReducer : IToDoItem[]}) => state.toDoListReducer;