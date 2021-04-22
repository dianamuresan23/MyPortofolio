document.querySelector("#icon").addEventListener("click", toggleMenu);
document.querySelector(".c1").addEventListener("click", closeRm1);
document.querySelector(".c2").addEventListener("click", closeRm2);
document.querySelector(".c3").addEventListener("click", closeRm3);
document.querySelector(".c4").addEventListener("click", closeRm4);
document.querySelector(".c5").addEventListener("click", closeRm5);
document.querySelector(".c6").addEventListener("click", closeRm6);
document.querySelector(".c7").addEventListener("click", closeRm7);
document.querySelector(".c8").addEventListener("click", closeRm8);

function closeRm1() {
  document.querySelector(".rm1").classList.remove("show-rm");
}
function closeRm2() {
  document.querySelector(".rm2").classList.remove("show-rm");
}
function closeRm3() {
  document.querySelector(".rm3").classList.remove("show-rm");
}
function closeRm4() {
  document.querySelector(".rm4").classList.remove("show-rm");
}
function closeRm5() {
  document.querySelector(".rm5").classList.remove("show-rm");
}
function closeRm6() {
  document.querySelector(".rm6").classList.remove("show-rm");
}
function closeRm7() {
  document.querySelector(".rm7").classList.remove("show-rm");
}
function closeRm8() {
  document.querySelector(".rm8").classList.remove("show-rm");
}

function showRm1() {
  
      document.querySelector(".rm1").classList.add("show-rm");
}

function showRm2() {
  document.querySelector(".rm2").classList.add("show-rm");
}

function showRm3() {
  document.querySelector(".rm3").classList.add("show-rm");
}

function showRm4() {
  document.querySelector(".rm4").classList.add("show-rm");
}

function showRm5() {
  document.querySelector(".rm5").classList.add("show-rm");
}
function showRm6() {
  document.querySelector(".rm6").classList.add("show-rm");
}
function showRm7() {
  document.querySelector(".rm7").classList.add("show-rm");
}
function showRm8() {
  document.querySelector(".rm8").classList.add("show-rm");
}



function toggleMenu() {
	console.log("apasat")
	document.querySelector("#menu").classList.toggle("show");
	 
}
window.addEventListener('DOMContentLoaded',scrollText);
function scrollText() {
	document.addEventListener('mousemove', mouseMoveHandler);
	const circleType = new CircleType(document.getElementById("rotated")).radius(10);
}

window.addEventListener('scroll', bgChanger);
function bgChanger() {
	if (this.scrollY > this.innerHeight / 2) {
		document.body.classList.add("bg-active");
	} else {
		document.body.classList.remove("bg-active");

	}

	var introTitle = document.querySelector(".intro-title");
	var introPosition = introTitle.getBoundingClientRect().top;
	var screenPosition = window.innerHeight;

	if (introPosition < screenPosition / 1.1) {
		introTitle.classList.add('intro-title-appear');
	} else if (introPosition > screenPosition) {
		introTitle.classList.remove('intro-title-appear');
	}

  var cardImage = document.querySelectorAll(".card-img");

  for (let i = 0; i < cardImage.length; i++) {
    var cardImagePosition = cardImage[i].getBoundingClientRect().top;
    if (cardImagePosition < screenPosition / 1.1) {
      cardImage[i].classList.remove('img-disappear');
      cardImage[i].classList.add('img-anim');
    } else if (cardImagePosition > screenPosition) {
      cardImage[i].classList.remove('img-anim');
      cardImage[i].classList.add('img-disappear');
    }
  }
   

   


  var cardDesc = document.querySelectorAll(".card-description");
  for (let i = 0; i < cardDesc.length; i++) {
    var cardDescPosition = cardDesc[i].getBoundingClientRect().top;
      if (cardDescPosition < screenPosition / 1.1) {
      cardDesc[i].classList.remove('text-disappear');
      cardDesc[i].classList.add('text-anim');
    } else if (cardDescPosition > screenPosition) {
      cardDesc[i].classList.remove('text-anim');
      cardDesc[i].classList.add('text-disappear');
   }
  }
   
	const scrollText = document.querySelector('.move-on-scroll');
	scrollText.style.top = 130 - 0.8 * window.scrollY + "px";


	//const scrollText2 = document.querySelector('.move-on-scroll2');
	//scrollText2.style.top = 130 + 0.3 * window.scrollY + "px";


	var offset = window.scrollY;
	offset = offset * 0.1;

	const circularText = document.querySelector('.circular-text');
	circularText.style.transform = "rotate(" + offset + "deg)";

 
}


var textWrapper = document.querySelector('.logo .logo-letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '.logo .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.logo .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutElastic",
    duration: 2200,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  });



  	function mouseMoveHandler(e) {
  			x = e.pageX;
  			y = e.pageY;

  			const cursor = document.querySelector('.cursor');
  			cursor.setAttribute("style", "top: " + y + "px; left:" + x + "px;");

  	

  }

const button = document.querySelector(".btn");
button.addEventListener("mouseover", removeMouseMove);

button.addEventListener("mouseout", addMouseMove);

function removeMouseMove() {
	document.removeEventListener('mousemove', mouseMoveHandler);
}

function addMouseMove() {
	document.addEventListener('mousemove', mouseMoveHandler);
}
  



  
  

