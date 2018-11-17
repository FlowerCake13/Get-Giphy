var button = document.getElementById('submit');
var input = document.getElementById('text');
var result = document.getElementById('result')

button.addEventListener('click', function(e){
	result.innerHTML = ""
	e.preventDefault()
	console.log(input.value)
	var xhr = new XMLHttpRequest();
	xhr.open('GET', "http://api.giphy.com/v1/gifs/search?q=" + input.value + "&api_key=SFvhAK7TNBL8XH6P7n9Y3gYXA1S3LbTb");
	xhr.send();
	xhr.addEventListener("readystatechange", processReq, false);

	console.log(input.value)
	function processReq(e){
		//console.log(JSON.parse(xhr.response).data)
			for (var i = 0; i < JSON.parse(xhr.response).data.length; i++) {
				//console.log(JSON.parse(xhr.response).data[i].url)
				var gif = document.createElement('iframe')
				gif.src = JSON.parse(xhr.response).data[i].embed_url
				result.appendChild(gif)
			}
	}
	input.value = ""
})

