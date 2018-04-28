window.onload=function(){
	
	var kitty=$id("kitty");
	function disappear(){
		kitty.style.opacity="0";
		kitty.style.transition="all 2s";
	}
	setTimeout(disappear,6000);
	
	var tip =$id("tip");
	tip.style.color="red";
	tip.style.fontSize="36px";
	tip.style.position="absolute";
	tip.style.left="400px";
	tip.style.top="200px";
	function disappearTip(){
		tip.style.opacity="0";
		tip.style.transition="all 2s";
	}
	setTimeout(disappearTip,3000);
	
	var flag=false;
	var index=0;
	
	var word="这是你点的，不要怪我哦。";
    function type(){
        tip.innerHTML = word.substring(0,index++);
        flag=!flag;
    }
    setInterval(type, 300);	
    
    var tipa=$id("tipa");
    tipa.style.color="red";
	tipa.style.fontSize="36px";
	tipa.style.position="absolute";
	tipa.style.left="400px";
	tipa.style.top="300px";
    tipa.style.opacity="0";
    
	var worda="千言万语汇成一句话：我喜欢你！";
	tipa.innerHTML=worda;
    function typea(){
        tipa.style.opacity="1";
		tipa.style.transition="all 2s";
    }
    setTimeout(typea,3000);
	
	
	 var tipb=$id("tipb");
    tipb.style.color="red";
	tipb.style.fontSize="60px";
	tipb.style.position="absolute";
	tipb.style.left="400px";
	tipb.style.top="500px";
    tipb.style.opacity="0";
    tipb.style.textAlign="right";
    
	var worda="讨厌，人家是男的";
	tipb.innerHTML=worda;
    function typeb(){
        tipb.style.opacity="1";
		tipb.style.transition="all 2s";
    }
    setTimeout(typeb,6000);
}
