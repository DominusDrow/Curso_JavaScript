
const d = document;

const callback = entries => {
  try{
    if(entries[0].isIntersecting)
      entries[0].target.play();
    else
      entries[0].target.pause();
  }
  catch(err){
    alert("Active los permisos de autoplay");
  }
}


//detecta cuando se visiviliza el contenido y da play al video
export default function smartVideo (video){

    const $video = d.querySelectorAll(video);

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    let observer = new IntersectionObserver(callback, options);
    
    observer.observe($video[0]);
    observer.observe($video[1]);

}

//Detecta cuando el usuario abandona la pestaña y pausa el video
export function tabDetect(video){
  const $video = d.querySelectorAll(video);

  try{
    if(d["hidden"])
      $video.forEach(el => {
        el.pause();
      })
  }
  catch(err){
    alert("Active los permisos de autoplay");
  }
}

