$(function(){
//1.banner轮播图的制作
//问题1   点击左箭头的 时候  会先到 右边一个 才能返回来
	var imgsbox=$(".imgsbox")[0];
	var imgs=$("img",imgsbox);
 	var circle=$(".circle");
  	var num=1;
  	var jiantouy=$(".jiantouy")[0];
   	var jiantouz=$(".jiantouz")[0];
   	var bannermiddle=$(".banner-middle")[0];
   	var yanse=["#F75320","#1D7600","#2284F1","#0852FF","#EE281D","#FF7AC1"];
   	var bannerbox=$(".bannerbox")[0];
	bannermiddle.onmouseover=function(){
		clearInterval(t);
		jiantouz.style.display="block";
		jiantouy.style.display="block";
		
	}

	bannermiddle.onmouseout=function(){
		clearInterval(t);
		jiantouz.style.display="none";
		jiantouy.style.display="none";
		t=setInterval(move,2000);
 	}



	jiantouy.onclick=function(){
 		if(num==6){
			num=0;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=2;
			circle[i].style.background="#ccc";
 		}
		imgs[num].style.zIndex=6;
		circle[num].style.background="#ff3c3c";
		bannerbox.style.background=yanse[num];
 		num++;
	}

	jiantouz.onclick=function(){
		if(num==0){
			num=5;
		}
 		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=2;
			circle[i].style.background="#ccc";
 		}
		imgs[num].style.zIndex=6;
		circle[num].style.background="#ff3c3c";
		bannerbox.style.background=yanse[num];
		num--;
 		
	}
 
  	function move(){
		if(num==6){
			num=0;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=2;
			circle[i].style.background="#ccc";
 		}
		imgs[num].style.zIndex=8;
		circle[num].style.background="#ff3c3c";
		bannerbox.style.background=yanse[num];
 		num++;
	}
 
	for(var i=0;i<circle.length;i++){
		circle[i].index=i;
		circle[i].onmouseover=function(){
			clearInterval(t);
			for(var j=0;j<circle.length;j++){
				circle[j].style.background="#ccc";
				imgs[j].style.zIndex=2;
 			}
			imgs[this.index].style.zIndex=8;
			this.style.background="#ff3c3c";
			bannerbox.style.background=yanse[this.index];
 		}
		circle[i].onmouseout=function(){
			t=setInterval(move,2000);
			num=this.index+1;
		}
	}
 
	var t=setInterval(move,2000);
 


//***********2.每个楼层的轮播开始****************
  
  function luobo1(lou){
	var jin=$(".jinkou-con2")[lou];
	var imgsbox1=$(".imgsbox1")[lou];
	var bigbox=$(".bigbox")[lou];
 	var rec=$(".rec",bigbox);
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
 				num1=this.index+1;
 				this.style.background="#ff3c3c";
 			}

 			rec[i1].onmouseout=function(){
 				t1=setInterval(move1,2000);
 			}
 		}
 }
	
 for(var i=0;i<8;i++){
  	luobo1(i);
 }
 //*******************每个楼层的轮播结束***********
	 
//************3.流行楼层的brand轮播的实现************

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
 ///////***************流行楼层的brand轮播的结束***************///////
//////*************4.图片的左移效果开始***************////////////


var smallpic=$(".small-pic");
 for(var i=0;i<smallpic.length;i++){
	smallpic[i].index=i;
	smallpic[i].onmouseover=function(){
		smallpic[this.index].style.cssText="position:relative;left:-5px;"
	}

	smallpic[i].onmouseout=function(){
		smallpic[this.index].style.cssText="position:relative;left:0px;"
	}
}

 
//*************4.图片的左移效果结束***************


/*banner左侧的导航开始*/
var bannerzuo=$(".bannerzuo");
var erji=$(".erji");
for(var i=0;i<bannerzuo.length;i++){
    	bannerzuo[i].index=i;
     	hover(bannerzuo[i],function(){
    		for(var j=0;j<erji.length;j++){
    			erji[j].style.display="none";
    		}
    			erji[this.index].style.display="block";
     	},function(){
    		erji[this.index].style.display="none";
    	})
    	
    }
 /*banner左侧的导航结束*/

//top的下拉菜单的显示开始

