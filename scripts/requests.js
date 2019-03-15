// 判断期权涨跌
function checkFlag(now,past){
    if(now>=past) return true;
    else  return false;
}
var flag=true;
var _interval;
// 下边写的比较繁琐，因为本人没有找到如何取出新浪期权变量名的方法，所以暂时采用了暴力的算法对每个
// 期权都写了一个通过调用新浪期权信息接口的方法。
function refresh_fucAG0(code){
	  $.ajax({
		  cache : true,
          url:"http://hq.sinajs.cn/list="+code,
          contentType: "application/text; charset=utf-8",
          type : "GET",
            dataType : "script",     //目的url中参数形式为 var hq_str_obj=.....
			success : function(){
                //取出elements这里需要进行优化，这样就能通过函数传入的code直接访问到新浪url中的scripts
                var elements=hq_str_AG0.split(",");     
				$("table tr:eq(1) td").each(function(index) {
                    switch(index){
                        // case 2,3,4:
                        // $(this).attr("style","color:red");
                        case 0:
                        $(this).text(elements[16]);
                        break;
                        case 1:
                        $(this).text(code);
                        break;
                        case 2:
                        $(this).text(elements[2]);
                        break;
                        case 3:
                        $(this).text(elements[6]);
                        break;
                        case 4:
                        $(this).text(elements[7]);
                        break;
                        default:
                         $(this).text("");   
                    } 
                    var flag=checkFlag(elements[8],elements[9]);
                    if(index>=2&&index<=4){
                        if(flag)
                        $(this).attr("style","color:red;");
                        else 
                        $(this).attr("style","color:green;");
                    }
                });
			}
	 	 });
}

function refresh_fucAU0(code){
    $.ajax({
        cache : true,
        url:"http://hq.sinajs.cn/list="+code,
        contentType: "application/text; charset=utf-8",
        type : "GET",
          dataType : "script",
          success : function(){
              var elements=hq_str_AU0.split(",");
              $("table tr:eq(2) td").each(function(index) {
                  switch(index){
                      case 0:
                      $(this).text(elements[16]);
                      break;
                      case 1:
                      $(this).text(code);
                      break;
                      case 2:
                      $(this).text(elements[2]);
                      break;
                      case 3:
                      $(this).text(elements[6]);
                      break;
                      case 4:
                      $(this).text(elements[7]);
                      break;
                      default:
                       $(this).text("");   
                  } 
                  var flag=checkFlag(elements[8],elements[9]);
                  if(index>=2&&index<=4){
                      if(flag)
                      $(this).attr("style","color:red;");
                      else 
                      $(this).attr("style","color:green;");
                  }
                  });
          }
        });
}

function refresh_fucCU0(code){
    $.ajax({
        cache : true,
        url:"http://hq.sinajs.cn/list="+code,
        contentType: "application/text; charset=utf-8",
        type : "GET",
          dataType : "script",
          success : function(){
              var elements=hq_str_CU0.split(",");
              $("table tr:eq(3) td").each(function(index) {
                  switch(index){
                      case 0:
                      $(this).text(elements[16]);
                      break;
                      case 1:
                      $(this).text(code);
                      break;
                      case 2:
                      $(this).text(elements[2]);
                      break;
                      case 3:
                      $(this).text(elements[6]);
                      break;
                      case 4:
                      $(this).text(elements[7]);
                      break;
                      default:
                       $(this).text("");   
                  } 
                  var flag=checkFlag(elements[8],elements[9]);
                  if(index>=2&&index<=4){
                      if(flag)
                      $(this).attr("style","color:red;");
                      else 
                      $(this).attr("style","color:green;");
                  }
                  });
          }
        });
}
function refresh_fucAL0(code){
    $.ajax({
        cache : true,
        url:"http://hq.sinajs.cn/list="+code,
        contentType: "application/text; charset=utf-8",
        type : "GET",
          dataType : "script",
          success : function(){
              var elements=hq_str_AL0.split(",");
              $("table tr:eq(4) td").each(function(index) {
                  switch(index){
                      case 0:
                      $(this).text(elements[16]);
                      break;
                      case 1:
                      $(this).text(code);
                      break;
                      case 2:
                      $(this).text(elements[2]);
                      break;
                      case 3:
                      $(this).text(elements[6]);
                      break;
                      case 4:
                      $(this).text(elements[7]);
                      break;
                      default:
                       $(this).text("");   
                  } 
                  var flag=checkFlag(elements[8],elements[9]);
                  if(index>=2&&index<=4){
                      if(flag)
                      $(this).attr("style","color:red;");
                      else 
                      $(this).attr("style","color:green;");
                  }
                  });
          }
        });
}

