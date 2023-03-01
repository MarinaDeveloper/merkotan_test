import React from 'react';

import InputsBlock from 'components/InputsBlock';
import ToDoList from 'components/ToDoList';

import './styles.scss';

const App = () => {
  return (
    <div className="app">
      <InputsBlock />
      <ToDoList />
    </div>
  );
}

export default App;