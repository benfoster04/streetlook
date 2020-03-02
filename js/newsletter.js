window.addEventListener("DOMContentLoaded", function() {
    firebase.initializeApp({
        apiKey: 'lol no',
        authDomain: 'ben-aurora.firebaseapp.com',
        projectId: 'ben-aurora'
    });
    var enter = document.getElementById("submit");
    var rtrn  = document.getElementById("rtrn");
    enter.addEventListener("click", function() {
        var email = document.getElementById("email").value;
        console.log(email);
        let one = email.split("@");
        console.log(one);
        if (one.length == 2) {
            let two = one[1].split(".");
            console.log(two);
            if (two.length == 2 && two[1].length >= 2) {
                rtrn.innerHTML = "Sucess";
            } else {rtrn.innerHTML = "nope";}
        } else {rtrn.innerHTML = "fack off";}
    })
})
