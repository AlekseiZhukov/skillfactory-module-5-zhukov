
const dataURL = "https://api.myjson.com/bins/jcmhn";

	function handleButton() {
		$.getJSON(dataURL, handleData); 
		// console.log(Data);// взять данные по dataUrl, вытащить их и передать в handleData
						}




function handleData(data) {
  // console.log(data["text"]);




  // кажется, какой-то из этих способов сработает
  // const var1 = $("input[name=var1]")[0].value()
  // const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
  let text = "Здесь могла быть ваша реклама";
// data["text"].forEach(
// console.log()
	)

	$("#result").text(text);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
