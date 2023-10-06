const Questions = [
	{
		q: "What does HTML stand for?",
		a: [
			{ text: "Hypertext Markup Language", isCorrect: true },
			{ text: "Hyperlink and Text Markup Language", isCorrect: false },
			{ text: "High Tech Modern Language", isCorrect: false },
			{ text: "Hyperlink Transfer Markup Language", isCorrect: false },
		],
	},
	{
		q: "Which HTML tag is used for creating an ordered list?",
		a: [
			{ text: "<ol>", isCorrect: true },
			{ text: "<ul>", isCorrect: false },
			{ text: "<li>", isCorrect: false },
			{ text: "<dl>", isCorrect: false },
		],
	},
	{
		q: "What is the correct way to comment out multiple lines of code in HTML?",
		a: [
			{ text: "<!-- This is a comment -->", isCorrect: true },
			{ text: "// This is a comment", isCorrect: false },
			{ text: "/* This is a comment */", isCorrect: false },
			{ text: "# This is a comment", isCorrect: false },
		],
	},
	{
		q: "Which CSS property is used to change the text color of an element?",
		a: [
			{ text: "text-style", isCorrect: false },
			{ text: "font-color", isCorrect: false },
			{ text: "color", isCorrect: true },
			{ text: "text-color", isCorrect: false },
		],
	},
	{
		q: "What is JavaScript primarily used for in web development?",
		a: [
			{ text: "Styling web pages", isCorrect: false },
			{ text: "Creating database tables", isCorrect: false },
			{ text: "Enhancing interactivity and functionality", isCorrect: true },
			{ text: "Generating SEO metadata", isCorrect: false },
		],
	},
	{
		q: "What does HTML stand for?",
		a: [
			{ text: "Hypertext Markup Language", isCorrect: true },
			{ text: "Hyperlink and Text Markup Language", isCorrect: false },
			{ text: "High Tech Modern Language", isCorrect: false },
			{ text: "Hyperlink Transfer Markup Language", isCorrect: false },
		],
	},
	{
		q: "Which HTML tag is used for creating an ordered list?",
		a: [
			{ text: "<ol>", isCorrect: true },
			{ text: "<ul>", isCorrect: false },
			{ text: "<li>", isCorrect: false },
			{ text: "<dl>", isCorrect: false },
		],
	},
	{
		q: "What is the correct way to comment out multiple lines of code in HTML?",
		a: [
			{ text: "<!-- This is a comment -->", isCorrect: true },
			{ text: "// This is a comment", isCorrect: false },
			{ text: "/* This is a comment */", isCorrect: false },
			{ text: "# This is a comment", isCorrect: false },
		],
	},
	{
		q: "Which CSS property is used to change the text color of an element?",
		a: [
			{ text: "text-style", isCorrect: false },
			{ text: "font-color", isCorrect: false },
			{ text: "color", isCorrect: true },
			{ text: "text-color", isCorrect: false },
		],
	},
	{
		q: "What is JavaScript primarily used for in web development?",
		a: [
			{ text: "Styling web pages", isCorrect: false },
			{ text: "Creating database tables", isCorrect: false },
			{ text: "Enhancing interactivity and functionality", isCorrect: true },
			{ text: "Generating SEO metadata", isCorrect: false },
		],
	},
	{
		q: "What does HTML stand for?",
		a: [
			{ text: "Hypertext Markup Language", isCorrect: true },
			{ text: "Hyperlink and Text Markup Language", isCorrect: false },
			{ text: "High Tech Modern Language", isCorrect: false },
			{ text: "Hyperlink Transfer Markup Language", isCorrect: false },
		],
	},
	{
		q: "Which HTML tag is used for creating an ordered list?",
		a: [
			{ text: "<ol>", isCorrect: true },
			{ text: "<ul>", isCorrect: false },
			{ text: "<li>", isCorrect: false },
			{ text: "<dl>", isCorrect: false },
		],
	},
	{
		q: "What is the correct way to comment out multiple lines of code in HTML?",
		a: [
			{ text: "<!-- This is a comment -->", isCorrect: true },
			{ text: "// This is a comment", isCorrect: false },
			{ text: "/* This is a comment */", isCorrect: false },
			{ text: "# This is a comment", isCorrect: false },
		],
	},
	{
		q: "Which CSS property is used to change the text color of an element?",
		a: [
			{ text: "text-style", isCorrect: false },
			{ text: "font-color", isCorrect: false },
			{ text: "color", isCorrect: true },
			{ text: "text-color", isCorrect: false },
		],
	},
	{
		q: "What is JavaScript primarily used for in web development?",
		a: [
			{ text: "Styling web pages", isCorrect: false },
			{ text: "Creating database tables", isCorrect: false },
			{ text: "Enhancing interactivity and functionality", isCorrect: true },
			{ text: "Generating SEO metadata", isCorrect: false },
		],
	},
	{
		q: "What does HTML stand for?",
		a: [
			{ text: "Hypertext Markup Language", isCorrect: true },
			{ text: "Hyperlink and Text Markup Language", isCorrect: false },
			{ text: "High Tech Modern Language", isCorrect: false },
			{ text: "Hyperlink Transfer Markup Language", isCorrect: false },
		],
	},
	{
		q: "Which HTML tag is used for creating an ordered list?",
		a: [
			{ text: "<ol>", isCorrect: true },
			{ text: "<ul>", isCorrect: false },
			{ text: "<li>", isCorrect: false },
			{ text: "<dl>", isCorrect: false },
		],
	},
	{
		q: "What is the correct way to comment out multiple lines of code in HTML?",
		a: [
			{ text: "<!-- This is a comment -->", isCorrect: true },
			{ text: "// This is a comment", isCorrect: false },
			{ text: "/* This is a comment */", isCorrect: false },
			{ text: "# This is a comment", isCorrect: false },
		],
	},
	{
		q: "Which CSS property is used to change the text color of an element?",
		a: [
			{ text: "text-style", isCorrect: false },
			{ text: "font-color", isCorrect: false },
			{ text: "color", isCorrect: true },
			{ text: "text-color", isCorrect: false },
		],
	},
	{
		q: "What is JavaScript primarily used for in web development?",
		a: [
			{ text: "Styling web pages", isCorrect: false },
			{ text: "Creating database tables", isCorrect: false },
			{ text: "Enhancing interactivity and functionality", isCorrect: true },
			{ text: "Generating SEO metadata", isCorrect: false },
		],
	},
];
let currQuestion = 0;
let score = 0;

