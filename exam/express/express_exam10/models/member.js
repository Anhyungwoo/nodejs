const { sequelize, Sequelize : { QueryTypes } } = require('./index'); //동일 폴더에 존재
const bcrypt = require('bcrypt');
/**
*member model
*/

const member = {
	// 회원 가입 처리
	async join(data) {
		/**
			sequelize.query(sql, {
				replacements : sql 바인딩 데이터,
				type : QueryTypes.SELECT | INSERT | UPDATE | DELETE
			});
		**/
		try{
		/*const sql = `INSERT INTO member (memId, memPw, memNm)
								VALUES (?, ?, ?)`;
								
		const result = await sequelize.query(sql, {
							replacements : [data.memId, data.memPw, data.memNm],
							type : QueryTypes.INSERT,
		});
			console.log("result", result);
		*/	
		const sql = `INSERT INTO member (memId, memPw, memNm)
						VALUES(:memId, :memPw, :memNm)`;
		
		const memPw = await bcrypt.hash(data.memPw, 10);	
						
		const replacements = {
				memId : data.memId,
				memPw : memPw,
				memNm : data.memNm
		};				
		
		const result = await sequelize.query(sql, {
			replacements,
			type : QueryTypes.INSERT,
		});
		
		 return  true;
		} catch (err) {
			console.error(err);
		}
	}
};

module.exports = member;