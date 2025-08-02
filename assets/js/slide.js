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
     image: "https://dulichvietnam.com.vn/vnt_upload/news/07_2024/quan_nem_lui_ngon_o_hue.jpg",
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
     src: "assets/images/lib-1.jpg"
   },
   {
     year: 2023,
     src: "assets/images/lib-5.jpg"
   },
   {
     year: 2022,
     src: "assets/images/lib-4.jpg"
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
 const craftVillages = [{
     title: "Làng nón lá Phú Cam",
     description: "Nổi tiếng với những chiếc nón bài thơ mang vẻ đẹp dịu dàng và lãng mạn của xứ Huế. Mỗi chiếc nón được chằm tỉ mỉ và có thể ẩn hiện hình ảnh hoặc bài thơ dưới ánh nắng.",
     image: [
       "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/08/29/lang-non-phu-cam-5-1040.jpg",
       "https://vietnamtourism.vn/imguploads/tourist/58Langnonphucam01.jpg",
       "https://i2.ex-cdn.com/crystalbay.com/files/content/2024/08/29/lang-non-phu-cam-4-1032.jpg",
     ]
   },

   {
     title: "Làng gốm Phước Tích",
     description: "Nổi tiếng với gốm không men, nung bằng rơm tạo màu sắc nâu đỏ đặc trưng. Đồ gốm bền chắc, mang vẻ đẹp mộc mạc và thanh lịch.",
     image: [
       "https://imagevietnam.vnanet.vn//MediaUpload/Org/2023/10/24/5224-12-45-34.jpg",
       "https://images.baodantoc.vn/uploads/2023/Th%C3%A1ng%205/Ng%C3%A0y_31/Anh/Gom%20co/14.jpg",
       "https://imagevietnam.vnanet.vn//MediaUpload/Org/2023/10/24/1424-12-37-10.jpg",
     ]
   },
   {
     title: "Làng tranh dân gian Sình",
     description: "Làng nghề tranh dân gian phục vụ nghi lễ tín ngưỡng. Tranh được in từ bản gỗ và tô màu thủ công bằng nguyên liệu tự nhiên, mang đậm nét văn hóa dân gian Huế.",
     image: [
       "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/2/26/1151746/ANH-1.jpg",
       "https://i.ex-cdn.com/vntravellive.com/files/hangh.vntravel/2023/01/17/5322-lang-tranh-sinh-phong-cach-hoi-hoa-khac-biet-cua-xu-hue-105235.jpg",
       "https://orientalrain.com/wp-content/uploads/2023/12/tranh-lang-sinh-top-view-1400x677.jpg"

     ]
   },
   {
     title: "Làng nghề đúc đồng",
     description: "Nghề đúc đồng là nghề truyền thống lâu đời của người Việt nói chung và người Huế nói riêng, đúc đông chính là 1 trong những làng nghề nổi tiếng ở Huế. Một địa điểm cho du khách có thể tìm hiểu về nghề đặc biệt này đó là phường Đúc. Khi Kinh thành Phú Xuân bị đánh chiếm thì các Công tượng đúc đồng cũng bị tan rã. Tuy nhiên, rất may nhờ những lò đúc của các anh em nhà họ Nguyễn mà làng nghề độc đáo này được lưu giữ cho đến ngày hôm nay. Làng đúc đồng nằm ở ven bờ nam sông Hương, đoạn từ cầu Giã Viên lên phía Long Thọ cách thành phố Huế khoảng 3km về phía Tây Nam, tỉnh Thừa Thiên Huế.",
     image:[
        "https://www.nongthonmoithuathienhue.vn/imgs/Thu_muc_he_thong/_Nam_2016/_Thang_12/cosoducdongngvansinh1234.jpg",
        "https://vietnamtourism.vn/imguploads/tourist/58Ducdonghue01.jpg",
        "https://ducdong.vn/wp-content/uploads/2017/05/phuong-duc-hue.jpg",
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
 document.addEventListener('DOMContentLoaded', function () {
   const siderItems = document.querySelectorAll('.vil-sider-item');

   siderItems.forEach((item, index) => {
     // Add hover sound effect (visual feedback)
     item.addEventListener('mouseenter', function () {
       this.style.transform = 'scale(1.1)';
     });

     item.addEventListener('mouseleave', function () {
       if (!this.classList.contains('active')) {
         this.style.transform = 'scale(1)';
       }
     });

     item.addEventListener('click', function (e) {
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
   document.addEventListener('keydown', function (e) {
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