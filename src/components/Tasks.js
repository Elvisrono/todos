import React from "react";
import TaskItem from "./TaskItem";

function Tasks({ tasks }) {

    return (
        <div className="tasks">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    completed={task.completed}
                />
            ))}
        </div>
    );
}

export default Tasks;
