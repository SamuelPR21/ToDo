import './TodoCounter.css'

function TodoCounter({complete, total}){
    return(
        <h1 className="TodoCounter">
            Has completado <span>{complete}</span> de <span>{total}</span> TODOs
        </h1>
    );
}

export {TodoCounter}