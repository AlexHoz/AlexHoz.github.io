let Main = document.getElementById('Main');
let requestURL = 'https://alexhoz.github.io/products.json';
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
    let htmlStr = '<div class="block"><div class="desP"><img id="desPImg"';
    htmlStr += 'src='+product[i].img+'></img>';
    htmlStr += '<p>'+product[i].name+'</p></div><div class="buttonP"><button class="" type="button"><a href="">Получить</a></button></div> </div>';
    Main.innerHTML+= htmlStr;
  }
}

//request.onload();