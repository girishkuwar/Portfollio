const currentLocation = window.location.hash;
console.log(currentLocation);

const header = document.getElementById("navlist");
const navlist = header.getElementsByClassName("list");
for (var i = 0; i < navlist.length; i++) {
    navlist[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("selected");
        current[0].className = current[0].className.replace(" selected", "");
        this.className += " selected";
    });
}