// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Modal

var myButton = document.querySelectorAll(".myButton");

// var myButton = document.getElementById("myButton");
// myButton.addEventListener("click", function() {
//   var buttonRect = myButton.getBoundingClientRect();
//   var modalDialog = document.querySelector(".modal-dialog");
//   modalDialog.style.top = (buttonRect.top + buttonRect.height) + "px";
//   modalDialog.style.left = (buttonRect.left + (buttonRect.width / 2) -
//   (modalDialog.offsetWidth / 2)) + "px";
// });

myButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("Button clicked");
    var modal = document.createElement("div");
    console.log(modal.outerHTML);
    modal.classList.add("modal");
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-labelledby", "myModalLabel");
    modal.setAttribute("aria-hidden", "true");

    var modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");
    modalDialog.setAttribute("role", "document");

    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.innerHTML = "We are not yet taking orders!!";

    var modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    var closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.classList.add("close");
    closeButton.setAttribute("data-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");

    // var closeIcon = document.createElement("span");
    // closeIcon.setAttribute("aria-hidden", "true");
    // closeIcon.innerHTML = "&times;";

    // closeButton.appendChild(closeIcon);
    modalHeader.appendChild(closeButton);
    modalContent.appendChild(modalHeader);
    modalDialog.appendChild(modalContent);
    modal.appendChild(modalDialog);

    document.body.appendChild(modal);

    var myModal = new bootstrap.Modal(modal);
    myModal.show();

    console.log("Modal shown");
  });
});
