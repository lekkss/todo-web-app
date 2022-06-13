import { React, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Task from "./Task";

function Tasks({ tasks, onDelete, onToggle }) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      return navigate("/");
    }
  }, [user, loading]);

  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}>
            {task.text}
          </Task>
        ))
      ) : (
        <div className="bg-slate-400 flex justify-center h-20 w-auto mt-10">
          <h1 className="text-black font-bold self-center">No Task To Show</h1>
        </div>
      )}
    </>
  );
}

export default Tasks;
