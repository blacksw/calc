const KEY = 'f057ead5ead8a32ca78e1281939305a6';
const URL = 'http://data.fixer.io/api/latest';
var base  = 'EUR';
var eur_to_mdl = 0;


function load(){
    var xhr =  new XMLHttpRequest();
    xhr.open('GET', URL + '?access_key=' + KEY + '&base=' + base);
    xhr.onload = function(){
        // CONVERT JSON to object 
        var data = JSON.parse(xhr.responseText);
        console.log(data.rates.MDL);
        eur_to_mdl = data.rates.MDL;

        // загружаем список валют в select
        var rates = Object.keys(data.rates);
        console.log(rates);
        for(var i = 0;i<rates.length;i++){
            rates[i]  // -> <option>
            var option = document.createElement('option')
            option.innerText = rates[i];
            .document.appendChild(option)
                 }

    }
    xhr.send();
}
load();
function convert(){
   var course = document.getElementById('mdl');
    var to_eur = document.getElementById('toeur');
    to_eur.value = course.value * eur_to_mdl ;
}