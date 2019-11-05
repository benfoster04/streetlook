window.addEventListener("DOMContentLoaded", function() {
    function home() {if ( window.location !== "https://streetlook.uk") {window.location = "https://streetlook.uk";}}
    document.getElementById("logo").addEventListener("click",home);
    document.getElementById("home").addEventListener("click",home);
    document.getElementById("shop").addEventListener("click",function() {
        if ( window.location !== "https://streetlook.uk/store" ) {window.location = "https://streetlook.uk/store";}
    });
    document.getElementById("team").addEventListener("click",function() {
        if (window.location !== "https://streetlook.uk/team") {window.location = "https://streetlook.uk/team";}
    })
});