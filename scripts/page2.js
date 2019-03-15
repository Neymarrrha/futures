
$(document).ready(function() {
    // 取出从index.html传来的参数
    var para=location.search.split("=")[1];
    console.log(para);
    $("#hook").val(para);
    //这里是假数据。
    $("table tr").each(function(index){
        if(index==0) return;
        for(var i=0;i<5;i++){
            $(this).children('td').each(function(j){
                if(j!=2){
                    $(this).text(Math.floor((Math.random()*610)+15.34));
                }
                else{
                    var num=6400-(index-1)*150;
                    $(this).text(num);
                }
            })
        }
    });

    //设置表格元素颜色
    $("table tr td").each(function(){
        $(this).css("background","black");
    })
    $("table tr").find("td:nth-child(3)").css("background","#545454");
    $("table tr").find("td:nth-child(1)").attr("style","color:#58944a").css("background","#010101");
    $("table tr").find("td:nth-child(2)").attr("style","color:#58944a").css("background","#010101");
    $("table tr").find("td:nth-child(4)").attr("style","color:#8d343a").css("background","#010101");
    $("table tr").find("td:nth-child(5)").attr("style","color:#8d343a").css("background","#010101");

    //绑定click函数
    $(".btn1,.btn2").click(function(){
        var url="page3.html?hook="+$("#hook").val();
        //console.log(url);
        window.location.href=url;
    })

});

