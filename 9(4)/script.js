var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data = JSON.parse(request.response);
 var totalPopulation = data.filter((element) => element.region === "Asia")
    .map((country) => country.population)
    .reduce((population, element) => population + element);
  console.log(totalPopulation);
    
}
