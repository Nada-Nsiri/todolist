import {useSelector} from "react-redux";

function Listtodo() {
    
const todo=useSelector(state=>state.todos);
    return (
        <div className="App">
             {todo.map((el) => (
                  <div>
                  <h1>{todo.id}</h1>
                   <h1>{todo.name}</h1>
                   <h1>{todo.description}</h1>
                   </div>
))}
        </div>
    );
}

export default Listtodo;