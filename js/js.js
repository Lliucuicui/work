
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
var timer = 0;
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			// console.log(cur);
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

var box = document.getElementById("box");
var navList = document.getElementById("nav").children;
var pics = document.getElementById("pics");
var left = document.getElementById("left");
var right = document.getElementById("right");
var index = 1;
var timer;
var isMoving = false;
/*轮播下一张的函数*/
function next(){
	if(!isMoving){
		isMoving = true;
		index ++;
		liChange();
		animate(pics,{left:-1200*index},function(){
			if(index === 6){
				pics.style.left = -1200 + "px";
				index = 1;
			} 
			isMoving = false;  
		}); 
	}
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index --;
	liChange();
	animate(pics,{left:-1200*index},function(){
		if(index === 0){
			pics.style.left = -6000 + "px";
			index = 5;
		}
		isMoving = false;
	}); 
}
var timer = setInterval(next,3000);
//鼠标滑上效果
box.onmouseover = function(){
	animate(left,{opacity:50})
	animate(right,{opacity:50})
	clearInterval(timer)
}
//鼠标划出效果
box.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next,3000);
}
right.onclick = next;
left.onclick = prev;
//小按钮点击事件
for (var i = 0; i < navList.length;i++){
	navList[i].idx = i;
	navList[i].onclick = function(){
		index = this.idx + 1;
		liChange();
		animate(pics,{left:-1200*index})
	}
}
//小按钮背景切换
function liChange(){
	for(var i = 0;i < navList.length;i++){
		navList[i].className = "";
	}
	if(index === 6){
		navList[0].className = "active";
	}else if(index === 0){
		navList[4].className = "active";
	}else{
		navList[index-1].className = "active";
	}
}
//图片切换
var smallpic = document.getElementById("sea5");
var imgList = smallpic.getElementsByTagName("img");
var bigpic = document.getElementById("Bimg");
var t1 = document.getElementById("t1")
var p1 = document.getElementById("p1");
var temp1,temp2,temp3;
for(var i = 0; i < imgList.length; i++) {
	imgList[i].t = i;
	imgList[i].onmouseover = function() {
		temp1 = this.t + 1;
		this.style.width=320+"px";
		this.style.height=140+"px"; 
		var imgSrc = this.getAttribute("src");
		bigpic.setAttribute("src", imgSrc);
		this.setAttribute("index", 1);
		if(temp1===1){
			t1.innerHTML = "白鳍豚";
			p1.innerHTML = "白暨豚科（学名：Lipotidae）：是哺乳纲、鲸目的一科水生动物，仅有一个物种即“白暨豚”（Lipotes vexillifer）。";
		}else if(temp1===2){
			t1.innerHTML = "玳瑁" ;
			p1.innerHTML = "玳瑁（英语：hawkbillturtle ，学名：Eretmochelys imbricata）：属爬行纲，海龟科的海洋动物。一般长约0.6米，大者可达1.6米。" ;
		}else if(temp1===3){
			t1.innerHTML = "水獭";
			p1.innerHTML = "水獭，学名：Lutra lutra（Linnaeus,1758），为鼬科、水獭属的一种动物。水獭躯体长，吻短，眼睛稍突而圆，耳朵小，四肢短，体背部为咖啡色，腹面呈灰褐色。";
		}else if(temp1===4){
			t1.innerHTML = "娃娃鱼";
			p1.innerHTML = "中国大鲵（学名：Andrias davidianus）：是两栖纲、隐鳃鲵科的一种两栖动物，生活在淡水中。是中国特产的一种珍贵野生动物，俗称“娃娃鱼”。";
		}

	}
	imgList[i].onmouseout = function() {
		this.style.width=250+"px";
		this.style.height=100+"px"; 
		var imgSrc = "images1/a1.jpg"
		bigpic.setAttribute("src", imgSrc);
		this.setAttribute("index", 1);
		t1.innerHTML = "白鳍豚";
		p1.innerHTML = "白暨豚科（学名：Lipotidae）：是哺乳纲、鲸目的一科水生动物，仅有一个物种即“白暨豚”（Lipotes vexillifer）。";
		
	}
}

