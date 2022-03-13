var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data = JSON.parse(request.response);
    data.forEach((country) =>{
    console.log(`Name : ${country.name}, Capital : ${country.capital}, Flag : ${country.flag}`)
}
);
    
}
