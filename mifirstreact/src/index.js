import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./helloworld";
import Button from "./button";
import TaskCard from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
		<TaskCard title="Task 1" description="This is a task" date="2021-01-01" finished="true"/>
		<TaskCard title="Task 2" description="This is a task" date="2021-01-01" finished="true"/>
		<TaskCard title="Task 3" description="This is a task" date="2021-01-01" finished="false"/>

	</>
);
