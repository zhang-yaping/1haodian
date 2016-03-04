$(function(){

//banner轮播动效
var imgs=$(".imgs");
var btn=$(".one1");
var num=1;
var box=$(".box")[0];
var zuo=$(".zuo")[0]
var you=$(".you")[0]
var banner=$(".boxzhong")[0]
var bigback=["#fd3758","#f3761c","#dd233b","#f9e8de","#ff51a8","#2bc0ff","#dd233b","red","#2bc0ff"];
var num=0;
function move(obj){
    obj=obj||"R"
    if(obj=="R"){
        num++
        if(num>=9){
            num=0;
        } 
    }else{
       num--
       if(num<=-1){
        num=8
    }
}

for(var i=0;i<imgs.length;i++){
 imgs[i].style.zIndex=2;
 btn[i].style.background="#ccc";
}
imgs[num].style.zIndex=3;
box.style.background=bigback[num];
btn[num].style.background="#ff6700"

}
var t=setInterval(move,2000);

for(var i=0;i<btn.length;i++){
   btn[i].index=i;
     		btn[i].onmouseover=function(){//滑上事件
     			clearInterval(t);//停止轮播
     			for(var j=0;j<imgs.length;j++){
     				imgs[j].style.zIndex=2;
                  btn[j].style.background="#ccc";
              }
              imgs[this.index].style.zIndex=3;
              box.style.background=bigback[this.index];
              btn[this.index].style.background="#ff6700";
          }	
          btn[i].onmouseout=function(){
            num=this.index
            t=setInterval(function(){move("R")},2000);
        }
    }

    hover(banner,function(){
      zuo.style.display="block";
      you.style.display="block";
  },function(){
      zuo.style.display="none";
      you.style.display="none";
  })
    hover(zuo,function(){
        clearInterval(t)
        zuo.style.opacity=1;
    },function(){
        zuo.style.opacity=0.5;
        t=setInterval(function(){move("R")},2000);
    })
    hover(you,function(){
        clearInterval(t)
        zuo.style.opacity=1;
    },function(){
        zuo.style.opacity=0.5;
        t=setInterval(function(){move("R")},2000);
    })
    zuo.onclick=function(){
        move("L")
    }
    you.onclick=function(){
        move("R")
    }


    
    
     //今日必团图片移动
     var smallpic=$(".small-pic")
     for(var i=0;i<smallpic.length;i++){
        smallpic[i].index=i;
        smallpic[i].onmouseover=function(){
           smallpic[this.index].style.left=-5+"px"
       }
       smallpic[i].onmouseout=function(){
           smallpic[this.index].style.left=0+"px"
       }
   }


    //banner左侧列表动效
    var bannerzuo=$(".bannerzuo");
    var erji=$(".erji");
    for(var i=0;i<bannerzuo.length;i++){
        bannerzuo[i].index=i;
        hover(bannerzuo[i],function(){
            for(var j=0;j<erji.length;j++){
                erji[j].style.display="none";

            }
            erji[this.index].style.display="block";
            animate(erji[this.index],{opacity:1,left:210},200)
        },function(){
            erji[this.index].style.display="none";
            animate(erji[this.index],{opacity:0,left:200},200)
        })
        
    }

    //楼层轮播
    function luoceng(ceng){
        var imgsbox1=$(".imgsbox1")[ceng];
        var bigbox=$(".bigbox");
        var rec=$("a",bigbox[ceng]);
        var num1=1;
        function move1(){
            if(num1==3){
                animate(imgsbox1,{left:-330*num1},600,Tween.Linear,function(){
                    animate(imgsbox1,{left:0},0);
                })
                num1=0;
            } 
            else{
                animate(imgsbox1,{left:-330*num1},600,Tween.Linear);
                
            } 
            for(var i1=0;i1<rec.length;i1++){
                rec[i1].style.background="#dddddd";
            }
            rec[num1].style.background="#ff3c3c";
            num1++;
        } 
        var t1=setInterval(move1,2000);

        for(var i1=0;i1<rec.length;i1++){
            rec[i1].index=i1;
            rec[i1].onmouseover=function(){
                clearInterval(t1);
                for(var j1=0;j1<rec.length;j1++){
                    rec[j1].style.background="#dddddd";

                }
                animate(imgsbox1,{left:-330*this.index},600,Tween.Linear);
                this.style.background="#ff3c3c";
            }

            rec[i1].onmouseout=function(){
                num1=this.index+1
                t1=setInterval(move1,2000);
            }
        }
    } 
    
    for(var i=0;i<8;i++){
        luoceng(i);
    }



    var brand=$(".brand")[0];
    var lxz=$(".lxz")[0];
    var lxy=$(".lxy")[0];

    function moveLeft3(){
        animate(brand,{left:-100},600,Tween.Linear,function(){
            var first=getFirst(brand);
            var last=getLast(brand);
            brand.insertAfter(first,last);
            brand.style.left=0;
        });
    }

    function moveRight3(){

        var first=getFirst(brand);
        var last=getLast(brand);
        brand.insertBefore(last,first);
        brand.style.left=-100+"px";
        animate(brand,{left:0},600,Tween.Linear);
    }



    lxz.onmouseover=function(){
        clearInterval(t3);
        this.style.backgroundColor="#f0efef";
    }
    lxy.onmouseover=function(){
        clearInterval(t3);
        this.style.backgroundColor="#f0efef";
    }
    lxz.onmouseout=lxy.onmouseout=function(){
        t3=setInterval(moveLeft3,2000);
        this.style.backgroundColor="";

    }

    lxz.onclick=function(){
        moveLeft3();
    }
    lxy.onclick=function(){
        moveRight3();
    }

    var t3=setInterval(moveLeft3,2000);


//图片闪动效果
var pic=$(".pic")
for(var i=0;i<pic.length;i++){
    pic[i].index=i
    pic[i].onmouseover=function(){
        animate(pic[this.index],{opacity:0.9},10,function(){
            animate(pic[this.index],{opacity:1},50);
        });
    }
}
var boximg=$(".imgsbox1")
var pic1=$(".boxim")
for(var i=0;i<pic1.length;i++){
    pic1[i].index=i;
    pic1[i].onmouseover=function(){
        animate(pic1[this.index],{opacity:0.9},10,function(){
            animate(pic1[this.index],{opacity:1},50);
        });
    }
}
  //楼层跳转

  var flag=true;
  var flag1=true;
  var floors=$(".list-333");
  var jump=$(".jump")[0];
  var tishi=$(".tishi")
  var btn1=$("li",jump);
  var LAST=$(".fanhui")[0]
  for(var i=0;i<btn1.length;i++){
    btn1[i].index=i;
    btn1[i].onclick=function(){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        animate(obj,{scrollTop:floors[this.index].t-130})
    }
    LAST.onclick=function(){
        var obj1=document.documentElement.scrollTop?document.documentElement:document.body;
        animate(obj1,{scrollTop:0})
    }
}

window.onscroll=function(){
 var scrollT=getScrollT();
 if(scrollT>=1000){
    jump.style.display="block";
}else{
    jump.style.display="none";
}

for(var i=0;i<floors.length;i++){
                floors[i].t=floors[i].offsetTop;//
                if(floors[i].t<=scrollT+130){
                    for(var j=0;j<btn1.length;j++){
                        btn1[j].style.color="#c00";
                        btn1[j].style.background="#fff";
                        tishi[j].style.display="none";
                    }
                    btn1[i].style.color="#fff";
                    tishi[i].style.display="block";
                    btn1[i].style.background="#c00";
                }
            }
            for(var i=0;i<btn1.length;i++){
                btn1[i].index=i;
                btn1[i].onmouseover=function(){
                    btn1[this.index].style.color="#fff";
                    tishi[this.index].style.display="block";
                    btn1[this.index].style.background="#c00";
                }
                btn1[i].onmouseout=function(){
                   btn1[this.index].style.color="#c00";
                   btn1[this.index].style.background="#fff";
                   tishi[this.index].style.display="none";
               }
           }
       }



        //下拉菜单   
        var x=$(".x")
        var xiala=$(".xiala")
        for(var i=0;i<x.length;i++){
            x[i].index=i
            x[i].onmouseover=function(){
                xiala[this.index].style.display="block"
            }
            x[i].onmouseout=function(){
                xiala[this.index].style.display="none"
            }
        }
        var k=$(".k")[0]
        var xiala1=$(".xiala1")[0]
        k.onmouseover=function(){
            xiala1.style.display="block"
        }
        k.onmouseout=function(){
            xiala1.style.display="none"
        }

     //闪购选项卡
     var dapai=$(".dapai")
     var shangous=$(".shangous")
     for(var i=0;i<dapai.length;i++){
        dapai[i].index=i;
        dapai[i].onmouseover=function(){
            for(var j=0;j<shangous.length;j++){
             shangous[j].style.zIndex=0;
         }
         shangous[this.index].style.zIndex=1
     } 
 }

 var H=$('.h')[0];
 var dxia=$('.top-left-xiala')[0];
 H.onmouseover=function(){
  dxia.style.display='block'
}
H.onmouseout=function(){
  dxia.style.display='none'
}


//输入框
var txtx = $('#txt');
txtx.onfocus = function(){
    if(txt.value == ' 圣诞节跨年幸福购 5折抢福袋'){
        txt.style.color = '#ccc';
    }
}
txtx.onblur = function(){
    if(txt.value == ' 圣诞节跨年幸福购 5折抢福袋'){
        txt.style.color = "#000";
    }else{
        txt.style.color = "#000";
        txt.value == ' 圣诞节跨年幸福购 5折抢福袋';
    }
}
})