function sendMessage() {
    var userInput = document.getElementById("user-input").value.trim();
    if (userInput !== "") {
      appendMessage("user", userInput);
      document.getElementById("user-input").value = "";
      setTimeout(function() {
        var response = getResponse(userInput);
        appendMessage("bot", response);
      }, 1000);
    }
  }
  
  function appendMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");
    var chatMessage = document.createElement("div");
    chatMessage.classList.add("chat-message");
    chatMessage.textContent = message;
    if (sender === "bot") {
      chatMessage.style.backgroundColor = "#007bff";
      chatMessage.style.color = "#fff";
    }
    chatBox.appendChild(chatMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function getResponse(userInput) {
    // Predefined responses for astrological questions based on user input
    var responses = {
      "hello": "Hello there! How can I assist you today?",
      "hi": "Hi! What can I help you with?",
      "how are you": "I'm just a chatbot, but thanks for asking! How can I assist you?",
      "how will my day go": "Your day's outcome depends on various factors. Stay positive and embrace opportunities as they come!",
      "what does my horoscope say today": "Let's see... Your horoscope for today predicts [insert response based on astrology].",
      "can you predict my future": "Astrology provides insights into potential trends and influences, but remember that your actions shape your destiny.",
      "what's my zodiac sign": "Your zodiac sign is determined by your birth date. What's your birth date?",
      "tell me about my love life": "Let's explore your love life through astrology. What specific questions do you have?",
      "will I find true love": "Finding true love is a journey. Stay open-hearted, and the universe will guide you to the right person.",
      "what's my lucky number": "Lucky numbers vary for each person. Let's calculate yours based on your birth date and zodiac sign."
      // Add more questions and responses here
    };
  
    // Check if user input matches a predefined question
    for (var question in responses) {
      if (userInput.toLowerCase().indexOf(question.toLowerCase()) !== -1) {
        return responses[question];
      }
    }
  
    // Default response for unrecognized input
    return "I'm sorry, I didn't understand that. Please ask another question related to astrology or other topics.";
  }