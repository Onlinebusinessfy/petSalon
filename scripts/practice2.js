$(document).ready(function(){
    $("#toggleBtn").on('click', function(){
        $("#myImg").toggle();
    });

    $(".answer").hide();

    $(".question").on('click',function(){
        $(".answer").slideToggle("slow");
    })
});
