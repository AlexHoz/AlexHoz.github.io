let Main = document.getElementById('Main');
let requestURL = 'https://alexhoz.github.io/Site/JSON/products.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var product = request.response;
  loadProd(product, 'task_1');
}


function loadProd(jsonObj, name) {
  var product = jsonObj[name];
      
  for (var i = 0; i < product.length; i++) {
    let htmlStr='';
    htmlStr += '<div class="block">';
    htmlStr += '<div class="desP">';
    htmlStr += '<img id="desPImg" src='+product[i].img+'></img>';
    htmlStr += '<p>'+product[i].name+'</p>';
    htmlStr += '</div><div class="buttonP">';
    htmlStr += '<button class="" type="button">';
    htmlStr += '<a href="">Получить</a>';
    htmlStr += '</button>';
    htmlStr += '</div> </div>';
    Main.innerHTML+= htmlStr;
  }
}

//request.onload();
