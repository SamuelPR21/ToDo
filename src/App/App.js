import React from 'react';
import { useState } from 'react';
import {TodoCounter} from '../ToDoCounter/TodoCounter';
import {TodoSearch} from '../ToDoSearch/TodoSearch';
import {TodoList} from '../ToDoList/TodoList';
import {TodoItem} from '../ToDoItem/TodoItem';
import {CreateTodoBooton} from '../CreateToDo/CreateTodoBooton';


const defaultTodos= [
  {text: "Holi", completed: true},
  {text: "irse", completed: true},
  {text: "llegar", completed: false},
  {text: "estudiar", completed: true},
  {text: "vien o gud", completed: true},

]

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  const [searchValue, setSearchValue] = useState('');

  
  const completedtodos = todos.filter(task => !!task.completed).length;
  
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

      <CreateTodoBooton/>

    </>

  );
}



export default App;
