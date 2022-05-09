document.addEventListener("click", e => {

  let leftHandle = document.getElementById("prev");
  let rightHandle = document.getElementById("next");
  let slider = document.querySelector("slider");

  var translateX = 30;

  const inViewList = [];

  if (e.target == leftHandle){
    CheckSliderInView();
    InViewArray();
    MoveLeft();
  }

  else if(e.target == rightHandle){
    CheckSliderInView();
    InViewArray();
    ResizeSliderSize();    
    MoveRight();
  }

  function MoveRight(){
    // translateX = Math.round(translateX + 30)
    // console.log(e.target.parentNode.childNodes[3].children)
    document.getElementById("slider").style.transform = "translateX(-" + translateX + "%)";
  }

  function MoveLeft(){
    translateX = translateX - translateX;
    document.getElementById("slider").style.transform = "translateX(" + translateX + "%)";
  }

  function InViewArray(){
    for (let index = 0; index < document.querySelectorAll(".InView").length; index++) {
      inViewList[index] = document.querySelectorAll(".InView")[index]
    }
    // console.log(inViewList);
  }

  function ResizeSliderSize(){
    for (let index = 0; index < inViewList.length; index++) {
      // console.log(inViewList[index]);
      inViewList[index].style.transform = "scale(1-"+index +")";
    }
  }



 function CheckSliderInView(){
   for (let index = 0; index < e.target.parentNode.childNodes[3].children.length; index++) {
    // console.log(isInViewport(e.target.parentNode.childNodes[3].children[index]));

    if (isInViewport(e.target.parentNode.childNodes[3].children[index]))
    {
      e.target.parentNode.childNodes[3].children[index].classList.add('InView');
    }

    else if (!isInViewport(e.target.parentNode.childNodes[3].children[index])) 
    {
      e.target.parentNode.childNodes[3].children[index].classList.remove('InView');
    }
   }
 }

 function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
})