/**
 * Allow the options to be change and the option
 * clicked then become active.
 *
 * Listerning for a click even on an option
 */

const options = document.querySelectorAll(".option-btn");
const contents = document.querySelectorAll(".content");
const dateSpan = document.querySelector(".date");

options.forEach((option, index) => {
  option.addEventListener("click", () => {
    options.forEach((otherOption, otherIndex) => {
      if (otherIndex !== index && otherOption.classList.contains("active")) {
        otherOption.classList.remove("active");
        contents[otherIndex].style.display = "none";
      }
    });
    option.classList.add("active");
    contents[index].style.display = "block";
  });
});

(function () {
  emailjs.init("_fpwVG4lyeNRh-Aww");
})();

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  emailjs
    .send("service_bsubuld", "template_95c73sj", {
      name: name,
      email: email,
      message: message,
    })
    .then(
      function (response) {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log("Email sent successfully", response);
        alert("Thank you for your message. We will get back to you shortly.");
      },
      function (error) {
        console.error("Error sending email", error);
        alert(
          "Sorry, there was an error sending your message. Please try again later."
        );
      }
    );

  return false;
}

/**
 * Click event for the toggle menu
 *
 */

const menuBar = document.querySelector(".menu-bar");
const menuClose = document.querySelector(".menu-close");
const navContainer = document.querySelector(".nav-links");
const menuLinks = document.querySelectorAll(".nav-links ul li a");

function openMenu() {
  navContainer.classList.add("active");
}

function closeMenu() {
  navContainer.classList.remove("active");
}

menuBar.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

document.addEventListener("click", function (event) {
  if (!navContainer.contains(event.target) && !menuBar.contains(event.target)) {
    closeMenu();
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
