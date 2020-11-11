$(document).ready(function(){
    swiperTEST4();
    test();
    test2();
    test3();
    // test4();
});

function swiperTEST4(){
    var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 20,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
        swiper.changeDirection(getDirection());
    }
    }
});
    
    function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    
        return direction;
    }
}

function test(){
    $('.swiper-wrapper div').click(function(){ //div 클릭시
        $('.playArea>ul.playlist>li').removeClass('albumActive'); //연동되는 li들에 일괄적으로 클래스를 빼준다
        $('.swiper-wrapper>div').removeClass('albumActive'); // li들처럼 div도 클래스를 빼준다
        $(this).addClass('albumActive'); //클릭된 div에 클래스를 넣어준다.
        $('.playArea>ul.playlist>li').eq($(this).index()).addClass('albumActive'); //연동되는 li에 클릭된 div index값을 eq로 넣어주고 
        // 그 값은 div index와 동일하므로 그대로 클래스를 넣어준다
    });
}

function test2(){  
    var test = $('section.playArea>ul.playlist>li ol li');
    test.click(function(){ 
        test.removeClass('listActive'); 
        $(this).addClass('listActive');
    });
}

function test3(){
    var test = $('section.playArea>img');
    var test2 = $('.swiper-wrapper div.albumActive img').attr('src');
    $('.swiper-wrapper div').click(function(){
        test.attr('src', test2);
    });
}

function test4(){
    var test = $('section.playArea>img');
    $('.swiper-wrapper div').click(function(){
        var test2 = $(this).find('img').attr('src');
        test.attr('src', test2);
    });
}