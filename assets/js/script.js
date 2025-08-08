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


function switchTab(targetSelector) {
    const targetTab = document.querySelector(`[data-tab-target="${targetSelector}"]`);
    const targetContent = document.querySelector(targetSelector);

    if (targetTab && targetContent) {
        tabContents.forEach(tc => tc.classList.remove('active'));
        tabs.forEach(t => t.classList.remove('active'));

        targetContent.classList.add('active');
        targetTab.classList.add('active');

        // Add smooth transition effect
        targetContent.style.opacity = '0';
        targetContent.style.transform = 'translateY(20px)';

        setTimeout(() => {
            targetContent.style.transition = 'all 0.5s ease';
            targetContent.style.opacity = '1';
            targetContent.style.transform = 'translateY(0)';
        }, 50);
    }
}


window.switchTab = switchTab;




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


document.querySelectorAll('.festival-img').forEach(img => {
    img.addEventListener('wheel', function (e) {
        e.stopPropagation();
    });
});

document.querySelectorAll('#about-mean').forEach(item => {
    item.addEventListener('wheel', function(e) {
        e.stopPropagation();
    });
}); 

let currentTab = 0;
const tabCount = tabs.length;
let isScrolling = false;

let scrollDelta = 0;
const scrollCount = 500;


let scrollTimeout;


window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    scrollDelta += e.deltaY;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        scrollDelta = 0;
    }, 100);


    if (scrollDelta > scrollCount && currentTab < tabCount - 1) {
        currentTab++;
        activateTab(currentTab);
        isScrolling = true;
        scrollDelta = 0;
        setTimeout(() => {
            isScrolling = false;
        }, 600);
    } else if (scrollDelta < -scrollCount && currentTab > 0) {
        currentTab--;
        activateTab(currentTab);
        isScrolling = true;
        scrollDelta = 0;
        setTimeout(() => {
            isScrolling = false;
        }, 600);
    }
});
tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
        currentTab = idx;
    });
});

window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var intro = document.getElementById('intro-overlay');
        if (intro) {
            intro.style.opacity = '0';
            setTimeout(function () { intro.style.display = 'none'; }, 700);
        }
    }, 2200);
});
