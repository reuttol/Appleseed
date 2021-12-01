document.addEventListener("keyup", moveForward, false);

function moveForward(event){
    const key = event.key;
    if(key === "c"){
        move(1);
    }
    if(event.key === "ArrowRight"){
        move(2);
    }
}

function move(player){
    const playerCar = document.querySelector(`#player${player}-race .active`)
    if (playerCar.nextElementSibling) {
        playerCar.nextElementSibling.classList.add("active");
        playerCar.classList.remove("active");
      } else {
        const winner = document.createElement("h3");
        const banner = document.querySelector(".banner");
        winner.innerText = `Player${player} Won!!!`;
        banner.appendChild(winner);
        document.removeEventListener("keyup", moveForward, false);

      }
}