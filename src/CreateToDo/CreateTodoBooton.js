import "./CreateToDoBooton.css";

function CreateTodoBooton({ onClick }) {
  return (
    <button className="CreateTodoButton" onClick={onClick}>
      +
    </button>
  );
}

export { CreateTodoBooton };