function refresh_fucM0(code){
    $.ajax({
        cache : true,
        url:"http://hq.sinajs.cn/list="+code,
        contentType: "application/text; charset=utf-8",
        type : "GET",
          dataType : "script",
          success : function(){
              var elements=hq_str_M0.split(",");
              $("table tr:eq(5) td").each(function(index) {
                  switch(index){
                      case 0:
                      $(this).text(elements[16]);
                      break;
                      case 1:
                      $(this).text(code);
                      break;
                      case 2:
                      $(this).text(elements[2]);
                      break;
                      case 3:
                      $(this).text(elements[6]);
                      break;
                      case 4:
                      $(this).text(elements[7]);
                      break;
                      default:
                       $(this).text("");   
                  } 
                  var flag=checkFlag(elements[8],elements[9]);
                  if(index>=2&&index<=4){
                      if(flag)
                      $(this).attr("style","color:red;");
                      else 
                      $(this).attr("style","color:green;");
                  }
                  });
          }
        });
}
function refresh_fucRB0(code){
    $.ajax({
        cache : true,
        url:"http://hq.sinajs.cn/list="+code,
        contentType: "application/text; charset=utf-8",
        type : "GET",
          dataType : "script",
          success : function(){
              var elements=hq_str_RB0.split(",");
              $("table tr:eq(8) td").each(function(index) {
                  switch(index){
                      case 0:
                      $(this).text(elements[16]);
                      break;
                      case 1:
                      $(this).text(code);
                      break;
                      case 2:
                      $(this).text(elements[2]);
                      break;
                      case 3:
                      $(this).text(elements[6]);
                      break;
                      case 4:
                      $(this).text(elements[7]);
                      break;
                      default:
                       $(this).text("");   
                  } 
                  var flag=checkFlag(elements[8],elements[9]);
                  if(index>=2&&index<=4){
                      if(flag)
                      $(this).attr("style","color:red;");
                      else 
                      $(this).attr("style","color:green;");
                  }
                  });
          }
        });
}

function refresh_fucL0(code){
    $.ajax({
        cache : true,
        url:"http://hq.sinajs.cn/list="+code,
        contentType: "application/text; charset=utf-8",
        type : "GET",
          dataType : "script",
          success : function(){
              var elements=hq_str_L0.split(",");
              $("table tr:eq(7) td").each(function(index) {
                  switch(index){
                      case 0:
                      $(this).text(elements[16]);
                      break;
                      case 1:
                      $(this).text(code);
                      break;
                      case 2:
                      $(this).text(elements[2]);
                      break;
                      case 3:
                      $(this).text(elements[6]);
                      break;
                      case 4:
                      $(this).text(elements[7]);
                      break;
                      default:
                       $(this).text("");   
                  } 
                  var flag=checkFlag(elements[8],elements[9]);
                  if(index>=2&&index<=4){
                      if(flag)
                      $(this).attr("style","color:red;");
                      else 
                      $(this).attr("style","color:green;");
                  }
                  });
          }
        });
}
function refresh_fucJ0(code){
    $.ajax({
        cache : true,
        url:"http://hq.sinajs.cn/list="+code,
        contentType: "application/text; charset=utf-8",
        type : "GET",
          dataType : "script",
          success : function(){
              var elements=hq_str_J0.split(",");
              $("table tr:eq(6) td").each(function(index) {
                  switch(index){
                      case 0:
                      $(this).text(elements[16]);
                      break;
                      case 1:
                      $(this).text(code);
                      break;
                      case 2:
                      $(this).text(elements[2]);
                      break;
                      case 3:
                      $(this).text(elements[6]);
                      break;
                      case 4:
                      $(this).text(elements[7]);
                      break;
                      default:
                       $(this).text("");   
                  } 
                  var flag=checkFlag(elements[8],elements[9]);
                  if(index>=2&&index<=4){
                      if(flag)
                      $(this).attr("style","color:red;");
                      else 
                      $(this).attr("style","color:green;");
                  }
                  });
          }
        });
}




