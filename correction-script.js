function displayEnglish(){
          document.getElementById("titre").innerHTML = "Hello"
          document.getElementById("texte").innerHTML = "Text of the paragraph"
}

function displayFrench(){
          document.getElementById("titre").innerHTML = "Bonjour"
          document.getElementById("texte").innerHTML = "Texte du paragraphe"

}
document.getElementById("english").addEventListener("click",displayEnglish)
document.getElementById("french").addEventListener("click",displayFrench)


function displayWhite(){
                 
     
          document.getElementById("fonds").style.backgroundColor ="white"
          document.getElementById("texte").style.color ="black"
          document.getElementById("police1").style.color ="black"
          document.getElementById("titre").style.color ="black"

     
}
function displayDark(){
       
          document.getElementById("fonds").style.backgroundColor ="black"
          document.getElementById("texte").style.color ="white"
          document.getElementById("police1").style.color ="white"
          document.getElementById("titre").style.color ="white"

}


document.getElementById("clair").addEventListener("click", displayWhite)
document.getElementById("foncé").addEventListener("click", displayDark)