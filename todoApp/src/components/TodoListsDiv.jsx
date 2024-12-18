import styles from "./css/todoListDiv.module.css";

export function TodoListsDiv({ item, todoLists, setTodoLists }) {
  const markDone = (name) => {
    setTodoLists(
      todoLists.map((todo) =>
        todo.name === name ? { ...todo, active: !todo.active } : todo
      )
    );
  };
  const deleteTodo = (item) => {
    setTodoLists(todoLists.filter((todoItem) => todoItem !== item));
  };
  const spanClass = item.active ? styles.completed : "";
  return (
    <div className={styles.todoListsDiv}>
      <div className={styles.items}>
        <span className={spanClass} onClick={() => markDone(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => deleteTodo(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
