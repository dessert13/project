<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>练习2：操作DOM操作</title>
		<style type="text/css">
			html,div,ul,li {margin: 0px;padding: 0px;}
			a{cursor: pointer;}
			li {list-style: none;cursor: pointer;}
			fieldset {border: #000 1px dashed;width: 235px;height: 235px;padding: 10px;text-align: center;float: left;margin-left: 5px;}
			#cont_left {width: 300px;height: 400px;float: left;}
			#cont_right {float: left;}
			.newcss1{background-color: green;}
		</style>
	</head>
	<body>
		<script>
			//219970707辜靖耘
		</script>
		<div id="cont_left">
			<ul><img src="img/fold.gif"><a onclick="show('main1')"> 通过DOM获取信息 </a>
				<ul id="main1">
					<li onclick="showImg()"><img src="img/doc.gif">获取原始图片路径</li>
					<li onclick="getFruit()"><img src="img/doc.gif">获取我喜欢的水果</li>
				</ul>
			</ul>
			<ul><img src="img/fold.gif"><a onclick="show('main2')"> 通过DOM操作元素 </a>
				<ul id="main2">
					<li onclick="createImg()"><img src="img/doc.gif">创建图片</li>
					<li onclick="cloneImg()"><img src="img/doc.gif">克隆图片</li>
					<li onclick="changeImg()"><img src="img/doc.gif">改变图片</li>
					<li onclick="removeImg()"><img src="img/doc.gif">删除图片</li>
				</ul>
			</ul>
			<ul><img src="img/fold.gif"><a onclick="show('main3')"> 通过DOM操作样式 </a>
				<ul id="main3">
					<li onclick="changeCss1()"><img src="img/doc.gif">为原始图片加上行间样式</li>
					<li onclick="changeCss2()"><img src="img/doc.gif">为所有的fieldset加上内部样式</li>
				</ul>
			</ul>
		</div>
		<fieldset>
			<legend>原始图片</legend>
			<img id="fruit" src="img/fruit.jpg">
		</fieldset>
		<fieldset>
			<legend>图片路径</legend>
			<p id="msg1">在这里显示</p>
		</fieldset>
		<fieldset>
			<legend>选择你喜欢的水果</legend>
			<ul style="text-align: left;">
				<li>
					<input name="IKUN" type="checkbox" value="苹果" />苹果
				</li>
				<li>
					<input name="IKUN" type="checkbox" value="香蕉" checked="checked" />香蕉
				</li>
				<li>
					<input name="IKUN" type="checkbox" value="葡萄" />葡萄
				</li>
				<li>
					<input name="IKUN" type="checkbox" value="梨" checked="checked" />梨
				</li>
				<li>
					<input name="IKUN" type="checkbox" value="西瓜" />西瓜
				</li>
			</ul>
			<div id="msg2" style="margin-top: 10px;text-align: left;"></div>
		</fieldset>
		<fieldset>
			<legend>创建图片</legend>
			<div id="msg3"></div>
		</fieldset>
		<fieldset>
			<legend>克隆图片</legend>
			<div id="msg4"></div>
		</fieldset>
		<script>
			//菜单收缩与扩展
			function show(title) {
				let currentMenu = document.getElementById(title);
				let currentStatus = currentMenu.style.display;
				currentMenu.style.display = currentStatus == "" ? "none" : "";
			}
			//获取原始图片路径
			function showImg() {
			let img1 = document.getElementById('fruit');//读取img
			let imgSrc = img1.src;//获取图片路径
			let imgSrcShow = document.getElementById('msg1');//路径显示的地方
			imgSrcShow.textContent = imgSrc;
			}
			//获取喜欢的水果
			function getFruit() {
				    let fruits = document.querySelectorAll('input[name = "IKUN"]')//读取复选框
				    let fruitsShow = document.getElementById('msg2');//水果名显示区
				    let fruitsSelected = [];// 初始化空的选中的水果数组
				    // 遍历所有复选框
				    fruits.forEach(function(checkbox){
				    	if(checkbox.checked){
				    		fruitsSelected.push(checkbox.value);
				    	}
				    });
				    fruitsShow.innerHTML = "我喜欢的水果有：<br>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+fruitsSelected.join('、');	
			}
			//创建图片
			function createImg(src) {
				    let imgCreate = document.getElementById('msg3'); // 获取创建图片的区块  
				    let existingImg = imgCreate.querySelector('img'); // 检查是否已经有图片存在  
				    // 如果不存在图片，则创建并添加新的图片  
				    if (!existingImg) {  
				        let imgNew = document.createElement('img'); // 创建img元素  
				        imgNew.src ='img/grape.jpg'; // 使用传入的src或者默认的图片路径  
				        imgCreate.appendChild(imgNew); // 将新图添加到区块里面  
				    } else {  
				        alert('msg3内已经存在一张图片，无法再创建'); 
				    } 	
			}
			//克隆图片
			function cloneImg() {
			    let imgClone = document.getElementById('msg4');  
			    let existingImg = imgClone.querySelector('img'); // 检查msg4内是否已有图片  
			  
			    // 如果msg4内没有图片，则克隆并添加图片  
			    if (!existingImg) {  
			        let imgFirst = document.getElementById('fruit').cloneNode(true);  
			        imgClone.appendChild(imgFirst); // 将原始图克隆到msg4区域内  
			    } else {  
			        // 如果已经存在图片，可以选择不执行任何操作或显示提示信息  
			        alert('msg4内已经存在一张图片，无法再克隆。');  
			    } 	
			}
			//改变图片
			function changeImg() {
				let imgFirst = document.getElementById('fruit');
				if(imgFirst){//判断有不有图片
					imgFirst.src ='img/grape.jpg';
					imgFirst.style.width = '200px';
					imgFirst.style.height = '200px';	
				}else{
					alert("原始图片不存在，无法修改！");
				}					
			}
			//删除图片
			function removeImg() {
			    let imgClone = document.getElementById('msg4');  
			    let imgs = imgClone.querySelectorAll('img'); // 获取msg4内的所有图片  
			    imgs.forEach(function(img) {  
			        img.parentNode.removeChild(img); // 删除每张图片  
			    });  	
			}
			//操作样式1
			function changeCss1(imgId, styleObject){
				let imgFirst = document.getElementById('fruit');
					imgFirst.style.borderColor = 'blue'; // 设置边框颜色为红色
					imgFirst.style.borderStyle = 'solid'; // 设置边框样式为实线  
					imgFirst.style.borderWidth = '10px';
				    imgFirst.classList.add('imgFirst');//使用css方式
			}
			//操作样式2
			function changeCss2(){
			let fieldsets = document.getElementsByTagName('fieldset');//集合
			for (let i=0; i<fieldsets.length;i++) { // 遍历所有的 fieldset 元素  
				fieldsets[i].style.background = '#ffb0cc'; // 设置每个元素的背景色为粉色  
			} 	
			}
		</script>
	</body>
</html>
