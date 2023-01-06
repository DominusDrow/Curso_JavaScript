import { BiAccessibility } from "react-icons/bi";
import "./post.css"

const getData = async () => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await response.json();
		
		if(!response.ok) throw new Error(data.message);

		for(let i = 0; i < 10; i++) {
			const post = document.createElement('div');
			post.classList.add('post');
			post.innerHTML = `
				<h2>${data[i].title}</h2>
				<p>${data[i].body}</p>
			`;
			document.body.appendChild(post);
		}

	}
	catch (error) {
		console.log(error);
	}

}

export const Post = () => {
	return <>
		<button onClick={getData}>
			<BiAccessibility/>
			Post
		</button>
	</>;
}



