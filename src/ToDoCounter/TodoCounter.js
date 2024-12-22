import './TodoCounter.css'

function TodoCounter({complete, total, isAllCompleted}){
    return(        
        <div className="TodoCounter">
            <h1 >
                Has completado <span>{complete}</span> de <span>{total}</span> TODOs
            </h1>

            {isAllCompleted && (<h2 className="TodoCounter span">¡Felicidades! Has completado todas tus tareas 🎉</h2>)}
        </div>
    );
}

export {TodoCounter}