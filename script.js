fetch("products.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
        <article class="event">
            <h3 class="banda">${product.banda}</h3>
            <div>
            <p class="varos">${product.város}</p>
            <p class="helyszin">${product.helyszin}</p>
            </div>
            <p class="idopont">${product.dátum}</p>
            <div>
            <button class="jegy-btn"><a href="${product.jegy}"  target="_blank">jegy</a></button>
            <button class="esemny-btn"><a href="${product.esemény}"  target="_blank">esemény</a></button>
            </div>
        </article class="event"> 
      `;
   }
 
   placeholder.innerHTML = out;
});


