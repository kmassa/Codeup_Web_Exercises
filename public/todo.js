
	
	function completeItem(itemToComplete){
		$.post("todo-json.php?id="+itemToComplete+"&action=complete", function(item){
			console.log(item);
		});
	}

	$('body').on ('click', '.btn-delete', function(){
	var row= this.closest("tr");
	$(row).fadeOut();
	deleteItem($(row).data("item"));
	});

	

$(document).ready(function(){
	console.log("document loaded");
		$("#btn-new-item").click(function(event){
			event.preventDefault();
			var content = $("#content").val();//insert content from imput
			var priority = $("#priority").val(); 
			var due_date = $("#due_date").val();
			
			var data = {
				"content": content,
				"priority": priority,
				"due_date": due_date
					// "content": "A new item to do"
				};
		$.post("todo-json.php", data, function(item){
			console.log(item);
		});
	});
	$("#btn-show-items").click(function(event){
			event.preventDefault();            //prevents default page refresh when button pushed
		$.get("todo-json.php", function(items){
			console.log(items);
			$("#insertProducts").empty();
			items.forEach(function(element){
		            $("#insertProducts").append("<tr><td> "+ 
		            	element.id + 
		            	"</td><td>" +
		            	element.content + 
		            	"</td><td>" + 
		            	element.priority + 
		            	"</td><td>" + 
		            	element.due_date + 
		            	"</td><td>" + 
		            	element.complete + 
		            	"</td><td>" +
		            	"<button class='btn btn-sm btn-warning btn-complete'onclick='completeItem("+element.id+")'>Complete</button>"+ 
		            	"</td><td>" + 
		            	"<button class='btn btn-sm btn-danger btn-delete'>Delete</button>"+
		            	"</td></tr>");
			});
		})
		.fail(function(){
	        alert("this request failed");
	    });
	});



	$("#sort-content").click(function(event){
			event.preventDefault();            //prevents default page refresh when button pushed
		$.get("todo-json.php?order_by=content&direction=asc", function(items){
			console.log(items);
			$("#insertProducts").empty();
			items.forEach(function(element){
		            $("#insertProducts").append("<tr><td> "+ 
		            	element.content +
		            	 "</td><td>" +
		            	  element.priority +
		            	   "</td><td>" +
		            	    element.due_date +
		            	    "</td><td>" + 
		            	"<button class='btn btn-sm btn-warning' onclick='completeItem("+element.id+")'>complete</button>"+ 
		            	"</td><td>" + 
		            	"<button class='btn btn-sm btn-danger' onclick='deleteItem("+element.id+")'>Delete</button>"+
		            	    "</td></tr>");
			});
		})
		.fail(function(){
	        alert("this request failed");
	    });
	});
	$("#sort-priority").click(function(){
			event.preventDefault();            //prevents default page refresh when button pushed
		$.get("todo-json.php?order_by=priority&direction=desc", function(items){
			console.log(items);
			$("#insertProducts").empty();
			items.forEach(function(element){
		            $("#insertProducts").append("<tr><td> "+
		             element.content +
		              "</td><td>" +
		               element.priority +
		                "</td><td>" +
		                 element.due_date +
		                 "</td><td>" + 
		            	"<button class='btn btn-sm btn-warning' onclick='completeItem("+element.id+")'>complete</button>"+ 
		            	"</td><td>" + 
		            	"<button class='btn btn-sm btn-danger' onclick='deleteItem("+element.id+")'>Delete</button>"+
		                  "</td></tr>");
			});
		})
		.fail(function(){
	        alert("this request failed");
	    });
	});
	$("#sort-due-date").click(function(event){
			event.preventDefault();            //prevents default page refresh when button pushed
		$.get("todo-json.php?order_by=due_date&direction=desc", function(items){
			console.log(items);
			$("#insertProducts").empty();
			items.forEach(function(element){
		            $("#insertProducts").append("<tr><td> "+
		             element.content +
		              "</td><td>" +
		               element.priority +
		                "</td><td>" +
		                 element.due_date +
		                 "</td><td>" + 
		            	"<button class='btn btn-sm btn-warning' onclick='completeItem("+element.id+")'>complete</button>"+ 
		            	"</td><td>" + 
		            	"<button class='btn btn-sm btn-danger' onclick='deleteItem("+element.id+")'>Delete</button>"+
		                  "</td></tr>");
			});
		})
		.fail(function(){
	        alert("this request failed");
	    });
	});

});





