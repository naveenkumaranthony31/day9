var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data = JSON.parse(request.response);
    let res=data.filter((element)=>element.region==="Asia");
    for(let i=0;i<res.length;i++)
    console.log(res[i].name);
    
}
