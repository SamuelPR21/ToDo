import React, {useState} from "react";
import "./TodoModal"

function TodoModal({onAdd, onClose,}) {

    const[newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim() !== "") {
          onAdd(newTodo);
          setNewTodo(""); 
        }
      };

  return (
  
      <div className="modal is-active">
   
      <div className="modal-background" onClick={onClose}></div>

      {/* Contenedor del modal */}
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Nueva Tarea</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>

        <section className="modal-card-body">
          <form onSubmit={handleSubmit}>
            <input
              className="input is-rounded"
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Escribe tu tarea..."
              autoFocus
            />
          </form>
        </section>

        <footer className="modal-card-foot">
          <button type="submit" className="button is-primary" onClick={handleSubmit}>
            Agregar
          </button>
          <button className="button" onClick={onClose}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
}

export { TodoModal };