
  const hindiData = {
    name: "Hindi  ",
    notablePeople: [
      "Nelly Furtado",
      "John Cena",
      "Natalie Di Luccio",
      "Anush Stepanyan",
      "Will Smith",
      "Hugh Jackman",
      "Julia Roberts",
      "Ben Kingsley",
      "Dev Patel"

    ],
    funFacts: {
      relatedLanguages: `Hindi is not really one language, rather it is a "catchall" name for over 300 different languages, like Chinese, which is another generic name for different languages.`,
      lettersInAlphabet: 50,
      numberOfSpeakers: "about 341 million"
    },
    countriesSpoken: [
      "India",
      "Nepal",
      "Fiji",
      "Pakistan",
      "Trinidad and Tobago",
      "Singapore",
      "South Africa",
      "Mauritius",
      "Guyana",
      "Suriname"
    ],
    dictionary: {
      hello: {
        hindi: "नमस्ते",
        englishPronunciation: "namaste"},
      goodbye: {
        hindi: "अलविदा",
        englishPronunciation:"alavida"
      },
      thankYou: {
        hindi: "धन्यवाद",
        englishPronunciation: "dhanyavaad"

      },
      goodEvening: {
        hindi: "सुसंध्या",
        englishPronunciation: "susandhya"
      },
      howAreYou: {
        hindi: "क्या हाल है",
        englishPronunciation: "kya haal hai"
      },
      whatsYourName: {
        hindi: "तुम्हारा नाम क्या हे",
        englishPronunciation: "tumhaara naam kya he"
    }
    }
  };

  // create nav bar link:
  // grab link from nav bar
  const hindiMainLink = document.querySelector("#hindi")
  
  // build event listener for nav bar click
// hindiMainLink.addEventListener("click", function(){
// target container
const hindimainContainer = document.querySelector("#language-container")
// write Header String
hindiHeaderString = `<h1 id="hindi-main-header">Hindi</h1>`


// write column headers
const hindiPeopleHeaderButton = `<button id="hindi-people-header">Notable People</button>
<ul id="hindi-people-list"></ul>`
const hindiFunFactsHeaderButton = `<button id="hindi-facts-header">Fun Facts</button><ul id="hindi-fun-list"></ul>`
const hindiCountriesHeaderButton = `<button id="hindi-countries">Countries Spoken</button><ul id="hindi-countries-list"></ul>`


// build notable people loop that prints object into a list
const hindiPeopleloop = function(){
var hindiPeopleString = ""
  for (let i= 0; i< hindiData.notablePeople.length; i++){
    
   hindiPeopleString += `<li>${hindiData.notablePeople[i]}</li>`
  }
  return hindiPeopleString
}

//build fun facts loop that prints objects to a list
const hindiFunFact = function(){
const hindiFunFactString = `<h5>RelatedLanguages</h5><li>${hindiData.funFacts.relatedLanguages}</li><h5>Letters in the Alphabet</h5><li>${hindiData.funFacts.lettersInAlphabet}</li><h5>Number of Speakers</h5><li>${hindiData.funFacts.numberOfSpeakers}</li>`
return hindiFunFactString  
}

  // build countries spoken loop
const hindicountriesloop = function(){
  var hindicountriesArray = ""
    for (let i= 0; i< hindiData.countriesSpoken.length; i++){
      
     hindicountriesArray += `<li>${hindiData.countriesSpoken[i]}</li>`
    }
    return hindicountriesArray
  }

const hindiContainer = document.querySelector("#language-container")


// add click event to people header button
 hindiContainer.addEventListener("click", function(){
if(event.target.id === "hindi-people-header"){
document.querySelector("#hindi-people-list").innerHTML=hindiPeopleloop()}
})

// add click event to countriies header button
hindiContainer.addEventListener("click", function(){
  if(event.target.id === "hindi-countries"){
document.querySelector("#hindi-countries-list").innerHTML=hindicountriesloop()}
})
  
// add click event to fun facts button
hindiContainer.addEventListener("click", function(){
  if(event.target.id === "hindi-facts-header"){
document.querySelector("#hindi-fun-list").innerHTML=hindiFunFact()}
})



  //build main link event listener 
hindiMainLink.addEventListener("click", function(){

// set column html
hindiColumn = `
${hindiHeaderString}
<div id="hindi-container class="container">
  <div id="hindi-row" class="row">
    <div id= "hindi-div" class="col-sm">
    ${hindiPeopleHeaderButton}  
    </div>
    <div id = "hindi-div" class="col-sm">
    ${hindiFunFactsHeaderButton}
    </div>
    <div id = "hindi-div" class="col-sm">
    ${hindiCountriesHeaderButton}  
    </div>
  </div>
</div>


<section id ="hindi-translator-section">
<textarea name="" id="translatorInput" cols="30" rows="1"></textarea>
<button id="translateHindi">Translate</button>
<button id="hindiPlayButton">Play</button>
<div id ="translate-return"> </div></section>`

// create event click for translate button 
const translateButton = document.querySelector("#language-container")
translateButton.addEventListener("click", event =>{
    if (event.target.id === "translateHindi"){
// if statement to look for input value
const translateInput = document.querySelector("#translatorInput")
if(hindiData["dictionary"][`${translateInput.value}`]!= null)
{
// create output HTML string
  // translateOutputHTML = ""
// target output location
  // const translateOutputBox = document.querySelector("#translate-return")
  // output value for translation 
//  translateOutputHTML =
  alert(hindiData["dictionary"][`${translateInput.value}`]["hindi"])
// translateOutputBox.innerHTML = translateOutputHTML
}
// else statement for null value
     else{alert("I don't know that word")}
    }
})






hindimainContainer.innerHTML= hindiColumn


})
  // build function to load page

