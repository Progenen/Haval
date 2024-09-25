document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 992) {
        const burger = document.querySelector(".header__burger");
        const menu = document.querySelector(".header__bottom");
        const header = document.querySelector("header");
        const bgMd = document.querySelectorAll('[data-bg-md]');
        const srcMd = document.querySelectorAll('[data-src-md]');

        menu.style.paddingTop = header.clientHeight + "px";

        burger.addEventListener("click", () => {
            burger.classList.toggle("active");
            menu.classList.toggle("active");
            document.body.classList.toggle("lock");
        });

        bgMd.forEach(item => {
            console.log(item.getAttribute("data-bg-md"));
            item.style.backgroundImage = `url(${item.getAttribute("data-bg-md")})`;
        });

        srcMd.forEach(item => {
            item.setAttribute("src", item.getAttribute("data-src-md"));
        });
    }

    if (window.innerWidth <= 768) {
        const srcSm = document.querySelectorAll("[data-src-sm]")

        srcSm.forEach(item => {
            item.setAttribute("src", item.getAttribute("data-src-sm"));
        });
        
    }

    if (document.querySelector(".offer")) {
        
        $(".offer__slider-container").slick({
            dots: true,
            appendArrows: $(".offer__slider-arrows-place"),
            prevArrow: `<button type="button" class="offer__slider-arrow offer__slider-arrow--prev slick-prev"> 
                        <svg>  <use xlink:href='svg/dest/stack/spriteMulti.svg#arrowLeft'></use> </svg> </button>`,
            nextArrow: `<button type="button" class="offer__slider-arrow offer__slider-arrow--next slick-next"> 
                        <svg>  <use xlink:href='svg/dest/stack/spriteMulti.svg#arrowLeft'></use> </svg> </button>`,
        })

    }
});