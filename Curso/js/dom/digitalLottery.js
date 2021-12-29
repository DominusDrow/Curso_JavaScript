
const d = document;

export default function giveaway(arr, btn){
    let $arr = d.querySelectorAll(arr);
    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            let x = Math.floor(Math.random() * $arr.length );
            alert(`El ganador es: ${$arr[x].textContent}`);
        }
    })
}
