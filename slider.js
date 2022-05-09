let leftHandle = document.getElementById("prev");
let rightHandle = document.getElementById("next");
let slider = document.querySelector("slider");

var translateX = 30;

var maxX = 30*5;

var inViewList = [];

document.addEventListener("click", e => {
  
  if (e.target == leftHandle) {
    CheckSliderInView();
    MoveLeft();
  }

  else if (e.target == rightHandle) {
    CheckSliderInView();
    MoveRight();
  }


  // !Körs funktionen om en .box har ändrats, den resizar boxen
  InViewArray();
  ResizeSliderSize();


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

  // !ger klassen InView till de objekten som är i skärmen
  function CheckSliderInView() {
    for (let index = 0; index < e.target.parentNode.childNodes[3].children.length; index++) {
      // console.log(isInViewport(e.target.parentNode.childNodes[3].children[index]));

      if (isInViewport(e.target.parentNode.childNodes[3].children[index])) {
        e.target.parentNode.childNodes[3].children[index].classList.add('InView');
      }

      else if (!isInViewport(e.target.parentNode.childNodes[3].children[index])) {
        e.target.parentNode.childNodes[3].children[index].classList.remove('InView');
      }
    
    }
  }

  function InViewArray() {
    for (let index = 0; index < document.querySelectorAll(".InView").length; index++) {
      inViewList[index] = document.querySelectorAll(".InView")[index]
    }
  }


  // !Resizar saker
  function ResizeSliderSize() {
    for (let index = 0; index < inViewList.length; index++) {
      // console.log(inViewList[index]);
      // const reverseList = inViewList.reverse();

      inViewList[index].style.transform = "scale(0." + (9 - index) + ")";
    }
  }

  // !Kollar om objekten är i skärmen
  function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.left >= 0 &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

})