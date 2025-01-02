# FE optimization test

## 1️⃣ 기획 의도

    1. Tanstack Query 학습
    2. 프론트엔드 애플리케이션에서 성능 최적화를 달성할 수 있는 다양한 방법을 실험
    3. 향후 기술에 대한 합리적 의사선택에 있어서 폭넓은 시야를 확보하기 위함

## 2️⃣ 테스트 종류

1. Tanstack Query VS Axios, useState
   ```
    Tanstack Query로 서버 데이터 패칭의 이점을 파악
   ```
2. props drilling VS Zustand

   ```
    같은 프로젝트를 Zustand와 props drilling으로 구현해보고
    극단적인 상황 속에서 렌더링 시간을 측정
   ```

3. Lazy Loading, Suspense

   ```
    `React.lazy`와 `Suspense`를 적용하여 초기 번들 크기를 줄이고, 무거운
    컴포넌트가 필요한 시점에서만 로드되게끔 했을 때 유의미한 속도차이가 있는지
   ```
