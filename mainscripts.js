const keySelector = document.querySelectorAll('.Keys')

keySelector.forEach(Key =>{
  Key.addEventListener('click',()=>playMusic(Key))
})

document.addEventListener('keydown', e => {
  if (e==="a") playMusic(C);
})

function playMusic(Key){
  const keyAudio = document.getElementById(Keys.dataset.note)
  console.log (Keys.dataset.note)
  keyAudio.currentTime=0
  keyAudio.play();
}
