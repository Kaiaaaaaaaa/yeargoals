
let goal1 = false;
let goal2 = false;
let goal3 = false;
let goal4 = false;
let goal5 = true;

let starCount = 7;

document.getElementById("goal1").innerHTML = goal1 ? "☑︎ Hell yeah!" : "☐ Total failure!";
document.getElementById("goal2").innerHTML = goal2 ? "☑︎ Aaaaw yeah!!" : "☐ Come on bruh...";
document.getElementById("goal3").innerHTML = goal3 ? "☑︎ Let's goooo!" : "☐ Are you trying?";
document.getElementById("goal4").innerHTML = goal4 ? "☑︎ You're a star!" : "☐ Keep trying!";
document.getElementById("goal5").innerHTML = goal5 ? "☑︎ That's awesome!" : "☐ You should do it!";

window.addEventListener("click", function(e) 
{
    if (e.ctrlKey) {
        for (let i = 0; i < 50; i++) {
            newStarStuff();
        }
    }
    else {
        newStarStuff();
    }
});

function newStarStuff() 
{
    const newStar = document.createElement("div");
    newStar.classList.add("star");
    newStar.style.left = Math.random() * window.innerWidth*2 + "px";
    newStar.style.top = Math.random() * window.innerHeight*2 + "px";
    document.getElementById("mySky").appendChild(newStar);
    countStarsAndUpdateCounter()
    // starCount++;
    // updateStarCounter();
}

function removeStarStuff()
{
    const stars = document.querySelectorAll(".star");
    if (stars.length > 0) {
        document.getElementById("mySky").removeChild(stars[stars.length - 1]);
    }
    countStarsAndUpdateCounter()
    // starCount --;
    // updateStarCounter();
}

function countStarsAndUpdateCounter() {
    const stars = document.querySelectorAll(".star");
    starCount = stars.length;
    updateStarCounter();
}


window.addEventListener("contextmenu", function(e) 
{
    e.preventDefault();
    if (e.ctrlKey) 
    {
        for (let i = 0; i < 50; i++) 
        {
            removeStarStuff();
        }
    }
    else 
    {
        removeStarStuff();
    }
});

// function updateStarCounter() {
//     document.getElementById("starCount").innerHTML = starCount;
//     document.getElementById("starCount").style.fontSize = (20 + (starCount/2)) + "px";
// }

function updateStarCounter() {
    const el = document.getElementById("starCount");
    el.innerHTML = starCount;

    const baseSize = 20;
    let maxScale = window.innerWidth / 50;
    const k = 0.0015;

    // #### Asymptotic growth ####
    // A = max scale
    // k = growth rate
    // x = star count
    // e = Euler's number
    // f(x) = 1 + (A - 1) * (1 - e^(-k * x))

    const scale = 1 + (maxScale - 1) * (1 - Math.exp(-k * starCount));
    el.style.fontSize = (baseSize * scale) + "px";
}
