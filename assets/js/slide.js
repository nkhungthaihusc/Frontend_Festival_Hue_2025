 const hueFoods = [{
     name: "Cơm muối Huế",
     image: "https://static.vinwonders.com/production/com-muoi-hue-5.jpg",
     description: "Món cơm cung đình thanh đạm gồm cơm trắng ăn kèm nhiều loại muối chế biến công phu như muối sả, muối mè, muối ruốc, muối tôm... Mỗi loại mang một hương vị riêng, tạo nên tổng thể hài hòa, thể hiện sự chỉn chu và tinh tế trong từng chén cơm của ẩm thực Hoàng gia Huế."
   },
   {
     name: "Bún bò Huế",
     image: "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/08/15/bun-bo-hue-6-0935.jpeg",
     description: "Đặc sản trứ danh của xứ Huế với nước dùng đậm đà, được nấu từ xương bò, sả và mắm ruốc. Sợi bún dai nhỏ hòa quyện cùng thịt bò, giò heo, chả Huế và rau sống, mang đến hương vị cay nồng đặc trưng, đậm chất miền Trung."
   },
   {
     name: "Chè Huế",
     image: "https://khamphahue.com.vn/Portals/0/DuLich/DiemAnUong/QuanAnDacSan/Top8QuanCheLauDoioHue/Khamphahue_CheMoTonDich1.jpg?ver=2023-02-07-163854-123",
     description: "Tập hợp phong phú các món ngọt như chè sen, chè bắp, chè hạt lựu, chè khoai... Chè Huế nổi bật bởi sự đa dạng nguyên liệu và màu sắc, mỗi loại mang một hương vị riêng, góp phần làm nên nét đặc sắc trong văn hóa ẩm thực truyền thống."
   },
   {
     name: "Nem công chả phượng",
     image: "https://nhahangcontoc.com/wp-content/uploads/2023/03/nem-cong-cha-phuong.jpg",
     description: "Một phần của yến tiệc cung đình xưa, món ăn này biểu trưng cho sự cao quý và quyền uy. Nem được làm từ thịt công, kết hợp với chả tạo hình phượng hoàng, được chế biến và trình bày tỉ mỉ như một tác phẩm nghệ thuật trên mâm cỗ."
   },
   {
     name: "Nem lụi Huế",
     image: "https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/474763494_1787659568700198_2298384417597070501_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kPEXyzHZj68Q7kNvwHpGauX&_nc_oc=AdnVzJX6rH69ts4Wqq2S6XQQusyiaNsYg3hgZIhOAVEK8urXi-iDoDijoNEsfmgWxK4HfmJsihrvbwneHGoleO5c&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&_nc_gid=JtPMC2HrTRyUQWiVl5QTBg&oh=00_AfT6SXS1x6Vd7LFw8619Oa76NjyZM8XxQosRF5mrk-Thog&oe=68812428",
     description: "Thịt heo xay nhuyễn, ướp đậm đà rồi nướng trên que sả thơm lừng. Khi ăn, thường được cuốn cùng bánh tráng, rau sống và chấm nước lèo làm từ gan và đậu phộng, tạo nên hương vị béo bùi, đậm chất miền Trung."
   },
   {
     name: "Cơm hến",
     image: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/172820/Originals/com%20hen_hinh%201.jpg",
     description: "Một món ăn dân dã kết hợp cơm nguội với hến xào, tóp mỡ, rau sống, đậu phộng rang và bánh tráng nướng. Chan thêm nước hến nóng có vị ngọt thanh, món ăn tạo nên sự cân bằng giữa vị béo, cay, giòn và mặn – rất đặc trưng của ẩm thực Huế."
   },
   {
     name: "Bánh bột lọc",
     image: "https://tourhue.vn/wp-content/uploads/2024/08/banh-loc-hue-2.jpg",
     description: "Bánh có lớp vỏ mỏng, trong suốt, dẻo dai, bao bọc nhân tôm thịt rim mặn ngọt. Khi được gói trong lá chuối và hấp chín, bánh mang theo hương thơm dịu nhẹ, dùng kèm nước mắm ngọt tạo nên trải nghiệm vị giác tinh tế."
   }
 ];
 const foodMsg = document.querySelector('.food-msg');
 if (foodMsg) {
   const iconHTML = foodMsg.querySelector('.food-icon') ?.outerHTML || '';
   foodMsg.innerHTML = iconHTML +
     hueFoods.map((food, idx) => `
      <div class="food-content${idx === 0 ? ' active' : ''}">
        <div class="food-title">${food.name}</div>
        <div class="food-description">${food.description}</div>
      </div>
    `).join('');
 }
 const foodSwiperWrapper = document.querySelector('.food-swiper .swiper-wrapper');
 if (foodSwiperWrapper) {
   foodSwiperWrapper.innerHTML = hueFoods.map(food => `
    <div class="swiper-slide">
      <img src="${food.image}" alt="${food.name}" />
    </div>
  `).join('');
 }

 var foodSwiper = new Swiper(".food-swiper", {
   slidesPerView: 3,
   spaceBetween: 5,
   loop: true,
   loopedSlides: 1,
   speed: 380,
  //  autoplay: {
  //    delay: 5000, // tự động chuyển sau 1j
  //    disableOnInteraction: false, // false: sẽ tiếp tục chạy kể cả khi người dùng chạm ->true: ngược lại
  //  },
    navigation: {
      nextEl: ".food-next",
      prevEl: ".food-prev",
    },
    
 });
 const foodContents = document.querySelectorAll(".food-content");

 foodSwiper.on("slideChange", () => {
   const realIndex = foodSwiper.realIndex;
   foodContents.forEach((el) => el.classList.remove("active"));
   if (foodContents[realIndex]) {
     foodContents[realIndex].classList.add("active");
   }
 });
 foodSwiper.slides.forEach((slideEl) => {
   slideEl.addEventListener("click", () => {
     const realIndex = parseInt(
       slideEl.getAttribute("data-swiper-slide-index")
     );
     foodSwiper.slideToLoop(realIndex);
     foodContents.forEach((el) => el.classList.remove("active"));
     if (foodContents[realIndex]) {
       foodContents[realIndex].classList.add("active");
     }
   });
 });





 // lib swiper


 const festivalImages = [{
     year: 2024,
     src: "https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/475040233_1792271124905709_7120333988634459164_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=1yq4oq3CW5MQ7kNvwE527kl&_nc_oc=AdnpiZvEiDY-BT5XAMMBvHoBXdZn9q3feCbwB0CVx1jTThQrcdIFrYnDSoMSAzy89un4tDbD7od9KmcYpRQdfuaM&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&_nc_gid=LkoeOibsep_kkvfuC83SGg&oh=00_AfRTO8ISMFY5cWZ2nvzMVPJHsX4SvjGg2JqGAalNr_v2wQ&oe=688149DD"
   },
   {
     year: 2023,
     src: "https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/475729631_1792271198239035_710147985674176465_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_ohc=qqSryQOcl1sQ7kNvwGfbuuQ&_nc_oc=AdlRipw6b5l7s-_sNZZUrgpI2GHVQFzKE_qRvI9WZNSqa0shq84uiYVjgIi41ge7tj0sHJi4hKF8DkpF0LJYKIU8&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&_nc_gid=pVxOpZ-LUBkR1GgTetRv-w&oh=00_AfTaEW13J5BDbGBBVbCGJ02fd75dprxN4OO0sPLlt8CZwQ&oe=68814986"
   },
   {
     year: 2022,
     src: "https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/475730548_1792095868256568_1687837461479526516_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=erxn0_ZfHWIQ7kNvwEpIBlo&_nc_oc=Adm-hQ4FF0dJ8u12gYJXLCKytY06uAJphHGnvLLEQPLAzlxTtXSYZ1l7jrWA1zsm29bI_mfebj6rSjGxPkxgNtSM&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&_nc_gid=s7kQPFf-vC8Ds21truITmQ&oh=00_AfTvwdIcPWyq0oI69gGD3G3b3xZTNKkNtwyfcqQbZrwzng&oe=688157B5"
   }
 ];
 //  const libNameBox = document.querySelector('.lib-name-box');
 //  if (libNameBox) {
 //    libNameBox.innerHTML = festivalImages.map(item => `
 //     <div class="lib-name-cn">Festival ${item.year}</div>
 //   `).join('');
 //  }
 const libNameBox = document.querySelector('.lib-name-box');
 if (libNameBox) {
   libNameBox.innerHTML = festivalImages.map((img, idx) => `
    <div class="lib-name-cn${idx === 0 ? ' active' : ''}">Festival ${img.year}</div>
  `).join('');
 }
 const libSwiperWrapper = document.querySelector('.lib-swiper .swiper-wrapper');
 if (libSwiperWrapper) {
   libSwiperWrapper.innerHTML = festivalImages.map(img => `
    <div class="swiper-slide">
      <img src="${img.src}" alt="Festival ${img.year}" />
      <div class="lib-more">
        <div class="lib-more-text">Xem thêm</div>
        <div class="lib-more-icon">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </div>
    </div>
  `).join('');
 }




 var libSwiper = new Swiper(".lib-swiper", {
   slidesPerView: "auto",
   spaceBetween: 15,
   loop: false,
   loopedSlides: 1,
   navigation: {
     nextEl: ".lib-next",
     prevEl: ".lib-prev",
   },
   //  autoplay: {
   //    delay: 2000, // tự động chuyển sau 1j
   //    disableOnInteraction: false, // false: sẽ tiếp tục chạy kể cả khi người dùng chạm ->true: ngược lại
   //  },
   mousewheel: true,
   keyboard: true,
 });




 const libNames = document.querySelectorAll(".lib-name-cn");
 libSwiper.on("slideChange", () => {
   const realIndex = libSwiper.realIndex;
   libNames.forEach((el, idx) => {
     if (idx === realIndex) {
       el.classList.add("active");
     } else {
       el.classList.remove("active");
     }
   });
 });




 //vil swiper
