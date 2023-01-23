
const d = document;
const $snake = d.querySelector("#snake");
const $btn = d.querySelector("#start");
const ctx = $snake.getContext("2d");

const snake = [
	{x:60, y:20, d:1},
	{x:40, y:20, d:1},
	{x:20, y:20, d:1},
]

//direccion que va tomando la serpiente
let direction = 1;
//coordenadas de la cominda de la serpiente
let foodX = undefined, foodY = undefined;
//guarda el ultimo rectangulo para agregarlo
let rectAdd = null;
//la velocidad a la que va la snake
let fps = 200;

d.addEventListener("DOMContentLoaded", () => {
	init();
	
})

d.addEventListener("click", e => {
	if(e.target == $btn){
		playSnake();
	}
})

d.addEventListener("keydown", e => {
	moveSnake(e);
})

const init = () => {
	ctx.fillStyle = "#042001"
	ctx.fillRect(0,0,$snake.width,$snake.height);

	drawSnake();
	foodSnake();

}

const drawSnake = () =>{
	ctx.fillStyle = "#149491"
	for(let el  of snake){
		ctx.fillRect(el.x,el.y,20,20);
	}
}

const ereaseSnake = () =>{
	ctx.fillStyle = "#042001"
	for(let el of snake)
		ctx.fillRect(el.x,el.y,20,20);
}

const foodSnake = () => {
	foodX = Math.floor(((Math.random() * (($snake.width / 20) -1 )) + 1)) * 20;
	foodY = Math.floor(((Math.random() * (($snake.height / 20) -1 )) + 1)) * 20;

	ctx.fillStyle = "#C0392B"
	ctx.fillRect(foodX,foodY,20,20);
}

const playSnake = () => {
	setInterval(() => {
		ereaseSnake();

		rectAdd = {
			x:snake.at(-1).x,
			y:snake.at(-1).y,
			d:snake.at(-1).d,
		} 

		for(let i = snake.length - 1; i >= 0; i--){
			let el = snake[i];

			el.d = (i != 0) ? snake[i - 1].d : direction;

			if( el.d == 1 )
				el.x = el.x + 20;
			else if( el.d == 2 )
				el.y = el.y + 20;
			else if( el.d == 3 )
				el.x = el.x - 20;
			else if( el.d == 4 )
				el.y = el.y - 20;

		}

		if(snake[0].x === foodX && snake[0].y === foodY){
			foodSnake();
			snake.push(rectAdd);
			fps = fps * 0.50;
		}

		if(snake[0].x < 0 || snake[0].y < 0 || snake[0].x >= $snake.width || snake[0].y >= $snake.height || colitionsSelf()){
			snake.length = 0;
				
			snake.push({x:60, y:20, d:1});
			snake.push({x:40, y:20, d:1});
			snake.push({x:20, y:20, d:1});

			direction = 1;
		}

		drawSnake();
	},fps)
}

const colitionsSelf = () => {
	for(let i = 0; i <= snake.length - 1; i++)
		for(let j = i + 1; j <= snake.length - 1; j++)
			if(snake[i].x == snake[j].x && snake[i].y == snake[j].y)
				return true;

	return false;
}


const moveSnake = e => {
	if(e.keyCode >= 37 && e.keyCode <= 40)
		e.preventDefault();

  if(e.keyCode === 37 && direction != 1)
		direction = 3;
  else if(e.keyCode === 38 && direction != 2)
		direction = 4;
  else if(e.keyCode === 39 && direction != 3)
		direction = 1;
  else if(e.keyCode === 40 && direction != 4)
		direction = 2;

}

