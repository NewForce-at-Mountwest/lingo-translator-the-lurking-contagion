const spanishData = {
    name: "Spanish",
    notablePeople: [
      "Antonio Banderas",
      "JOHN CENA",
      "Enrique Iglesias",
      "Rita Moreno",
      "Penelope Cruz"
    ],
    funFacts: {
      relatedLanguages: ["Catalan", "Italian", "French", "Portuguese", "Romanian"],
      lettersInAlphabet: 27,
      numberOfSpeakers: "more than 437 million"
    },
    countriesSpoken: [
      "Argentina",
      "Bolivia",
      "Chile",
      "Colombia",
      "Costa Rica",
      "Cuba",
      "Dominican Republic",
      "Equador",
      "El Salvador",
      "Equatorial Guinea",
      "Guetemala",
      "Honduras",
      "Mexico",
      "Nicaragua",
      "Panama",
      "Mali",
      "Monaco",
      "Paraguay",
      "Peru",
      "Puerto Rico",
      "Spain",
      "Uruguay",
      "Venezuela"
    ],
    dictionary: {
      hello: "Hola",
      goodbye: "Adiós",
      thankYou: "Gracias",
      goodEvening: "Buena noches",
      howAreYou: "¿cómo estás?",
      whatsYourName: "cuál es tu nombre?"
    }
  };

const SpanishHeadersPeople = `<h4>Notable People</h4>`
const SpanishHeadersFunFacts = `<h4>FunFacts</h4>`
const SpanishHeadersCountries = `<h4>Countries Spoken</h4>`
function notablePeople(){
  var peoplearray=""
  for(var i=0;i<spanishData.notablePeople.length;i++){
    if(spanishData.notablePeople[i] === "JOHN CENA"){
      
    // spanishData.notablePeople[i].classList.add("cena")
    peoplearray += `<li class="cena">${spanishData.notablePeople[i]}</li>`
  }else{
    peoplearray += `<li>${spanishData.notablePeople[i]}</li>`
   
  }
 
} return peoplearray}
function countriesSpoken(){
  var countriesarray=""
  for(var i=0;i<spanishData.countriesSpoken.length;i++){
    countriesarray += `<li>${spanishData.countriesSpoken[i]}</li>`
   
  }
  return countriesarray
}
function relatedLanguages(){
  var relatedLanguages =""
for(var i=0;i<spanishData.funFacts.relatedLanguages.length;i++){
  relatedLanguages += `<li>${spanishData.funFacts.relatedLanguages[i]}</li>`
}
return relatedLanguages
}
const Collumn = `
<h1 id = "title">Spanish</h1>
<div class="container">
<div class="row">
  <div id= "spanishcollumn1" class="col-sm">
  ${SpanishHeadersPeople}
   <ul>${notablePeople()}</ul>
  </div>
  <div id = "spanishcollumn2" class="col-sm">
  ${SpanishHeadersFunFacts}
 <h5>Related Languages</h5>
 <ul>${relatedLanguages()}</ul>
 <h5>The Number of letters in the Alphabet</h5>
 <li>${spanishData.funFacts.lettersInAlphabet}</li>
 <h5>The Number of People who speak Spanish</h5>
 <li>${spanishData.funFacts.numberOfSpeakers}</li>
  </div>
  <div id = "spanishcollumn3" class="col-sm">
  ${SpanishHeadersCountries}
  <ul>${countriesSpoken()}</ul>
  </div>
</div>
</div>
<textarea name="translator" id="translator" cols="30" rows="10"></textarea>`
const Spanish = document.querySelector("#spanish")
const Spanishcontainer = document.querySelector("#language-container")
Spanish.addEventListener("click", function (){
  Spanishcontainer.innerHTML = Collumn
})


//   ${spanishData.countriesSpoken}
//   </div>
// </div> ${spanishData.funFacts.relatedLanguages}
// ${spanishData.funFacts.lettersInAlphabet}
// ${spanishData.funFacts.numberOfSpeakers}
// </div>    ${spanishData.notablePeople}
// </div>
// <div class="col-sm2">

// Spanishcontainer.addEventListener("click", function (){
//   if (event.target.classList = "cena"){
//     speechSynthesis.speak(new SpeechSynthesisUtterance('John Cena!'))}
// })