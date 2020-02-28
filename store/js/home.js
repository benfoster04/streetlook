window.addEventListener("DOMContentLoaded",function() {
    firebase.initializeApp({
        apiKey: 'AIzaSyD3bZAg31CBbQ3zh0zFijABcWjXjEqx3ms',
        authDomain: 'ben-aurora.firebaseapp.com',
        projectId: 'ben-aurora'
    });
    var db = firebase.firestore();
    var womens = document.getElementById("womens").children.item(1);
    db.collection("products").where("category","==","womens").get()
    .then(function(query) {
        query.forEach( function(doc) {
            let d = doc.data();
            var appendix = document.createElement("div");
            appendix.style.backgroundImage = `url(media/${d.image})`;
            let a = document.createElement("h3").innerHTML = d.name;
            let b = document.createElement("h4").innerHTML = d.price;
            appendix.appendChild(a);
            appendix.appendChild(b);
            womens.appendChild(appendix);
        });
    }).catch(function(err) {console.log("Error during execution: ", err);})
})