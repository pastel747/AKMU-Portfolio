$(document).ready(function(){
    swiperSetting();
    playAreaSwiperSelect();
    playAreaAlbumListActive();
    playAreaAlbumImgChange();
    listAndplayName();
    playTrackNumber();
    listtimeGet();
    // audioTotal();
    // navSelect();
    navActiveTest();
    audioPlay();
    VideoPlay();
    mobileScrollCancle();
    mobilebodyBG();
});

function test8(){
    // var playButtonSelect = $('.playArea>div:last-child>input');
    // var statusButton = playButtonSelect.css('background-image');
    // var buttonPlay = playButtonSelect.css('background-image','url(../images/btn_play.png)');
    // var buttonPause = playButtonSelect.css('background-image','url(../images/btn_pause.png)');
    var inputButtonSelect = $('#playAreabuttonID');


    inputButtonSelect.click(function(){
        inputButtonSelect.addClass('playAreabuttonClass');
        
        // for?
        var test = inputButtonSelect.hasClass('playAreabutton');
        if(test==true){

        }
    });
}

function swiperSetting(){
    var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        
        767: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 20,
        }
        
        
      },
    // direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    // ,
    // on: {
    //     resize: function () {
    //     swiper.changeDirection(getDirection());
    // }
    // }
});
    
    // function getDirection() {
    //     var windowWidth = window.innerWidth;
    //     var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    
    //     return direction;
    // }
}


function playAreaSwiperSelect(){
    $('.swiper-wrapper div').click(function(){ //div 클릭시
        $('.playArea>.playArea_PlayList>ul.playlist>li').removeClass('albumActive'); //연동되는 li들에 일괄적으로 클래스를 빼준다
        $('.swiper-wrapper>div').removeClass('albumActive'); // li들처럼 div도 클래스를 빼준다
        $(this).addClass('albumActive'); //클릭된 div에 클래스를 넣어준다.
        $('.playArea>.playArea_PlayList>ul.playlist>li').eq($(this).index()).addClass('albumActive'); //연동되는 li에 클릭된 div index값을 eq로 넣어주고 
        // 그 값은 div index와 동일하므로 그대로 클래스를 넣어준다
    });
}

function playAreaAlbumListActive(){  
    var albumList = $('.playArea>.playArea_PlayList>ul.playlist>li ol li');
    albumList.click(function(){ 
        albumList.removeClass('listActive'); 
        $(this).addClass('listActive');
    });
}

