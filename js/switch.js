var getCookies = function(){
  var pairs = document.cookie.split(";");
  var cookies = {};
  for (var i=0; i<pairs.length; i++){
    var pair = pairs[i].split("=");
    cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
  }
  return cookies;
}
window.addEventListener("DOMContentLoaded",function() {
    if (getCookies()['theme'] == "light") {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
    }
    document.getElementById("switch").addEventListener("click", function() {
        var x = document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
        if ( x ) {document.cookie = "theme=dark;SameSite=Strict;expires=";}
        else {document.cookie = "theme=light;SameSite=Strict;expires=";}
    })
});