const craftVillages = [
  {
    title: "Làng nón lá Phú Cam",
    description: "Làng nón Phú Cam, một trong những làng nghề truyền thống nổi tiếng nhất xứ Huế, là nơi lưu giữ và phát huy truyền thống làm nón lá tinh xảo qua nhiều thế kỷ. Nằm bên dòng sông An Cựu hiền hòa, ngôi làng này không chỉ là điểm đến hấp dẫn cho du khách mà còn là niềm tự hào của người dân địa phương. Nổi tiếng với những chiếc nón bài thơ mang vẻ đẹp dịu dàng và lãng mạn của xứ Huế. Mỗi chiếc nón được chằm tỉ mỉ và có thể ẩn hiện hình ảnh hoặc bài thơ dưới ánh nắng. Phú Cam đã trở thành biểu tượng cho nét đẹp văn hóa và sự khéo léo của người dân cố đô.",
    image: [
      "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/08/29/lang-non-phu-cam-5-1040.jpg",
      "https://vietnamtourism.vn/imguploads/tourist/58Langnonphucam01.jpg",
      "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/08/29/lang-non-phu-cam-4-1032.jpg",
    ]
  },
  
  {
    title: "Làng gốm Phước Tích",
    description: "Làng cổ Phước Tích nằm bên bờ nam sông Ô Lâu, được công nhận là Di tích kiến trúc nghệ thuật cấp Quốc gia từ năm 2009. Làng nổi bật với những ngôi nhà rường cổ kính cùng nghề gốm truyền thống hàng trăm năm tuổi. Gốm Phước Tích đặc trưng bởi màu nâu đỏ tự nhiên, không men, được nung bằng rơm, tạo nên vẻ đẹp mộc mạc mà thanh lịch. Trong thời kỳ hưng thịnh, sản phẩm gốm nơi đây từng được buôn bán khắp các tỉnh miền Trung.",
    image: [
      "https://imagevietnam.vnanet.vn//MediaUpload/Org/2023/10/24/5224-12-45-34.jpg",
      "https://images.baodantoc.vn/uploads/2023/Th%C3%A1ng%205/Ng%C3%A0y_31/Anh/Gom%20co/14.jpg",
      "https://imagevietnam.vnanet.vn//MediaUpload/Org/2023/10/24/1424-12-37-10.jpg",
    ]
  },
  {
    title: "Làng tranh dân gian Sình",
    description: "Làng Sình còn được biết đến như một làng văn vật của đất cố đô, nơi còn lưu giữ nghề làm tranh cổ truyền và một hội vật nổi tiếng: “Dù ai đi đó đi đây - Đến ngày Hội vật nhớ quay về Sình”. Ngoài ra, làng còn có nghề làm hương và hạt bỏng dùng trong các nghi lễ cúng bái. Có lẽ do những truyền thống này mà nghề in tranh mộc bản ở Sình, ngay từ khi ra đời đã không thuần túy là dòng tranh phục vụ cho các thú chơi tao nhã, mà chủ yếu là nhu cầu tín ngưỡng, dùng để thờ, để hóa trong các lễ cầu an, giải hạn.",
    image: [
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/2/26/1151746/ANH-1.jpg",
      "https://i.ex-cdn.com/vntravellive.com/files/hangh.vntravel/2023/01/17/5322-lang-tranh-sinh-phong-cach-hoi-hoa-khac-biet-cua-xu-hue-105235.jpg",
      "https://orientalrain.com/wp-content/uploads/2023/12/tranh-lang-sinh-top-view-1400x677.jpg"

    ]
  }
];






