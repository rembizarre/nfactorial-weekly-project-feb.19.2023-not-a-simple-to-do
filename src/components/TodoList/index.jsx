import ToDo from "./ToDo";
import "./index.scss";

//creating list of todos

export default function TodoList(props) {
  const { 
    todos, 
    todoType, 
    checkedChange, 
    trashedChange, 
    deleteChange 
} = props;

//function to create list of todos
const listItems = todos.map((todo) => 
<ToDo 
key={todo.id} 
todo= {todo} 
checkedChange={(id) => checkedChange(id)} 
trashedChange= {(id) => trashedChange(id)} 
deleteChange = {(id)=> deleteChange(id)} 
todoType ={todoType}>
</ToDo>
);

return (
    //displaying list of todos 
    <ul>
        { listItems }
    </ul>
);
}
