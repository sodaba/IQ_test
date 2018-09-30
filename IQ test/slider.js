
var btn1 = document.getElementById("btn1");
var modal=document.getElementById("modal");
var img=document.getElementById("imgslid");

// var header = document.getElementById("header");
var footer = document.getElementById("footer");
var select = document.getElementById("select");
var data = document.getElementById("data");
var result = document.getElementById("result");
var content = document.getElementById("content");
var inputData;

data.onclick = function () {
		data.value = "";
	}
	var imgArray = [
		["1", "2", "4", "5", "6"]
	];
	
	btn1.addEventListener("click", function(){
	modal.style.display = "block";
	result.style.display = "none";
	
	var i=2;
	var interval1 = setInterval(slideFunction, 1000);
	function slideFunction() {
		
				
		if(i>=12){
			clearInterval(interval1);
			var ranIndex = Math.floor(Math.random()*5);
			// alert(imgArray[0][ranIndex]);
			// header.style.display = "block";
			footer.style.display = "block";
			img.src="images/img1/"+imgArray[0][ranIndex]+".jpg";
			img.style.width="35%";
			img.style.height="200px";
			img.style.margin="7% auto";
			img.style.left="30%";
			document.getElementById("content").style.top="200px";
			select.onclick = function () {
				inputData = document.getElementById("data").value;
				
				if (imgArray[0][ranIndex] == imgArray[0][0] && inputData == 2) {
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][1] && inputData == 4){
					
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					
					
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][2] && inputData == 2){
				
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					
					
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][3] && inputData == 2){
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					
					
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][4] && inputData == 2){
				
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					
					
				}

				else{
					result.innerHTML = "Your answer is wrong!";
					
					
				}
				setTimeout(hide, 4000);
			}

			
		}
		else{

			img.src="images/img1/"+i+".jpg";
			i++;
		}

		
	}

	
	});
	function hide() {
		
		document.getElementById('modal').style.display = "none";
		location.reload();
	}


// button 2


var btn2 = document.getElementById("btn2");
var modal=document.getElementById("modal");
var img=document.getElementById("imgslid");
// var header = document.getElementById("header");
var footer = document.getElementById("footer");
var select = document.getElementById("select");
var data = document.getElementById("data");
var result = document.getElementById("result");
var content = document.getElementById("content");
var inputData;


	data.onclick = function () {
		data.value = "";
	}
	var imgArray = [
		["1", "2", "4", "5", "6"]
	];
	
	btn2.addEventListener("click", function(){
	modal.style.display = "block";
	result.style.display = "none";
	var i=2;
	var interval1 = setInterval(slideFunction, 1000);
	function slideFunction() {
		
				
		if(i>=12){
			clearInterval(interval1);
			var ranIndex = Math.floor(Math.random()*5);
			// alert(imgArray[0][ranIndex]);
			// header.style.display = "block";
			footer.style.display = "block";
			img.src="images/img2/"+imgArray[0][ranIndex]+".jpg";
			img.style.width="35%";
			img.style.height="200px";
			img.style.margin="7% auto";
			select.onclick = function () {
				inputData = document.getElementById("data").value;
				
				if (imgArray[0][ranIndex] == imgArray[0][0] && inputData == 4) {
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][1] && inputData == 2){
					
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][2] && inputData == 2){
				
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][3] && inputData == 2){
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][4] && inputData == 2){
				
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}

				else{
					result.innerHTML = "Your answer is wrong!";
					result.style.display = "block";
				}
				setTimeout(hide, 4000);
			}

			
		}
		else{

			img.src="images/img2/"+i+".jpg";
			i++;
		}

		
	}

	
	});
	function hide() {
		alert("finish")
		document.getElementById('modal').style.display = "none";
		location.reload();
	}




// button 3


var btn3 = document.getElementById("btn3");
var modal=document.getElementById("modal");
var img=document.getElementById("imgslid");
// var header = document.getElementById("header");
var footer = document.getElementById("footer");
var select = document.getElementById("select");
var data = document.getElementById("data");
var result = document.getElementById("result");
var content = document.getElementById("content");

