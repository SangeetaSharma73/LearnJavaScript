function TodoItem({task,index,removeTask}){
    return (
      <li>
        {task} <button onClick={()=>removeTask(index)}>❌</button>
      </li>
    );
}

export default TodoItem;