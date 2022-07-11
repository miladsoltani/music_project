const img = document.querySelector('img')
const audio = document.querySelector('audio')
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const nim_x = document.querySelector('.nim_x')
const one_x = document.querySelector('.one_x')
const two_x = document.querySelector('.two_x')
const next = document.querySelector('.next')
const previous = document.querySelector('.previous')
const plus_5 = document.querySelector('.plus_5')
const minus_5 = document.querySelector('.minus_5')
const plus_vol = document.querySelector('.plus_vol')
const minus_vol = document.querySelector('.minus_vol')
const totalTime = document.querySelectorAll('p')[0]
const currentTime = document.querySelectorAll('p')[1]

let musics = ['/musics/1.mp3','/musics/2.mp3','/musics/3.mp3']
let images = ['/images/1.jpg','/images/2.jpg','/images/3.jpg']
let musicsIndex = 0

audio.addEventListener('ended',()=>{
    musicsIndex++
    if (musicsIndex > musics.length-1){
        musicsIndex = 0
    }
    audio.setAttribute('src',musics[musicsIndex])
    img.setAttribute('src',images[musicsIndex])
    console.log(musics[musicsIndex]);
})

next.addEventListener('click',()=>{
    musicsIndex++
    if (musicsIndex > musics.length-1){
        musicsIndex = 0
    }
    audio.setAttribute('src',musics[musicsIndex])
    img.setAttribute('src',images[musicsIndex])
    console.log(musics[musicsIndex]);
})

previous.addEventListener('click',()=>{
    musicsIndex--
    if (musicsIndex < 0){
        musicsIndex = musics.length - 1
    }
    audio.setAttribute('src',musics[musicsIndex])
    img.setAttribute('src',images[musicsIndex])
    console.log(musics[musicsIndex]);
})

play.addEventListener('click',()=>{
    audio.play()
    play.style.display = 'none'
    pause.style.display = 'block'
})

pause.addEventListener('click',()=>{
    audio.pause()
    pause.style.display = 'none'
    play.style.display = 'block'
})

plus_5.addEventListener('click',()=>{
    audio.currentTime += 5
})

minus_5.addEventListener('click',()=>{
    audio.currentTime -= 5
})

plus_vol.addEventListener('click',()=>{
    audio.volume += 0.1
})

minus_vol.addEventListener('click',()=>{
    audio.volume -= 0.1
})

nim_x.addEventListener('click',()=>{
    audio.playbackRate = .5
})

one_x.addEventListener('click',()=>{
    audio.playbackRate = 1
})

two_x.addEventListener('click',()=>{
    audio.playbackRate = 2
})


totalTime.innerHTML =Math.floor(audio.duration)

setInterval(() => {
    currentTime.innerHTML++
    currentTime.innerHTML = Math.floor(audio.currentTime)
}, 1000);


