const hamburgerBtn = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");
const dropdown = document.getElementById("dropdown")
const dropdownContent = document.getElementById("dropdown-content")
const sliderBtns = document.getElementById("slider-btns")
console.log(sliderBtns)

function toggleHamburger() {
  navMenu.classList.toggle("show");
}
dropdown.onmouseover = function () {
  dropdownContent.classList.add('dropdown-content-active')
}

function showMenu() {
  if (dropdownContent.classList.contains('dropdown-content-active')) {
    dropdownContent.classList.remove('dropdown-content-active')
  } else {
    dropdownContent.classList.add('dropdown-content-active')
  }
}

hamburgerBtn.addEventListener("click", toggleHamburger);
dropdown.addEventListener('click', showMenu)



function action1() {
  hideAll();
  var img1 = document.getElementById('img1');
  img1.classList.add("active")
  var btn1 = document.getElementById('1');
  btn1.classList.add("active")
}

function action2() {
  hideAll();
  var img2 = document.getElementById('img2');
  img2.classList.add("active")
  var btn2 = document.getElementById('2');
  btn2.classList.add("active")
}

function action3() {
  hideAll();
  var img3 = document.getElementById('img3');
  img3.classList.add("active")
  var btn3 = document.getElementById('3');
  btn3.classList.add("active")

}
function action4() {
  hideAll();
  var img4 = document.getElementById('img4');
  img4.classList.add("active")
  var btn4 = document.getElementById('4');
  btn4.classList.add("active")

}
function action5() {
  hideAll();
  var img4 = document.getElementById('img5');
  img4.classList.add("active")
  var btn5 = document.getElementById('5');
  btn5.classList.add("active")
}

function hideAll() {
  var images = document.querySelectorAll('.img>img');
  var btns = document.querySelectorAll('.slider-btns>div');
  for (var i = 0; i < images.length; ++i) {
    images[i].classList.remove("active")
    btns[i].classList.remove("active")
  }
}

sliderBtns.addEventListener('click', (e) => {
  // console.log(e.target.id)
  switch (Number(e.target.id)) {
    case 1:
      action1()
      break;
    case 2:
      action2()
      break;
    case 3:
      action3()
      break;
    case 4:
      action4()
      break;
    case 5:
      action5()
      break;
    default:
      console.log('sorry')
  }
})