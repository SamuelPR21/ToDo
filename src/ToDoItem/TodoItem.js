import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem box">
      <div className="field is-flex is-align-items-center">
        
       
        <span 
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} 
          onClick={props.onComplete}
        >
          <i className="fas fa-check-square"></i>
        </span>

      
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>

       
        <span 
          className="Icon Icon-delete button is-danger is-light" 
          onClick={props.onDeleted}
        >
          <i className="fas fa-ban"></i>
        </span>
      </div>
    </li>
  );
}

export { TodoItem };
