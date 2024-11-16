var modal = document.getElementById("loginModal");
var signInForm = document.getElementById("signInForm");

function showLoginPopup() {
    modal.style.display = "block";
}

function closeLoginPopup() {
    modal.style.display = "none";
}

window.onload = function() {
    if (localStorage.getItem("fromSidebar") === "true") {
        showLoginPopup();
        localStorage.removeItem("fromSidebar"); 
    } else {
        signInForm.style.display = "block";
    }
};

document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        localStorage.setItem("fromSidebar", "true"); 
        window.location.href = "sIGN-iN.html"; 
    });
});

document.getElementById('signInBtn').addEventListener('click', function(event) {
    window.location.href = "sIGN-iN.html";
});
