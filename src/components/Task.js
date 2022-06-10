import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onToggle }) {
  return (
    <div className="flex flex-row ">
      <div
        className={`w-1 mt-1 mb-1${task.reminder ? " bg-red-800" : ""}`}
      ></div>

      <div className="container flex flex-row justify-between items-center bg-slate-400 mx-auto p-2 m-1 px-2 ">
        <div onClick={() => onToggle(task.id)}>
          <h3 className="text-xl font-bold">{task.text}</h3>
          <p>{task.day}</p>
        </div>
        <div>
          {" "}
          <FaTimes
            className="bg-red cursor-pointer mr-8"
            onClick={() => onDelete(task.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Task;
