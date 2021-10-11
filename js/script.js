

const circle = document.querySelector(".hero3__box1")
const circle1 = document.querySelector(".hero3__boxP")
const radius = circle.r.baseVal.value;
const circleP = 2  * Math.PI * radius ;



circle.style.strokeDasharray = `${circleP} ${circleP}`
circle.style.strokeDashoffset = circleP;
circle1.style.strokeDasharray = `${circleP} ${circleP}`
circle1.style.strokeDashoffset = circleP;



function setProgress(el){
    const offset =circleP - el / 100 * circleP;
    circle.style.strokeDashoffset = offset ;
}
setProgress(-0)

function setProgress2(con){
    const offset2 =circleP - con / 100 * circleP;
    circle1.style.strokeDashoffset = offset2 ;
}
setProgress2(-0)







function menuFunction() {
    document.getElementById("menudown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.menu__btn')) {

        let dropdowns = document.getElementsByClassName("menu-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}



