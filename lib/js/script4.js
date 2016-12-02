$(document).ready(function(){
	$("#first-name, #last-name").change(function(){
		$("#rs-name").text($("#last-name").val() + " " + $("#first-name").val());
	});
	$(".sex").change(function(){
		$("#rs-sex").text($(this).parent().text());
	});
	$("#nation").change(function(){
		$("#rs-nation").text($(this).val());
	});
});