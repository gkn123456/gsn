window.onload=function(){
	let lbz1=document.getElementsByClassName("lbz1")[0];
	let a=lbz1.getElementsByTagName("li");
	let cbkc=document.getElementsByClassName("cbkc");
	for(let i=0;i<a.length;i++){
		a[i].onmouseenter=function(){
			for(let j=0;j<a.length;j++){
				cbkc[j].style.width="0px";
				cbkc[j].style.zIndex="0";
			}
			   cbkc[i].style.width="1000px";
			   cbkc[i].style.zIndex="30";	
			}
		a[i].onmouseleave=function(){
			cbkc[i].style.width="0px";
			cbkc[i].style.zIndex="0";
		}
	}
	let dhhy1=document.getElementsByClassName("dhhy1");
	let dhhy12=document.getElementsByClassName("dhhy12")[0];
	
	dhhy1[8].onmouseenter=function(){
		dhhy12.style.height="249px";
	}
	dhhy1[8].onmouseleave=function(){
		dhhy12.style.height="0px";
	}
	let dhhz1=document.getElementsByClassName("dhhz1");
	let dhhz11=document.getElementsByClassName("dhhz11")[0];
	
	dhhz1[0].onmouseenter=function(){
		dhhz11.style.height="253px";
		dhhz11.style.zIndex="30";
		dhhz11.style.border="1px solid #ccc";
		dhhz11.style.borderTop="0";
	}
	dhhz1[0].onmouseleave=function(){
		dhhz11.style.height="0px";
		dhhz11.style.zIndex="0";
		dhhz11.style.border="0px";
	}
	
	let dhhz12=document.getElementsByClassName("dhhz12")[0];
	console.log(dhhz11,dhhz12);
	dhhz1[1].onmouseenter=function(){
		dhhz12.style.height="140px";
		dhhz12.style.zIndex="1";
		dhhz12.style.border="1px solid #ccc";
		dhhz12.style.borderTop="0";
	}
	dhhz1[1].onmouseleave=function(){
		dhhz12.style.height="0px";
		dhhz12.style.zIndex="0";
		dhhz12.style.border="0px";
	}
	let kffw=document.getElementsByClassName("kffw")[0];
	console.log(dhhz11,dhhz12);
	dhhz1[2].onmouseenter=function(){
		kffw.style.height="140px";
		kffw.style.zIndex="1";
		kffw.style.border="1px solid #ccc";
		kffw.style.borderTop="0";
	}
	dhhz1[2].onmouseleave=function(){
		kffw.style.height="0px";
		kffw.style.zIndex="0";
		kffw.style.border="0px";
	}

	let wddd=document.getElementsByClassName("wddd")[0];
	console.log(dhhz11,dhhz12);
	dhhy1[2].onmouseenter=function(){
		wddd.style.height="100px";
		wddd.style.zIndex="1";
		wddd.style.border="1px solid #ccc";
		wddd.style.borderTop="0";
	}
	dhhy1[2].onmouseleave=function(){
		wddd.style.height="0px";
		wddd.style.zIndex="0";
		wddd.style.border="0px";
	}
	let wdyg=document.getElementsByClassName("wdyg")[0];
	dhhy1[3].onmouseenter=function(){
		wdyg.style.height="150px";
		wdyg.style.zIndex="30";
		wdyg.style.border="1px solid #ccc";
		wdyg.style.borderTop="0";
	}
	dhhy1[3].onmouseleave=function(){
		wdyg.style.height="0px";
		wdyg.style.zIndex="0";
		wdyg.style.border="0px";
	}
	let gwc=document.getElementsByClassName("gwc")[0];
	dhhy1[5].onmouseenter=function(){
		gwc.style.height="400px";
		gwc.style.zIndex="30";
		gwc.style.border="1px solid #ccc";
		gwc.style.borderTop="0";
	}
	dhhy1[5].onmouseleave=function(){
		gwc.style.height="0px";
		gwc.style.zIndex="0";
		gwc.style.border="0px";
	}
	let lb=document.querySelector(".lb");
	let lbz2=document.querySelector(".lbz2");
	let lbt=document.querySelectorAll(".lbz2 li");
	let hh=document.querySelector(".hh");
	let lbd=document.querySelectorAll(".hh a");
	let fxz=document.querySelector(".fxz");
	let fxy=document.querySelector(".fxy");
	let index=0;
	let t=setInterval(move,2000);
	lbt[0].style.zIndex=10;
	lbd[0].className="hot";
	function move(){
		index++;
		if(index==lbt.length){
			index=0;
		}
		lbt.forEach(function(v,index,obj){
			v.style.zIndex=5;
		})
		lbd.forEach(function(v,index,obj){
			v.className="";
		})
		lbt[index].style.zIndex=10;
		lbd[index].className="hot";
	}
	function movel(){
		index--;
		if(index<0){
			index=lbt.length-1;
		}
		lbt.forEach(function(v,index,obj){
			v.style.zIndex=5;
		})
		lbd.forEach(function(v,index,obj){
			v.className="";
		})
		lbt[index].style.zIndex=10;
		lbd[index].className="hot";
	}
	lb.onmouseenter=function(){
		clearInterval(t);
	}
	lb.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	fxy.onclick=function(){
		move();
	}
	fxz.onclick=function(){
		movel();
	}
	for(let i=0;i<lbd.length;i++){
		lbd[i].onclick=function(){
			lbt.forEach(function(v,index,obj){
				v.style.zIndex=5;
			})
			lbd.forEach(function(v,index,obj){
				v.className="";
			})
			lbt[i].style.zIndex=10;
			lbd[i].className="hot";
			index=i;	
		}
	}
	let wheight=innerHeight;
	let gdl=document.querySelector(".gdl");
	window.onscroll=function(){
		let  g1=document.body.scrollTop||document.documentElement.scrollTop ;
		if(g1+wheight>1000){
			gdl.style.height="36px";
		}
		else{
			gdl.style.height="0px";
		}
	}

}