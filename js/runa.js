window.onload=function(){
	
	var kitty=$id("kitty");
	var runa=$id("runa");
	var kittyHidden=$id("kittyHidden");
	
	

	var x ;
	var y ;
	function getData(){
		x = rand(100,1000);
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
	runb();
	
	setInterval(runb,5000);
	
}	

