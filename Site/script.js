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
    htmlStr += '<a href="">Получить</a>';
    htmlStr += '</button>';
    htmlStr += '</div> </div>';
    
  }
  htmlStr += '</div>'
  Main.innerHTML+= htmlStr;
}

//request.onload();
/*
        
            
            <div class="block">
                <div class="desP">
                    <img id="desPImg" src="img/ProjectPreview/task1(0).png" alt="task1"></img>
                    <p>Решалка кв. уравнений (для консоли)</p>
                </div>
                <div class="buttonP">
                    <button class="" type="button"><a href="">Получить</a></button>
                </div>
            </div>
        </div>
*/