function loadQuestion() {
	const question = document.getElementById("ques");
	const options = document.getElementById("opt");
	const nextButton = document.getElementById("btn");

	if (currQuestion < Questions.length) {
		question.textContent = Questions[currQuestion].q;
		options.innerHTML = "";

		for (let i = 0; i < Questions[currQuestion].a.length; i++) {
			const choice = document.createElement("input");
			const choiceLabel = document.createElement("label");

			choice.type = "radio";
			choice.name = "answer";
			choice.value = i;
            choice.id = `option${i}`;

			choiceLabel.textContent = Questions[currQuestion].a[i].text;
            choiceLabel.setAttribute("for", `option${i}`);

			options.appendChild(choice);
			options.appendChild(choiceLabel);
		}
		nextButton.textContent = "Next";
	} else {
		question.textContent = "Quiz completed!";
		options.innerHTML = "";
		nextButton.style.display = "none";
		showScore();
	}
}

function checkAnswer() {
	const selectedAns = document.querySelector('input[name="answer"]:checked');

	if (selectedAns) {
		const selectedValue = parseInt(selectedAns.value);

		if (Questions[currQuestion].a[selectedValue].isCorrect) {
			score++;
		}

		currQuestion++;
		loadQuestion();
		const scoreElement = document.getElementById("score");
		scoreElement.textContent = `Score: ${score} out of ${Questions.length}`;
	} else {
		alert("Please select an answer.");
	}
}

function showScore() {
	const scoreElement = document.getElementById("score");
	scoreElement.textContent = `Score: ${score} out of ${Questions.length}`;
}

loadQuestion();
