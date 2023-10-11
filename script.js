//function changeColor(){
//    if (count < 0) {
//        document.getElementById("number").style.color = "red";
//    } else if (count > 0) {
//        document.getElementById("number").style.color = "green";
//    } else if (count ==0){
//        document.getElementById("number").style.color = "black";
 //   }
//}

function doTranslateEn(){
    let titre = "Hello"
    document.getElementById("titre").innerHTML = titre
}
document.getElementById("english").addEventListener("click", doTranslateEn);

function doTranslateFr(){
  let titre = "Bonjour"
  document.getElementById("titre").innerHTML = titre
}
document.getElementById("french").addEventListener("click", doTranslateFr);

function doTranslateFr(){
  let texte = "Texte du paragraphe"
  document.getElementById("texte").innerHTML = texte
}
document.getElementById("french").addEventListener("click", doTranslateFr);

function doTranslateEn(){
  let texte = "Text of the paragraph"
  document.getElementById("texte").innerHTML = texte
}

document.getElementById("french").addEventListener("click", doTranslateEn);






//function dotranslateEn(){
    
  //  changeWords();
    //document.getElementById("french").innerHTML = Hello
//}


//document.getElementById("titre").innerHTML("click", doTranslate);
//document.getElementById("english").addEventListener("click", doTranslateFr);
//document.getElementById("Reset").addEventListener("click", doReset);