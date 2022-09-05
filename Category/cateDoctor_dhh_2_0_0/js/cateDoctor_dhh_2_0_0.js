const cateDoctor_dhh_2_0_0 = [{
        img: "images/doctor.png",
        name: "Dr. Robert Nguyễn",
        profile: `    <ul>
          <li>-Chuyên gia hàng đầu trong lĩnh vực PTTM</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
      </ul>`,
    },
    {
        img: "images/doctor.png",
        name: "Dr. Tuấn Nguyễn",
        profile: `    <ul>
          <li>-Chuyên gia hàng đầu trong lĩnh vực PTTM</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
      </ul>`,
    },
    {
        img: "images/doctor.png",
        name: "Dr. Hậu Nguyễn",
        profile: `    <ul>
          <li>-Chuyên gia hàng đầu trong lĩnh vực PTTM</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
      </ul>`,
    },
    {
        img: "images/doctor.png",
        name: "Dr. Đức Nguyễn",
        profile: `    <ul>
          <li>-Chuyên gia hàng đầu trong lĩnh vực PTTM</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
      </ul>`,
    }, ,
    {
        img: "images/doctor.png",
        name: "Mr Định",
        profile: `    <ul>
          <li>-Chuyên gia hàng đầu trong lĩnh vực PTTM</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
          <li>-Thành viên hiệp hội PTTM Hàn Quốc</li>
      </ul>`,
    },
];
let HTML = "";
cateDoctor_dhh_2_0_0.forEach(function(doctor) {
    HTML += `
    <a class="cateDoctor_dhh_2_0_0__item">
    <div class="cateDoctor_dhh_2_0_0__top">
        <img width="372" height="384" src="${doctor.img}" alt="">
    </div>
    <div class="cateDoctor_dhh_2_0_0__bot">
        <p class="cateDoctor_dhh_2_0_0__name">
            ${doctor.name}
        </p>
        ${doctor.profile}
    </div>
</a>
`;
});
document.getElementById("cateDoctor_dhh_2_0_0__box").innerHTML = HTML;