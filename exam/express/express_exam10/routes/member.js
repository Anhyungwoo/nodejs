const express = require('express');
const member = require('../models/member');
const { alert, go } = require("../lib/common");
const router = express.Router();



/** /member/join */
router.route("/join")
	.get((req, res) => { // 회원가입 양식 
		return res.render("member/join");
	})
	.post(async (req, res) => { // 회원 가입 처리 
		const result = await member.join(req.body);
		if (result) { //회원 가입 성공 이면 로그인 페이지로 ㄱㄱ
			return go("/member/login", res, "parent");
		}
		//실패 -> 메세지
		return res.send("");
			return go("/member/join", res, "parent");
	});

router.route("/login")
	.get((req, res) => { // 로그인 양식 
		return res.render("member/login");
	})
	.post((req, res) => { // 로그인 처리 
		
	});
	
router.get("/logout", (req, res) => {
	
});


module.exports = router;