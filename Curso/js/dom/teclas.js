export default function moveBall(ball){
    const d = document,
        $ball = d.querySelector(ball);

    $ball.style.left = "0rem";
    $ball.style.top = "0rem";


    d.addEventListener("keydown", (e) => {

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

        if(e.altKey && e.keyCode === 65)
            alert();
        else if(e.altKey && e.keyCode === 80)
            prompt();
        else if(e.altKey && e.keyCode === 67)
            confirm();
        

    })
}