onload = () => {
  var audio = document.getElementById("myAudio");
  audio.volume = 0.5; // Adjust the volume if needed

  // Try to play the audio
  audio.play().catch(function (error) {
    console.log("Autoplay was prevented:", error);

    // Create and show the play button
    var button = document.createElement("button");
    button.innerHTML = "Klik sambil senyum dong pliss 🥹";
    button.style.position = "absolute";
    button.style.top = "50%";
    button.style.left = "50%";
    button.style.transform = "translate(-50%, -50%)";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.borderRadius = "10px";
    button.style.backgroundColor = "#49888A";
    button.style.color = "white";
    button.style.border = "none";
    button.style.cursor = "pointer";
    document.body.appendChild(button);

    // Add click event to the button
    button.addEventListener("click", function () {
      document.body.classList.remove("container");
      audio
        .play()
        .then(function () {
          // Hide the button after audio starts playing
          button.style.display = "none";
        })
        .catch(function (error) {
          console.log("Error playing audio:", error);
        });
    });
  });
};
