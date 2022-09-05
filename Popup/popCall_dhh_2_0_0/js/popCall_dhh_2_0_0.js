const popCallForm = ` <section class="popCall_dhh_2_0_0" id="popCall">
<div class="popCall_dhh_2_0_0__box">
    <div class="popCall_dhh_2_0_0__close" id="popCallClose">
        <img width="25" height="25" src="images/close-icon.svg" alt="">
    </div>
    <div class="popCall_dhh_2_0_0__logo">
        <img width="204" height="50" src="images/logo1.svg" alt="">
    </div>
    <div class="popCall_dhh_2_0_0__desc">Nhập số điện thoại <br> để được BV Hồng Hà gọi lại ngay !</div>
    <div class="popCall_dhh_2_0_0__form">
        <div style="display:none">
            <input type="text" placeholder="Họ và tên (*)" value="Yêu Cầu Gọi Lại" id="iname" name="iname">
            <textarea type="text" placeholder="Nhu cầu tư vấn" id="itext" name="itext"></textarea>
            <input id="iemail" name="iemail" value="no@email.benhvienhongha.vn" type="hidden" placeholder="Email">
            <input type="hidden" id="gclid_field" name="gclid_field" value="">
            <input type="hidden" id="name_campaign" name="name_campaign" value="[Hong Ha] Thương Hiệu Tư Vấn">
            <input type="hidden" id="code_campaign" name="code_campaign" value="584301759">
        </div>
        <input id="imob" name="imob" type="textbox" placeholder="Nhập số điện thoại của bạn*:">
        <button onclick="ants_send_contact(this);">Yêu cầu gọi lại</button>
    </div>
    <div class="popCall_dhh_2_0_0__sub">* Hoặc gọi ngay với chúng tôi hotline: <br> 1900.633.988
    </div>
</div>
</section>`
const popCallBtn = document.getElementsByClassName("popCall_dhh_2_0_0__btn")
for (let i = 0; i < popCallBtn.length; i++) {
    popCallBtn[i].addEventListener('click', () => {
        document.getElementsByTagName('body')[0].insertAdjacentHTML("beforeend", popCallForm)
        document.getElementById('popCallClose').addEventListener('click', () => {
            document.getElementById('popCall').remove()
        })
        window.onclick = function(e) {
            if (e.target == document.getElementById('popCall')) {
                document.getElementById('popCall').remove()
            }
        }
    })
}