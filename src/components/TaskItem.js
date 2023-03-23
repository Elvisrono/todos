import React from "react";
import { Link } from "react-router-dom";
//import "../styles/TaskItem.css";

function TaskItem({
	id,
	title,
	description,
	studentName,
	solution,
	comments,
	completed,
}) {
	return (
		<Link to={"/tasks/" + id} style={{ textDecoration: "none" }}>
			<div
				className="taskitem"
				key={id}
				// onClick={() => {
				// 	// selectTask(task);
				// }}
			>
				<div className="tasktitle_name">
					<h2>Task Title: {title}</h2>
				</div>
				<div className="desc">
					<span>Description:</span> {description}
				</div>
				{completed ? <p>Done</p> : <p>Not completed</p>}
			</div>
		</Link>
	);
}

export default TaskItem;
