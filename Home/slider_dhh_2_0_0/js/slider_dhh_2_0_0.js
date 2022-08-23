const slider_dhh_2_0_0__data = [{
    link: '#',
    imgMb: 'Home/slider_dhh_2_0_0/images/slider-pic1.jpg',
    imgPc: 'Home/slider_dhh_2_0_0/images/slider-pic1.jpg',
    alt: 'pic1'
}, {
    link: '#',
    imgMb: 'Home/slider_dhh_2_0_0/images/slider-pic1.jpg',
    imgPc: 'Home/slider_dhh_2_0_0/images/slider-pic1.jpg',
    alt: 'pic2'
}, {
    link: '#',
    imgMb: 'Home/slider_dhh_2_0_0/images/slider-pic1.jpg',
    imgPc: 'Home/slider_dhh_2_0_0/images/slider-pic1.jpg',
    alt: 'pic3'
}]
const sliderItem = (props) => {
    return `
        <a href="${props.link}">
                <picture>
                    <source width="377" height="622" media="(max-width:767px)" srcset="${props.imgMb}">
                    <img width="1441" height="470" src="${props.imgPc}" alt="${props.alt}">
                </picture>
            </a>
    `
}
let index = 1;
const slideShow = (idx) => {
    document.getElementById('slider_dhh_2_0_0__slider').innerHTML = sliderItem(slider_dhh_2_0_0__data[idx]);
}
const sliderBtn = (data) => {
    let slideBtn = ''
    for (let i = 0; i < data.length; i++) {
        console.log("i: ", i);
        slideBtn += `<button onclick="${slideShow(i)}"></button>`
    }
    document.getElementsByClassName('slider_dhh_2_0_0__btn')[0].insertAdjacentHTML("afterbegin", slideBtn)

}

sliderBtn(slider_dhh_2_0_0__data)


function autoRun() {
    if (index >= slider_dhh_2_0_0__data.length) {
        index = 0;
    }
    slideShow(index);
    index++;
}
slideShow(0)
setInterval(() => {
    autoRun();
}, 6000)