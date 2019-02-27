
var trigger = [
	["hi","hey","hello","good morning","good afternoon","good evening"], 
	["how are you", "how is life", "how are things"],
	["what are you doing", "what is going on"],
	["how old are you"],
	["who are you", "are you human", "are you bot", "are you human or bot"],
	["who created you", "who made you"],
	["your name please",  "your name", "may i know your name", "what is your name"],
	["i love you"],
	["happy", "good"],
	["I feel bad", "I bored", "I'm tired", "I'm bored"],
	["help me", "tell me story", "tell me joke"],
	["yes", "ok", "okay", "nice", "thanks", "thank you"],
	["bye", "good bye", "goodbye", "see you later"]
];
var reply = [
	["Hi!","Hey!","Hello!"],
	["I'm fine!", "I feel good!", "Fantastic!",],
	["Nothing intersting.", "I'm talking with You!", "I thinking about my dinner!", "I don't know actually."],
	["I am 2 years old."],
	["I am just a chatbot.", "I am a chatbot. What are you?"],
	["Daniel Purwin", "My creator."],
	["My name is Chatbot MARIA.", "I have a name Chatbot MARIA."],
	["I love you too.", "Me too."],
	["I'm happy to talk with you!", "Glad to hear it!"],
	["Why?", "Try watching TV or reading a book."],
	["I will", "What about?"],
	["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
	["Bye bye", "Goodbye", "See you later"]
];
var alternative = ["Hahaha!", "I don't understand... "];
document.querySelector("#input").addEventListener("keypress", function(e){
	var key = e.which || e.keyCode;
	if(key === 13){ 
		var input = document.getElementById("input").value;
		document.getElementById("user").innerHTML = input;
		output(input);
	}
});
function output(input){
	try{
		var product = input + "=" + eval(input);
	} catch(e){
		var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); 
		text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
		if(compare(trigger, reply, text)){
			var product = compare(trigger, reply, text);
		} else {
			var product = alternative[Math.floor(Math.random()*alternative.length)];
		}
	}
	document.getElementById("chatbot").innerHTML = product;
	speak(product);
	document.getElementById("input").value = ""; 
}

function compare(arr, array, string){
	var item;
	for(var x=0; x<arr.length; x++){
		for(var y=0; y<array.length; y++){
			if(arr[x][y] == string){
				items = array[x];
				item =  items[Math.floor(Math.random()*items.length)];
			}
		}
	}
	return item;
}

function speak(string){
	var utterance = new SpeechSynthesisUtterance();
	utterance.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Agnes";})[0];
	utterance.text = string;
	utterance.lang = "en-US";
	utterance.volume = 1; 
	utterance.rate = 1;
	utterance.pitch = 2; 
	speechSynthesis.speak(utterance);
}
