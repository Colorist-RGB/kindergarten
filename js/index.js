$(".slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})


// 제이쿼리 문법
// var $btn = $('.jq .jqb')
// var $i;
// var $slide = $('.jq .slide_group')
// $btn.on('click', function(){
//     $i = $(this).find('i')
//     if ($i.hasClass('fa-pause')) {
//         $slide.slick('slickPause')
//         $i.removeClass('fa-pause').addClass('fa-play')
//     } else {
//         $slide.slick('slickPlay')
//         $i.removeClass('fa-play').addClass('fa-pause')
//     }
// })

//자바스크립트 문법-1
var elBtn = document.querySelector('.jq .jqb')
var elI = elBtn.childNodes
elBtn.addEventListener('click', function(){
    if (elI[0].classList.contains('fa-pause')) {
        $('.jq .slide_group').slick('slickPause')
        elI[0].classList.remove('fa-pause')
        elI[0].classList.add('fa-play')
    } else {
        $('.jq .slide_group').slick('slickPlay')
        elI[0].classList.remove('fa-play')
        elI[0].classList.add('fa-pause')
    }
})

//자바스크립트 문법-2(작동 안함)
// var elBtn = document.querySelector('.jq .jqb')
// var elI;
// var elSlide = document.querySelector('jq .slide_group')
// elBtn.addEventListener('click', function(){
//     elI = elBtn.find('i')
//     if (elI.classList.contains('fa-pause')) {
//         elSlide.slick('slickPause')
//         elI.classList.remove('fa-pause')
//         elI.classList.add('fa-play')
//     } else {
//         elSlide.slick('slickPlay')
//         elI.classList.remove('fa-play')
//         elI.classList.add('fa-pause')
//     }
// })