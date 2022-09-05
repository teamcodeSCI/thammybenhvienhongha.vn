document.getElementById("headerMenuBtn").addEventListener("click", () => {
    document.getElementById("headerSideBar").style.display = "block";
    document.getElementById("headerBg").style.display = "block";
});
document.getElementById("headerBg").addEventListener("click", () => {
    document.getElementById("headerSideBar").style.display = "none";
    document.getElementById("headerBg").style.display = "none";
});

const menuItem = document.querySelectorAll(".header_dhh_2_0_0__item");
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});