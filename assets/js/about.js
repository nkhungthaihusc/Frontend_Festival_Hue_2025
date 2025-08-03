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
    const aboutImg = document.querySelector('.about-img');
    const aboutTitle = document.getElementById('about-title');
    const aboutMean = document.getElementById('about-mean');

    if (aboutText[event]) {
        aboutImg.style.backgroundImage = `url(./assets/images/${aboutText[event].image})`;
        aboutTitle.textContent = aboutText[event].title;
        aboutMean.textContent = aboutText[event].mean;
    }


    const items = document.querySelectorAll(".aboutItem");
    items.forEach(item => {
        item.classList.remove("selectedAboutItem");
    });
    const selectedItem = document.querySelector(`[${event}]`);
    selectedItem.classList.add("selectedAboutItem");


    const seasonImages = {
    mua_xuan: [
      { src: 'xuan1.png', top: '10%', left: '5%', width: '20%' },
      { src: 'xuan2.png', top: '5%', left: '35%', width: '25%' },
      { src: 'xuan3.png', top: '7%', left: '65%', width: '20%' }
    ],
    mua_ha: [
      { src: 'ha1.png', top: '46%', left: '5%', width: '7%' },
      { src: 'ha2.png', top: '46%', left: '15%', width: '7%' },
      { src: 'ha3.png', top: '46%', left: '25%', width: '7%' }
    ],
    mua_thu: [
      { src: 'thu1.png', top: '25%', left: '10%', width: '4%' },
      { src: 'thu2.png', top: '10%', left: '5%', width: '4%' },
      { src: 'thu3.png', top: '3%', left: '15%', width: '5%' }
    ],
    mua_dong: [
      { src: 'dong1.png', top: '0%', left: '49%', width: '30%' },
      { src: 'dong2.png', top: '30%', left: '30%', width: '30%' },
      { src: 'dong3.png', top: '15%', left: '-7%', width: '35%' },
    ]
  };

    const seasonImagesContainer = document.getElementById('season-images');
    seasonImagesContainer.innerHTML = ''; // Xóa nội dung cũ
    let activeImage = null; // Biến để lưu trữ ảnh đang được chọn
    const imgha = document.createElement('img');
    if (seasonImages[event]) {
        seasonImages[event].forEach(image => {
            const img = document.createElement('img');
            img.src = `./assets/images/${image.src}`;
            img.style.position = 'absolute';
            img.style.top = image.top;
            img.style.left = image.left;
            img.style.width = image.width;
            img.classList.add('season-image');

            

            if( event === 'mua_xuan') {
                img.style.zIndex = '1';
                const imgxuan = document.createElement('img');
                imgxuan.src = `./assets/images/xuan4.png`;
                imgxuan.style.position = 'absolute';
                imgxuan.style.top = '-20%';
                imgxuan.style.left = '0%';
                imgxuan.style.width = '100%';
                imgxuan.style.zIndex = '2';
                seasonImagesContainer.appendChild(imgxuan);
                img.addEventListener('mouseover', (e) => {
                    const infoBox = document.getElementById('info-box');
                    img.style.zIndex = '3';
                    img.style.width = '30%';
                    infoBox.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                    infoBox.style.borderRadius = '10px';
                    infoBox.style.border = '2px solid #ccc';
                    infoBox.style.display = 'flex';
                    infoBox.style.position = 'absolute';
                    infoBox.style.top = image.top;
                    infoBox.style.height = '32%';
                    infoBox.style.width = '32%';
                    infoBox.style.textAlign = 'center';
                    infoBox.style.alignItems = 'center';
                    infoBox.style.color = 'black';
                    infoBox.style.zIndex = '3';
                    infoBox.style.fontWeight = 'bold';
                    infoBox.style.fontSize = '1.2em';
                    img.style.zIndex = '1000';
                    if(e.target.src.endsWith('xuan1.png')) {
                        infoBox.textContent = 'Lễ hội đền Huyền Trân Công Chúa';
                        infoBox.style.left = `calc(${image.left} + ${image.width} + 10%)`;
                    }
                    else if(e.target.src.endsWith('xuan2.png')) {
                        infoBox.textContent = 'Chương trình khai mạc năm du lịch quốc gia';
                        infoBox.style.left = `calc(${image.left} + ${image.width} + 5%)`;
                    }
                    else if(e.target.src.endsWith('xuan3.png')) {
                        infoBox.textContent = 'Ngày hội Tinh hoa Võ Việt lần thứ nhất - Huế 2025';
                        infoBox.style.left = `calc(${image.left} - 32%)`;
                    }

                });
                img.addEventListener('mouseout', (e) => {

                    const infoBox = document.getElementById('info-box');
                    infoBox.style.display = 'none';
                    img.style.zIndex = '1';
                    img.style.width = image.width;
                });
            } 
            
            else if (event === 'mua_ha') {
                const style = document.createElement('style');
                style.textContent = `

                @keyframes glow {
                0% {
                    filter: brightness(1);
                    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
                }
                50% {
                    filter: brightness(1.4);
                    box-shadow: 0 0 20px rgba(255, 255, 255, 1);
                }
                100% {
                    filter: brightness(1);
                    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
                }
                }

                @keyframes shake {
                0%, 100% { transform: translate(0, 0); }
                20% { transform: translate(-0.75px, 0.75px); }
                40% { transform: translate(0.75px, -0.75px); }
                60% { transform: translate(-0.75px, 0.75px); }
                80% { transform: translate(0.75px, -0.75px); }
                }

                /* Kết hợp hiệu ứng glow và shake */
                .combined-effect {
                animation: glow 2s ease-in-out infinite, shake 0.5s infinite;
                }
                `;
                document.head.appendChild(style);
                img.classList.add('combined-effect');
                document.head.appendChild(style);
                img.addEventListener('mouseover', (e) => {
                    img.style.cursor = 'pointer';
                    img.classList.remove('combined-effect');
                });
                img.addEventListener('mouseout', (e) => {
                    img.style.cursor = 'default';
                    void img.offsetWidth; // bắt buộc: force reflow
                    img.classList.add('combined-effect');

                });
                
                
                        imgha.style.position = 'absolute';
                        imgha.style.top = '-10%';
                        imgha.style.left = '50%';
                        imgha.style.width = '40%';
                img.addEventListener('click', (e) => {
                    // console.log(' ddddddddđ Image clicked:', e.target.src);
                    const isSameImage = activeImage === img;
                    // console.log('isSameImage:', isSameImage);
                    // console.log('activeImage:', activeImage);
                    // console.log('img:', img);

                    
                        seasonImagesContainer.appendChild(imgha);
                        const infoBox = document.getElementById('info-box');
                        infoBox.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                        infoBox.style.borderRadius = '10px';
                        infoBox.style.border = '4px solid #ccc';
                        infoBox.style.display = 'flex';
                        infoBox.style.position = 'absolute';
                        infoBox.style.top = image.top;
                        infoBox.style.height = '20%';
                        infoBox.style.width = '40%';
                        infoBox.style.textAlign = 'center';
                        infoBox.style.alignItems = 'center';
                        infoBox.style.color = 'black';
                        infoBox.style.zIndex = '3';
                        infoBox.style.fontWeight = 'bold';
                        infoBox.style.fontSize = '1.2em';
                        infoBox.style.left = 50 + '%';
                        if(e.target.src.endsWith('ha1.png')) {
                            infoBox.textContent = 'Tuần lễ Phật Đản và Lễ hội Ẩm thực chay';
                            imgha.src = './assets/images/ha4.png';
                        }
                        else if(e.target.src.endsWith('ha2.png')) {
                            infoBox.textContent = 'Chương trình “Huế - Kinh đô ẩm thực”';
                            imgha.src = './assets/images/ha5.png';
                        }
                        else if(e.target.src.endsWith('ha3.png')) {
                            infoBox.textContent = 'Tuần lễ áo dài cộng đồng Huế 2025';
                            imgha.src = './assets/images/ha6.png';
                        }

                    if (isSameImage){
                        infoBox.style.display = 'none';
                        activeImage = null;
                        seasonImagesContainer.removeChild(imgha);
                        // console.log('Image deselected');
                    }
                    else {
                        // console.log('Image selected');
                        activeImage = img;
                    }
                });
            }
            
            else if (event === 'mua_thu') {
                const style = document.createElement('style');
                style.textContent = `
                @keyframes glow {
                    0% {
                        filter: brightness(1);
                        background: 0 0 0 rgba(255, 255, 255, 0);
                    }
                    50% {
                        filter: brightness(1.4);
                        background: 0 0 20px rgba(255, 255, 255, 0.8);
                    }
                    100% {
                        filter: brightness(1);
                        background: 0 0 0 rgba(255, 255, 255, 0);
                    }
                }
                .glow {
                    animation: glow 1s ease-in-out infinite;
                }
                `;
                document.head.appendChild(style);
                img.classList.add('glow');
                
                const infoBox = document.getElementById('info-box');
                const imgHover = document.getElementById('season-hover-img');
                imgHover.src = `./assets/images/thu4.png`;
                imgHover.style.display = 'block';
                imgHover.style.position = 'absolute';
                imgHover.style.top = -10 + '%';
                imgHover.style.left = 17 + '%';
                imgHover.style.width = '40%';
                seasonImagesContainer.appendChild(imgHover);
                img.addEventListener('mouseover', (e) => {
                    img.style.cursor = 'pointer';
                    infoBox.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                    infoBox.style.borderRadius = '10px';
                    infoBox.style.border = '2px solid #ccc';
                    infoBox.style.display = 'flex';
                    infoBox.style.position = 'absolute';
                    infoBox.style.top = 5 + '%';
                    infoBox.style.left = 55 + '%';
                    infoBox.style.height = '40%';
                    infoBox.style.width = '32%';

                    infoBox.style.textAlign = 'center';
                    infoBox.style.alignItems = 'center';
                    infoBox.style.color = 'black';
                    infoBox.style.zIndex = '3';
                    infoBox.style.fontWeight = 'bold';
                    infoBox.style.fontSize = '1.2em';
                    if(e.target.src.endsWith('thu1.png')) {
                        infoBox.textContent = 'Ngày hội Thể thao vì sức khỏe cộng đồng - Hue Sports Festival 2025';
                        imgHover.src = './assets/images/thu5.png';
                    }
                    else if(e.target.src.endsWith('thu2.png')) {
                        infoBox.textContent = 'Hội đèn lồng quốc tế Huế 2025';
                        imgHover.src = './assets/images/thu6.png';
                    }
                    else if(e.target.src.endsWith('thu3.png')) {
                        infoBox.textContent = 'Ngày hội Quảng diễn Lân - Sư - Rồng & Hội rước đèn Trung thu';
                        imgHover.src = './assets/images/thu7.png';
                    }  
                });
                img.addEventListener('mouseout', (e) => {
                    img.style.cursor = 'default';
                    infoBox.style.display = 'none';
                    imgHover.src = './assets/images/thu4.png';
                    img.classList.add('glow');
                });
                
            }

            else if (event === 'mua_dong') {
                img.addEventListener('mouseover', (e) => {
                    const infoBox = document.getElementById('info-box');
                    img.style.width = '50%';
                    img.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    infoBox.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
                    infoBox.style.borderRadius = '10px';
                    infoBox.style.border = '2px solid #ccc';
                    infoBox.style.display = 'flex';
                    infoBox.style.position = 'absolute';
                    infoBox.style.height = '40%';
                    infoBox.style.width = '32%';
                    infoBox.style.textAlign = 'center';
                    infoBox.style.alignItems = 'center';
                    infoBox.style.color = 'black';
                    infoBox.style.zIndex = '3';
                    infoBox.style.fontWeight = 'bold';
                    infoBox.style.fontSize = '1.2em';

                    img.style.top = `calc(${image.top} - 10%)`;
                    img.style.left = `calc(${image.left} - 5%)`;
                    img.style.borderRadius = '50%';
                    if(e.target.src.endsWith('dong1.png')) {
                        infoBox.textContent = 'Lễ hội đền Tuồng Huế, Ngàn xưa âm vọng';
                        infoBox.style.left = `calc(${image.left}  - 30%)`;
                        infoBox.style.top = `calc(${image.top} + 5%)`;
                        
                    }
                    else if(e.target.src.endsWith('dong2.png')) {
                        infoBox.textContent = 'Tuần lễ Âm nhạc quốc tế Huế 2025';
                        infoBox.style.left = `calc(${image.left} + ${image.width} + 5%)`;
                        infoBox.style.top = `calc(${image.top} - 10%)`;
                        img.style.top = `calc(${image.top} - 25%)`;
                    }
                    else if(e.target.src.endsWith('dong3.png')) {
                        infoBox.textContent = 'Bế mạc Năm Du lịch quốc gia Huế - 2025';
                        infoBox.style.top = `calc(${image.top} + 5%)`;
                        infoBox.style.left = `calc(${image.left} + 37%)`;
                    }

                });

                img.addEventListener('mouseout', (e) => {
                    img.style.top = image.top;
                    img.style.left = image.left;
                    img.style.backgroundColor = 'transparent';
                    const infoBox = document.getElementById('info-box');
                    infoBox.style.display = 'none';
                    img.style.width = image.width;
                });
            }

            seasonImagesContainer.appendChild(img);
        });

    }


}
window.onload = () => {
      showEvent('gioi_thieu'); // Mặc định hiển thị sự kiện giới thiệu khi tải trang
      const aboutImg = document.getElementById('about-img');
}
