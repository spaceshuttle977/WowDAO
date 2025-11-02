fetch("demand.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
       out += `
          <tr>
             <td>${product.YEAR}</td>
             <td>${product.Real}</td>
             <td>${product.Predictions}</td>
          </tr>
       `;
    }

   placeholder.innerHTML = out;
});
