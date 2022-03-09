const API_URL  = 'https://restcountries.com/v3.1/';
const cardSection = document.querySelector('#card-section')
const divSearhFlag = document.querySelector("#divSearchFlag")
const textInput = document.querySelector("#inputText");
const formulario = document.querySelector('#formulario')
const formSelect = document.querySelector('#selectForm')
const pagValue = document.querySelector('#numberPag')

pagination();

function pagination (){
    formSelect.addEventListener('submit', e=>{
        e.preventDefault();
        getFlags(); 
    })}

searchFlag();

function searchFlag(){    
    formulario.addEventListener('submit', e=>{
        e.preventDefault();
        getFlag();
        formulario.reset();
    })
}      


 function readFirstFiveArray(array){
    clearCardSection();
    array = array.filter((e,i) => i < pagValue.value );
    array.forEach(e => {
       const div = document.createElement('div')
       div.classList.add("card")
        div.innerHTML = `<header>
                        <h1 class="card-tittle">${e.name.common}</h1>
                        </header>
                        <main>
                        <img class="card-img" src="${e.flags.png}">
                        <p class="card-paragraph">Poblacion : <strong>${e.population}</strong></p>
                        </main>`
        cardSection.append(div)
    });

} 


function readArray(array){
    clearSeachFlag()
    array.forEach(e => {
       const div = document.createElement('div')
       div.classList.add("card")
        div.innerHTML = `<header>
                        <h1 class="card-tittle">${e.name.common}</h1>
                        </header>
                        <main>
                        <img class="card-img" src="${e.flags.png}">
                        <p class="card-paragraph">Poblacion : <strong>${e.population}</strong></p>
                        </main>`
        divSearhFlag.append(div)
    });

}  


function clearSeachFlag(){
    while(divSearhFlag.firstElementChild){
        divSearhFlag.removeChild(divSearhFlag.firstElementChild)}
}

function clearCardSection(){
    while(cardSection.firstElementChild){
        cardSection.removeChild(cardSection.firstElementChild)}
    } 

 const getFlags=()=>{
    fetch(`${API_URL}all`)
        .then(response => response.json())
        .then(data => readFirstFiveArray(data))   
}


const getFlag=()=>{
    fetch(`${API_URL}name/${textInput.value}`)
        .then(response => response.json())
        .then(data => readArray(data))   
}


 


