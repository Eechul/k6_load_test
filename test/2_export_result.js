// --out 옵션을 통해 결과를 파일로 저장 할 수 있다.
// 또한 아래와 같이 여러가지 형태를 지원한다고 한다
// AWS CloudWatch, Grafana Cloud, Datadog, InfluxDB, New Relic, CSV, JSON 등등!
// json으로 내보내는 실행 스크립트 : k6 run --out json=out/2_test.json test/2_export_result.js
import http from 'k6/http';

export default function (data) {
	http.get('http://test.k6.io');
};