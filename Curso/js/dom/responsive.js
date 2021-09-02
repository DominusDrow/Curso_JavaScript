
const d = document,
    w = window;

export default function resposiveJs(id,mq,desktop,mobile){
    const breackPoint = w.matchMedia(mq);

    const  responsive = (e) =>{
        if(e.matches)   d.getElementById(id).innerHTML = desktop;
        else d.getElementById(id).innerHTML = mobile;
    }

    breackPoint.addListener(responsive);
    responsive(breackPoint);
}