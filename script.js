var menuIcon = document.querySelector(".menu-icon");
var sidebar =document.querySelector(".sidebar");
var container = document.querySelector(".container1");

menuIcon.onclick = ()=>{

    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}



