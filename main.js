
const API = "https://gnews.io/api/v4/top-headlines?country=in&language=en&token=7c69ed2e5306da55da552f829fc61fac";
const AP = "https://gnews.io/api/v4/top-headlines?language=en&token=7c69ed2e5306da55da552f829fc61fac";
const AU="https://gnews.io/api/v4/top-headlines?language=en&country=in&topic=sports&token=7c69ed2e5306da55da552f829fc61fac";
const COAPI = "https://api.covid19api.com/summary";

const topheadline = document.getElementById('topheadline');
const topinworld = document.getElementById('topinworld');
const covidnews = document.getElementById('covidnews');
const aus =document.getElementById('aus');
const us =document.getElementById('us');
const uk =document.getElementById('uk');
const jp =document.getElementById('jp');

getnews(API);
getworldnews(AP);
getcovidnews(COAPI);
getAU(AU);




function getnews(url) {

  fetch(url).then(res => res.json()).then(data => {
    console.log(data.articles);
    shownews(data.articles);
  })
}


function shownews(data) {
  topheadline.innerHTML = "";
  data.forEach(news => {
    const { title, url, image, description } = news;
    const news1 = document.createElement('div');
    news1.classList.add('news');

    news1.innerHTML = ` 
        <section id="topheadline" style="background-color:  rgb(116, 116, 241);">
           
          <div class="md text-center"> <img class="img3 float-left" src="${image}">
        <div class="tit text-left">
          <h3 class="tit3" style="color:  #363535;"><b>${title}</b></h3>
          <hr
            style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);   border-top:3.5px solid  #363535">
        </div>
  
        <div class=" titp tit text-left">
          <p></p>
        </div>
  
        <div class=" tit1 tit text-left">
          <p>${description}</p>
        </div>
  
        <div class="tit4 tit text-left">
          <a href="${url}"><button class="btn1"> Read More >
  
            </button></a>
        </div>
        
        </div>
        </section>`;

    topheadline.appendChild(news1);
  });
}


function getworldnews(url) {
  fetch(url).then(res => res.json()).then(data => {
    console.log(data.articles);
    showworldnews(data.articles);
  })

}


function showworldnews(data) {
  topinworld.innerHTML = "";
  data.forEach(news => {
    const { title, url, image, description } = news;
    const news1 = document.createElement('div');
    news1.classList.add('news');

    news1.innerHTML = ` 
        <div id="topinworld" class="container my-4">
        <div class="container-fluid">
          <a  href="${url}">
            <h3 class="tit3" style="color:  rgb(116, 116, 241); margin-top: 35px; ">${title}</h3>
          </a>
          <hr
            style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);   border-top:1.5px solid  rgb(116, 116, 241)">
          <img width="55%" height="45%" src="${image}" alt="..."
            style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
    
    
        </div>
  
  
  
      </div>
 `;

    topinworld.appendChild(news1);
  });
}



function getcovidnews(url) {

  fetch(url).then(res => res.json()).then(data => {
    console.log(data.Countries[76]);
    document.getElementById('covidnews').innerHTML = `<div class="row text-center" id="covidnews">
    <div class="col">
      <div class="card1" id="new"
        style=" margin-left: 22px; height: 131px; width: 282px; margin-bottom: 13px;  background: rgba(116,116,241);">
        <h4>NEW CASES</h4>
        
        <h2 style="font-size: 97px; font-weight: bolder;">${data.Countries[76].NewConfirmed}</h2>
      
      </div>
    </div>
    <br>
    <div class="col">
      <div class="card1"
        style="margin-left: 22px;  height: 131px;width: 282px;margin-bottom: 13px; background: rgb(22, 209, 94);">
        <h4>RECOVERED CASES</h4>
       
        <h2 style="font-size: 97px; font-weight: bolder;">${data.Countries[76].NewRecovered}</h2>
       
      </div>
    </div>
    <br>
    <div class="col">
      <div class="card1" style="margin-left: 22px;  height: 131px;width: 282px; background: rgb(243, 52, 4);">
        <h4>DEATH</h4>
      
        <h2 style="font-size: 97px; font-weight: bolder;">${data.Countries[76].NewDeaths}</h2>
     
      </div>
    </div>

  </div>

  <br>
  <br>
  
</div> `;

  })
}



function getAU(url) {
  fetch(url).then(res => res.json()).then(data => {
    console.log(data.articles);
    showausnews(data.articles);
  })

}


function showausnews(data) {
  aus.innerHTML = "";
  data.forEach(news => {
    const { title, url, image, description } = news;
    const news1 = document.createElement('div');
    news1.classList.add('news');

    news1.innerHTML = ` 

  <section id="aus">
     
    <div class="md text-center"> <img class="img3 float-left" src="${image}">
    <div class="tit text-left">
      <h3 class="tit3" style="color:  #363535;"><b>${title}</b></h3>
      <hr
        style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);   border-top:3.5px solid  #363535">
    </div>

    <div class=" titp tit text-left">
      <p></p>
    </div>

    <div class=" tit1 tit text-left">
      <p>${description}</p>
    </div>

    <div class="tit4 tit text-left">
      <a href="${url}"><button class="btn1"> Read More >

        </button></a>
    </div>
    
    </div>
    </section>
  

 `;

    aus.appendChild(news1);
  });
}



