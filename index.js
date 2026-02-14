
let goal1 = false;
let goal2 = false;
let goal3 = false;

let starCount = 7;

document.getElementById("goal1").innerHTML = goal1 ? "☑︎ Hell yeah!" : "☐ Total failure!";
document.getElementById("goal2").innerHTML = goal2 ? "☑︎ Aaaaw yeah!!" : "☐ Come on bruh...";
document.getElementById("goal3").innerHTML = goal3 ? "☑︎ Let's goooo!" : "☐ Are you trying?";


window.addEventListener("click", function() 
{
    const newStar = document.createElement("div");
    newStar.classList.add("star");
    newStar.style.left = Math.random() * window.innerWidth*2 + "px";
    newStar.style.top = Math.random() * window.innerHeight*2 + "px";
    document.getElementById("mySky").appendChild(newStar);
    starCount++;
    updateStarCounter();
});

window.addEventListener("contextmenu", function(e) 
{
    e.preventDefault();
    const stars = document.querySelectorAll(".star");
    if (stars.length > 0) {
        document.getElementById("mySky").removeChild(stars[stars.length - 1]);
    }
    starCount --;
    updateStarCounter();
});

function updateStarCounter() {
    document.getElementById("starCount").innerHTML = starCount;
}