const menuMobile=document.querySelector(".menu-mobile");
const navbarWrap=document.querySelector(".navbar-wrap");
menuMobile.addEventListener("click",()=>{
    navbarWrap.classList.toggle("navbar-wrap--active");
    menuMobile.classList.toggle("menu-mobile--active");
    menuMobile.classList.toggle("menu-mobile");
});