const aboutText ={
    "gioi_thieu":{
        title: "Giới thiệu về Festival Huế",
        mean: "Festival Huế 2025 là sự kiện văn hóa, du lịch quan trọng cấp quốc gia và quốc tế, được tổ chức trong khuôn khổ Năm Du lịch Quốc gia - Huế 2025. Sự kiện này không chỉ nhằm quảng bá di sản văn hóa Cố đô mà còn đánh dấu kỷ niệm 50 năm giải phóng Huế (1975 - 2025), đồng thời thúc đẩy liên kết và phát triển du lịch địa phương. Với các hoạt động lễ hội được tổ chức xuyên suốt, kéo dài từ tháng 1 đến tháng 12 (theo concept bốn mùa). Bất kỳ thời điểm nào trong năm, khi du khách đến với xứ Huế đều có thể hòa mình vào dòng chảy lễ hội với các chủ đề độc đáo, nối tiếp nhau: Xuân: “Xuân Cố đô” => Hạ: “Kinh thành toả sáng” => Thu: “Huế vào Thu” => Đông: “Mùa Đông xứ Huế”.",
        image: "about1.jpg"
    },
    "mua_xuan":{
        title: " Lễ hội mùa Xuân - “Xuân Cố đô”",
        mean: "Tại Lễ hội mùa Xuân: “Xuân Cố đô” với chuỗi lễ hội cung đình, lễ hội truyền thống, không gian văn hóa Tết đặc sắc cùng các hoạt động vui chơi ngày xuân mang đậm dấu ấn Kinh đô Huế xưa. Điểm nhấn là Festival Võ thuật Cố đô lần thứ I, Chương trình nghệ thuật Khai mạc Năm Du lịch quốc gia và Sự kiện kỷ niệm 50 năm giải phóng Huế…",
        image: "about2.jpg"
    },
    "mua_ha":{
        title: "Lễ hội mùa Hạ - “Kinh thành toả sáng”",
        mean: "Tuần lễ Festival Huế được tổ chức với rất nhiều hoạt động trải nghiệm thú vị: Triển lãm “Không gian du lịch, di sản văn hóa và danh thắng Việt Nam năm 2025”, Chương trình Chung kết Hoa hậu Việt Nam tại Huế, Tuần lễ Phật Đản và Lễ hội Ẩm thực chay,Chương trình nghệ thuật Áo dài và Tuần lễ Áo dài cộng đồng,…Đây sẽ là dịp để du khách hiểu thêm về văn hóa, con người của vùng đất cố đô.",
        image: "about3.jpg"
    },
    "mua_thu":{
        title: "Lễ hội mùa Thu - “Huế vào Thu”",
        mean: "Lễ hội mùa Thu “Huế vào Thu” với điểm nhấn là chương trình Tết Trung Thu kéo dài từ tháng 7 đến tháng 9. Lễ hội bao gồm các hoạt động như Ngày hội Quảng diễn Lân – Sư – Rồng, Hội rước đèn Trung thu đường phố, diễn Lân Huế, Hội đèn lồng quốc tế Huế 2025.",
        image: "about4.jpg"
    },
    "mua_dong":{
        title: "Lễ hội mùa Đông - “Mùa Đông xứ Huế”",
        mean: "Lễ hội gồm có các chương trình mới tạo cho không khí mùa đông xứ Huế sôi động, ấm áp; đồng thời, tạo ra các loại hình vui chơi, giải trí cho du khách thưởng ngoạn trong thời gian lưu lại Cố đô Huế. Điểm nhấn là Lễ bế mạc Năm Du lịch quốc gia-Huế 2025 và Tuần lễl Âm nhạc Quốc tế; Chương trình nghệ thuật Countdown-Chào đón năm mới 2026.",
        image: "about5.jpg"
    }
}

function showEvent(event) {
   
    const aboutContent = document.querySelector('.aboutContent');
    const aboutImg = document.getElementById('about-img');
    const aboutTitle = document.getElementById('about-title');
    const aboutMean = document.getElementById('about-mean');

    if (aboutText[event]) {
        aboutImg.src = `./assets/images/${aboutText[event].image}`;
        aboutTitle.textContent = aboutText[event].title;
        aboutMean.textContent = aboutText[event].mean;
    }


    const items = document.querySelectorAll(".aboutItem");
    items.forEach(item => {
        item.classList.remove("selectedAboutItem");
    });
    const selectedItem = document.querySelector(`[${event}]`);
    selectedItem.classList.add("selectedAboutItem");

}
window.onload = () => {
      showEvent('gioi_thieu'); // Mặc định hiển thị sự kiện giới thiệu khi tải trang
      const aboutImg = document.getElementById('about-img');
}
