onload = () => {
  var audio = document.getElementById("myAudio");
  audio.play().catch(function (error) {
    console.log("Autoplay was prevented:", error);
  });
  document.body.classList.remove("container");
};
