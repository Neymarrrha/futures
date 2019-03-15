$(document).ready(function() {
    var tables=$("#mainTable");
    var addtr=$("<tr>"+
    "<td></td>"+
    "<td></td>"+
    "<td></td>"+
    "<td></td>"+
    "<td></td>"+
    "</tr>");
    for(var i=0;i<10;i++){
        addtr.appendTo(tables);    
    }

    //refresh_fun相关函数都在requests.js中，暂时采用了暴力ajax方法，详细说明请见requests.js函数
    var arr=new Array("AG0","AU0","CU0","AL0","M0","J0","L0","RB0");
    setInterval(refresh_fucAG0(arr[0]), 1000);	 
    setInterval(refresh_fucAU0(arr[1]), 1000);	 
    setInterval(refresh_fucCU0(arr[2]), 1000);	 
    setInterval(refresh_fucAL0(arr[3]), 1000);	
    setInterval(refresh_fucM0(arr[4]), 1000);  
    setInterval(refresh_fucJ0(arr[5]), 1000);
    setInterval(refresh_fucL0(arr[6]), 1000);	
    setInterval(refresh_fucRB0(arr[7]), 1000);
    $("table tr").each(function(index){
        $(this).click(function(){
            var url="page2.html?hook="+arr[index-1];
            //console.log(url);
            window.location.href=url;
        })
    })
});
 
 




