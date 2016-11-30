  $(document).ready(function(){
  	$("button").click(function(){
  		 var info = "ID: " + $(this).closest("tr").children()[0].textContent;
  		 info += "\nName: " + $(this).closest("tr").children()[1].textContent;
  		 info += "\nGroup: " + $(this).closest("tr").children()[2].textContent;
  		 alert(info);
  	});
  });
