let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET",'https://restcountries.com/v3.1/all')
xhr.send();
xhr.onload=function(){
    const data=JSON.parse(xhr.response);
    console.log(data);
    console.log(xhr.status);
    for(let i=0;i<data.length;i++){
        console.log("1 countries_name:",data [i].name.common);
        console.log("2 flag:",data [i].flags.png);
        console.log("3 region:",data [i].region);
        console.log("4 sub_region:",data [i].subregion);
        console.log("5 population:",data [i].population);
        //commit changes
    }
};l