const vilSwiperWrapper = document.querySelector('.vil-swiper .swiper-wrapper');
if (vilSwiperWrapper) {
  vilSwiperWrapper.innerHTML = craftVillages[0].image.map(img => `
    <div class="swiper-slide">
      <img src="${img}" alt="${craftVillages[0].title}" />
    </div>
  `).join('');
}

var vilSwiper = new Swiper(".vil-swiper", {
   slidesPerView: 'auto',
   spaceBetween: 15,
   loopedSlides: 1,
   speed: 380,
   loop: true,
   effect: 'coverflow',
   coverflowEffect: {
     rotate: 0,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   },
   autoplay: {
     delay: 4000,
     disableOnInteraction: false,
   },
});

// Enhanced update function with smooth transitions
function updateVillageContent(villageIndex) {
  const village = craftVillages[villageIndex];
  
  // Add fade-out effect before updating content
  const detailElement = document.querySelector('.vil-detail');
  if (detailElement) {
    detailElement.style.opacity = '0.7';
    detailElement.style.transform = 'translateY(10px)';
  }
  
  setTimeout(() => {
    // Update title with typewriter effect
    const titleElement = document.querySelector('.vil-title h3');
    if (titleElement) {
      titleElement.style.opacity = '0';
      setTimeout(() => {
        titleElement.textContent = village.title;
        titleElement.style.opacity = '1';
        titleElement.style.transform = 'translateY(0)';
      }, 200);
    }
    
    // Update description with fade effect
    const descriptionElement = document.querySelector('.vil-des');
    if (descriptionElement) {
      descriptionElement.style.opacity = '0';
      setTimeout(() => {
        descriptionElement.textContent = village.description;
        descriptionElement.style.opacity = '1';
      }, 300);
    }

    // Update swiper images with smooth transition
    if (vilSwiperWrapper && vilSwiper) {
      vilSwiperWrapper.innerHTML = village.image.map((img, index) => `
        <div class="swiper-slide" style="opacity: 0; transform: scale(0.9);">
          <img src="${img}" alt="${village.title}" onload="this.parentElement.style.opacity='1'; this.parentElement.style.transform='scale(1)';" />
        </div>
      `).join('');
      
      vilSwiper.update();
      vilSwiper.slideTo(0, 500);
    }
    
    // Restore detail element
    if (detailElement) {
      detailElement.style.opacity = '1';
      detailElement.style.transform = 'translateY(0)';
    }
  }, 150);
}

