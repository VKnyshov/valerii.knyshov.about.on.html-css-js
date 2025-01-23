let currentBannerIndex = 0;

function showBanner(index) {
    const banners = document.querySelectorAll('.banner');
    banners.forEach((banner, i) => {
        banner.classList.remove('active');
        if (i === index) {
            banner.classList.add('active');
        }
    });
}
setInterval(nextBanner, 8000); 


function nextBanner() {
    const banners = document.querySelectorAll('.banner');
    currentBannerIndex = (currentBannerIndex + 1) % banners.length; 
    showBanner(currentBannerIndex);
}

function prevBanner() {
    const banners = document.querySelectorAll('.banner');
    currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length; 
    showBanner(currentBannerIndex);
}


    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }