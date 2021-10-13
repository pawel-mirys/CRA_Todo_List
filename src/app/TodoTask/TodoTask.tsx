import { ITask } from '../Interfaces';

interface Props {
  task: ITask;
}

export const TodoTask = ({ task }: Props) => {
  return (
    <li>
      {task.taskName} {task.deadline}
    </li>
  );
};
