//nav-event
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tc => tc.classList.remove('active'));
        tabs.forEach(t => t.classList.remove('active'));
        target.classList.add('active');
        tab.classList.add('active');
    });

})




function activateTab(index) {
    tabContents.forEach(tc => tc.classList.remove('active'));
    tabs.forEach(t => t.classList.remove('active'));
    tabs[index].classList.add('active');
    const target = document.querySelector(tabs[index].dataset.tabTarget);
    target.classList.add('active');




    //fix lỗi khi để auto chạy mà chuyển tab thì phần auto sẽ đứng
    // const foodSwiper = target.querySelector('.food-swiper');
    // const libSwiper = target.querySelector('.lib-swiper');
    // if (foodSwiper && window.foodSwiper) {

    //     if (foodSwiper.autoplay) foodSwiper.autoplay.start();
    // }
    // if (libSwiper && window.libSwiper) {

    //     if (libSwiper.autoplay) libSwiper.autoplay.start();
    // }

    if (target.querySelector('.food-swiper') && window.foodSwiper) {
        if (foodSwiper.autoplay) foodSwiper.autoplay.start();
    }
    // if (target.querySelector('.lib-swiper') && window.libSwiper) {
    //     if (libSwiper.autoplay) libSwiper.autoplay.start();
    // }
}

// let currentTab = 0;
// const tabCount = tabs.length;
// let isScrolling = false;

// let scrollDelta = 0;
// const scrollCount = 3000; // Giá trị để kích hoạt chuyện tabs, hiện tại 200px

// window.addEventListener('wheel', (e) => {
//     if (isScrolling) return;
//     scrollDelta += e.deltaY;

//     if (scrollDelta > scrollCount && currentTab < tabCount - 1) {
//         currentTab++;
//         activateTab(currentTab);
//         isScrolling = true;
//         scrollDelta = 0;
//         setTimeout(() => {
//             isScrolling = false;
//         }, 600);
//     } else if (scrollDelta < -scrollCount && currentTab > 0) {
//         currentTab--;
//         activateTab(currentTab);
//         isScrolling = true;
//         scrollDelta = 0;
//         setTimeout(() => {
//             isScrolling = false;
//         }, 600);
//     }
// });
tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
        currentTab = idx;
    });
});
