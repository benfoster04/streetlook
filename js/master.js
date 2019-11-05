window.addEventListener("DOMContentLoaded", function() {
    var x = document.getElementById("navbar");
    window.onscroll = function() {
        if ( window.scrollY > 40 && !x.classList.contains("mini")) {x.classList.add("mini");}
        else if ( window.scrollY < 40 && x.classList.contains("mini") ) {x.classList.remove("mini");}
    }
});