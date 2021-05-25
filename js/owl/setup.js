var owl = $('.owl-carousel');
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:8,
            nav:false,
            loop:false
        }
    }
})