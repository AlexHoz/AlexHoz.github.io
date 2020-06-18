let Main = document.getElementById('Main');
let requestURL = './JSON/products.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var product = request.response;
  loadProd(product, 'task_1_name','task_1');
  Main.innerHTML+= '<hr style="width: 80%;">';
  loadProd(product, 'task_2_name','task_2');
  Main.innerHTML+= '<hr style="width: 80%;">';
  loadProd(product, 'task_3_name','task_3');
  Main.innerHTML+= '<hr style="width: 80%;">';
  loadProd(product, 'task_4_name','task_4');
  Main.innerHTML+= '<hr style="width: 80%;">';
  loadProd(product, 'task_5_name','task_5');
  Main.innerHTML+= '<hr style="width: 80%;">';
  loadProd(product, 'task_6_name','task_6');
  Main.innerHTML+= '<hr style="width: 80%;">';
  loadProd(product, 'task_7_name','task_7');
  Main.innerHTML+= '<hr style="width: 80%;">';
  loadProd(product, 'task_8_name','task_8');
}


function loadProd(jsonObj, name, nameCategory) {
  var product = jsonObj[nameCategory];
  let htmlStr='';
  htmlStr += '<p class="nameCategory">' + jsonObj[name] +'</p>';
  htmlStr += '<div class="Category">';
  for (var i = 0; i < product.length; i++) {
    htmlStr += '<div class="block">';
    htmlStr += '<div class="desP">';
    htmlStr += '<img id="desPImg" src='+product[i].img+'></img>';
    htmlStr += '<p>'+product[i].name+'</p>';
    htmlStr += '</div>';
    htmlStr += '<div class="buttonP">';
    htmlStr += '<button class="" type="button">';
    htmlStr += '<a href="'+ product[i].url +'">Получить</a>';
    htmlStr += '</button>';
    htmlStr += '</div> </div>';
    
  }
  if(product.length == 0){
    htmlStr += '<p style="text-align:  center; font-size:60px; padding: 50px;">Упс... Кажется товары отсутвуют</p>';
  }
  htmlStr += '</div>'
  Main.innerHTML+= htmlStr;
}
