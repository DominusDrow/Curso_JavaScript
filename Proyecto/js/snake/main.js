
const d = document;
const $snake = d.querySelector("#snake");
const $btn = d.querySelector("#start");
const ctx = $snake.getContext("2d");

const snake = [
	{x:20, y:20},
	{x:40, y:20},
	{x:60, y:20},
]

let rectControl = null;
let stateNow = 1, stateBefore = 1;

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
			if(rectControl){

			if( (stateBefore == 1 && el.x < rectControl.x && el.y === rectControl.y) || (stateNow == 1 && el.x >= rectControl.x && el.y === rectControl.y))
				el.x = el.x + 20;
			else if((stateBefore == 2 && el.y < rectControl.y && el.x === rectControl.x) || (stateNow == 2 && el.y >= rectControl.y && el.x === rectControl.x))
				el.y = el.y + 20;
			else if((stateBefore == 3 && el.x > rectControl.x && el.y === rectControl.y) || (stateNow == 3 && el.x <= rectControl.x && el.y === rectControl.y))
				el.x = el.x - 20;
			else if((stateBefore == 4 && el.y > rectControl.y && el.x === rectControl.x) || (stateNow == 4 && el.y <= rectControl.y) && el.x === rectControl.x)
				el.y = el.y - 20;

			}
			else 
				el.x = el.x + 20;
		}
		drawSnake();
	},200)
}


const moveSnake = e => {

	console.log(snake)
	rectControl = snake[snake.length - 1];

  if(e.keyCode === 37){
		stateBefore = stateNow;
		stateNow = 3;
  }
  else if(e.keyCode === 38){
		stateBefore = stateNow;
		stateNow = 4;
  }   
  else if(e.keyCode === 39){
		stateBefore = stateNow;
		stateNow = 1;
  }
  else if(e.keyCode === 40){
		stateBefore = stateNow;
		stateNow = 2;
  }

}
