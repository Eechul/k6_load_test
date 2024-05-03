# K6_LOAD_TEST - 부하 테스트


## Table of Contents

- [필요성](#)
- [목적](#목적)
- [실행전에](#)
- [진행예정인 테스트](#)

## 필요성

- 현재 유저수가 많지 않은 프로젝트(100~200명)에서 모니터링은 하고 있지만, 특별한 문제가 발생하지 않고 있다.
- 하지만 점차 유저수가 많아짐에 따라 다양한 문제점들이 드러날 수 있기에, 이를 사전에 방지 하고자 부하 테스트를 실시한다.


## 목적

- 백엔드 부하 테스트
- 부하 테스트: 여기선 API의 요청을 증가시켜서 애플리케이션의 한계를 찾아내는 것
- 실서비스에(실제론 staging 서버) 부하 테스트를 실시하여 어떤점에서 시스템 제한이 걸리는지 확인하고 개선해보려는 목적을 지님.


## 실행전에

1. Mac OS 기준으로 k6를 설치
```bash
brew install k6
```
2. 자바스크립트로 작성된 부하 테스트 실행
```bash
k6 run test/0_first.js
```

## 진행예정인 테스트

- 조회 테스트
- 쓰기 테스트