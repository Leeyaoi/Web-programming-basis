const products_swiper = new Swiper('.products .swiper', {
    // Optional parameters
    loop: true,
    autoHeight: false,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grid: {
        rows: 3
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
            rows: 3
        },
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
            rows: 3
        },
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
            rows: 3
        },
      },
    },
}) ;

var products = Array.from(document.querySelectorAll(".product_block"))

for(let i = 1; i < 27; i++){
    let swiper = new Swiper('.swiper.b'+i, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        autoplay: {
            delay: 500,
            disableOnInteraction: false,
        },
        on: {
            init: function() {
                var slider = this;
                slider.autoplay.stop();
                document.querySelector(".product_block.b"+i).addEventListener("mouseenter", function() {
                    slider.autoplay.start();
                });
                document.querySelector(".product_block.b"+i).addEventListener("mouseleave", function() {
                    slider.autoplay.stop();
                });
            }
        }
    }) 
}

console.log(prod_sw)