
# AKMU 악동뮤지션 ONE-PAGE
## 샵은 개수에 따라 H로 지정된다.

``색깔이 바뀐다.``
__굵기가 바뀐다__

~~~
코드를 넣을 수 있습니다.
~~~

action은 데이터가 넘어가는 곳  
name = 변수 이름 ex) userID   
value = 값

swiper slide 사용시 script는 body 맨 마지막에 작성하여 html 다음으로 작동되도록 함
 
 스크립트 사용시 위치 주의
  

 1. about section 을 ul li h3&p
 2. album section 을 article로 구성, 그리고 앨범 이미지를 after,before 사용.
 3. tab if문 사용.
 4. play 구조 잘 모르겟음 

    
 swiper 반응형 api 
   direction: getDirection()
    추가 후
    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }
    하면 가로 세로 파악 후 슬라이드 방향 전환


     https://wordbe.tistory.com/entry/Git-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95-%EC%A0%95%EB%A6%ACcommit-push-pull-request-merge-%EB%93%B1 참고



 : eq () 선택기는 특정 인덱스 번호가있는 요소를 선택합니다.

 색인 번호는 0에서 시작하므로 첫 번째 요소는 색인 번호 0 (1이 아님)을 갖습니다.

 이것은 주로 다른 선택기와 함께 사용되어 그룹에서 특별히 색인 된 요소를 선택합니다 (위의 예에서와 같이).
 


  PLAY OL LI 에서 이미지는 불릿으로 대체, 그리고  HTML P 로 커버 치기 

  
   https://fancyapps.com/fancybox/ 참고

   http://fancyapps.com/fancybox/3/ 성공 참조






    /* 
html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 80%;
    height: 50%;
    
  }
  
  .swiper-slide {
    width: 20%;
    text-align: center;
    font-size: 18px;
    background: #fff;
    background-color: cadetblue;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  } */
  /* @media (max-width: 760px) {
    .swiper-button-next {
      right: -20px;
      top: 50%;
      transform: rotate(90deg);
    }
  
    .swiper-button-prev {
      left: -20px;
      top: 50%;
      transform: rotate(90deg);
    }
  } */
/* 
section.play > ul{
    background-color: cadetblue;
}
section.play ul.playlist>li{
  background-color: cadetblue; display: none;
}
section.play ul.playlist>li.albumActive{
  background-color: blue; display: block;
}
section.play > ol{
    position: relative;
}
section.play > ol li{
    position: absolute;
}

section.play img{
  width: 100%;
}
ul.playlist >li ol li{
  background-color: #fff;
}
ul.playlist >li ol li.listActive{
  background-color: blueviolet;
}


header,
section.videoArea,
section.about,
article.album,
section.gallery,
footer{
  display: none;
}
section.play >img{
  width: 30%;
}
section.play{
  margin-bottom: 50px;
} */



 play list 중 ol li 안에 p:first에 패딩을 사용하고 before로 이미지를 넣어주면 p:first의 패딩은 클릭이 가능하다. 즉 오디오 선택 가능
다만 background는 image와 다르게 이미지의 width와 height값(px 값)을 가져야하는 등 공간에 대한 규정이 필요하고 image는 스스로 값을 갖고 있기 때문에 딱히 필요가 없다. 

 요약-
background를 쓸때는 content만으로는 공간을 잡을 수 없어서 width height값을 넣어줘야한다.
       https://stackoverflow.com/questions/10797632/simulate-background-sizecover-on-video-or-img