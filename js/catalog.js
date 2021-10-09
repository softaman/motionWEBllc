function openLink(evt, animName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", '');
    }
    document.getElementById(animName).style.display = "block";
    evt.currentTarget.className += " w3-red";
    document.getElementById(animName).style.display = "block";
    evt.currentTarget.className += " ";
}



function menuFunction2() {
    document.getElementById("menudown2").classList.toggle("show2");
}

window.onclick = function (event) {
    if (!event.target.matches('.menu__btn2')) {

        let dropdowns = document.getElementsByClassName("menu-content2");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show2')) {
                openDropdown.classList.remove('show2');
            }
        }
    }
}
