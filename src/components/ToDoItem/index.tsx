import React, {useState} from 'react';
import './styles.scss';

import { IToDoItem } from 'types/IToDoItem';

interface IToDoItemParams {
    id: number;
    note: IToDoItem
}

const ToDoItem = ({id, note} : IToDoItemParams) => {
    const [active, setActive] = useState(false);
    const [completed, setCompleted] = useState(false);

    const title = note.title.length > 15 ? `${note.title.slice(0,12)}...` : note.title;

    const description = note.description.length > 15 ? `${note.description.slice(0,12)}...` : note.description;

    return (
        <div>
            <div className='to-do-item-wrapper' onClick={() => setActive(true)}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{description}</p>
                <input
                    type='checkbox'
                    className='checkbox'
                    checked={completed}
                    onChange={() => setCompleted(!completed)}
                />
            </div>
            {active && (
                <div className='wrapper-modal'>
                    <div className='overlay' onClick={() => setActive(false)}></div>
                    <div className='modal-window'>
                        <h3>{note.title}</h3>
                        <h6>Description:</h6>
                        <p>{note.description}</p>
                        <div className='status'>
                            <p>Status: </p>
                            <input
                                type='checkbox'
                                className='checkbox'
                                checked={completed}
                                onChange={() => setCompleted(!completed)}
                            />
                        </div>
                        <button onClick={() => setActive(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ToDoItem;