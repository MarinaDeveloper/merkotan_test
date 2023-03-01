import React, {useState} from 'react';
import './styles.scss';

import { useTypedDispatch } from "store";
import { setToDoListAction } from 'store/toDoList/actions';

const InputsBlock = () => {
    const dispatch = useTypedDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [titleValid, setTitleValid] = useState('');
    const [descriptionValid, setDescriptionValid] = useState('');

    const getValueTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const getValueDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    }

    const createNote = () => {
        if(title.length < 1) {
            setTitleValid('error')
        } else if (description.length < 1) {
            setDescriptionValid('error')
        } else {
            dispatch(setToDoListAction(title, description));
            setTitle('');
            setDescription('');
        }
    }
    
    return (
        <div className="inputs-block">
            <div className="input-item">
                <div className="input-item-title">
                    Title:
                </div>
                <input
                    type="text"
                    value={title}
                    onChange={getValueTitle}
                    placeholder="Enter title"
                    className={titleValid}
                    onFocus={() => setTitleValid('')}
                />
                <span>This field is empty</span>
            </div>
            <div className="input-item">
                <div className="input-item-title">
                    Description:
                </div>
                <input
                    type="text"
                    value={description}
                    onChange={getValueDescription}
                    placeholder="Enter description"
                    className={descriptionValid}
                    onFocus={() => setDescriptionValid('')}
                />
                <span>This field is empty</span>
             </div>
            <div className="btn-wrapper">
                <button onClick={createNote}>Create</button>
            </div>
        </div>
    )
}

export default InputsBlock