// Enhanced interaction with visual feedback
document.addEventListener('DOMContentLoaded', function() {
  const siderItems = document.querySelectorAll('.vil-sider-item');
  
  siderItems.forEach((item, index) => {
    // Add hover sound effect (visual feedback)
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        this.style.transform = 'scale(1)';
      }
    });
    
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Prevent multiple rapid clicks
      if (this.dataset.updating === 'true') return;
      this.dataset.updating = 'true';
      
      // Remove active class from all items with animation
      siderItems.forEach(siderItem => {
        siderItem.classList.remove('active');
        if (siderItem !== this) {
          siderItem.style.transform = 'scale(1)';
        }
      });
      
      // Add active class to clicked item
      this.classList.add('active');
      this.style.transform = 'scale(1.05)';
      
      // Update content
      updateVillageContent(index);
      
      // Reset updating flag
      setTimeout(() => {
        this.dataset.updating = 'false';
      }, 600);
    });
  });
  
  // Initialize first item as active
  if (siderItems.length > 0) {
    siderItems[0].classList.add('active');
    siderItems[0].style.transform = 'scale(1.05)';
    updateVillageContent(0);
  }
  
  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    const activeItem = document.querySelector('.vil-sider-item.active');
    if (!activeItem) return;
    
    const items = Array.from(siderItems);
    const currentIndex = items.indexOf(activeItem);
    
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
      items[prevIndex].click();
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
      items[nextIndex].click();
    }
  });
});
