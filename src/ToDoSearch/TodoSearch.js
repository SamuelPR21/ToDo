import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {



  return (
    
    <div className="box">
      <input
        placeholder="Buscar  Tarea"
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };