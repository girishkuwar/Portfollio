let names = document.getElementById("name");
let det = names.getBoundingClientRect();

let border = document.getElementById("side");
border.style.top = det.top + 20 + "px";
border.style.left = det.left + -10 + "px";

let bordernext = document.getElementById("side2");
bordernext.style.top = det.top + -10 + "px";
bordernext.style.left = det.left + det.width + -bordernext.offsetWidth + 10 + "px";
bordernext.style.left = bordernext.style.left -  + "px";

