let overAllCountries=[];

window.onload = () => {
    document.getElementById("loading").style.display = "block";
    document.getElementById("display").innerHTML = "";

    fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca2')
        .then(response => response.json())
        .then(data => {
            overAllCountries = data;
            document.getElementById("loading").style.display = "none";
            displayCountries(overAllCountries);
        })
        .catch(error => {
            document.getElementById("loading").style.display = "none";
            document.getElementById("display").innerHTML =
                "<h4 class='text-danger text-center'>Failed to load data</h4>";
        });
};

function displayCountries(data){
 
            
 if (data.length === 0) {
    document.getElementById("display").innerHTML = `
      <div class="text-center mt-4">
        <h4>No countries found</h4>
      </div>
    `;
    return;
  }
       let output='<div class="row">';
        data.forEach(country=>{
           output+=`
           <div class="card col-md-3 m-2 p-2 shadow-sm">
             <img src="${country.flags.png}" class="card-img-top" alt="flag">
               <div class="card-body">
            <h5 class="card-title">Name:${country.name.common}</h5>
            <p class="card-text">Capital:${country.capital?country.capital[0]:'N/A'}</p>
            <p class="card-text">Region:${country.region}</p>
            <p class="card-text">Population:${country.population}</p>
             <p class="card-text"><strong>Code:</strong> ${country.cca2}</p>
           </div>
           </div>
            `;
           });
           output+='</div>';
           document.getElementById("display").innerHTML=output;
          }  
      


function searchCountry(){

    const input=document.getElementById("getInput").value.toLowerCase();
    const searchValue=document.getElementById("searchType").value;

    if(input==""){
        displayCountries(overAllCountries);
        return;
    }

    const filtered=overAllCountries.filter(country=>{
        if(searchValue=="name"){
            return country.name.common.toLowerCase().includes(input);
        }
        if (searchValue === "capital") {
  return country.capital?.some(cap =>
    cap.toLowerCase().includes(input)
  );
}

        if(searchValue=="region"){
            return country.region.toLowerCase().includes(input);
        }
         if(searchValue=="code"){
            return country.cca2.toLowerCase().includes(input);
        }
    });
    displayCountries(filtered);
}