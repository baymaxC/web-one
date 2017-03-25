/**
 * Created by lenovo on 2017/3/23.
 */
$(function () {

    new Swiper('.banner',{
        direction: 'horizontal',
        loop: true,
        spaceBetween: 100,
        paginationClickable: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 2500,
        autoplayDisableOnInteraction: true
    });
    new Swiper('.products .swiper-container',{
        direction: 'horizontal',
        slidesPerView: 3,
        loop: true,
        spaceBetween: 10,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    $.stellar({
        // 滑动水平的滚动条时，不产生视觉差效果
        horizontalScrolling: false,
        responsive: true
    });


    $('.animateBox').waypoint(function (direction) {
        console.log(this.element);
        $(this.element)
            .addClass('fadeInUp');
    },{offset: "80%"});


})