var inputData;
data.onclick = function () {
		data.value = "";
	}

	var imgArray = [
		["1", "2", "3", "6", "8"]
	];
	
	btn3.addEventListener("click", function(){
	modal.style.display = "block";
	result.style.display = "none";
	var i=2;
	var interval1 = setInterval(slideFunction, 1000);
	function slideFunction() {
		
				
		if(i>=12){
			clearInterval(interval1);
			var ranIndex = Math.floor(Math.random()*5);
			// alert(imgArray[0][ranIndex]);
			// header.style.display = "block";
			footer.style.display = "block";
			img.src="images/img3/"+imgArray[0][ranIndex]+".jpg";
			img.style.width="35%";
			img.style.height="200px";
			img.style.margin="7% auto";
			select.onclick = function () {
				inputData = document.getElementById("data").value;
				
				if (imgArray[0][ranIndex] == imgArray[0][0] && inputData == 2) {
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][1] && inputData == 3){
					
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][2] && inputData == 3){
				
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][3] && inputData == 2){
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][4] && inputData == 2){
				
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}

				else{
					result.innerHTML = "Your answer is wrong!";
					result.style.display = "block";
				}
				setTimeout(hide, 4000);
			}

			
		}
		else{

			img.src="images/img3/"+i+".jpg";
			i++;
		}

		
	}

	
	});
	function hide() {
		
		document.getElementById('modal').style.display = "none";
		location.reload();
	}




// button 4


var btn4 = document.getElementById("btn4");
var modal=document.getElementById("modal");
var img=document.getElementById("imgslid");
// var header = document.getElementById("header");
var footer = document.getElementById("footer");
var select = document.getElementById("select");
var data = document.getElementById("data");
var result = document.getElementById("result");
var content = document.getElementById("content");
var inputData;
data.onclick = function () {
		data.value = "";
	}

	var imgArray = [
		["1", "2", "3", "5", "7"]
	];
	
	btn4.addEventListener("click", function(){
	modal.style.display = "block";
	result.style.display = "none";
	var i=2;
	var interval1 = setInterval(slideFunction, 1000);
	function slideFunction() {
		
				
		if(i>=12){
			clearInterval(interval1);
			var ranIndex = Math.floor(Math.random()*5);
			// alert(imgArray[0][ranIndex]);
			// header.style.display = "block";
			footer.style.display = "block";
			img.src="images/img4/"+imgArray[0][ranIndex]+".jpg";
			img.style.width="35%";
			img.style.height="200px";
			img.style.margin="7% auto";
			select.onclick = function () {
				inputData = document.getElementById("data").value;
				
				if (imgArray[0][ranIndex] == imgArray[0][0] && inputData == 2) {
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][1] && inputData == 3){
					
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][2] && inputData == 3){
				
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][3] && inputData == 2){
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][4] && inputData == 2){
				
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}

				else{
					result.innerHTML = "Your answer is wrong!";
					result.style.display = "block";
				}
				setTimeout(hide, 4000);
			}

			
		}
		else{

			img.src="images/img4/"+i+".jpg";
			i++;
		}

		
	}

	
	});
	function hide() {
		
		document.getElementById('modal').style.display = "none";
		location.reload();
	}


	// button 5

var btn5 = document.getElementById("btn5");
var modal=document.getElementById("modal");
var img=document.getElementById("imgslid");
// var header = document.getElementById("header");
var footer = document.getElementById("footer");
var select = document.getElementById("select");
var data = document.getElementById("data");
var result = document.getElementById("result");
var content = document.getElementById("content");
var inputData;
data.onclick = function () {
		data.value = "";
	}

	var imgArray = [
		["1", "2", "3", "4", "5"]
	];
	
	btn5.addEventListener("click", function(){
	modal.style.display = "block";
	result.style.display = "none";
	var i=2;
	var interval1 = setInterval(slideFunction, 1000);
	function slideFunction() {
		
				
		if(i>=12){
			clearInterval(interval1);
			var ranIndex = Math.floor(Math.random()*5);
			// alert(imgArray[0][ranIndex]);
			// header.style.display = "block";
			footer.style.display = "block";
			img.src="images/img5/"+imgArray[0][ranIndex]+".jpg";
			img.style.width="35%";
			img.style.height="200px";
			img.style.margin="7% auto";
			select.onclick = function () {
				inputData = document.getElementById("data").value;
				
				if (imgArray[0][ranIndex] == imgArray[0][0] && inputData == 2) {
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][1] && inputData == 3){
					
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][2] && inputData == 3){
				
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][3] && inputData == 2){
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][4] && inputData == 2){
				
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}

				else{
					result.innerHTML = "Your answer is wrong!";
					result.style.display = "block";
				}
				setTimeout(hide, 4000);
			}

			
		}
		else{

			img.src="images/img5/"+i+".jpg";
			i++;
		}

		
	}

	
	});
	function hide() {
		
		document.getElementById('modal').style.display = "none";
		location.reload();
	}


// button 6

