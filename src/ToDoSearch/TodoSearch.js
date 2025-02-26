import React from 'react';


import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {



  return (
    
    
      <section className="modal-card-body">
        <header className="modal-card-head">
          <input
            className="input is-rounded"
            placeholder="Buscar  Tarea"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
            autoFocus
          />
        </header>
      </section>
        
      
  );
}

export { TodoSearch };