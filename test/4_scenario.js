// 시나리오를 가정해서 테스트를 할 수 있다.
import http from 'k6/http';

export const options = {
    // batchPerHost: 10,
    scenarios: {
        test_k6_scenario1: {
            vus: 10,
            exec: 'test_k6_scenario1', // 어떤 export 함수를 실행할지 정한다.
            executor: 'per-vu-iterations', // 로드발생기 유형을 정할 수 있다. https://k6.io/docs/using-k6/scenarios/executors/
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