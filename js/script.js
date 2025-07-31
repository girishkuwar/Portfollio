const currentLocation = window.location.hash;
const navLinks = document.querySelectorAll("#navlist .list a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    document.querySelector("#navlist .selected")?.classList.remove("selected");
    this.parentElement.classList.add("selected"); // Add class to the li
  });
});


let menu = document.querySelector('#menu');
let navlistR = document.querySelector('.navlist ul');
menu.addEventListener("click", myFunction);


function myFunction() {
    menu.classList.toggle("bx-x");
    navlistR.classList.toggle('open');
}



const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });
      if (response.ok) {
        status.innerHTML = 'Message sent!';
        form.reset();
      } else {
        status.innerHTML = '❌ Failed to send message.';
      }
    } catch (err) {
      status.innerHTML = '⚠️ Something went wrong.';
    }
  });



  const texts = ["Web Developer", "React Developer", "Frontend Enthusiast"];
  const glitchChars = "!@#$%^&*()_+=<>?/\\|~";
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speedRange = [50, 130]; // AI-like speed range
  const display = document.querySelector(".typewriter-text");

  function randomSpeed(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function glitchLetter(letter) {
    if (Math.random() < 0.2) { // 20% chance of glitch
      const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      return randomChar;
    }
    return letter;
  }

  function typeEffect() {
    const currentText = texts[textIndex];
    const currentLength = currentText.length;

    if (!isDeleting) {
      const letter = currentText.charAt(charIndex);
      display.textContent += glitchLetter(letter);
      charIndex++;

      if (charIndex < currentLength) {
        setTimeout(typeEffect, randomSpeed(...speedRange));
      } else {
        setTimeout(() => isDeleting = true, 1500);
        setTimeout(typeEffect, 1500);
      }

    } else {
      display.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex > 0) {
        setTimeout(typeEffect, 40);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        display.textContent = "";
        setTimeout(typeEffect, 500);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    display.textContent = "";
    typeEffect();
  });









  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20; // max 20px left/right
    const y = (e.clientY / window.innerHeight - 0.5) * 20; // max 20px up/down
  
    document.querySelector('.background-img').style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  });








