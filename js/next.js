console.log("JS file is connected");

(() => {
  const hamburger = document.getElementById("hamburger");
  const burgerMenu = document.getElementById("burger-menu");

  hamburger.addEventListener("click", () => {
    burgerMenu.classList.toggle("open");
  });

  //variables

  const player = document.querySelector("video");
  const videoControls = document.querySelector("#video-controls");
  const playButton = document.querySelector("#play-button");
  const pauseButton = document.querySelector("#pause-button");
  const stopButton = document.querySelector("#stop-button");
  const volumeSlider = document.querySelector("#change-vol");
  const fullScreen = document.querySelector("#full-screen");
  const playerCon = document.querySelector("#player-container");

  player.controls = false;
  videoControls.classList.remove("hidden");

  //functions

  function playVideo() {
    console.log("play video");
    player.play();
  }

  function pauseVideo() {
    player.pause();
  }

  function stopVideo() {
    player.pause();
    player.currentTime = 1;
  }

  function changeVolume() {
    //console.log("Volume has changed");
    //console.log(volumeSlider.value);
    player.volume = volumeSlider.value;
  }

  function toggleFullScreen() {
    //console.log("Full Screen Called");
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      document.webkitExitFullscreen();
    } else if (playerCon.webkitRequestFullscreen) {
      playerCon.webkitRequestFullscreen();
    } else {
      playerCon.requestFullscreen();
    }
  }
  //event listeners

  function hideControls() {
    if (player.paused) {
      return;
    }
    videoControls.classList.add("hide");
  }

  function showControls() {
    videoControls.classList.remove("hide");
  }

  playButton.addEventListener("click", playVideo);
  pauseButton.addEventListener("click", pauseVideo);
  stopButton.addEventListener("click", stopVideo);
  volumeSlider.addEventListener("input", changeVolume);
  fullScreen.addEventListener("click", toggleFullScreen);
  videoControls.addEventListener("mouseenter", showControls);
  videoControls.addEventListener("mouseleave", hideControls);
  player.addEventListener("mouseenter", showControls);
  player.addEventListener("mouseleave", hideControls);

  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  const navMenu = document.querySelector("nav ul");

  menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
})();
