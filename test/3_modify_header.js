import http from 'k6/http';

// 헤더를 변경하여 요청할 수 있다.
// method 또한 바꿔서 요청을 보낼 수 있다. 
export default function (data) {
	const params = {
		headers: {
		  'X-CUSTOME-HEADER': 'TEST',
		},
	};
	
	const res = http.post(url, payload, params);
};