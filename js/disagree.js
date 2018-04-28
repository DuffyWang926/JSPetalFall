window.onload=function(){
	
	var index=0;
	var pa=$id("sayLove");
	var word="我不会什么甜言蜜语，也不懂什么浪漫情怀。只知道，我心眼小，只能放下你一个人。你是我的全世界，我的手心只有你的温柔。给我你的手，让我带你去遨游。";
    pa.style.color="#e21dc9";
    pa.style.fontSize="18px";
    
    function type(){
        pa.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + word.substring(0,index++);
    }
    
	function disappearPa(){
		pa.style.opacity="0";
		pa.style.transition="opacity 1s ease";
	}
	setInterval(type, 200);	
	setTimeout(disappearPa,25000);
	
}
