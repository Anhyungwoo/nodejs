const express=require('express');
const multer=require('multer');
const path=require('path');
const router=express.Router();

/** multer 설정 부분 const upload = multer({ ...설정...})*/
const upload = multer ({
	//저장소
	storage : multer.diskStorage ({
		destination(req, file, done) {
			done(null, path.join(__dirname, "../public/upload"));
		},
		filename(req, file, done) {
			const ext = path.extname(file.originalname);
			const filename = path.basename(file.originalname, ext) + "_" + Date.now() + ext;
			done(null, filename);
		},
	}),
	//업로드 파일 용량
	limits : { fileSize: 10 * 1024 * 1024}, // 10mb
});

router.get("/", (req, res) => {
	return res.render("file");
});

/** 파일 하나 업로드 - upload.single('file'); */
router.post("/upload", upload.single('file'), (req, res) => {
	console.log(req.file);
	return res.send("");
});

/** 파일 여러개 업로드 */
router.post("/upload2", upload.array('files'), (req, res) => {
	console.log(req.files);
	return res.send("");	
})

/** 파일 여러개를 항목별로 업로드 */
router.post("/upload3", upload.fields([{ name : 'file1' }, {name : 'file2'}]), (req, res) => {
	console.log(req.files);
	return res.send("");
});

module.exports=router;