import { FC, useState, ChangeEvent } from 'react';
import styles from './App.module.scss';
import { ITask } from './Interfaces';
import { TodoTask } from './TodoTask/TodoTask';

export const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };

  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Task"
            name="task"
            value={task}
            //??
            onChange={changeHandler}
          />
          <input
            type="number"
            placeholder="0"
            name="deadline"
            value={deadline}
            // ??
            onChange={changeHandler}
          />
        </div>
        <button type="submit" className={styles.btn} onClick={addTask}>
          Submit
        </button>
      </div>
      <ul className={styles.todoList}>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} />;
        })}
      </ul>
    </div>
  );
};
