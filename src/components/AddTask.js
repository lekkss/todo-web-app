import React, { useState } from "react";

function AddTask({ addTask }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }
    addTask({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form onSubmit={submit}>
      <div className="flex flex-col ">
        <label className="font-bold text-2xl">Task</label>
        <input
          className="py-2 px-3 mb-2 border-2 border-black"
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="flex flex-col ">
        <label className="font-bold text-2xl">Day & Time</label>
        <input
          className="py-2 px-3 mb-2 border-2 border-black"
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>

      <div className="flex flex-row items-center mb-2">
        <label className="font-bold text-2xl">Set Reminder</label>
        <input
          className="ml-9 border-2 "
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        ></input>
      </div>
      <div className="mb-10">
        <button
          type="submit"
          className="text-white bg-black w-full py-2 rounded-sm"
        >
          Add to task
        </button>
      </div>
    </form>
  );
}

export default AddTask;
