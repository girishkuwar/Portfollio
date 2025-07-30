const currentLocation = window.location.hash;
console.log(currentLocation);

const header = document.getElementById("navlist");
const navlist = header.getElementsByClassName("list");
for (var i = 0; i < navlist.length; i++) {
    navlist[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("selected");
        current[0].className = current[0].className.replace(" selected", "");
        this.className += " selected";
        console.log(this);
    });
}

let menu = document.querySelector('#menu');
let navlistR = document.querySelector('.navlist ul');
menu.addEventListener("click", myFunction);


function myFunction() {
    menu.classList.toggle("bx-x");
    navlistR.classList.toggle('open');
}


let logo = document.getElementById("logo");
let id = 0;
logo.addEventListener("click" , (e) => {
    id++;
    console.log(id);
    if(id > 3){
        let locker =  document.querySelector(".secret");
        locker.style.display = "block";
        // console.log(locker);
        locker.addEventListener("change" , (e) => {
            if(e.target.value == "447474") {
                localStorage.setItem('user','447474');
                window.location.href = "/admin.html";
                e.target.value = "";
            }
            // console.log(e.target.value);
        })
    }
})







// let contactForm = document.getElementById("contact-form");
// contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let username = document.getElementById("name");
//     let phone = document.getElementById("phone");
//     let email = document.getElementById("email");
//     let subject = document.getElementById("subject");
//     let message = document.getElementById("message");

//     if (username.value == "" || phone.value == "" || email.value == "" || subject.value == "" || message.value == "") {
//         alert("Ensure you input a value in both fields!");
//     } else {
//         createMsg(username.value, phone.value, email.value, subject.value, message.value);
//     }
// })


















const createMsg = async (name, phone, email, sub, msg) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "phone": phone,
            "name": name,
            "subject": sub,
            "msg": msg
        }),
    }

    let p = await fetch("https://portfoliio.up.railway.app/api/collections/users_meassage/records", options)
        .then((res) => res.json())
        .then((json) => {
            alert(`Message Send Thank you for visiting ${name}`);
            console.log(json)
        }
        );

}


