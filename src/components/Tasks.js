import Task from "./Task";

function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}>
          {task.text}
        </Task>
      ))}
    </>
  );
}

export default Tasks;
