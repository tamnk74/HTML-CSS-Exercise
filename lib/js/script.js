  $(document).ready(function(){
  	$("button").click(function(){
  		var data =  $(this).closest("tr").find("td");
  		 var info = "ID: " + data[0].innerHTML;
  		 info += "\nName: " +data[1].innerHTML;
  		 info += "\nGroup: " + data[2].innerHTML;
  		 alert(info);
  	});
  });
