import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./helloworld";
import Button from "./button";
import TaskCard from "./Task";
import { Card } from "./Components";
import { Post } from "./post";
import { GetAvatar } from "./mui";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
		<GetAvatar />

	</>
);
