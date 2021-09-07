// alert("hi");


// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector("#input").addEventListener("keydown", function(e) {
//     if (e.code === "Enter") {
//         console.log("You clicked the form and pressed the enter button!");
//     }
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//     const inputField = document.getElementById("input");
//     inputField.addEventListener("keydown", function(e) {
//         if (e.code === "Enter") {
//             let input = inputField.value;
//             inputField.value = "";
//             output(input);
//     }
//   });
// });
// if (e.code === "Enter") {
//    let input = inputField.value;
//    console.log(`I typed '${input}'`);
//  }
//  function () {

 //remove all characters except word characters, space, and digits
   // let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");

 // 'tell me a story' -> 'tell me story'
 // 'i feel happy' -> 'happy'
 //   text = text
 //     .replace(/ a /g, " ")
 //     .replace(/i feel /g, "")
 //     .replace(/whats/g, "what is")
 //     .replace(/please /g, "")
 //     .replace(/ please/g, "");
 // }
 // const trigger = [
//0
// ["hi", "hey", "hello"],
//1
// ["how are you", "how are things"],
//2
// ["what is going on", "what is up"],
//3
// ["happy", "good", "well", "fantastic", "cool"],
//4
// ["bad", "bored", "tired", "sad"],
//5
// ["tell me story", "tell me joke"],
//6
// ["thanks", "thank you"],
//7
// ["bye", "good bye", "goodbye"]
// ];
//
// const reply = [
//0
// ["Hello!", "Hi!", "Hey!", "Hi there!"],
//1
// [
//     "Fine... how are you?",
//     "Pretty well, how are you?",
//     "Fantastic, how are you?"
//   ],
//2
// [
//     "Nothing much",
//     "Exciting things!"
//   ],
//3
// ["Glad to hear it"],
//4
// ["Why?", "Cheer up buddy"],
//5
// ["What about?", "Once upon a time..."],
//6
// ["You're welcome", "No problem"],
//7
// ["Goodbye", "See you later"],
// ];
//
// const alternative = [
//   "Same",
//   "Go on...",
//   "Try again",
//   "I'm listening...",
//   "Bro..."
// ];
// function compare(triggerArray, replyArray, text) {
//   let item;
//   for (let x = 0; x < triggerArray.length; x++) {
//     for (let y = 0; y < replyArray.length; y++) {
//       if (triggerArray[x][y] == text) {
//         items = replyArray[x];
//         item = items[Math.floor(Math.random() * items.length)];
//       }
//     }
//   }
//   return item;
// }
// function output(input) {
//   let product;
//   let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
//   text = text
//     .replace(/ a /g, " ")
//     .replace(/i feel /g, "")
//     .replace(/whats/g, "what is")
//     .replace(/please /g, "")
//     .replace(/ please/g, "");

//compare arrays
//then search keyword
//then random alternative

  // if (compare(trigger, reply, text)) {
  //   product = compare(trigger, reply, text);
  // } else if (text.match(/robot/gi)) {
  //   product = robot[Math.floor(Math.random() * robot.length)];
  // } else {
  //   product = alternative[Math.floor(Math.random() * alternative.length)];
  // }

  //update DOM
//   addChat(input, product);
// }
// const robot = ["How do you do, fellow human", "I am not a bot"];
// document.addEventListener("DOMContentLoaded", () => {
// ...
    // if (e.code === "Enter") {
    //     let input = document.getElementById("input").value;
    //     document.getElementById("user").innerHTML = input;
    //     output(input);
    //  }
  // });
// });
// function output(input) {
//     let product;
//     let text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, "");
// ...
    // document.getElementById("chatbot").innerHTML = product;
    // speak(product);

    //clear input value
//     document.getElementById("input").value = "";
// }
// function addChat(input, product) {
//   const mainDiv = document.getElementById("main");
//   let userDiv = document.createElement("div");
//   userDiv.id = "user";
//   userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
//   mainDiv.appendChild(userDiv);
//
//   let botDiv = document.createElement("div");
//   botDiv.id = "bot";
//   botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
//   mainDiv.appendChild(botDiv);
//   speak(product);
// }
// function speak(string) {
//   const u = new SpeechSynthesisUtterance();
//   allVoices = speechSynthesis.getVoices();
//   u.voice = allVoices.filter(voice => voice.name === "Alex")[0];
//   u.text = string;
//   u.lang = "en-US";
  // u.volume = 1; //0-1 interval
  // u.rate = 1;
  // u.pitch = 1; //0-2 interval
  var trigger = [
  	["hi","hey","hello"],
  	["how are you", "how is life", "how are things"],
  	["what are you doing", "what is going on"],
  	["how old are you"],
  	["who are you", "are you human", "are you bot", "are you human or bot"],
  	["who created you", "who made you"],
  	["your name please",  "your name", "may i know your name", "what is your name"],
  	["i love you"],
  	["happy", "good"],
  	["bad", "bored", "tired"],
  	["help me", "tell me story", "tell me joke"],
  	["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
  	["bye", "good bye", "goodbye", "see you later"]
  ];
  var reply = [
  	["Hi","Hey","Hello"],
  	["Fine", "Pretty well", "Fantastic"],
  	["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
  	["I am 1 day old"],
  	["I am just a bot", "I am a bot. What are you?"],
  	["Lipika", "My God"],
  	["I am Lirah", "I have a name called lirah"],
  	["I love you too", "Me too"],
  	["Have you ever felt bad?", "Glad to hear it"],
  	["Why?", "Why? You shouldn't!", "Try watching TV"],
  	["I will", "What about?"],
  	["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
  	["Bye", "Goodbye", "See you later"]
  ];
  var alternative = ["Haha...", "Eh..."];
  document.querySelector("#input").addEventListener("keypress", function(e){
  	var key = e.which || e.keyCode;
  	if(key === 13){ //Enter button
  		var input = document.getElementById("input").value;
  		document.getElementById("user").innerHTML = input;
  		output(input);
  	}
  });
  function output(input){
  	try{
  		var product = input + "=" + eval(input);
  	} catch(e){
  		var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi, ""); //remove all chars except words, space and
  		text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
  		if(compare(trigger, reply, text)){
  			var product = compare(trigger, reply, text);
  		} else {
  			var product = alternative[Math.floor(Math.random()*alternative.length)];
  		}
  	}
  	document.getElementById("chatbot").innerHTML = product;
  	speak(product);
  	document.getElementById("input").value = ""; //clear input value
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
  	utterance.voice = speechSynthesis.getVoices().filter(function(voice){return voice.name == "Tom";})[0];
  	utterance.text = string;
  	utterance.lang = "en-US";
  	utterance.volume = 1; //0-1 interval
  	utterance.rate = 1;
  	utterance.pitch = 2; //0-2 interval
  	speechSynthesis.speak(utterance);
  }
