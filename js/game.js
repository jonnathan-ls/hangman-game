function createGame(sprite){
    let currentStep, secretWord, attempts;

    const initialConfig = () => { 
        currentStep = 1; secretWord = ""; attempts = []; sprite.reset(); 
    }

    initialConfig();   

    const currentWord = () => 
        secretWord.split('').map(x => attempts.includes(x) ? x : '');
    
    return {
        getStep: () => currentStep,
        setSecretWord: (word) => {
            if (word.trim().includes(" ")) 
                throw new Error("Somente uma Palavra por Jogo!")
            if (word.trim()){
                secretWord = word;
                currentStep++;
            }
        },
        getGaps: () => currentWord(),
        suesKick: (letter) => {
            if (!attempts.includes(letter)) attempts.push(letter);
            if (!secretWord.includes(letter)) sprite.nextFrame();
        },
        won: () => secretWord === currentWord().join(''),
        lost: () => sprite.isFinished(),
        wonOrLost: () => secretWord === currentWord().join('') || sprite.isFinished(),
        restart: () => initialConfig(),
    }
}