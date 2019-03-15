$(document).ready(function(){
    var para=location.search.split("=")[1];
    $("#hook").text(para);
    $("#btn1").click(function(){
        var num=$("#price").val();
        var res=parseInt(num)-1;
        $("#price").val(res);
    })
    $("#btn2").click(function(){
        var num=$("#price").val();
        var res=parseInt(num)+1;
        $("#price").val(res);
    })
    $("#btn3").click(function(){
        var num=$("#ton").val();
        var res=parseInt(num)-1;
        $("#ton").val(res);
    })
    $("#btn4").click(function(){
        var num=$("#ton").val();
        var res=parseInt(num)+1;
        $("#ton").val(res);
    })
})