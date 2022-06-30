
const d = document;
const $snake = d.querySelector("#snake");
const $btn = d.querySelector("#start");
const ctx = $snake.getContext("2d");

const snake = [
	{x:20, y:20, d:1},
	{x:40, y:20, d:1},
	{x:60, y:20, d:1},
]

//cuadro donde cambia de dirección
let rectControl = null;
//contador para el cambio de dirección
let countSnake = 3;
//la nueva dirección que toma
let direction = 0;

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

}

const drawSnake = () =>{
	ctx.fillStyle = "#149491"
	for(let el  of snake){
		ctx.fillRect(el.x,el.y,20,20);
	}
}

const ereaseSnake = () =>{
	ctx.fillStyle = "#042001"
	for(let el  of snake){
		ctx.fillRect(el.x,el.y,20,20);
	}
}

const playSnake = () => {
	setInterval(() => {
		ereaseSnake();
		for(let el  of snake){
			if(countSnake > 0 && rectControl)
				if(el.x === rectControl.x && el.y === rectControl.y){
					el.d = direction;
					countSnake -= 1;
				}

			if()


			if( el.d == 1 )
				el.x = el.x + 20;
			else if( el.d == 2 )
				el.y = el.y + 20;
			else if( el.d == 3 )
				el.x = el.x - 20;
			else if( el.d == 4 )
				el.y = el.y - 20;

		}

		drawSnake();
	},200)
}


const moveSnake = e => {

	countSnake = snake.length;
	rectControl = snake.at(-1);

  if(e.keyCode === 37)
		direction = 3;
  else if(e.keyCode === 38)
		direction = 4;
  else if(e.keyCode === 39)
		direction = 1;
  else if(e.keyCode === 40)
		direction = 2;

}
