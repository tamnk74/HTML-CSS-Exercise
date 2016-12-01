$(document).ready(function(){
	$("#datepicker").datepicker();
	$("#first-name, #last-name").change(function(){
		$("#rs-name").text($("#last-name").val() + " " + $("#first-name").val());
	});
	$(".sex").click(function(){
		$("#rs-sex").text($(this).val());
	});
	$("#nation").click(function(){
		$("#rs-nation").text($(this).val());
	});
});