

const playButton = document.getElementById("play")
const AudioFile = document.querySelector("audio")
const VolumeSlider = document.getElementById("volume-slider")
const MyF10 = document.getElementById("f10")
const MyB10 = document.getElementById("b10")

/*VolumeSlider.addEventListener("click",function()
{
  function seekto() {
    let seekto = TotalTime.duration * (seek-slider . volume/100);
    CurrentTime.CurrentTime = seekto;
  }  
})*/
MyF10.addEventListener("click", function()
{
  AudioFile.currentTime=AudioFile.currentTime + 10 

})
MyB10.addEventListener("click", function(){

  AudioFile.currentTime=AudioFile.currentTime - 10 
})

let isMusicPlaying=false

function playMusic()
{
  playButton.classList.replace("fa-play", "fa-pause")
    AudioFile.play()
    isMusicPlaying=true
}
function pauseMusic()
{
  playButton.classList.replace("fa-pause", "fa-play")
    AudioFile.pause()
    isMusicPlaying=false
}
playButton.addEventListener("click",function()

{
  if(isMusicPlaying)
  {
    pauseMusic()
  }
  else
  {
    playMusic()

  }
})
//i want to get to  know the curent time and the total duration  of the audio File

let TotalTime=document.querySelector(".totaltime")
let CurrentTime=document.querySelector(".currenttime")
const ProgressBar=document.querySelector(".progressbar")
AudioFile.addEventListener("timeupdate", function(output)
{
  
  let AudioCurentTime = output.srcElement.currentTime

  let AudioTotalTime = output.srcElement.duration
  
  let MusicCompletedPercentage = AudioCurentTime / AudioTotalTime *100  

  ProgressBar.style.width = `${MusicCompletedPercentage}%`

  let AudioTotalTimeInMinutes = Math.floor(AudioTotalTime / 60)

  let AudioTotalTimeInSeconds = Math.floor(AudioTotalTime % 60)
  
  if(AudioTotalTimeInSeconds < 10)
  {
  AudioTotalTimeInSeconds=`0${AudioTotalTimeInSeconds}`
  }
  TotalTime.textContent=`${AudioTotalTimeInMinutes}:${AudioTotalTimeInSeconds}`
  
  let AudioCurrentTimeInMinutes=Math.floor(AudioCurentTime / 60)

  let AudioCurrentTimeInSeconds=Math.floor(AudioCurentTime % 60)
  
  if(AudioCurrentTimeInSeconds < 10)
  {
        AudioCurrentTimeInSeconds=`0${AudioCurrentTimeInSeconds}`
  }
  
  CurrentTime.textContent=`${AudioCurrentTimeInMinutes}:${AudioCurrentTimeInSeconds}`
})
 //store the song details
 const ForwardButton=document.getElementById("forward")

 const SongsData=[
  { 
    songName : "Naamalani undi",
    singerName : "Hari charan,Ramya Behara",
    data : 2
  },

  {
    songName : "Yemaindho Teliyadu naaku",
    singerName : "Karthik Deepika",
    data:3
  },

  {
    songName : "Nandanandanaa",
    singerName : "Sid Sriram",
    data:1
  },

 ]
 const SongName = document.getElementById("songname")
 const SingerName = document.getElementById("singername")
 const Image = document.getElementById("image")
 const BackwardButton=document.getElementById("backward")
 const HeartButton=document.getElementById("heart")
 let songIndex=0
 
 function displaysong()
 {
  SongName.textContent = SongsData[songIndex].songName
  SingerName.textContent = SongsData[songIndex].singerName
  Image.src = `images/image-${SongsData[songIndex].data}.jpg`
  AudioFile.src = `musics/music-${SongsData[songIndex].data}.mp3`
  
  
  playMusic()
 }

  ForwardButton.addEventListener("click",function()
{
  //Heart.style.color = "white"
  displaysong()
  songIndex++
  if(songIndex >songIndex.length-1 )
  {
    songIndex = 0
  }

})

BackwardButton.addEventListener("click",function()
{
  //Heart.style.color = "Red"
  displaysong()
  songIndex--
  if(songIndex < 0 )
  {
    songIndex = SongsData.length-1
  }
})

const ShuffleButton=document.getElementById("shuffle")
 ShuffleButton.addEventListener("click",function()
 {
  
  let randomsongIndex=(Math.floor(Math.random()*3))
  songIndex = randomsongIndex

  displaysong()

 })

 
 let iscolorRed=false
 HeartButton.addEventListener("click",function()
 {
   if(iscolorRed)
   {
    HeartButton.style.color="white"
    iscolorRed=false
   }
   else{
    HeartButton.style.color="Red"
    iscolorRed=true
    localStorage.setItem = (SongName.textContent , SingerName.textContent)

   }
  })

  const ProgressContainer=document.getElementById("progresscontainer")
  ProgressContainer.addEventListener("click",function(event)
  {
    console.log(event)

    let totlWidthFromTheStart= event.offsetX

    let totalWidth = event.srcElement.offsetWidth

     ProgressBar.style.width=`${event.offsetX}px`

     AudioFile.currentTime = totlWidthFromTheStart / totalWidth * AudioFile.duration
    

    
    //AudioFile.currentTime = "1:05"  
    
    //CurrentTime = totlwidthFromTheStart / totalwidth * total duration
  })
    











 