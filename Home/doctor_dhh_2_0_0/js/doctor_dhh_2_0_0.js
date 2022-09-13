const doctorInfo = [{
    id: 'tabDoctors0',
    name: 'Dr Robert Nguyễn',
    img: 'Home/doctor_dhh_2_0_0/images/doctor-detail1.jpg',
    text: [
        'Chuyên gia hàng đầu trong lĩnh vực PTTM1',
        'Thành viên Hiệp hội PTTM Hàn Quốc',
        '15 năm kinh nghiệm PTTM tạo hình khuôn mặt và vóc dáng',
        'Thực hiện thành công > 1000 ca PTTM mỗi năm'
    ]
}, {
    id: 'tabDoctors1',
    name: 'Dr Robert Nguyễn1',
    img: 'Home/doctor_dhh_2_0_0/images/doctor-detail1.jpg',
    text: [
        'Chuyên gia hàng đầu trong lĩnh vực PTTM2',
        'Thành viên Hiệp hội PTTM Hàn Quốc',
        '15 năm kinh nghiệm PTTM tạo hình khuôn mặt và vóc dáng',
        'Thực hiện thành công > 1000 ca PTTM mỗi năm'
    ]
}, {
    id: 'tabDoctors2',
    name: 'Dr Robert Nguyễn2',
    img: 'Home/doctor_dhh_2_0_0/images/doctor-detail1.jpg',
    text: [
        'Chuyên gia hàng đầu trong lĩnh vực PTTM3',
        'Thành viên Hiệp hội PTTM Hàn Quốc',
        '15 năm kinh nghiệm PTTM tạo hình khuôn mặt và vóc dáng',
        'Thực hiện thành công > 1000 ca PTTM mỗi năm'
    ]
}]
const infoTemp = (props) => {
    let text = ''
    for (let item of props.text) {
        text += ` <li>– ${item}</li>`
    }
    return ` <div class="doctor_dhh_2_0_0__detail">
    <div class="doctor_dhh_2_0_0__img">
        <img width="366" height="356" src="${props.img}" alt="">
    </div>
    <div class="doctor_dhh_2_0_0__text">
        <h3 class="doctor_dhh_2_0_0__name">${props.name}</h3>
        <ul>
           ${text}
        </ul>
    </div>
</div>`
}
document.getElementById('doctor_dhh_2_0_0__content').innerHTML = infoTemp(doctorInfo[0])

const tabDoctors = document.getElementsByClassName('doctor_dhh_2_0_0__tab');
for (let i = 0; i < tabDoctors.length - 1; i++) {
    tabDoctors[i].addEventListener('click', () => {
        for (let i = 0; i < tabDoctors.length - 1; i++) {
            tabDoctors[i].classList.remove('doctor_dhh_2_0_0--active');
        }
        document.getElementById('doctor_dhh_2_0_0__content').innerHTML = infoTemp(doctorInfo[i])
        tabDoctors[i].classList.add('doctor_dhh_2_0_0--active')
    })
}