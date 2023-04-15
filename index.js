$(document).ready(function () {

    $("#list-items").html(localStorage.getItem("listItems"));
    $(".add-items").submit(function (event) {
        event.preventDefault();
        var item = $("#todo-list-item").val();

        if (item) {
            $("#list-items").append("<li><input class = 'checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr></li>");
            localStorage.setItem("listItems", $("#list-items").html());
            $("#todo-list-item").val("");
        }
        
    });
});

    // $(".checkbox").change(function(){
    //     console.log("Checkox checked");
    // })

 //Change

 $(document).on("change", ".checkbox", function() {
    // See if there is checked attribute
   if ($(this).attr("checked")) {
    // If there is, remove it
     $(this).removeAttr("checked");
   } else {
    // If there is not, then add it
    // Additional info below
    //"checked" is an attribute of <input> of class .checkbox and it is set to "checked" string.
     $(this).attr("checked", "checked");
   }
 
   $(this).parent().toggleClass("completed");
   localStorage.setItem("listItems", $("#list-items").html());
 });

//Remove

$(document).on("click", ".remove", function(){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
        localStorage.setItem("listItems", $("#list-items").html());
    });

    
});
