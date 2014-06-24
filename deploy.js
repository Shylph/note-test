
var exec=require('child_process').exec;


exec('node build/merge.js', function(err,stdout,stderr){

	


	exec('git push',function(err,stdout,stderr){

		//제대로 배포되었는지 확인코드 작성 
		console.log(err)

	})	
});
