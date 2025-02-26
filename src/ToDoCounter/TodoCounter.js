import './TodoCounter.css'
import "bulma/css/bulma.min.css"; 


function TodoCounter({complete, total, isAllCompleted}){
    return(        
        <div className="TodoCounter">

        <h1 className="TodoTitle title is-1">Lista De Tareas</h1>
          
            <h3 class="title is-3">
                Has completado <span>{complete}</span> de <span>{total}</span> Tareas
            </h3>

            {isAllCompleted && (<h2 className="TodoCounter span">¡Felicidades! Has completado todas tus tareas 🎉</h2>)}
        </div>
    );
}

export {TodoCounter}
