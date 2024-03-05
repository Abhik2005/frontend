document.querySelectorAll(".menu-item").forEach((element) => {
  element.addEventListener("mouseenter", function () {
    gsap.to(element, {
      y: "-10px",
    });
  });
  element.addEventListener("mouseleave", function () {
    gsap.to(element, {
      y: 0,
    });
  });
});

document.querySelectorAll(".lng").forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    elem.style.color = "#FEDFB4";
  });
  elem.addEventListener("mouseleave", () => {
    elem.style.color = "#000";
  });
});

var navBtn = document.querySelector(".nav-btn");
navBtn.addEventListener("mouseenter", () => {
  navBtn.style.paddingLeft = "40px";
  navBtn.style.paddingRight = "30px";
});
navBtn.addEventListener("mouseleave", () => {
  navBtn.style.paddingLeft = "20px";
  navBtn.style.paddingRight = "20px";
});

var btn = document.querySelectorAll(".btn");
btn.forEach((elem)=>{
elem.addEventListener("mouseenter", function(){
    elem.style.paddingLeft = "40px";
    elem.style.paddingRight = "30px";
})
elem.addEventListener("mouseleave", function(){
    elem.style.paddingLeft = "20px";
    elem.style.paddingRight = "20px";
})
})

function loadingPage() {
  gsap.to(".loading-top", {
    y: "-100%",
    duration: 0.8,
    delay: 0.5,
  });
  gsap.to(".loading-bottom", {
    x: "-100%",
    delay: 1.1,
  });
  gsap.to(".loading-bottom", {
    y: "100%",
    duration: 0.8,
    delay: 0.5,
  });
}

loadingPage();

Shery.makeMagnet("#photo", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });