let sideBar = document.querySelector('.header-container');
let dataValue = document.querySelector('.parent-card-container');
let menuBtns = document.querySelector('#menu');

let nav = closed;
menuBtns.addEventListener('click', ()=>{
      if (nav === closed) {
        sideBar.style.cssText = 'left:0px';
        menuBtns.textContent = 'close';
        nav = open;
      }else{
        sideBar.style.cssText = 'left:-500px';
        nav = closed;
        menuBtns.textContent = 'menu'
      }
})


function renderer() {
    portfolioData.forEach((e,i) => {
        let innerHt = `<div class="card-container">
           <img class="card-image" src="./portfolio/${e.image}.png" alt="" />
           <h2 class="card-text">${e.name}</h2>
           <div class="card-links">
             <a href="${e.source}" target="_blank">
                  <button class="card-source-btn">Source Code</button>
             </a>
             <a href="${e.preview}" target="_blank">
               <button class="card-preview-btn">Preview</button>
             </a>
           </div>
         </div>`;
         dataValue.insertAdjacentHTML("beforeend", innerHt);
    })
}
renderer();


