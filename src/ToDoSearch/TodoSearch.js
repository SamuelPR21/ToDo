import React from 'react';
import 'bulma/css/bulma.min.css';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <section className="section">
      <div className="container">
        <div className="field">
          <div className="control">
            <input
              className="input is-rounded TodoSearch"
              type="text"
              placeholder="Buscar Tarea"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              autoFocus
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { TodoSearch };
