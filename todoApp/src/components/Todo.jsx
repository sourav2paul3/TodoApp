import { useState } from "react";
import { Form } from "./Form";
import { TodoList } from "./TodoList";
import styles from "./css/todo.module.css";
import { BottomCount } from "./BottomCount";
export function Todo() {
  const [todoLists, setTodoLists] = useState([]);
  const totalCount = todoLists.length;
  const completedCount = todoLists.filter((todo) => todo.active).length;
  return (
    <div className={styles.tododiv}>
      <Form todoLists={todoLists} setTodoLists={setTodoLists} />
      <TodoList todoLists={todoLists} setTodoLists={setTodoLists} />
      <BottomCount totalCount={totalCount} completedCount={completedCount} />
    </div>
  );
}
