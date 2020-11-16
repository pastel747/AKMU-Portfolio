$(document).ready(function(){
    swiperTEST4();
    test();
    test2();
    // test3();
    test4();
    // test5();
    // test6();
    test7();
    // videoSk();
    playTrack();
    timeGet();
    vid();
    test8();
    audioTotal();
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

// function test8(){
//     var test = $('section.playArea>ul.playlist li>ol>li');
//     var test2 = $('section.playArea>ul.playlist li.albumActive ol li.listActive p:first-of-type');

//     test.click(function(){

//     });
// }

function test3(){
    var test = $('section.playArea>img');
    var test2 = $('.swiper-wrapper div.albumActive img').attr('src');

    $('.swiper-wrapper div').click(function(){
        test.attr('src', test2);
    });
}

// function test4(){
//     var test = $('section.playArea>img');

//     $('.swiper-wrapper div').click(function(){
//         var test2 = $(this).find('img').attr('src');
//         test.attr('src', test2);
//     });
// }

function test4(){
    var test = $('section.playArea>img');

    $('.swiper-wrapper div').click(function(){
        var test2 = $(this).find('img').attr('src');
        test.attr('src', test2);
    });
}

// function test5(){
//     var albumList = $('section.playArea>ul.playlist li>ol>li');
//     var getlistContentChange = $('section.playArea>ul.albumActive ol li.listActive p:first-of-type').innerText();
//     var playlistText = $('section.playArea>div:first-of-type ul li.listActive>p.listName');
    
//     albumList.click(function(){
//         getlistContentChange.attr('id', 'test');
//         var getText = document.getElementById("test").textContent;
//         playlistText == getText;

//     });
// }


function test7(){
    var albumList = $('section.playArea>ul.playlist li>ol>li');
    
    albumList.click(function(){
        document.getElementById("playName").removeAttribute("id"); 
        // getlistContentChange.removeAttr('playName');
        var playNameId = $(this).children('p:first-of-type');
        playNameId.attr('id','playName'); 
        // alert(playNameId);
    
        var getText = document.getElementById("playName").textContent;
        document.getElementById('listName').innerHTML=getText;
    });
}


function playTrack(){
    var trackIndex = $('section.playArea>div:last-of-type>ul li span.listTrack');
    var albumList = $('section.playArea>ul.playlist li>ol>li');
    
    albumList.click(function(){
        var getIndex = $(this).index();
        // getIndex+=1;

        $('span#listTrack').empty();
        // $('span#listTrack').innerHTML=putIndex;
        // $('span#listTrack').innerHTML=$('track.'+ getIndex);

        
        // $('track.'+ getIndex);
        // var putText = trackIndex.textContent;

        // var putText = trackIndex.textContent; 
        document.getElementById('listTrack').innerHTML="track."+(getIndex+=1);

    });
}

function timeGet(){
    var albumList = $('section.playArea>ul.playlist li>ol>li');
    albumList.click(function(){
        document.getElementById("playTime").removeAttribute("id"); 
        var playTimeId = $(this).children('p:last-of-type');
        playTimeId.attr('id','playTime'); 

        var getTime = document.getElementById("playTime").textContent;
        document.getElementById('listTime').innerHTML=getTime;
    });
}
function test8(){
    var playButtonSelect = $('section.playArea>div:last-child>input#playAreabutton');
    var statusButton = playButtonSelect.css('background-image');
    var buttonPlay = playButtonSelect.css('background-image','url(../images/btn_play.png)');
    var buttonPause = playButtonSelect.css('background-image','url(../images/btn_pause.png)');

    playButtonSelect.click(function(){
        if(statusButton==buttonPlay){
            buttonPause;
        }else{
            buttonPlay;
        }
        // $(this).toggleClass('playAreabutton');
    });
}

function vid(){
    var video = $('section.videoArea video');

    function play(){
        if(video.pause){
            videoBG.pause();
        }else{
            videoBG.play();
        }
    }
}



var video = $('section.videoArea>div>video');
var videoBG = $('section.videoArea>video');
function play(){
    if(video.pause){
        videoBG.pause();
    }else{
        videoBG.play();
    }
}


function audioTotal(){
    var audioList = $('section.playArea>ul.playlist>li>ol>li');

    audioList.click(function(){
        var audio = new Audio("../audio/file_example.mp3");
        audio.loop = false;
        audio.volume = 0.3;
        audio.play();
        
    })
}