var topyiji=$(".topyiji");
var toperji=$(".toperji");
for(var i=0;i<topyiji.length;i++){
	topyiji[i].index=i;
	hover(topyiji[i],function(){
		toperji[this.index].style.display="block";
		//topyiji[this.index].style.backgroundColor="#fff";
	},function(){
		toperji[this.index].style.display="none";
	});
}


var topyji=$(".top-left1");
var topeji=$(".top-leftt");
for(var i=0;i<topyji.length;i++){
	topyji[i].index=i;
	hover(topyji[i],function(){
		topeji[this.index].style.display="block";
		// topyiji[this.index].style.backgroundColor="#000";
	},function(){
		topeji[this.index].style.display="none";
	});
	 

}

 var topleft2=$(".top-left2")[0];
 var songbox=$(".songbox")[0];
 var shopping=$(".shopping")[0];
 var dahaha=$(".dahaha")[0];
 var shanxi=$(".xialain")[0];
 var shanda=$(".shanxi")[0];
 var dizhi=$(".dizhi")[0];
 var dia=$(".dia");
 var baba=$("#baba");
 topleft2.onmouseover=function(){	 
 	songbox.style.zIndex=111;
 	songbox.style.display="block";
 	dahaha.style.display="block";
 	shanxi.onmouseover=function(){
 		dizhi.style.display="block";	
 	}
 	shanxi.onmouseout=function(){
 		dizhi.style.display="none";
 	  }
 	
 	for(var i=0;i<dia.length;i++){
 		dia[i].index=i;
 		dia[i].onclick=function(){
 			shanda.innerHTML=dia[this.index].innerHTML;
 			dizhi.style.display="none";
 		}
 	}	
 	shopping.onclick=function(){
 		/*history.go(0);*/
 		baba.innerHTML=shanda.innerHTML;
 		songbox.style.display="none";
 	    dahaha.style.display="none";
 	}
   }
   
//top的下拉菜单的显示结束
//最右侧的图标显示开始；
var jinkou=$(".jinkou-title");
var gehu=$("gehu");

var jump=$(".jump")[0];
var anniu=$("li",jump);
var tishi=$(".tishi");
 
var ch=document.documentElement.clientHeight;
window.onscroll=function(){

 	var scrollT=getScrollT();
  		if(scrollT<=750){
			jump.style.display="none";
		}else{
			jump.style.display="block";
		}
	 
 
	//按钮控制滚动条
	for(var i=0;i<anniu.length;i++){
		anniu[i].index=i;
		anniu[i].onclick=function(){
	 		//获取滚动条的对象
			var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	 		animate(obj,{scrollTop:jinkou[this.index].t},500,Tween.Linear);
			//当前按钮的对应楼层赋值给滚动条
	 	}
	}

	 //滚动条  控制  左侧按钮
			for(var i=0;i<jinkou.length;i++){
	 			jinkou[i].t=jinkou[i].offsetTop;
	  			if(jinkou[i].t<scrollT+400){
					for(var j=0;j<anniu.length;j++){
	  					tishi[j].style.display="none";
	  				}
	  			tishi[i].style.display="block";
	  			}
	 		}

		//左侧按钮效果
		//一级菜单名
		//二级菜单名
	      for(var i=0;i<anniu.length;i++){
	    	anniu[i].index=i;
	    	hover(anniu[i],function(){
	      		tishi[this.index].style.display="block";
	      	},function(){
	     		tishi[this.index].style.display="none";
	     	})
	   
	    }

	     //按需加载
	    var lou11=$(".keke");
        for(var i=0;i<lou11.length;i++){
           if(lou11[i].offsetTop<scrollT+ch){
	           var imgss=$("img",lou11[i]);
	           for(var j=0;j<imgss.length;j++){
	          imgss[j].src=imgss[j].getAttribute("aa");
        }
      }
    }




}


var shann=$(".shann1");
var shangou=$(".shangou");
for(var i=0;i<shann.length;i++){
	shann[i].index=i;
	shann[i].onclick=function(){
		for(var j=0;j<shangou.length;j++){
			shangou[j].style.display="none";
			shann[j].style.fontWeight="normal";
		}
		shangou[this.index].style.display="block";
		shann[this.index].style.fontWeight="bold";
	}
}





})