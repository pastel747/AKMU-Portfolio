$(document).ready(function(){
    swiperSetting();
    playAreaSwiperSelect();
    playAreaAlbumListActive();
    playAreaAlbumImgChange();
    listAndplayName();
    playTrackNumber();
    listtimeGet();
    // audioTotal();
    navActiveTest();
    audioPlay();
    VideoPlay();
    mobileScrollCancle();
});

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
    var albumList = $('.playlist>li>ol>li');
    var albumSelect = $('.swiper-slide');
    var test = 0;
    var test2 = 0;

    var audioSrcIndex = [
        ['audio/file_example.mp3','audio/file_example.mp3','audio/file_example.mp3','audio/file_example.mp3','audio/file_example.mp3','audio/file_example.mp3','audio/file_example.mp3','audio/file_example.mp3','audio/file_example.mp3','audio/file_example.mp3'],
        ['audio/file_example2.mp3','audio/file_example2.mp3'],
        ['audio/file_example.mp3','audio/file_example.mp3'],
        ['audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3'],
        ['audio/file_example.mp3'],
        ['audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3'],
        ['audio/file_example.mp3'],
        ['audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3','audio/file_example2.mp3']
    ];


    albumSelect.click(function(){
        test = $(this).index();
        alert(test);
    });

    albumList.click(function(){
        test2 = $(this).index();
        alert(test2);
        playList.removeClass('audioPlaying');
        var audio =$('.audioBlind')[0];
        $('.audioBlind').attr('src',audioSrcIndex[test][test2]);
        
        audio.pause();
        alert('중단');
    });




    playList.click(function(){
        var hasClassPlay = playList.hasClass('audioPlaying');
        var audio =$('.audioBlind')[0];
        $('.audioBlind').attr('src',audioSrcIndex[test][test2]);
        
        audio.loop = true;
        audio.volume = 0.3;  
        audio.currentTime=0;

        if(hasClassPlay==true){
            playList.removeClass('audioPlaying');
            audio.pause();
        }else{
            playList.addClass('audioPlaying');
            audio.play();

        }

    });
}

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

    
}

function mobileScrollCancle(){
    $('label.mcheck').click(function(){
        $('label.mcheck').toggleClass('labelActive');
        $('body').toggleClass('scroll');
        // $('header>div').toggleClass('afterActive');
        
        // var bodyHas = $('header>div').hasClass('afterActive');

        // if(bodyHas==true){
        //     $('header>div.afterActive').css('background','rgba(0, 0, 0, 0.6)');
        //     $('header>div').css('background','rgba(0, 0, 0, 0.6)');
        //     alert();
        // }else{
        //     $('header>div').css('background','');
        //     alert();
            
        // }

        // if(bodyHas==true){
        //     $('header>div').after(function(){
        //         $('header>div').css('background','rgba(0, 0, 0, 0.6)')
        //     });
        //     alert();
        // }else{
        //     $('header>div').after(function(){
        //         $('header>div').css('background','')
        //     });
        //     alert();
        // }
    
    });
}

