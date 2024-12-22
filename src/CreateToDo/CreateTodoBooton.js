import "./CreateToDoBooton.css"

function CreateTodoBooton(){
    return(
        <button className="CreateTodoButton"
                onClick={
                    (event) => {
                            console.log("Create Todo")
                            console.log(event)

                        }
                }
        >+</button>
    );
}

export {CreateTodoBooton}