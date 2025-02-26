import "./CreateToDoBooton.css";

function CreateTodoBooton({ onClick }) {
  return (
    <button 
      className="button is-primary is-rounded CreateTodoButton" 
      onClick={onClick}
    >
      +
    </button>
  );
}

export { CreateTodoBooton };
