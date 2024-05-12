// 참고 - https://weolbu.medium.com/%EC%9B%94%EA%B8%89%EC%9F%81%EC%9D%B4%EB%B6%80%EC%9E%90%EB%93%A4%EC%9D%98-%EB%B6%80%ED%95%98%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%A5%BC-%EC%9C%84%ED%95%9C-k6-%EB%8F%84%EC%9E%85%EA%B8%B0-d7c82e7fe65f
// 시나리오를 가정해서 테스트를 할 수 있다.
import http from 'k6/http';

export const options = {
    // batchPerHost: 10,
    scenarios: {
        test_k6_scenario1: {
            vus: 10,
            exec: 'test_k6_scenario1', // 어떤 export 함수를 실행할지 정한다.
            executor: 'per-vu-iterations', // executor(발생기) 유형을 정할 수 있다. https://k6.io/docs/using-k6/scenarios/executors/
        },
        test_k6_scenario2: {
            vus: 10,
            exec: 'test_k6_scenario2',
            executor: 'per-vu-iterations',
        }

    }
}

export function test_k6_scenario1(data) {
	http.get('http://test.k6.io');
};

export function test_k6_scenario2(data) {
	http.get('http://test.k6.io');
};