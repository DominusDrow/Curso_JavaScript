import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from "react";

export const GetAvatar = () => {

	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('https://jsonplaceholder.typicode.com/users')
			setData(result.data);
		}
		fetchData();
	}, []);


	return (
		<div>
			{data.map(item => (
				<div key={item.id}>
					<Stack direction="row" spacing={2}>
						<Avatar alt={item.name} src={`https://robohash.org/user${item.id}`} />
						<h2>{item.name}</h2>
					</Stack>
				</div>
			))}
		</div>
	);
}



