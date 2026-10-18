const menuBtn = document.getElementById("menuBtn");
const popupMenu = document.getElementById("popupMenu");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// Mở menu
menuBtn.addEventListener("click", function () {
    popupMenu.hidden = false;
    overlay.hidden = false;
    menuBtn.setAttribute("aria-expanded", "true");
});

// Đóng menu
function closeMenu() {
    popupMenu.hidden = true;
    overlay.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);