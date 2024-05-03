import http from 'k6/http';

export let options = {
    vus: 10, // 현재 활성화 된 유저 수
    duration: '1m', // 테스트 지속 시간
};

export default function useOptions() {
    http.get('http://test.k6.io');
}