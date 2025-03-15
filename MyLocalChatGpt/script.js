// document.querySelector(".check").addEventListener("click", function(){
//     let show = document.querySelector(".open").value; // Get the value entered by the user
//     const Questions = ["Hi","who are you?", "what is the time?", "Can you do better than chatGpt?",   "No please"];
//     const Ans = [
//         "hello, how can I be of help?",
//         "My name is E.A.I am an AI designed by Emmanuel Arinze to serve as a support system and reading assistant.", 
//         "I currently do not have access to your time zone, should I hack into your time zone and get the answer to your question?. this involves allowing me to access your computer", 
//         "I am not designed to surpass other AI platforms, but I can provide answers based on the best of my knowledge."
//        ,"what else can I help you with?"
//     ];

//     // Check if 'show' (input text) matches any question in the 'Questions' array
//     const ind = Questions.indexOf(show); // Find the index of the question
//     if (ind !== -1) { // If the question exists
//         document.querySelector(".message").textContent = Ans[ind]; // Display the corresponding answer
//     } else { // If no match is found
//         document.querySelector(".message").textContent = "I'm unable to provide answer to this question at the moment."; // Show an error message
//     }
// });






// Attach an event listener to the element with class "check" that listens for a "click" event
document.querySelector(".check").addEventListener("click", function() { 
    // Get the value entered by the user in the input field with class "open"
    let showAnswer = document.querySelector(".open").value;

    // Define an object containing predefined questions and answers
    const QandA = {
        "Hi": "hello, how can I be of help?",
        "who are you?": "My name is E.A.I, I am an AI designed by Emmanuel Arinze to serve as a support system and reading assistant.",
        "what is the time?": "I currently do not have access to your time zone, should I hack into your time zone and get the answer to your question? This involves allowing me to access your computer.",
        "Can you do better than chatGpt?": "I am not designed to surpass other AI platforms, but I can provide answers based on the best of my knowledge.",
        "No please": "What else can I help you with?"
    };
 
    // Check if the question entered by the user exists in the QandA object
    if (QandA[showAnswer]) {
        // If the question is found, display the corresponding answer in the element with class "message"
        document.querySelector(".message").textContent = QandA[showAnswer];
    } else { 
        // If the question is not found, display a default error message
        document.querySelector(".message").textContent = "I'm unable to provide an answer to this question at the moment.";
    }

    // Clear the input field (remove the message entered by the user) after the button is clicked
    document.querySelector(".open").value = ""; // This deletes the message from the input field
});

