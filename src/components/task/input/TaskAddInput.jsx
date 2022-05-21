import React from "react";
import { v4 as uuid } from "uuid";

const TaskAddInput = ({ inputText, setInputText, setTaskList, taskList }) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    // カードを追加
    setTaskList([
      ...taskList,
      {
        id: taskId,
        text: inputText,
        draggableId: `task-${taskId}`,
      },
    ]);
    setInputText("");
  };

  const handlechange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a Task"
          className="taskAddInput"
          onChange={handlechange}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;
