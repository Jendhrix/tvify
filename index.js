$(function(){
	/*
	submit search form
	*/
	$('#app-body')
	.find('form')
	.submit(function(ev){
		ev.preventDefault();//Quitando funcionalidad por defecto
		var query = $(this)
		.find('input[type="text"]')
		.val()
	alert(query);

	})
})