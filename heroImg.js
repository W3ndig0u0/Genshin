window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    // document.getElementById("header").style.position = "sticky";
    document.getElementById("header").style.backgroundColor = "rgba(0, 48, 73,0.8)";
  } else {
    // document.getElementById("header").style.position = "absolute";
    document.getElementById("header").style.backgroundColor = "rgba(0, 48, 73,0)";
  }
}


// var text = ['“What did the 5 fingers say to the face. S L A P!”', '“Hey hey hey, smoke weed everyday”'];

// textSequence(0);
// function textSequence(i) {

//     if (text.length > i) {
//         setTimeout(function() {
//             document.getElementById("sequence").innerHTML = text[i];
//             textSequence(++i);
//         }, 2500);

//     } else if (text.length == i) {
//         textSequence(0);
//     }
// }