
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