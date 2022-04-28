react native - nextjs 웹뷰 poc

목표

사용자가 인지하지 못할정도로 자연스러운 웹뷰 어플리케이션 만들기.

체크할만한 것

- [X] 퍼포먼스
    - TTFB는 SSG 일 경우에는 문제가 없다. 
    - 렌더링이 많거나... 애니메이션 쪽 확인하기.
        - UI thread, JS thread 모두 웹뷰에서 화면 그릴때의 리소스도 측정하는 것으로 보인다.
        - 큰 문제는 안보임.
- [ ] 네비게이션 인터페이스
    - 네이티브 뒤로가기
        - 웹뷰 네비게이션 스테이트를 보고, 필요할때에만 웹뷰에서 goBack 하고 나머지는 버블링 시키는 핸들러를 달아서 해결함.
    - 웹뷰에서 네이티브의 특정 화면으로 넘어가기
    - 웹뷰에서 네이티브 라이크 라우팅
    - 네비게이션 헤더 전환
- [ ] 데이터 넘겨주기, 리렌더링
- [ ] 디바이스 사이즈 가져올 수 있는지
- [ ] 이벤트, 에러 로깅
- [ ] 웹뷰에서 alert
- [ ] replaceAll...
- [ ] [체크리스트(https://shylog.com/settings-for-a-more-complete-webview/)