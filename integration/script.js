window.addEventListener("scroll", function (e) {
    let header = document.querySelector("header");
    header.classNameList.toggle("scrollEffect", window.scrollY > 0);
  });
  

  window.addEventListener("scroll", function (e) {
    let footer = document.querySelector("footer");
    footer.classNameList.toggle("scrollEffect", window.scrollY > 0);
  });
