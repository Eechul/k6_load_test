// 참고 - https://weolbu.medium.com/%EC%9B%94%EA%B8%89%EC%9F%81%EC%9D%B4%EB%B6%80%EC%9E%90%EB%93%A4%EC%9D%98-%EB%B6%80%ED%95%98%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%A5%BC-%EC%9C%84%ED%95%9C-k6-%EB%8F%84%EC%9E%85%EA%B8%B0-d7c82e7fe65f
// setup 부터 teardown 까지의 라이프사이클 함수가 존재한다.
// 단, 초기화 코드는 제외된다.

// 1. init code
export const options = {

}

export function setup() {
    // 2. setup code
    // 런타임 시, 단 한번 호출되는 함수. 
    // 데이터 전처리, 가상 사용자들에게 데이터를 공유한다.
}

export default function  (data) {
    //  3. Virtual User Scenario code
    // 유저 테스트 시나리오를 정하는 함수.
    // options는 여기에서 사용되며, options에 따라 반복 호출
}

export function teardown(data) {
    // 4. teardown code
    // 테스트가 완료됬음을 할리는 hook 함수
}