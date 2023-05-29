textarea = document.getElementById("textarea");
translate = document.getElementById("translate");
translater_box = document.getElementById('translater_box')
console.log(to_translate.value)

const translater = ()=>{ 



const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '7af9339b9emsh407bd7e4290a187p1482cfjsna978af313d95',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: `${textarea.value}`,
		target: 'hi',
		source: 'en'
	})
};




fetch(url,options)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {


translater_box.innerHTML =  response.data.translations[0].translatedText;



  });
}


translate.addEventListener("click", ()=>{

    translater()
English.style.display ='block'
Hindi.style.display ='block'

});
