
$('#mynote')
	.on("keyup",function(){
		localStorage.setItem( "note", $('#mynote').val() );
	})
	.val( localStorage.getItem("note") );

$('#mynote').redactor({
	minHeight: 300,
	keyupCallback: function(obj, event) {
		// console.log(  )
		var value = $('#mynote').getCode();
		localStorage.setItem( "note", value );
	}
});





// $('button.save').on("click",function(){

// 	localStorage.setItem( "note", $('#mynote').val() );

// });