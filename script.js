function afficherMeteo(ville) {
	const req = new XMLHttpRequest;
	const method = "GET";
	const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";


	req.open(method, url);
	req.onreadystatechange = function(event){
		if (this.readyState === XMLHttpRequest.DONE) {
			if (this.status === 200) {
				const response = JSON.parse(this.responseText);
				console.log(response)
				document.getElementById("temperature_label").textContent = response.main.temp;
				document.getElementById("ville").textContent = response.name;
			} else {
				console.log("status :" + this.status);
				window.alert("Il semble y avoir une erreur .. ^^' Veuillez choisir une autre ville")
			}
		}
	}
	req.send();
}
afficherMeteo("Trets")


document.getElementById("changer").addEventListener("click", function() {
	const villeChoisie = window.prompt("Veuillez choisis une ville");
	ville = villeChoisie;
	afficherMeteo(villeChoisie);
})