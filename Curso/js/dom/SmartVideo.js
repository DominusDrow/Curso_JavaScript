
const d = document;

const callback = entries => {
  try{
    entries.forEach(entry => {
      if(entry.isIntersecting)
        entry.target.play();
      else
        entry.target.pause();

      d.addEventListener("visibilitychange", e => d.visibilityState === "visible" ? entry.target.play() : entry.target.pause());
    })
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
      threshold: 0.7,
    }

    let observer = new IntersectionObserver(callback, options);
    
  $video.forEach(el => observer.observe(el));

}

