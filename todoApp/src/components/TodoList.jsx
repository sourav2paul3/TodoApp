import { TodoListsDiv } from "./TodoListsDiv";
import styles from "./css/todoList.module.css";
export function TodoList({ todoLists, setTodoLists }) {
  const sortedTodoList = todoLists.slice().sort((a, b) => a.active - b.active);
  return (
    <div className={styles.todoList}>
      {sortedTodoList.map((item) => (
        <TodoListsDiv
          key={item.name}
          item={item}
          todoLists={todoLists}
          setTodoLists={setTodoLists}
        />
      ))}
    </div>
  );
}
