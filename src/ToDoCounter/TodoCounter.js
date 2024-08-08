import './TodoCounter.css'

function TodoCounter({complete, total}){
    return(
        <h1>
            Has completado {complete} de {total} TODOs
        </h1>
    );
}

export {TodoCounter}