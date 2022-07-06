
const d = document;
const $snake = d.querySelector("#snake");
const $btn = d.querySelector("#start");
const ctx = $snake.getContext("2d");

const snake = [
	{x:20, y:20, d:1},
	{x:40, y:20, d:1},
	{x:60, y:20, d:1},
	{x:80, y:20, d:1},
	{x:100, y:20, d:1},
]

//controlar el cambio de estado
let flagSnake = true;
//donde da la vuelta la serpiente
let rectControl = null;

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
		snake.forEach( (el,i) => { 
			
			if(flagSnake && (el.d != snake.at(-1).d) && (el.x == rectControl.x && el.y == rectControl.y)){
				el.d = nearDirection(el.d,i);
				flagSnake = false;
			}

			if( el.d == 1 )
				el.x = el.x + 20;
			else if( el.d == 2 )
				el.y = el.y + 20;
			else if( el.d == 3 )
				el.x = el.x - 20;
			else if( el.d == 4 )
				el.y = el.y - 20;

			if(el === snake.at(-1))
				flagSnake = true
		});

	drawSnake();
	},300)
}


const moveSnake = e => {
	rectControl = {
		x:snake.at(-1).x,
		y:snake.at(-1).y,
	};

  if(e.keyCode === 37)
		snake[snake.length - 1].d = 3;
  else if(e.keyCode === 38)
		snake[snake.length - 1].d = 4;
  else if(e.keyCode === 39)
		snake[snake.length - 1].d = 1;
  else if(e.keyCode === 40)
		snake[snake.length - 1].d = 2;

}

//Toma la dirección del más cercano
const nearDirection = (direct,ind) => {

	for(let j = ind; j < snake.length; j++){
		if(direct != snake[j].d){
			console.log(snake[j].d);
			return snake[j].d;
		}
	}

}
