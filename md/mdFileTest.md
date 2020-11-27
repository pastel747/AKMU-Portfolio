
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





 play list 중 ol li 안에 p:first에 패딩을 사용하고 before로 이미지를 넣어주면 p:first의 패딩은 클릭이 가능하다. 즉 오디오 선택 가능
다만 background는 image와 다르게 이미지의 width와 height값(px 값)을 가져야하는 등 공간에 대한 규정이 필요하고 image는 스스로 값을 갖고 있기 때문에 딱히 필요가 없다. 

 요약-
background를 쓸때는 content만으로는 공간을 잡을 수 없어서 width height값을 넣어줘야한다.
       https://stackoverflow.com/questions/10797632/simulate-background-sizecover-on-video-or-img




 사용자 지정 data-..
  const는 정해져 있는 값, 변수가 아니다. attr 속성 가져오는 법은 원래 const 이지만 var로도 가능
  
   overflow-y: auto;는 overflow-y: scroll;과는 다르게 height 값을 자동으로 
   측정하여 스크롤을 없애주기도 한다. 

 siblings() 함수는 앞서 선택된 것의 동위 선상 형제자매들을 선택해준다.
 
 find() 함수는 부모 하위 자식들을, children() 함수는 직계 자손들을 선택한다.

 https://ofcourse.kr/js-course/innerHTML-%EC%86%8D%EC%84%B1 ????

 https://velog.io/@raram2/%EB%8B%B9%EC%8B%A0%EC%9D%B4-innerHTML%EC%9D%84-%EC%93%B0%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0



 
  https://doolyit.tistory.com/125