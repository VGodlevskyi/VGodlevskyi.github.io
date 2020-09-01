// Tabs switching function in the "Our service" section
const switchingTabs = function (tabs, tabsContent, tabsImage) {
    tabs[0].classList.add("active");
    const serviceList = document.querySelector(".service-list");
    serviceList.addEventListener("click", (evt) => {
        const target = evt.target;
        tabs.forEach((item) => {
            item.classList.remove("active");
        });
        target.classList.add("active");
        tabsContent.forEach((item) => {
            item.classList.remove("active");
            (item.getAttribute("data-our-servise") === target.textContent) ? item.classList.add("active") : false;
        });
        tabsImage.forEach((item) => {
            item.classList.remove("active");
            (item.getAttribute("data-our-servise") === target.textContent) ? item.classList.add("active") : false;
        });
    })
};
switchingTabs(document.querySelectorAll(".service-item"), document.querySelectorAll(".web-design-article"), document.querySelectorAll(".our-services-img"));

// Element filtering function "Aur amazing work" section
const ourAmazingWorkFilter = function () {
    const tabsWokrList = document.querySelector(".work-list");
    const workCategory = document.querySelectorAll(".work-category");
    const loadMore = document.querySelector(".load-more");
    const worksImg = document.querySelectorAll(".work-list-img");
    loadMore.addEventListener("click", (evt) => {
        worksImg.forEach((item) => {
            if (item.classList.contains("hidden")) {
                item.classList.remove("hidden");
            } else (item.style.display = "inline-block")
        });
        loadMore.remove();
        workCategory.forEach((item) => {
            item.classList.remove("active");
        });
        workCategory[0].classList.add("active");
    });

    tabsWokrList.addEventListener("click", (evt) => {
        const target = evt.target;
        workCategory.forEach((item) => {
            item.classList.remove("active");
        });
        target.classList.add("active");
        let targetText = target.textContent;
        if (targetText === "All") {
            worksImg.forEach((item) => {
                if (!item.classList.contains("hidden")) {
                    item.style.display = "inline-block";
                }
            })
        } else {
            worksImg.forEach((item) => {
                if (!item.classList.contains("hidden")) {
                    let attr = item.getAttribute("data-amazing-work");
                    (attr !== targetText) ? item.style.display = "none" : item.style.display = "inline-block";
                }
            });
        }
    });
};
ourAmazingWorkFilter();

// Animation and switching function "What people say" section
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 30,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 4, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 4, //looped slides should be the same
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    }
});
