let head_bg = document.querySelector(".head");
let gnb = document.querySelectorAll(".menu>li");
let sub = document.querySelectorAll(".sub");
let subUl = document.querySelectorAll(".sub>ul");
function fnc() {
  sub.forEach(function (v, k) {
    v.classList.remove("on");
    v.style.height = 0 + "px";
    v.querySelector("a").classList.remove("on");
  });
  head_bg.style.height = 80 + "px";
  head_bg.style.backgroundColor = "transparent";
  document.querySelector(".logo img").src = "images/logo.svg";
}
fnc();
gnb.forEach(function (v, k) {
  v.onmouseenter = function () {
    console.log(head_bg.offsetHeight);
    head_bg.style.backgroundColor = "#fff";
    document.querySelector(".logo img").src = "images/logo-d.svg";
    try {
      subUl.forEach(function () {
        let ht = subUl[k].offsetHeight + 120;
        // console.log(ht);
        gnb[k].querySelector(".sub").style.height = ht + "px";
        gnb[k].querySelector(".sub").classList.add("on");
        head_bg.style.height = ht + "px";
      });
    } catch (err) {
      head_bg.style.height = 80 + "px";
    }
  };
  v.onmouseleave = function () {
    fnc();
  };
});
head_bg.onmouseenter = function () {
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.add("on");
  });
  head_bg.style.height = 80 + "px";
  head_bg.style.backgroundColor = "#fff";
  document.querySelector(".logo img").src = "images/logo-d.svg";
};
head_bg.onmouseleave = function () {
  fnc();
  gnb.forEach(function (v, k) {
    v.querySelector("a").classList.remove("on");
  });
};
