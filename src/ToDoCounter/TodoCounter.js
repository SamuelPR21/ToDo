import './TodoCounter.css';
import "bulma/css/bulma.min.css"; 

function TodoCounter({ complete, total, isAllCompleted }) {
    const progress = total > 0 ? (complete / total) * 100 : 0; 

    return (        
        <div className="TodoCounter container">
            <h1 className="TodoTitle title is-1">Lista De Tareas</h1>

            <h3 className="title is-3">
                Has completado <span>{complete}</span> de <span>{total}</span> tareas
            </h3>

            <progress className="progress is-link" value={progress} max="100">
                {progress}%
            </progress>

            {isAllCompleted && (
                <h2 className="subtitle has-text-success">¡Felicidades! Has completado todas tus tareas 🎉</h2>
            )}
        </div>
    );
}

export { TodoCounter };

