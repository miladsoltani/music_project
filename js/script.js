const img = document.querySelector('img')
const audio = document.querySelector('audio')
const play = document.querySelectorAll('button')[0]
const pause = document.querySelectorAll('button')[1]
const nim_x = document.querySelectorAll('button')[2]
const one_x = document.querySelectorAll('button')[3]
const two_x = document.querySelectorAll('button')[4]
const next = document.querySelectorAll('button')[5]
const previous = document.querySelectorAll('button')[6]
const plus_5 = document.querySelectorAll('button')[7]
const minus_5 = document.querySelectorAll('button')[8]
const totalTime = document.querySelectorAll('p')[0]
const currentTime = document.querySelectorAll('p')[1]

let musics = ['/musics/1.mp3','/musics/2.mp3','/musics/3.mp3']
let images = ['/images/1.jpg','/images/2.jpg','/images/3.jpg']
let musicsIndex = 0

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
})

pause.addEventListener('click',()=>{
    audio.pause()
})

plus_5.addEventListener('click',()=>{
    audio.currentTime += 5
})

minus_5.addEventListener('click',()=>{
    audio.currentTime -= 5
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

totalTime.innerHTML =Math.floor(Number(audio.duration))

setInterval(() => {
    currentTime.innerHTML++
    currentTime.innerHTML = Math.floor(audio.currentTime)
}, 1000);