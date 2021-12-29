
const d = document,
    n = navigator;

export default function webCam(video,btn){
    const $video = d.getElementById(video),
        $btn = d.getElementById(btn);

    d.addEventListener("click", e => {
        if(e.target === $btn){

            n.mediaDevices.getUserMedia({video:true, audio:false})
                .then(strem => {
                    $video.srcObject = strem;
                    $video.play();
                }) 
                .catch( error => {
                    alert("no se pudo encender la camara");
                })
        }
    });
}

