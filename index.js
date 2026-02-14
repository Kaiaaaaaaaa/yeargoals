
let goal1 = false;
let goal2 = false;
let goal3 = false;

document.getElementById("goal1").innerHTML = goal1 ? "☑︎ Hell yeah!" : "☐ Total failure!";
document.getElementById("goal2").innerHTML = goal2 ? "☑︎ Aaaaw yeah!!" : "☐ Come on bruh...";
document.getElementById("goal3").innerHTML = goal3 ? "☑︎ Let's goooo!" : "☐ Are you trying?";


window.addEventListener("click", function() 
{
    const newStar = document.createElement("div");
    newStar.classList.add("star");
    newStar.style.left = Math.random() * window.innerWidth + "px";
    newStar.style.top = Math.random() * window.innerHeight + "px";
    document.getElementById("mySky").appendChild(newStar);
});

window.addEventListener("contextmenu", function(e) 
{
    e.preventDefault();
    const stars = document.querySelectorAll(".star");
    if (stars.length > 0) {
        document.getElementById("mySky").removeChild(stars[stars.length - 1]);
    }
});

