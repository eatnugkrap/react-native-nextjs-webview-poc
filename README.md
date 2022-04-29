react native - nextjs 웹뷰 poc

목표

사용자가 인지하지 못할정도로 자연스러운 웹뷰 어플리케이션 만들기.

체크할만한 것

- [x] 퍼포먼스
  - TTFB는 SSG 일 경우에는 문제가 없다.
  - 렌더링이 많거나... 애니메이션 쪽 확인하기.
    - UI thread, JS thread 모두 웹뷰에서 화면 그릴때의 리소스도 측정하는 것으로 보인다.
    - 큰 문제는 안보임.
- [x] 네비게이션 인터페이스
  - 네이티브 뒤로가기
    - 웹뷰의 `onNavigationStateChange` 로 지금 웹뷰가 뒤로가기를 할 수 있는지 저장.
    - react-navigation의 beforeRemove 이벤트에 리스너를 달고, 뒤로가기 상태에 따라 웹뷰의 히스토리, 네이티브의 히스토리 를 각각 컨트롤해줌.
  - 웹뷰에서 네이티브의 특정 화면으로 넘어가기
    - 포스트 메세지로 받아서 네이티브 쪽에서 네비게이션 이벤트 호출하면 됨.
  - 네비게이션 헤더 전환
    - 백 핸들링을 하면 따로 건들필요없을듯.
- [x] 런타임 환경 확인 (ex `replaceAll`)
  - ㅋㅋ String.replaceAll 없음.... 좀 조심해야할듯... 결국 소팅도 문제가 될거같은데....
- [X] 로컬 스토리지
    - 별거 안해도 그냥 웹뷰 안에서 로컬스토리지 쓸 수 있는듯
- [-] 데이터 넘겨주기, 리렌더링
  - 나중에 보기
- [-] 디바이스 사이즈 가져올 수 있는지
  - 나중에 보기
- [-] 이벤트, 에러 로깅
  - 나중에 보기
- [-] [체크리스트(https://shylog.com/settings-for-a-more-complete-webview/)
  - 나중에 보기


### 돌려보기

```
DummyApp // RN 앱
dummy-web // nextjs 웹
```

각 디렉토리에서 디펜던시 설치하고, 뭐 이것저것 다 세팅 한다음

DummyApp 에서는 `DummyWebView.tsx`, `SSG.tsx`, `SSR.tsx` 에서 가각 웹뷰 컴포넌트의 source.uri 를 본인 아이피로 변경. 그 후  `yarn ios`

dummy-web 에서는 `yarn dev`. ssg 로 돌려서 실제 로딩속도를 보고싶을땐 `yarn start`