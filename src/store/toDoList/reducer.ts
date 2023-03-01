import { AnyAction } from "redux";

const toDoListReducer = (state = [] , action: AnyAction) => {
    switch(action.type) {
        case 'toDoList/setToDoList':
            return [...state, 
                    {
                        title: action.title,
                        description: action.description     
                    }]
        default:
            return state;
    }
}

export default toDoListReducer;