import React from "react";
import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";

interface Task {
  id: number;
  title: string;
  status: string;
}

async function getTasks(userid: string): Promise<Task[]> {
  fetch("http://localhost:8080/tasks")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  const response = await fetch("http://localhost:8080/tasks");
  const data = await response.json();
  const tasks = data["_embedded"]["tasks"];
  userid = ""; // eslint-disable-line
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
                <li key={task.id}>{task.title}</li>
              ))}
          </ul>
        </li>
        <li>
          In Progress
          <ul>
            {tasks
              .filter((task) => task.status == "inprogress")
              .map((task) => (
                <li key={task.id}>{task.title}</li>
              ))}
          </ul>
        </li>
        <li>
          Done
          <ul>
            {tasks
              .filter((task) => task.status == "done")
              .map((task) => (
                <li key={task.id}>{task.title}</li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Todo;
