import { useState } from "react";
import styles from "./css/form.module.css";
export function Form({ todoLists, setTodoLists }) {
  const [todo, setTodo] = useState({ name: "", active: false });
  const addToList = (e) => {
    e.preventDefault();
    const isPresent = todoLists.some((todoItem) => todoItem.name === todo.name);
    if (todo.name != "" && !isPresent) {
      setTodoLists([...todoLists, todo]);
      setTodo({ name: "", active: false });
    }
  };
  return (
    <form className={styles.todoform} onSubmit={addToList}>
      <div className={styles.todoFormDiv}>
        <input
          className={styles.input}
          type="text"
          id="inputBox1"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, active: false })}
          placeholder="Add Todo List..."
        ></input>
        <button className={styles.button} type="submit" id="addButton">
          Add
        </button>
      </div>
    </form>
  );
}
