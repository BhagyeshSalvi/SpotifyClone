console.log("Welcome");

//variable initialize
let songIndex=0;
let audioElement = new Audio('songs/5.mp3');
let mainPlay = document.getElementById('mainPlay');
let progressBar = document.getElementById('progressBar');
 //audioElement.play();

//array of songs
let songs = [
    {songName: "Let me love you", path: "songs/1.mp3", cover: "Images/cover1.jpg"},
    {songName: "Perfect", path: "songs/2.mp3", cover: "Images/cover2.jpg"},
    {songName: "Starboy", path: "songs/3.mp3", cover: "Images/cover3.jpg"},
    {songName: "Reminder", path: "songs/4.mp3", cover: "Images/cover4.jpg"},
    {songName: "Attention", path: "songs/5.mp3", cover: "Images/cover5.jpg"},
    {songName: "See you again", path: "songs/6.mp3", cover: "Images/cover6.jpg"},
    {songName: "No lie", path: "songs/7.mp3", cover: "Images/cover7.jpg"},
]

 //Play/Pause for main PLay button
 //AddEventListener click
 mainPlay.addEventListener('click',()=>{
    //when user clicks the mainPlay button, if audio is paused or not started then play
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        mainPlay.classList.remove('fa-circle-play');
        mainPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        mainPlay.classList.remove('fa-circle-pause');
        mainPlay.classList.add('fa-circle-play');
    }
})

//Updating the progressBar
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value= progress;
})

//moving the progressBar and changing the time of song accordingly
 progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
 })

 //function which will make all the pause button play
 const makeAllPlay= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
 }
//this function will deal with which songs to play
//loop through all songs 
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        //first make all pause button play
        makeAllPlay();
        //the songs which we selected remove the play button and add pause button
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        songIndex= parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`
        audioElement.currentTime=0;
        audioElement.play();
        mainPlay.classList.remove('fa-circle-play');
        mainPlay.classList.add('fa-circle-pause');
        
    })
 })
//NExt button
 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    mainPlay.classList.remove('fa-circle-play');
    mainPlay.classList.add('fa-circle-pause');
 })

 //previous Button
 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    audioElement.currentTime=0;
    audioElement.play();
    mainPlay.classList.remove('fa-circle-play');
    mainPlay.classList.add('fa-circle-pause');
 })