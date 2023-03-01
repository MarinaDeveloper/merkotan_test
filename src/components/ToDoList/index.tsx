import React from 'react';
import './styles.scss';

import { useTypedSelector } from "store";
import { selectToDoList } from 'store/toDoList/selectors'; 

import ToDoItem from 'components/ToDoItem';

const ToDoList = () => {
    const toDoList = useTypedSelector(selectToDoList);

    return (
        <div className='to-do-list-wrapper'>
            <div className='list-title'>
                <p>id</p>
                <p>title</p>
                <p>description</p>
                <p>status</p>
            </div>
            {toDoList.length > 0 && 
                toDoList.map((item, index) => {
                    return <ToDoItem note={item} id={index+1} key={index}/>
            })}
        </div>
    )
}

export default ToDoList