var btn6 = document.getElementById("btn6");
var modal=document.getElementById("modal");
var img=document.getElementById("imgslid");
// var header = document.getElementById("header");
var footer = document.getElementById("footer");
var select = document.getElementById("select");
var data = document.getElementById("data");
var result = document.getElementById("result");
var content = document.getElementById("content");
var inputData;
data.onclick = function () {
		data.value = "";
	}

	var imgArray = [
		["1", "2", "3", "4", "6"]
	];
	
	btn6.addEventListener("click", function(){
	modal.style.display = "block";
	result.style.display = "none";
	var i=2;
	var interval1 = setInterval(slideFunction, 1000);
	function slideFunction() {
		
				
		if(i>=12){
			clearInterval(interval1);
			var ranIndex = Math.floor(Math.random()*5);
			// alert(imgArray[0][ranIndex]);
			// header.style.display = "block";
			footer.style.display = "block";
			img.src="images/img6/"+imgArray[0][ranIndex]+".jpg";
			img.style.width="35%";
			img.style.height="200px";
			img.style.margin="7% auto";
			select.onclick = function () {
				inputData = document.getElementById("data").value;
				
				if (imgArray[0][ranIndex] == imgArray[0][0] && inputData == 2) {
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][1] && inputData == 3){
					
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][2] && inputData == 3){
				
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][3] && inputData == 2){
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][4] && inputData == 2){
				
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}

				else{
					result.innerHTML = "Your answer is wrong!";
					result.style.display = "block";
				}
				setTimeout(hide, 4000);
			}

			
		}
		else{

			img.src="images/img6/"+i+".jpg";
			i++;
		}

		
	}	
	});
	function hide() {
		
		document.getElementById('modal').style.display = "none";
		location.reload();
	}
   // button 7

var btn7 = document.getElementById("btn7");
var modal=document.getElementById("modal");
var img=document.getElementById("imgslid");
// var header = document.getElementById("header");
var footer = document.getElementById("footer");
var select = document.getElementById("select");
var data = document.getElementById("data");
var result = document.getElementById("result");
var content = document.getElementById("content");
var inputData;
data.onclick = function () {
		data.value = "";
	}

	var imgArray = [
		["1", "2", "3", "4", "5"]
	];
	
	btn7.addEventListener("click", function(){
	modal.style.display = "block";
	result.style.display = "none";
	var i=2;
	var interval1 = setInterval(slideFunction, 1000);
	function slideFunction() {
		
				
		if(i>=12){
			clearInterval(interval1);
			var ranIndex = Math.floor(Math.random()*5);
			// alert(imgArray[0][ranIndex]);
			// header.style.display = "block";
			footer.style.display = "block";
			img.src="images/img7/"+imgArray[0][ranIndex]+".jpg";
			img.style.width="35%";
			img.style.height="200px";
			img.style.margin="7% auto";
			select.onclick = function () {
				inputData = document.getElementById("data").value;
				
				if (imgArray[0][ranIndex] == imgArray[0][0] && inputData == 2) {
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][1] && inputData == 3){
					
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][2] && inputData == 3){
				
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][3] && inputData == 2){
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][4] && inputData == 2){
				
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}

				else{
					result.innerHTML = "Your answer is wrong!";
					result.style.display = "block";
				}
				setTimeout(hide, 4000);
			}

			
		}
		else{

			img.src="images/img7/"+i+".jpg";
			i++;
		}

		
	}

	
	});
	function hide() {
		
		document.getElementById('modal').style.display = "none";
		location.reload();
	}


	// button 8

var btn8 = document.getElementById("btn8");
var modal=document.getElementById("modal");
var img=document.getElementById("imgslid");
// var header = document.getElementById("header");
var footer = document.getElementById("footer");
var select = document.getElementById("select");
var data = document.getElementById("data");
var result = document.getElementById("result");
var content = document.getElementById("content");
var inputData;
data.onclick = function () {
		data.value = "";
	}

	var imgArray = [
		["1", "2", "3", "5", "6"]
	];
	var i =0;
	btn8.addEventListener("click", function(){
	modal.style.display = "block";
	result.style.display = "none";
	i=2;
	var interval1 = setInterval(slideFunction, 1000);
	function slideFunction() {
		
				
		if(i>=12){
			clearInterval(interval1);
			var ranIndex = Math.floor(Math.random()*5);
			// alert(imgArray[0][ranIndex]);
			// header.style.display = "block";
			footer.style.display = "block";
			img.src="images/img8/"+imgArray[0][ranIndex]+".jpg";
			img.style.width="35%";
			img.style.height="200px";
			img.style.margin="7% auto";
			select.onclick = function () {
				inputData = document.getElementById("data").value;
				
				if (imgArray[0][ranIndex] == imgArray[0][0] && inputData == 2) {
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][1] && inputData == 3){
					
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][2] && inputData == 3){
				
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][3] && inputData == 2){
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][4] && inputData == 2){
				
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}

				else{
					result.innerHTML = "Your answer is wrong!";
					result.style.display = "block";
				}
				setTimeout(hide, 4000);
			}

			
		}
		else{

			img.src="images/img8/"+i+".jpg";
			i++;
		}

		
	}

	
	});
	function hide() {
		
		document.getElementById('modal').style.display = "none";
		location.reload();
	}

	// button 9

