import React from 'react';
import { useState } from 'react';
import {TodoCounter} from '../ToDoCounter/TodoCounter';
import {TodoSearch} from '../ToDoSearch/TodoSearch';
import {TodoList} from '../ToDoList/TodoList';
import {TodoItem} from '../ToDoItem/TodoItem';
import {CreateTodoBooton} from '../CreateToDo/CreateTodoBooton';
import { TodoModal } from "../ToDoModal/TodoModal"; 


const defaultTodos= [
  {text: "Entrenar", completed: false},
  {text: "Estudiar React", completed: true},

]

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  const [searchValue, setSearchValue] = useState('');

  
  const completedtodos = todos.filter(task => !!task.completed).length;
  
  const[isModalOpen, setIsModalOpen] = useState(false);
  
  const totalTodos = todos.length;
  
  const noTildes = (text) => {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const searchedTodos = todos.filter((todo) =>
    noTildes(todo.text).toLowerCase().includes(noTildes(searchValue.toLowerCase()))
  );

  const completeTask = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }

  const deleteTask = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos)
  }  

  const messageTodoFinished = (completedtodos, totalTodos) => {
    return completedtodos === totalTodos;
  };
  
  const isAllCompleted = messageTodoFinished(completedtodos, totalTodos); 
  

  const addTask = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
    setIsModalOpen(false); 
  };
          
  return (
    <>
      <TodoCounter 
        complete={completedtodos} 
        total={totalTodos}
        isAllCompleted ={isAllCompleted}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTask(todo.text)}
          onDeleted={() => deleteTask(todo.text)}
          />
        )
        )}
        
      </TodoList>

      <CreateTodoBooton onClick={() => setIsModalOpen(true)}/>
      
      {isModalOpen && <TodoModal onAdd={addTask} onClose={() => setIsModalOpen(false)} />}
    
    </>

  );
}



export default App;
