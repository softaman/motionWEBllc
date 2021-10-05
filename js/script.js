function menuFunction() {
    document.getElementById("menudown").classList.toggle("show");
}

window.onclick = function(event) {
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