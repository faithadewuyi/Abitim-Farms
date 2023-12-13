var toggle = document.getElementById("toggle");
var menu = document.getElementById("menu");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px";
toggle.onclick = function(){
    if(sideNav.style.right == "-250px")
    {
        sideNav.style.right = "0";
        menu.src = "images/close.png"
    }
    else
    {
        sideNav.style.right = "-250px";
        menu.src = "images/menu.png"
    }
}