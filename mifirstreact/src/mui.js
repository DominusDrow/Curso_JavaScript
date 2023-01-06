import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export const GetAvatar = async () => {

	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users'),
			data = await response.json();

		if(!response.ok) throw new Error(data.message);

		const users = Object.values(data);

	}
	catch (error) {
		console.log(error);
	}

	return <>
		<Stack direction="row" spacing={2}>
			<Avatar alt="Remy Sharp" src="http://placeimg.com/200/200/people" />
		</Stack>
	</>;


}
