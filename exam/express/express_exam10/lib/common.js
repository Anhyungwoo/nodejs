/*
*공통 라이브러리
*/

const commonLib = {
		alert(msg, res) {
			return res.send (`<script>alert('${msg}');</script>`);
		},
		/** 페이지 이동 */
		go(url, res, target) {
			target = target || 'self'; //기본값은 self로 현재 열려있는 창에서 이동, parent - 부모창에서 이동 !
			const script = `<script>${target}.location.href='${url}';</script>`;
			return res.send(script);
		}
};

module.exports = commonLib;