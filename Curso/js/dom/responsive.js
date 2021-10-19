
const d = document,
    w = window;

export default function resposiveJs(id,mq,desktop,mobile){
    const $div = d.getElementById(id);
    let breackPoint = w.matchMedia(mq);

    const  responsive = e =>{
        $div.innerHTML = (e.matches)
            ? desktop
            : mobile;
    }

    breackPoint.addListener(responsive);
    responsive(breackPoint);
}