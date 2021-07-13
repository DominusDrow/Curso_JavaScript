
export function moveBall(ball,e){
    const d = document,
        $ball = d.querySelector(ball);

    $ball.style.left = "0rem";
    $ball.style.top = "0rem";

    if(e.keyCode === 40){
        $ball.style.top = `${parseInt($ball.style.top)+1}rem`;

    }
    else if(e.keyCode === 38){
        $ball.style.top = `${parseInt($ball.style.top)-1}rem`;
    }
    else if(e.keyCode === 39){
        $ball.style.left = `${parseInt($ball.style.left)+1}rem`;
    }
    else if(e.keyCode === 37){
        $ball.style.left = `${parseInt($ball.style.left)-1}rem`;
    }

      

} 

export function shortCuts(e) {
    if(e.altKey && e.key === "a")
        alert("has mandado una alerta");
    else if(e.altKey && e.key === "p")
        prompt("has mandado un aviso");
    else if(e.altKey && e.key === "c")
        confirm("has mandado una confirmación");
}