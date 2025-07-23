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





let currentTab = 0;
const tabCount = tabs.length;
let isScrolling = false; 

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

window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    if (e.deltaY > 0) {
        currentTab = (currentTab + 1) % tabCount;
    } else if (e.deltaY < 0) {
        currentTab = (currentTab - 1 + tabCount) % tabCount;
    } else {
        return;
    }
    activateTab(currentTab);
    isScrolling = true;
    setTimeout(() => {
        isScrolling = false;
    }, 600);
});

tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
        currentTab = idx;
    });
});

