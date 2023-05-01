import React from "react";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";

interface Task {
  id: number;
  name: string;
  status: string;
}

async function getTasks(userid: string): Promise<Task[]> {
  userid = ""; // eslint-disable-line
  const tasks: Task[] = [
    { id: 1, name: "task1", status: "todo" },
    { id: 2, name: "task2", status: "todo" },
    { id: 3, name: "task3", status: "todo" },
    { id: 4, name: "task4", status: "inprogress" },
    { id: 5, name: "task5", status: "inprogress" },
    { id: 6, name: "task6", status: "done" },
    { id: 7, name: "task7", status: "done" },
  ];
  return tasks;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const tasks = await getTasks(params.userid as string);
  return { tasks };
}

const Todo: React.FC = () => {
  const { tasks } = useLoaderData() as { tasks: Task[] };
  return (
    <div>
      <p>This is todo</p>
      <ul>
        <li>
          Todo
          <ul>
            {tasks
              .filter((task) => task.status == "todo")
              .map((task) => (
                <li key={task.id}>{task.name}</li>
              ))}
          </ul>
        </li>
        <li>
          In Progress
          <ul>
            {tasks
              .filter((task) => task.status == "inprogress")
              .map((task) => (
                <li key={task.id}>{task.name}</li>
              ))}
          </ul>
        </li>
        <li>
          Done
          <ul>
            {tasks
              .filter((task) => task.status == "done")
              .map((task) => (
                <li key={task.id}>{task.name}</li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
