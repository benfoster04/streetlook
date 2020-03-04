window.addEventListener("DOMContentLoaded",function() {
    document.getElementById("switch").addEventListener("click", function() {
        var x = document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
        if ( x ) {document.cookie = "theme=dark;SameSite=Strict;expires=";}
        else {document.cookie = "theme=light;SameSite=Strict;expires=";}
    })
});