function playAreaAlbumImgChange(){
    var albumImg = $('.playArea>.playArea_PlayList>img');

    $('.swiper-wrapper div').click(function(){
        var swiperImgAttr = $(this).find('img').attr('src');
        albumImg.attr('src', swiperImgAttr);
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

function listAndplayName(){
    var albumList = $('.playArea>.playArea_PlayList>ul.playlist li ol li');
    
    albumList.click(function(){
        $('#playName').removeAttr("id"); 
        //jquery 추가 아래와 동일한 효과있음
        // document.getElementById("playName").removeAttribute("id"); 바닐라 js
        // getlistContentChange.removeAttr('playName');

        // var playNameId = $(this).children('p:first-of-type');
        // playNameId.attr('id','playName');
    
        // var getText = $('#playName')[0].textContent;
        // console.dir(document.getElementById('playName'));
        // console.log($('#playName'));
        // $('#listName')[0].innerHTML=getText;

        
        var getText = $(this).children('p:first-of-type').html();
        $('#listName').html(getText);
        // html()은 선택된 것의 내용을 가져오고(텍스트), html(a)는 선택된 것의 내용대신 a를 넣어준다.
    });
}

function playTrackNumber(){
    var albumList = $('section.playArea>.playArea_PlayList>ul.playlist li ol li');
    
    albumList.click(function(){
        var getIndex = $(this).index();
        // getIndex+=1;

        $('span#listTrack').empty();
        // $('span#listTrack').innerHTML=putIndex;
        // $('span#listTrack').innerHTML=$('track.'+ getIndex);

        
        // $('track.'+ getIndex);
        // var putText = trackIndex.textContent;
        // var putText = trackIndex.textContent; 

        // document.getElementById('listTrack').innerHTML="track."+(getIndex+=1);
        $('#listTrack').html("track."+(getIndex+=1));
    });
}

function listtimeGet(){
    var albumList = $('section.playArea>.playArea_PlayList>ul.playlist li ol li');
    
    albumList.click(function(){
        // document.getElementById("playTime").removeAttribute("id"); 
        $('#playTime').removeAttr('id');
        // var playTimeId = $(this).children('p:last-of-type');
        // playTimeId.attr('id','playTime'); 

        // var getTime = document.getElementById("playTime").textContent;
        // document.getElementById('listTime').innerHTML=getTime;
        var getTime = $(this).children('p:last-of-type').html();
        $('#listTime').html(getTime);
    });
}

// function audioTotal(){
//     var audioList = $('section.playArea>ul.playlist>li>ol>li');
//     var inputButtonSelect = $('#playAreabuttonID');

//     var albumlist = [Full_Album1, Single_Album1, Single_Album2, Single_Album3, Full_Album2, Single_Album4, Single_Album5, Full_Album3];

//     var Full_Album3 = new Array('../audio/file_example.mp3', '../audio/file_example2.mp3','../audio/file_example.mp3', '../audio/file_example2.mp3','../audio/file_example.mp3', '../audio/file_example2.mp3','../audio/file_example.mp3', '../audio/file_example2.mp3','../audio/file_example.mp3', '../audio/file_example2.mp3');
//     var Full_Album2 = new Array('../audio/file_example2.mp3','../audio/file_example.mp3', '../audio/file_example2.mp3','../audio/file_example.mp3', '../audio/file_example2.mp3','../audio/file_example.mp3', '../audio/file_example2.mp3','../audio/file_example.mp3');
//     var Full_Album1 = new Array('../audio/file_example.mp3', '../audio/file_example2.mp3','../audio/file_example.mp3', '../audio/file_example2.mp3','../audio/file_example.mp3', '../audio/file_example2.mp3','../audio/file_example.mp3', '../audio/file_example2.mp3','../audio/file_example.mp3', '../audio/file_example2.mp3','../audio/file_example.mp3');

//     var Single_Album5 = new Array('../audio/file_example.mp3', '../audio/file_example2.mp3');
//     var Single_Album4 = new Array('../audio/file_example2.mp3', '../audio/file_example.mp3');
//     var Single_Album3 = new Array('../audio/file_example.mp3');
//     var Single_Album2 = new Array('../audio/file_example2.mp3', '../audio/file_example.mp3','../audio/file_example2.mp3', '../audio/file_example.mp3','../audio/file_example2.mp3', '../audio/file_example.mp3');
//     var Single_Album1 = new Array('../audio/file_example.mp3');
//     var albumArray = $('section.playArea>ul.playlist>li.albumActive>span').attr('id');
 
//     audioList.click(function(){
//         // var albumArray = document.getElementById("#Full_Album3").attr('id');
//         // var albumArray = $('section.playArea>ul.playlist>li.albumActive').index();
//         // alert(inArray(albumArray, albumlist,0));
//         // alert(jquery.inArray(albumArray, albumlist));
//         // alert(albumArray);

//         var listInAlbumIndex = $('section.playArea>ul.playlist>li.albumActive>ol>li.listActive').index();
//         // alert(listInAlbumIndex);

//         const found = array1.find(element => element > 10);
//         alert(albumArray[listInAlbumIndex]);
//         // alert(found);

//         // alert(listInAlbumIndex);
//         // alert();

//         var audio = new Audio("../audio/file_example.mp3");
        

//         audio.loop = false;
//         audio.volume = 0.3;
//         audio.play();

//     })
// }

function audioPlay(){
    var playList = $('#playAreabuttonID');
    var albumList = $('.playArea>.playArea_PlayList>ul.playlist>li ol li');
    var audioList = $('section.playArea>.playArea_PlayList>ul.playlist>li.albumActive>ol>li.listActive>audio');

    playList.click(function(){
        var hasClassPlay = playList.hasClass('audioPlaying');

        $('audio').loop = false;
        $('audio').volume = 0.3;  


        if(hasClassPlay==true){
            playList.removeClass('audioPlaying');
            alert('1');
            audioList.pause();
        }else{
            playList.addClass('audioPlaying');
            alert('2');
            audioList.play();
        }

    });
}
function audioPlayChange(){
    var audioList = $('section.playArea>.playArea_PlayList>ul.playlist>li.albumActive>ol>li.listActive>audio');
    var playList = $('#playAreabuttonID');

    albumList.click(function(){
        playList.removeClass('audioPlaying');
        alert('11')
    });
}

// function navSelect(){
//     var headernavSelect = $('header>div>nav>ul>li>a');

//     headernavSelect.click(function(){
//         headernavSelect.removeClass('navActive'); 
//         $(this).addClass('navActive');
//     });
// }

function navActiveTest(){
    // $(window).scrollTop(); 현재 스크롤바의 위치 값 스크롤 탑은 ()에 0을 선언
    // offset(); document 에서의 요소들의 위치 값
    // eq 는 몇 번째 를 선택할 건지
    // each는 선택된 것의 각각. 
    // 예를 들어, div eq(0) ,div eq(1) ,div eq(2) ,div eq(3)들은 div each 와 같다. 이것들을 모두 포함하고 있는 상태이다
    var headernavSelect = $('header>div>nav>ul>li>a');

    $(window).scroll(function(){
        $('section').each(function(){
            // $('section').each().offset().top; 이렇게 하면 모든 섹션이 선택된 상태의 offsettop이 나온다.
            
            if( $(window).scrollTop() > $(this).offset().top - 5 ){ //d윈도우의 값이 섹션의 값들 
                headernavSelect.removeClass('navActive');
                headernavSelect.eq($(this).index()-1).addClass('navActive');
            }
        })
    });
}

function VideoPlay(){
    var test = $('.videoArea>div>video');

    // Play the video 
    // $('#sample_video').trigger('play'); 
      
    // Pause the video 
    // $('#sample_video').trigger('pause'); 

    test.on('play', function () {
        alert("Test");
    });
}

function mobileScrollCancle(){
    $('label.mcheck').click(function(){
        $('label.mcheck').toggleClass('labelActive');
        $('body').toggleClass('scroll');
        
        var bodyHas = $('body').hasClass('scroll');

        if(bodyHas==true){
            $('header>div::after').css('background','rgba(0, 0, 0, 0.6)');
        }else{
            $('header>div::after').css('background','');
        }
    
    });
}


function mobilebodyBG(){

    
}