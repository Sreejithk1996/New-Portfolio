windows.addEventListener(function scroll (){
    var header = document.querySelector("nav-menu");
    header.classList.toggle("sticky",window.scrollY > 0);
})