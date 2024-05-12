const products_swiper = new Swiper('.products .swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
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
}) ;

const products = document.getElementsByClassName("product_block")

var prod_sw = []

Array.prototype.forEach.call(products, function(el){
    let swiper = new Swiper('.product_block .swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
    }) 
    
    el.addEventListener("mouseenter", function(e){
        swiper.params.autoplay.disableOnInteraction = false;
        swiper.params.autoplay.delay = 500;
        swiper.autoplay.start();
    })

    el.addEventListener("mouseleave", function(e){
        swiper.params.autoplay.stop();
    })/**/

    prod_sw += [swiper]
});