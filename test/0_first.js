import http from 'k6/http';

export default function firstReq() {
    http.get('http://test.k6.io');
}