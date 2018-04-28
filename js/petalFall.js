console.log(window.innerWidth);
window.onload=function(){
	
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
}
