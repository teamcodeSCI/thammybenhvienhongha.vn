const popRegForm = ` <section class="popReg_dhh_2_0_0" id="popReg">
<div class="popReg_dhh_2_0_0__box">
    <div class="popReg_dhh_2_0_0__close" id="popRegClose">
        <img width="25" height="25" src="images/close-icon.svg" alt="">
    </div>
    <div class="popReg_dhh_2_0_0__logo">
        <img width="204" height="50" src="images/logo1.svg" alt="">
    </div>
    <div class="popReg_dhh_2_0_0__desc">Đăng ký tư vấn miễn phí</div>
    <div class="popReg_dhh_2_0_0__form">
        <div class="popReg_dhh_2_0_0__input">
            <input id="iname" name="iname" type="textbox" required placeholder="Họ tên*:">
            <input id="imob" name="imob" type="textbox" required placeholder="Điện thoại*:">
            <input type="hidden" style="display:none" id="iemail" name="iemail" type="textbox" placeholder="Email:">
            <textarea id="itext" type="hidden" name="itext" rows="5" value="" placeholder="Dịch vụ quan tâm"></textarea>
            <input type="hidden" id="gclid_field" name="gclid_field" value="">
            <input type="hidden" id="code_campaign" name="code_campaign" value="584301759">
            <input type="hidden" id="name_campaign" name="name_campaign" value="[Hong Ha] Thương Hiệu Tư Vấn">
        </div>
        <button onclick="ants_send_contact(this);">Đăng ký ngay</button>
    </div>
    <div class="popReg_dhh_2_0_0__sub">
        Tư vấn trực tiếp 24/7: <a href="tel:1900633988">1900.633.988</a>
    </div>
</div>
</section>`
const popRegBtn = document.getElementsByClassName("popReg_dhh_2_0_0__btn")
for (let i = 0; i < popRegBtn.length; i++) {
    popRegBtn[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popRegForm)
        imgTheme('Popup/popReg_dhh_2_0_0/', '.popReg_dhh_2_0_0 img')
        document.getElementById('popRegClose').addEventListener('click', () => {
            document.getElementById('popReg').remove()
        })
        window.onclick = function(e) {
            if (e.target == document.getElementById('popReg')) {
                document.getElementById('popReg').remove()
            }
        }
    })
}