fetch("card.json")
.then(function(response){
   return response.json();
})
.then(function(cards){
   let placeholder = document.querySelector(`#card-output`);
   let out = "";
   for(let card of cards){
      out += `
      <section >
      <div class="bekezdes">
         <div class="card">
         <img class="card-img" src="${card.kép}" alt="Krubi">
            <div class="card-cim">${card.felépő}</div>  
         </div>
         <div class="icons">
            <a href="${card.youtube}"><i class="fa-brands fa-square-facebook "></i></a>
            <a href="instagram.com"><i class="fa-brands fa-square-instagram instagram"></i></a>
            <a href="youtube.com"><i class="fa-brands fa-youtube"></i></a>
            <div class='image' style='background:url(\"" . ${card.kép} . "\")'></div>
         </div>
      </div>
      </section>
 
      `;
   }
   placeholder.innerHTML = out;
});

