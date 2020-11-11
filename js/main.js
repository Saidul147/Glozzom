$(function(){

	$('#about_slider').carousel({
		interval:false,
		
	})

	$('#next_slide').click(function(){
	  $('#about_slider').carousel('next')
	})
   $('#prev_slide').click(function(){
	  $('#about_slider').carousel('prev')
	})
})