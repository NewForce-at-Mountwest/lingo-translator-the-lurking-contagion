const frenchData = {
  name: "French",
  notablePeople: [
    "Vincent Van Gogh",
    "Claude Monet",
    "Gustave Eiffel",
    "John Cena",
    "Coco Chanel"
  ],



  funFacts: {
    relatedLanguages: ["Latin", "Spanish", "Italian"],
    lettersInAlphabet: 26,
    numberOfSpeakers: "about 300 million"
  },
  countriesSpoken: [
    "Belgium",
    "Benin",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Canada",
    "Chad",
    "the Ivory Coast",
    "the Democratic Republic of the Congo",
    "Djibouti",
    "Equatorial Guinea",
    "France",
    "Haiti",
    "Luxembourg",
    "Madagascar",
    "Mali",
    "Monaco",
    "Niger",
    "Rwanda",
    "Senegal",
    "Seychelles",
    "Switzerland",
    "Togo and Vanuatu"
  ],

  dictionary: {
    hello: "Bonjour",
    goodbye: "Au revior",
    thankYou: "Merci",
    goodEvening: "Bon soir",
    howAreYou: "Ça va?",
    whatsYourName: "Comment tu t’appelles?"
  }
};

// querySelector navbar item and add function and event listener to navbar item
const frenchNav = document.querySelector("#french")
frenchBodyHTML=
  `<div class="french-container">
  <h1 id="french-title">Français</h1>
  <div class="row french-row">
  <div class="col-sm">
  <button id="french-people-header">Notable People</button>
  <ul id="french-people"></ul>
  </div>
  <div class="col-sm">
  <button id="french-funFacts-header">Fun Facts</button>
  <ul id="french-funFacts"></ul>
  </div>
  <div class="col-sm">
  <button id="french-countries-header">Countries</button>
  <ul id="french-countries"></ul>
  </div>
  </div>
  </div>
  <div id="french-translatorSection">
  <button id="french-translator-header">Translator</button>
  <section id="french-translator"></section>
  </div>`


const langContainer=document.querySelector("#language-container")
frenchNav.addEventListener("click",function(){
  langContainer.innerHTML=frenchBodyHTML
})

// querySelectors , click listerners, and functions to display language info grid

// notable people
langContainer.addEventListener("click",function(){
  const people = document.querySelector("#french-people")
  if (event.target.id==="french-people-header" && people.innerHTML === ""){
    for (i=0;i<frenchData.notablePeople.length;i++){
      if(frenchData.notablePeople[i]==="John Cena"){
        people.innerHTML += `<div class="cena french-info"><ul>${frenchData.notablePeople[i]}</ul></div>`
      }
      else{people.innerHTML += `<div class="french-info"><ul>${frenchData.notablePeople[i]}</ul></div>`}
  }
  }
})

// fun facts
langContainer.addEventListener("click",function(){
  const facts = document.querySelector("#french-funFacts")
  if (event.target.id==="french-funFacts-header"){
      facts.innerHTML = `<div class="french-info"><h5>Related Languages:</h5> <ul>Latin, Spanish, Italian</ul>
      <h5>Letters In Alphabet:</h5> <ul>26</ul>
      <h5>Number of Speakers:</h5> <ul>about 300 million</ul></div>` 
  }
})

// countries
langContainer.addEventListener("click",function(){
  const countries = document.querySelector("#french-countries")
  if (event.target.id==="french-countries-header" && countries.innerHTML === ""){
    for (i=0;i<frenchData.countriesSpoken.length;i++){
      countries.innerHTML += `<div class="french-info"><ul>${frenchData.countriesSpoken[i]}</ul></div>`
    }
  }
})
// translator
langContainer.addEventListener("click",function(){
  const translator = document.querySelector("#french-translator")
  if (event.target.id==="french-translator-header" && translator.innerHTML === ""){
    translator.innerHTML=  
    // <h4>Translator</h4>
    `<fieldset>
    <label for="text">French Text</label>
    <input type="text" id="french-text" placeholder="Text" />
    </fieldset>
    <button id="french-translate">Translate to French</button>
    ` 
  }})
  langContainer.addEventListener("click",function(){
    const frenchTextField = document.querySelector("#french-text")
    if (event.target.id === "french-translate"){
      
        if(frenchData["dictionary"][`${frenchTextField.value}`]!=null){
          alert(`${frenchData["dictionary"][`${frenchTextField.value}`]}`)

        } else{alert("I don't know that word, sorry.")}
        // clear text field here
        frenchTextField.value = ""
      }
    }
)
// say john cena NOT WORKING 
langContainer.addEventListener("click",function(){
  if(event.target.classList.contains("cena")){
  speechSynthesis.speak(new SpeechSynthesisUtterance('John Cena loves you'))}
})