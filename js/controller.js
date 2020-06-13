function createController(game){
	var $input = $('#inputForm');
	var $gaps = $('.gaps');
	// Clears the form input value
	const clearInput = () => $input.val("");
	// Displays the gaps of the entered secret word
	const displayGaps = () => {
		$gaps.empty();
		game.getGaps().forEach(e => 
			$gaps.append($('<li>').addClass('gap').text(e))
		);
	}
	// Updates the input form placeholder
	const changePlaceHolder = text => $input.attr("placeholder", text);
	// Stores the secret word and initializes the game
	const storeSecretWord = () => {
		try {
			const word = $input.val().toLowerCase().trim();
			if (word) {
				changePlaceHolder("Kick");
				game.setSecretWord(word);
				displayGaps();
				clearInput();
				$input.attr("maxlength", "1");
			}
		} catch (error) { alert(error.message) }
	}
	// Restart the game and update the initial settings
	const restartGame = () => {
		$input.removeAttr("maxlength");
		changePlaceHolder("Secret Word");
		game.restart();
		$gaps.empty();
	}
	// Processes the user's guess and checks whether the secret word was correct or wrong
	const registerKick = () => {
		try {
			game.kick($input.val().trim())
			displayGaps();
			clearInput();
			if (game.wonOrLost()) {
					setTimeout(()=>{
						if (game.won()) alert("Congratulations! You're Right");
						else if (game.lost()) alert(":( What a Shame! It Wasn't This Time ...");
						restartGame();
					}, 250)
			}
		} catch (error) { alert(error.message) }
	}
	// Captures user action by typing 'enter' to process the secret word that guesses the divination letter
	var init = () => {
		$input.keypress(function (event) {
			if (event.which == 13) {
					switch (game.getStep()) {
						case 1: storeSecretWord(); break;
						case 2: registerKick(); break;
					}
			}
		});
	}
	// Public API
	return { init };
}