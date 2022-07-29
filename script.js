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
            <p class="helyszin">${product.helyszin}</p>
            <p class="idopont">${product.dátum}</p>
            <button class="jegy-btn">jegy</button>
            <button class="esemny-btn">esemény</button>
        </article class="event"> 
      `;
   }
 
   placeholder.innerHTML = out;
});