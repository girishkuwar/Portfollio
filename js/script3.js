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

function emailSend() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "girishkuwar11@gmail.com",
        Password : "6C4031B6B99464C8F40E800E6FB4D768A42B",
        To : 'gukuwar@gmail.com',
        From : "girishkuwar11@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}