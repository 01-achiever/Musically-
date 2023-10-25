console.log("Welcome to Musically");
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let MyProgressBar = document.getElementById('MyProgressBar');
let songs = [
    {songName : "Jhume Jo Pathan" , filepath : "song/1.mp3", coverpath :"covers/1.jpg"},
    {songName : "Jhume Jo Pathan" , filepath : "song/1.mp3", coverpath :"covers/1.jpg"},
    {songName : "Jhume Jo Pathan" , filepath : "song/1.mp3", coverpath :"covers/1.jpg"},
    {songName : "Jhume Jo Pathan" , filepath : "song/1.mp3", coverpath :"covers/1.jpg"},
    {songName : "Jhume Jo Pathan" , filepath : "song/1.mp3", coverpath :"covers/1.jpg"},
    {songName : "Jhume Jo Pathan" , filepath : "song/1.mp3", coverpath :"covers/1.jpg"},
    {songName : "Jhume Jo Pathan" , filepath : "song/1.mp3", coverpath :"covers/1.jpg"},
    {songName : "Jhume Jo Pathan" , filepath : "song/1.mp3", coverpath :"covers/1.jpg"}
]
// audioElement.play()

//Handle Play/Pause Click
masterPlay.addEventListener('Click', ()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove("bi bi-play-circle");
    masterPlay.classList.add("bi bi-pause-circle");
}
else{
    audioElement.paused();
    masterPlay.classList.remove("bi bi-pause-circle");
    masterPlay.classList.add("bi bi-play-circle");
}
})



//listen to events
MyProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //Update Seekbar
}
)