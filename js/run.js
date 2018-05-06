window.onload=function(){
	
	var kitty=$id("kitty");
	var runa=$id("runa");
	var kittyHidden=$id("kittyHidden");
	
	function $id(id){
	return document.getElementById(id);
	}

	function rand(min,max){
		return Math.round(Math.random()*(max -min) +min);
	}
	
	var petala =$id("petala");

//	var perspectiveA =rand(-100,-10);
	
	function fall(ida){
		var ida =ida;
		var positionInitialx=rand(0,1200);
		var positionInitialy=rand(0,500);
		ida.style.position="absolute";
		ida.style.left=positionInitialx +"px";
		ida.style.top=positionInitialy +"px";
//		ida.style.perspective=perspectiveA;
		
		ida.style.animation="rotateFallc 5s  1 ";
		setTimeout(function(){
			ida.style.display="none";
		},5000);


		
	}

//	create petals
	function createPetals(){
		var petal = document.createElement("img");
		var imgSrc ="abcdefghijklmno".split("");
		
		var imgNum = rand(0,14);
		
		petal.src='img/petals/'+imgSrc[imgNum]+'.gif';
		
		
		var diva = document.getElementsByTagName("div")[0];
		diva.appendChild(petal);
		fall(petal);
	}
	var timer =setInterval(createPetals,500);
	document.onmousedown = function(){
		clearInterval(timer);
	}

	var x ;
	var y ;
	function getData(){
		x = rand(200,1000);
		y = rand(0,400);
	}
	function kmove(){
		
		kitty.style.position="absolute";
		kitty.style.left=x+"px";
		kitty.style.top=y+"px";
		
		
		
		kittyHidden.style.position="absolute";
		kittyHidden.style.left=x+"px";
		kittyHidden.style.top=y+"px";
		kittyHidden.style.zIndex=2;
		kittyHidden.style.background="#fff";
		console.log("kmove");
	}
	
	function show(){
			kittyHidden.style.opacity="0";
			kittyHidden.style.transition="opacity 2s linear";
			
			console.log("1");
		
	}
	function disappear(){
			kittyHidden.style.opacity="1";
			kittyHidden.style.transition="opacity 2s linear";
			console.log("0");
		
	}
	function runb(){
		getData();
		kmove();
		show();
		setTimeout(disappear,2000);
		
	
	}
	function disappearMao(){
		runa.style.opacity=0;
		runa.style.transition="opacity 2s linear";
	}
	function showMao(){
		runa.style.opacity=1;
		runa.style.transition="opacity 2s linear";
	}
	function mMove(){
		runa.style.position="absolute";
		runa.style.left=x-210+"px";
		runa.style.top=y+110+"px";
		
		
	}
	function runb(){
		getData();
		kmove();
		show();
		setTimeout(disappear,2000);
		
		setTimeout(mMove,1000);
		setTimeout(showMao,500);
		setTimeout(disappearMao,2000);
		
	
	}
	
	setInterval(runb,5000);
//	背景消失
	var bgImg=$id("sakura");
	var mao =$id("mao");
	setTimeout(function(){
		mao.style.opacity="0";
		mao.style.transition="opacity 2s";
		bgImg.style.opacity="0";
		bgImg.style.transition="opacity 2s";
	},5000);
	
//	自白
	var index=0;
	var pa=$id("tell");
	var word="那是樱花烂漫的季节，在不经意的转角遇见你。	那低头的风情，撬动回忆的所有重量,灵动的眼眸,勾走了岁月的温柔。 "+
			"我越过高山，跨过河流，翻遍世界所有角落，才找回遗忘的时空穿梭，只愿时刻能守在你身边。"+
			 "磨去头上所有棱角，只为能靠你的心近一些。"+
			 "愿用我的所有换你浅浅一笑。";
    function type(){
        pa.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +word.substring(0,index++);
    }
//  文字消失
	function disappearPa(){
		pa.style.opacity="0";
		pa.style.transition="opacity 1s ease";
		
	}
	setInterval(type, 300);	
	setTimeout(disappearPa,40000);
	
	function nextHtml(){
		var msg="我与你相遇，不是所谓的缘分，是命中注定。是我在佛前苦苦求了一千年，才有现在的惊鸿一瞥。能否认识一下？"
	 	if(confirm(msg)){
	 		location.href="agree.html";
	 	}else{
	 		location.href="disagree.html";
 		
 		}
	}
	
	setTimeout(nextHtml,41000);

	
}	