var smallpic = document.getElementById("land5");
var imgList = smallpic.getElementsByTagName("img");
var bigpic2 = document.getElementById("Bimg2");
var t2 = document.getElementById("t2");
var p2 = document.getElementById("p2");
for(var i = 0; i < imgList.length; i++) {
	imgList[i].t = i;
	imgList[i].onmouseover = function() {
		temp2 = this.t + 1;
		this.style.width=320+"px";
		this.style.height=140+"px"; 
		var imgSrc = this.getAttribute("src");
		bigpic2.setAttribute("src", imgSrc);
		this.setAttribute("index", 1);
		if(temp2===1){
			t2.innerHTML = "朱鹮";
			p2.innerHTML = "朱鹮（学名：Nipponia nippon）：古称朱鹭、红朱鹭，朱鹮系东亚特有种。中等体型，体羽白色，后枕部有长的柳叶形羽冠，额至面颊部皮肤裸露，呈鲜红色。";
		}else if(temp2===2){
			t2.innerHTML = "黑颈鹤" ;
			p2.innerHTML = "黑颈鹤（学名：Grus nigricollis）：大型涉禽，体长110-120厘米，体重4-6千克。颈、脚甚至长，通体羽毛灰白色，头部、前颈及飞羽黑色。" ;
		}else if(temp2===3){
			t2.innerHTML = "东方白鹳";
			p2.innerHTML = "东方白鹳（学名：Ciconia boyciana）属于大型涉禽，是国家一级保护动物。常在沼泽、湿地、塘边涉水觅食，主要以小鱼、蛙、昆虫等为食。";
		}else if(temp2===4){
			t2.innerHTML = "卷羽鹈鹕";
			p2.innerHTML = "卷羽鹈鹕（学名：Pelecanus crispus）是一种大型的白色水鸟，体羽灰白，眼浅黄，喉囊桔黄或黄色，颈背具卷曲的冠羽。";
		}
	}
	imgList[i].onmouseout = function() {
		this.style.width=250+"px";
		this.style.height=100+"px"; 
		var imgSrc = "images1/img3.jpg";
		bigpic2.setAttribute("src", imgSrc);
		this.setAttribute("index", 1);
		t2.innerHTML = "朱鹮";
		p2.innerHTML = "朱鹮（学名：Nipponia nippon）：古称朱鹭、红朱鹭，朱鹮系东亚特有种。中等体型，体羽白色，后枕部有长的柳叶形羽冠，额至面颊部皮肤裸露，呈鲜红色。";
		
		

	}
}

var smallpic = document.getElementById("sky5");
var imgList = smallpic.getElementsByTagName("img");
var bigpic3 = document.getElementById("Bimg3");
var t3 = document.getElementById("t3");
var p3 = document.getElementById("p3");
for(var i = 0; i < imgList.length; i++) {
	imgList[i].t = i;
	imgList[i].onmouseover = function() {
		temp3 = this.t + 1;
		this.style.width=320+"px";
		this.style.height=140+"px"; 
		var imgSrc = this.getAttribute("src");
		bigpic3.setAttribute("src", imgSrc);
		this.setAttribute("index", 1);
		if(temp3===1){
			t3.innerHTML = "帝企鹅";
			p3.innerHTML = "帝企鹅（学名：Aptenodytes forsteri）：也称皇帝企鹅，是企鹅家族中个体最大的物种，一般身高在90厘米以上，最大可达到120厘米，体重可达50千克。";
		}else if(temp3===2){
			t3.innerHTML = "北极狼" ;
			p3.innerHTML = "北极狼（学名：Canis lupus arctos），又称白狼，是犬科的哺乳动物，也是灰狼的亚种，分布于欧亚大陆北部、加拿大北部和格陵兰北部。是世界上最大的野生犬科家族成员。" ;
		}else if(temp3===3){
			t3.innerHTML = "北极狐";
			p3.innerHTML = "北极狐（学名：Vulpes lagopus）：体长50-60厘米，尾长20-25厘米，体重2.5-4千克。颜面窄，嘴尖，耳圆，尾毛蓬松，尖端白色。";
		}else if(temp3===4){
			t3.innerHTML = "北极熊";
			p3.innerHTML = "北极熊（拉丁学名：Ursus maritimus (Phipps, 1774)，是熊科熊属的一种动物，是世界上最大的陆地食肉动物 [1]  ，又名白熊。";
		}
	}
	imgList[i].onmouseout = function() {
		this.style.width=250+"px";
		this.style.height=100+"px"; 
		var imgSrc = "images1/1.jpg";
		bigpic3.setAttribute("src", imgSrc);
		this.setAttribute("index", 1);
		t3.innerHTML = "帝企鹅";
		p3.innerHTML = "帝企鹅（学名：Aptenodytes forsteri）：也称皇帝企鹅，是企鹅家族中个体最大的物种，一般身高在90厘米以上，最大可达到120厘米，体重可达50千克。";
		
	}
}














