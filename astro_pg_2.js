document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("birth-chart").addEventListener("click", function() {
        askQuestionsAndGenerateOutput("Birth Chart");
    });

    document.getElementById("marriage").addEventListener("click", function() {
        askQuestionsAndGenerateOutput("Marriage");
    });

    document.getElementById("career").addEventListener("click", function() {
        askQuestionsAndGenerateOutput("Career");
    });

    document.getElementById("love-chart").addEventListener("click", function() {
        askQuestionsAndGenerateOutput("Love Chart");
    });

    document.getElementById("kundali").addEventListener("click", function() {
        askQuestionsAndGenerateOutput("Kundali");
    });

    document.getElementById("horoscope").addEventListener("click", function() {
        askQuestionsAndGenerateOutput("Horoscope");
    });

    document.getElementById("pooja-vidhi").addEventListener("click", function() {
        askQuestionsAndGenerateOutput("Pooja Vidhi");
    });

    document.getElementById("tarot-card").addEventListener("click", function() {
        askQuestionsAndGenerateOutput("Tarot Card");
    });

    document.getElementById("cosmology").addEventListener("click", function() {
        askQuestionsAndGenerateOutput("Cosmology");
    });

    function askQuestionsAndGenerateOutput(topic) {
        var questions = getQuestionsForTopic(topic);
        var userResponses = [];

        // Prompt user for input for each question
        for (var i = 0; i < questions.length; i++) {
            var response = prompt(questions[i]);
            if (!response) {
                alert("Input cancelled. Please try again.");
                return;
            }
            userResponses.push(response);
        }

        // Generate output
        var output = generateOutput(topic, userResponses);
        alert(output);
    }

    function getQuestionsForTopic(topic) {
        switch (topic) {
            case "Birth Chart":
                return ["Enter your date of birth (YYYY-MM-DD):", "Enter the time of birth (HH:MM AM/PM):", "Enter the place of birth:"];
            case "Marriage":
                return ["Enter your gender:", "Enter your partner's gender:", "Enter your current relationship status:"];
            case "Career":
                return ["What is your current job title?", "What are your career goals?", "Do you have any specific industries or roles in mind?"];
            case "Love Chart":
                return ["What is your zodiac sign?", "Describe your ideal partner:", "Do you believe in love at first sight?"];
            case "Kundali":
                return ["Do you know your moon sign?", "Have you ever had your Kundali matched?", "What aspect of Kundali are you most interested in?"];
            case "Horoscope":
                return ["What is your zodiac sign?", "Do you read your horoscope regularly?", "Have you ever had a horoscope reading done?"];
            case "Pooja Vidhi":
                return ["What is the purpose of the Pooja?", "Do you have any specific rituals you'd like to include?", "Are there any specific deities you want to worship?"];
            case "Tarot Card":
                return ["What is your intention or question for the Tarot cards?", "How familiar are you with Tarot card readings?", "Have you had any previous Tarot card readings?"];
            case "Cosmology":
                return ["What aspect of cosmology are you interested in?", "Do you have any specific questions about the universe or its origins?", "Have you studied cosmology before?"];
            default:
                return [];
        }
    }

    function generateOutput(topic, responses) {
        switch (topic) {
            case "Birth Chart":
                return "Your birth chart has been generated successfully! We will email it to you shortly.";
            case "Marriage":
                return "Thank you for providing your information. We will analyze it and provide insights into your future marriage prospects.";
            case "Career":
                return "Your career profile has been created! Expect insights and advice tailored to your professional goals.";
            case "Love Chart":
                return "Your love chart has been generated! We'll help you understand your romantic compatibility.";
            case "Kundali":
                return "Your Kundali has been prepared. We'll provide insights into your personality traits and future predictions.";
            case "Horoscope":
                return "Your personalized horoscope has been generated! Look out for daily, weekly, and monthly insights.";
            case "Pooja Vidhi":
                return "Thank you for sharing your Pooja details. Expect guidance on rituals and ceremonies.";
            case "Tarot Card":
                return "Your Tarot card reading is complete! We'll interpret the cards and provide guidance.";
            case "Cosmology":
                return "You're now connected to our cosmology experts. Expect fascinating insights into the universe and beyond.";
            default:
                return "Invalid topic selected.";
        }
    }
});