const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(index)}>
          Completar
        </button>
        <button className="remove" onClick={() => removeTodo(index)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Todo;
