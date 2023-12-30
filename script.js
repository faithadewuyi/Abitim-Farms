
// Nav Bar Toggle
var toggle = document.getElementById("toggle");
var menu = document.getElementById("menu");
var sideNav = document.getElementById("sideNav");


sideNav.style.right = "-250px";

toggle.onclick = function() {
    
    sideNav.style.right = (sideNav.style.right === "-250px") ? "0" : "-250px";

    menu.textContent = (sideNav.style.right === "-250px") ? '✕' : '☰';
};

var menuItems = document.querySelectorAll("#sideNav a");

menuItems.forEach(function(item) {
    item.addEventListener("click", function(e) {
        e.preventDefault();

        sideNav.style.right = "-250px";

        menu.textContent = '☰';

        // Scroll smoothly to the target section
        var targetId = this.getAttribute("href");
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Contact us script
function openGoogleMaps() {
   
    window.open('https://maps.app.goo.gl/DYbz8iBBB2n9uQ8B8', '_blank');
}

function callPhoneNumber() {
    window.open('tel:+2348100322494');
}



