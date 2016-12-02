$(document).ready(function(){
	$("button").click(function(){
		var data =  $(this).closest("tr").find("td");
		var info = "ID: " + data.eq(0).text();
		info += "\nName: " +data.eq(1).text();
		info += "\nGroup: " + data.eq(2).text();
		alert(info);
	});
});