var btn9 = document.getElementById("btn9");
var modal=document.getElementById("modal");
var img=document.getElementById("imgslid");
// var header = document.getElementById("header");
var footer = document.getElementById("footer");
var select = document.getElementById("select");
var data = document.getElementById("data");
var result = document.getElementById("result");
var content = document.getElementById("content");
var inputData;
data.onclick = function () {
		data.value = "";
	}

	var imgArray = [
		["1", "2", "3", "5", "6"]
	];
	
	btn9.addEventListener("click", function(){
	modal.style.display = "block";
	result.style.display = "none";
	var i=2;
	var interval1 = setInterval(slideFunction, 1000);
	function slideFunction() {
		
				
		if(i>=12){
			clearInterval(interval1);
			var ranIndex = Math.floor(Math.random()*5);
			// alert(imgArray[0][ranIndex]);
			// header.style.display = "block";
			footer.style.display = "block";
			img.src="images/img9/"+imgArray[0][ranIndex]+".jpg";
			img.style.width="35%";
			img.style.height="200px";
			img.style.margin="7% auto";
			select.onclick = function () {
				inputData = document.getElementById("data").value;
				
				if (imgArray[0][ranIndex] == imgArray[0][0] && inputData == 4) {
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][1] && inputData == 2){
					
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][2] && inputData == 2){
				
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][3] && inputData == 2){
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][4] && inputData == 2){
				
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}

				else{
					result.innerHTML = "Your answer is wrong!";
					result.style.display = "block";
				}
				setTimeout(hide, 4000);
			}

			
		}
		else{

			img.src="images/img9/"+i+".jpg";
			i++;
		}

		
	}

	
	});
	function hide() {
		
		document.getElementById('modal').style.display = "none";
		location.reload();
	}


  // button 10

var btn10 = document.getElementById("btn10");
var modal=document.getElementById("modal");
var img=document.getElementById("imgslid");
// var header = document.getElementById("header");
var footer = document.getElementById("footer");
var select = document.getElementById("select");
var data = document.getElementById("data");
var result = document.getElementById("result");
var content = document.getElementById("content");

var inputData;
data.onclick = function () {
		data.value = "";
	}

	var imgArray = [
		["1", "2", "3", "5", "6"]
	];
	
	btn10.addEventListener("click", function(){
	modal.style.display = "block";
	result.style.display = "none";
	var i=2;
	var interval1 = setInterval(slideFunction, 1000);
	function slideFunction() {
		
				
		if(i>=12){
			clearInterval(interval1);
			var ranIndex = Math.floor(Math.random()*5);
			// alert(imgArray[0][ranIndex]);
			// header.style.display = "block";
			footer.style.display = "block";
			img.src="images/img10/"+imgArray[0][ranIndex]+".jpg";
			img.style.width="35%";
			img.style.height="200px";
			img.style.margin="7% auto";
			select.onclick = function () {
				inputData = document.getElementById("data").value;
				
				if (imgArray[0][ranIndex] == imgArray[0][0] && inputData == 3) {
					
					result.innerHTML = "Your Answer Is Correct!";

					result.style.display = "block";

					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][1] && inputData == 3){
					
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
					

				}
				else if(imgArray[0][ranIndex]  == imgArray[0][2] && inputData == 2){
				
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][3] && inputData == 2){
					
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}
				else if(imgArray[0][ranIndex]  == imgArray[0][4] && inputData == 2){
				
					result.innerHTML = "Your Answer Is Correct!";
					result.style.display = "block";
				}

				else{
					result.innerHTML = "Your answer is wrong!";
					result.style.display = "block";
				}
				setTimeout(hide, 4000);
			}

			
		}
		else{

			img.src="images/img10/"+i+".jpg";
			i++;
		}

		
	}

	
	});
	function hide() {
		
		document.getElementById('modal').style.display = "none"; 
		location.reload();
	}




