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



// here is the start of ym code for the mandarin page for the DOM to print to
const mandarinHTMLcontainer = document.querySelector("#language-container")


MandarinMainHeaderString = `<h1 id = mandarinTitle>Mandarin</h1>`
MandarinPeopleHeaderString = `<h4 id = mandarinPeople>Mandarin People</h4>`
MandarinFunFactsHeaderString = `<h4 id = mandarinFunFacts>Fun Facts!</h4>`
MandarinCountriesSpokenString = `<h4 id = mandarinCountriesSpoken>Countries that use Mandarin</h4>`

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



  // the start of the column
const MandarinColumn =
`${MandarinMainHeaderString}
      <div class="container">
      <div class="row">


         
          <div class="col-sm">
          ${MandarinPeopleHeaderString}
         <ul> ${mandarinPeopleLoop()}</ul>
        </div>


        // here is the column containing all the data for the DOM to print
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
          <h6>Chinese Dialects:</h6>
          <ul class = :mandrin-list-5">${chineseDialectsloop()}</ul>

        </div>


        
        <div class="col-sm">
        ${MandarinCountriesSpokenString}
      <ul>${mandarinCountriesLoop()}</ul>
      </div>
      </div>
      </div>`
        

      

      mandarinHTMLcontainer.innerHTML = MandarinColumn

  
})




