import React, { useState } from 'react';

export const CountState = () => {
	const [count, setCount] = useState(0);
	  return <>
			<h2>Count State {count}</h2>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</>
}

export const InputState = () => {
	const [name, setName] = useState('');
	return <>
		<input type="text" value={name} onChange={e => setName(e.target.value)} />
		<h2>{name}</h2>
	</>

}

