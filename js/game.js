function createGame(sprite){
    let currentStep, secretWord, attempts;
    // Configures the required initial assignments
    const initialConfig = () => 
        { currentStep = 1; secretWord = ""; attempts = []; sprite.reset(); }
    // Consult which were the attempts of kick and return the situation of the word
    const currentWord = () => 
        secretWord.split('').map(x => attempts.includes(x) ? x : '');
    // Checks the current stage of the game
    const getStep = () => currentStep;
    // Check if the word is valid, assign the data to the variable and update the game stage
    const setSecretWord = word => {
        console.log('passei aqui')
        if (word.trim().includes(" ")) throw new Error("Somente uma Palavra por Jogo!");
        if (word.trim()){ secretWord = word; currentStep++; }
    }
    // Returns the blanks corresponding to each letter of the secret word
    const getGaps = () => currentWord();
    // Processes the kick of the letter in to the secret word
    const kick = letter => {
        if (!attempts.includes(letter)) attempts.push(letter);
        if (!secretWord.includes(letter)) sprite.nextFrame();
    }
    // Checks if the user got the word right
    const won = () => secretWord === currentWord().join('');
    // Checks if the user's chances are over
    const lost = () => sprite.isFinished();
    // Check if the game is over
    const wonOrLost = () => won() || lost();
    // Restart the game
    const restart = () => initialConfig();

    // Load the necessary initial settings
    initialConfig();

    // Public API
    return { getStep, setSecretWord, getGaps, kick, won, lost, wonOrLost, restart }
}