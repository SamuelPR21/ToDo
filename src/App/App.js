import React from 'react';
import {TodoCounter} from '../../ToDoCounter/TodoCounter';
import {TodoSearch} from '../../ToDoSearch/TodoSearch';
import {TodoList} from '../../ToDoList/TodoList';
import {TodoItem} from '../../ToDoItem/TodoItem';
import {CreateTodoBooton} from '../../CreateToDo/CreateTodoBooton';


const defaultTodos= [
  {text: "Holi", completed: false},
  {text: "irse", completed: true},
  {text: "llegar", completed: false},
  {text: "estudiar", completed: true},
]

function App() {
  return (
    <>
            <TodoCounter complete={14} total={25}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}/>
        )
        )}
        
      </TodoList>

      <CreateTodoBooton/>

    </>

  );
}



export default App;
