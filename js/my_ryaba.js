
const dataURL = "https://api.myjson.com/bins/jcmhn";


$( document ).ready(function() {
  	$( "#button-fetch").click(function() {
  		$.getJSON(dataURL, function(data) {
  			let text = "";
 			for (let i = 0; i < data.text.length; i++) {
  					let item = data.text[i];
  					const var1 = $("input[name=var1]")[0].value;
  					const var2 = $("input[name=var2]")[0].value;
  					const var3 = $("input[name=var3]")[0].value;
  					const var4 = $("input[name=var4]")[0].value;
  					const var5 = $("input[name=var5]")[0].value;
  					const var6 = $("input[name=var6]")[0].value;
  					const var7 = $("input[name=var7]")[0].value;
  					item = item.replace("{var1}", var1);
  					item = item.replace("{var2}", var2);
  					item = item.replace("{var3}", var3);
  					item = item.replace("{var4}", var4);
  					item = item.replace("{var5}", var5);
  					item = item.replace("{var6}", var6);
  					item = item.replace("{speach}", var7);

  				text = text + item + '<br>';
  				$("#result").html(text);
  				 // console.log(text);
  			}
  		});
  	});
  });
 		// $("#result").text(text);




//Ниже то, что сделано после просмотра видео.

// const fields = [
// 	"var1",
// 	"var2",
// 	"var3",
// 	"var4",
// 	"var5",
// 	"var6",
// 	"speach"
// ];


// function getFormValues () {
// 	let obj = {};

// 	fields.forEach(function(item, index) {
// 		obj[item] = $("input[name=" + item + "]")[0].value
//  	});
//  	return obj;
// };


// function ranFunClikOnButton () { //функция нажатя на кнопку на странице сайти
// 	$( "#button-fetch").click(runUrlRequest);//находим id, перехватывает метод click, запускаем функцию запуска запроса
// };


// function runUrlRequest () { // выполняем запрос к сайту для получения данных
// 	$.getJSON(dataURL, handleObject) //полученные данные (в виде объекта) передаем функции handleObject
// };


// function handleObject(data) { //преобразовываем полученный объект в строки
// 	let text = "";//подготовили пустую переменную для нашего текста
// 	let obj = getFormValues();//запускаем функцию получения значений для замены
// 	data['text'].forEach(function(item, index) {
// 		for(key in obj) {
// 			item = item.replace("{" + key + "}", obj[key]);
// 		};
//  	text = text + item + '<br>'; //заполняем переменную text всем текстом из объекта
//  	 });
// 	$("#result").html(text);
// };

// $(document).ready(ranFunClikOnButton);		
 				
 
 	
 