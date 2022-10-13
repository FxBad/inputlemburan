let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
let logoName = document.querySelector(".logo_name");

sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (logoName.style.display == "none")
        logoName.style.display = "block";
    else
    logoName.style.display = "none";
}