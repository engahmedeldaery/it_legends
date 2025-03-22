


document.addEventListener("DOMContentLoaded", function () {
   const videoContainer = document.querySelector(".video-container");
   const video = document.querySelector(".video");
   const playPauseBtn = document.querySelector(".play-pause-btn");
   const muteBtn = document.querySelector(".mute-btn");
   const fullscreenBtn = document.querySelector(".fullscreen-btn");

   function togglePlay() {
       if (video.paused) {
           video.play();
           playPauseBtn.innerHTML = "⏸";
       } else {
           video.pause();
           playPauseBtn.innerHTML = "▶";
       }
   }

 

   function toggleFullscreen() {
       if (!document.fullscreenElement) {
           videoContainer.requestFullscreen();
       } else {
           document.exitFullscreen();
       }
   }

   playPauseBtn.addEventListener("click", togglePlay);
   video.addEventListener("click", togglePlay);
   fullscreenBtn.addEventListener("click", toggleFullscreen);
   console.log("SETGERFOOTEWRSSA SDQWEE")
   console.log("hello world  doslad ")

});

// function timeConversion(s) {  // to milliary hours
//     const match = s.match(/(\d+):(\d+):(\d+)(\w+)/); //  match is array
//     console.log(match)
//     const hours = parseInt(match[1]), mintus = match[2], seconds = match[3], period = match[4]

//      let formaHour = hours     // ==> 12
//     if ((period === "PM".toLowerCase()) && hours < 12) formaHour += 12
//     const militaryhours = `${formaHour}:${mintus}:${seconds}`
//     return militaryhours
// }


