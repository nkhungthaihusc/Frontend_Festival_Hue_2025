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

// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form-inner');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !message) {
                showNotification('Vui lòng điền đầy đủ thông tin!', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Email không hợp lệ!', 'error');
                return;
            }
            
            // Show loading state
            submitBtn.innerHTML = '<span>Đang gửi...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = '<span>Gửi tin nhắn</span><i class="fas fa-paper-plane"></i>';
                submitBtn.disabled = false;
                
                // Show success message
                showNotification('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.', 'success');
            }, 2000);
        });
        
        // Form field validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
    
    // Newsletter form functionality
    const newsletterForm = document.querySelector('.newsletter-form-footer');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (!email || !isValidEmail(email)) {
                showNotification('Email không hợp lệ!', 'error');
                return;
            }
            
            // Reset form
            this.querySelector('input[type="email"]').value = '';
            showNotification('Đăng ký nhận tin thành công!', 'success');
        });
    }
});

function validateField(field) {
    const value = field.value.trim();
    
    // Remove existing error
    clearFieldError(field);
    
    if (!value) {
        showFieldError(field, 'Trường này không được để trống');
        return false;
    }
    
    if (field.type === 'email' && !isValidEmail(value)) {
        showFieldError(field, 'Email không hợp lệ');
        return false;
    }
    
    return true;
}

function showFieldError(field, message) {
    field.style.borderColor = '#e74c3c';
    field.style.boxShadow = '0 0 0 2px rgba(231, 76, 60, 0.2)';
    
    // Add error message if not exists
    if (!field.parentNode.querySelector('.error-message')) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '0.3rem';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    }
}

function clearFieldError(field) {
    field.style.borderColor = '';
    field.style.boxShadow = '';
    
    const errorMsg = field.parentNode.querySelector('.error-message');
    if (errorMsg) {
        errorMsg.remove();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 350px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #3498db, #2980b9)';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

