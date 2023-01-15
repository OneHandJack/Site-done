// Do "sign in" button

btn_el = document.querySelectorAll(".btn__in");
btn_active = document.querySelector(".btn__container");
wrap = document.querySelector(".wrapper");
btn_sign = document.querySelector(".btn__sign");
btn_close = document.querySelector(".btn__close");
header = document.querySelector("header");


btn_el.forEach(element => {
  element.addEventListener('click', function(e) {
    e.preventDefault();
    btn_active.style.display = "block";
  })
  
});

// btn_el.addEventListener("click", function(e) {
//   e.preventDefault();
//   btn_active.style.display = "block";
// })

document.addEventListener("click", function(e) {
  if (e.target === btn_active || e.target === btn_close){
    btn_active.style.display = "none";
  }
})


// Do burger menu
burger = document.querySelector(".burger");

burger_content = document.querySelector(".burger__content");
back = document.querySelector('.container');
logo_text = document.querySelector(".logo__text");
body = document.querySelector("body");


burger.addEventListener("click", function(e) {
  e.preventDefault();
  burger.classList.toggle("is-active");
  if (burger.classList.contains("is-active")) {
    burger_content.style.display = "block";
    burger_content.style.zindex = "9999";
    burger_content.style.visibility = "visible";
    burger.style.visibility = "visible";
    back.classList.add("container__back");
    logo_text.style.display = "none";
    btn_active.style.visibility = "visible";
    body.style.overflow = "hidden";
  }
  else {
    burger_content.style.display = "none";
    back.classList.remove("container__back");
    logo_text.style.display = "block";
    body.style.overflow = "visible";
  }
})