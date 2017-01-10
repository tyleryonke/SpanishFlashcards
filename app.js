var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",
	password: "*********",

	database: "flashcardapp_db"
});

var functionSelector = process.argv[2];
var userName = process.argv[3];
var inputWord = process.argv[4];

function createNewCard (userName, inputWord) {

	connection.query("INSERT INTO cards (input_word, owned_user) VALUES (?, ?);", [inputWord, userName], function(err, res) {
		if (err) throw err;
	})

	console.log("Word added to flashcard database.");

	connection.end();

};

function reviewCards (userName) {

	connection.query("SELECT * FROM cards WHERE owned_user=?", userName, function(err, res) {
		if (err) throw err;
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].input_word + " -- ");
			//this is where we would likely make the call to the webscraper to get content from spanishdict by plugging in input_word
			//i can also create a way for this to display a random card rather than listing them all as it would currently
		}
	})

	connection.end();

};

switch (functionSelector) {
    case "create":
        createNewCard(userName, inputWord);
        break;
    case "review":
        reviewCards(userName);
        break;
    default: console.log("Error: Incorrect type selector.");
};