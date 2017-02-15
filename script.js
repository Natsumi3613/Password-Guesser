$(document).ready(function(){
    $("#pass-submit").click(function(){
        var word = "hsfirox";
        var input = $("#pass").val();
        if(input === word){
            $("#result").html("Correct!");
            $("#result").css("color","green");
        }  
        else {
            $("#result").html("Incorrect! Please try again.");
            $("#result").css("color","red");
        }
    });
    
});