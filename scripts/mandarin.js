const mandarinData =  {
  name: "Mandarin",
  
  mandarinPeople: [ 
    "Herbert Hoover",
    "Koji Yano",
    "Mark Henry Rowswell",
    "Mark Zuckerberg",
    "Ming Na Wen",
    "John Cena",
    "Kevin Rudd",
    "Park Geun-hye",
    "Vanessa Branch",
    "Mira Sorvino",
    "Bob Woodruff",
    "Takeshi Kaneshiro",
    "Lou Jing"
  ],
  MandarinfunFacts: {
    relatedLanguages: ["Korean", " and Japanese"],
    lettersInAlphabet: 50000,
    numberOfSpeakers: "about 900 million",
    mandrinInfo: {
      dialectInfo: "Mandrin is one of many different Chinese dialects. It is mainly spoken in North and Southeast China",
      chineseDialects: ["Mandarin", "Wu", "Gan", "Xiang", "Hakka", "Yue", "Min"]
    }
  },
  MandarincountriesSpoken: [
    "China",
    "Singapore",
    "Taiwan"
  ],
  dictionary: {
    hello: "你好",
    goodbye: "再见",
    thankYou: "谢谢",
    goodEvening: "晚上好",
    howAreYou: "你好吗",
    whatsYourName: " 你叫什么名字"
  }
}

// we grabbing the language container 


const mandarinHTMLcontainer = document.querySelector("#language-container")



// here are all the individual titles and headings


const MandarinMainHeaderString = `<h3 id="mandarinTitle">Mandarin</h3>`
const MandarinPeopleHeaderString = `<button id="mandarinPeopleButton">People Who Speak Mandarin</button> 
<ul id="mandarin-people-list"></ul>`
const MandarinFunFactsHeaderString = `<button id="mandarinFunFacts">Fun Facts!</button>
<ul id="mandarin-fun-facts"></ul>`
const MandarinCountriesSpokenString = `<button id="mandarinCountriesSpoken">Countries that use Mandarin</button>
<ul id="mandarin-spoken"></ul>`

// event listeners for the buttons

const mandarinContainer = document.querySelector("#language-container")




//  build people loop
const mandarinPeopleLoop = function (){
var mandarinPeopleString = ""
for(let i =0; i < mandarinData.mandarinPeople.length; i ++ ){
   mandarinPeopleString += `<li>${mandarinData.mandarinPeople[i]}`
}
return mandarinPeopleString
}

// this is the fun facts stuff
const MandarinFunFactsLoop = function (){
var relatedLanguagesString = ""
for(let i =0; i < mandarinData.MandarinfunFacts.relatedLanguages.length; i ++ ){
   relatedLanguagesString += `<li>${mandarinData.MandarinfunFacts.relatedLanguages[i]}`
}
// letters in alphabet string
lettersInAlphabetString = `${mandarinData.MandarinfunFacts.lettersInAlphabet}`


// number of speakers string
numberOfSpeakersString = `${mandarinData.MandarinfunFacts.numberOfSpeakers}`

// dialect info string
dialectInfoString = `${mandarinData.MandarinfunFacts.mandrinInfo.dialectInfo}`

return relatedLanguagesString + lettersInAlphabetString + numberOfSpeakersString + dialectInfoString 
}




// build Dialect loop




//chinese dialects loop
const chineseDialectsloop = function(){
var chineseDialectsString = ""
for(let i =0; i < mandarinData.MandarinfunFacts.mandrinInfo.chineseDialects.length; i++ ){
   chineseDialectsString += `<li>${mandarinData.MandarinfunFacts.mandrinInfo.chineseDialects[i]}</li>`
}
return chineseDialectsString
}




// build countries loop
const mandarinCountriesLoop = function (){
var mandarinCountryString = ""
for(let i =0; i < mandarinData.MandarincountriesSpoken.length; i ++ ){
  mandarinCountryString += `<li>${mandarinData.MandarincountriesSpoken[i]}`
}
return mandarinCountryString
}

document.querySelector("#mandarin").addEventListener("click", function (){




// test the mandarin button once you click it, it should console.log "hello, world"
console.log(`Hello, world!`)





// the start of the column
const MandarinColumn =
`${MandarinMainHeaderString}
    <div class="container">
    <div class="row">


       
        <div class="col-sm">
        ${MandarinPeopleHeaderString}
       
      </div>

      <div class="col-sm">
      ${MandarinFunFactsHeaderString}
        <h6>Related Languages:</h6>
        <ul class="mandrin-list-1">${mandarinData.MandarinfunFacts.relatedLanguages}</ul>
        <h6>Letters in Alphabet:</h6>
        <ul class = "mandrin-list-2">${mandarinData.MandarinfunFacts.lettersInAlphabet}</ul>
        <h6>Number Of Speakers</h6>
        <ul class="mandrin-list-3">${mandarinData.MandarinfunFacts.numberOfSpeakers}</ul>
        <h4>Mandarin Info:</h4>
        <h6>Dialect Info:</h6>
        <ul class = "mandrin-list-4">${mandarinData.MandarinfunFacts.mandrinInfo.dialectInfo}</ul>
        <h4>Chinese Dialects:</h4>
        <ul class = "mandrin-list-5">${chineseDialectsloop()}</ul>

      </div>


      
      <div class="col-sm">
      ${MandarinCountriesSpokenString}
 
    </div>
    </div>
    </div>


    <section id ="translator-section">
<textarea name="" id="mandarinTranslatorInput" cols="30" rows="1"></textarea>
<button id="translateMandarin">Translate</button>
<button id="playWord">Play</button>
<div id ="translate-mandarin-return"> </div></section>`


// add buttons for the headers
// this one is for the notable people button
mandarinContainer.addEventListener("click", function(){
  if(event.target.id === "mandarinPeopleButton"){
    document.querySelector("#mandarin-people-list").innerHTML=mandarinPeopleLoop()
  }
})
// this one is for the fun facts!
// mandarinContainer.addEventListener("click", function(){
//   if(event.target.id === "mandarinFunFacts"){
//     document.querySelector("#mandarin-fun-facts").innerHTML=MandarinFunFactsLoop()
//   }
// })
// this one is for the countries spoken!
mandarinContainer.addEventListener("click", function(){
  if(event.target.id === "mandarinCountriesSpoken"){
    document.querySelector("#mandarin-spoken").innerHTML=mandarinCountriesLoop()
  }
})





// here is the code for the translator to work
const translateMandarinButton = document.querySelector("#language-container")
translateMandarinButton.addEventListener("click", event =>{
  if (event.target.id === "translateMandarin"){
    // if statement to look for input value 
const translateInput = document.querySelector("#mandarinTranslatorInput")
if (mandarinData["dictionary"][`${translateInput.value}`]!= null)
{

  alert(mandarinData["dictionary"][`${translateInput.value}`])

}
    else{alert("I dunno that word, sorry")}
}})




    mandarinHTMLcontainer.innerHTML = MandarinColumn
  

})




