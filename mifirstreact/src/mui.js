import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from "react";

export const GetAvatar = () => {

	//const [data, setData] = useState([]);
	let data = [];

	useEffect(() => {
		getData().then(users => data = users);
	}, []);


	setTimeout(() => {
		{data.map(user => {
			{console.log(user)}
			return <Stack direction="row" spacing={2} key={user.id}>
				<Avatar alt={user.name} src={`https://robohash.org/user${user.id}`} />
				<h2>{user.name}</h2>
			</Stack>
		})}

	}, 1000);
}

async function getData() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users'),
			data = await response.json();

		if(!response.ok) throw new Error(data.message);

		return Object.values(data);

	}
	catch (error) {
		console.log(error);
	}

}
