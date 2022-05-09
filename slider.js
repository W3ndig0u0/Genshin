let leftHandle = document.getElementById("prev");
let rightHandle = document.getElementById("next");
let sliderContainer = document.getElementById("sliderContainer");

var translateX = 30;

var maxX = translateX * 5;


// !ger klassen InView till de objekten som är i skärmen
function CheckSliderInView() {
  for (let index = 0; index < sliderContainer.childNodes[3].children.length; index++) {

    if (isInViewport(sliderContainer.childNodes[3].children[index])) {
      sliderContainer.childNodes[3].children[index].classList.add('InView');
    }

    else if (!isInViewport(sliderContainer.childNodes[3].children[index])) {
      sliderContainer.childNodes[3].children[index].classList.remove('InView');
    }
  
  }
}

// !Kollar om objekten är i skärmen
function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.left >= 0 &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// !Resizar saker
function ResizeSliderSize() {
  for (let index = 0; index < document.querySelectorAll(".InView").length; index++) {
    document.querySelectorAll(".InView")[index].style.transform = "scale(0." + (9 - index) + ")";
  }
  console.log(document.querySelectorAll(".InView"))
}

function Timer(){
  setTimeout(function(){
    // !Körs funktionen om en .box har ändrats, den resizar boxen
    CheckSliderInView();
    ResizeSliderSize();
    console.log("aaa")
  }, 600);
}


Timer();

document.addEventListener("click", e => {
  if (e.target == leftHandle) {
    CheckSliderInView();
    MoveLeft();
    Timer();
  }

  else if (e.target == rightHandle) {
    CheckSliderInView();
    MoveRight();
    Timer();
  }


  function MoveRight() {
  // !Går tillbaka till 1 när man är på den sista
  if (translateX >= maxX) 
  {
    document.getElementById("slider").style.transform = "translateX(0%)";
    translateX = 30;
  }

  else{
    translateX = Math.round(translateX + 30)
    document.getElementById("slider").style.transform = "translateX(-" + translateX + "%)";
  }
  }

  // !När man trycker på prev
  function MoveLeft() {

    // ?kommentaren är om att gå tillbaka till sista slidern
    // if (translateX >= 0) 
    // {
    //   document.getElementById("slider").style.transform = "translateX(-"+ maxX +"%)";
    //   translateX = 30;
    // }

    // else if(translateX >= -maxX && translateX <= maxX)
    // {
    //   translateX = Math.round(translateX + 30)
    //   document.getElementById("slider").style.transform = "translateX(-" + translateX + "%)";
    // }
    
    // else{
      translateX = Math.round(translateX - 30)
      document.getElementById("slider").style.transform = "translateX(-" + translateX + "%)";
    // }
  }


})