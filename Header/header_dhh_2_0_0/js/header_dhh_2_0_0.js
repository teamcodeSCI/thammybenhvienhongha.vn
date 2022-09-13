document.getElementById("headerMenuBtn").addEventListener("click", () => {
    document.getElementById("headerSideBar").classList.add("show");
    document.getElementById("headerBg").style.display = "block";
});
document.getElementById("headerBg").addEventListener("click", () => {
    document.getElementById("headerSideBar").classList.remove("show");
    document.getElementById("headerBg").style.display = "none";
});

const menuItem = document.querySelectorAll(".header_dhh_2_0_0__item");
menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});
window.onscroll = () => { scrollFunction() };

const scrollFunction = () => {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        document.getElementsByClassName("header_dhh_2_0_0")[0].classList.add('header_dhh_2_0_0--active')
    } else {
        document.getElementsByClassName("header_dhh_2_0_0")[0].classList.remove('header_dhh_2_0_0--active')

    }
}