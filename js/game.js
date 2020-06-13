function createGame(sprite){
    const initialStep = 1;
    let currentStep = initialStep;
    let secretWord = "";
    let attempts = [];
    
    const currentWord = () => secretWord.split('').map(x => attempts.includes(x) ? x : '');

    return {
        getStep: () => currentStep,
        setSecretWord: (word) => {
            secretWord = word;
            currentStep++;
        },
        getGaps: () => currentWord(),
        suesKick: (letter) => {
            if (!attempts.includes(letter)) attempts.push(letter);
            if (!secretWord.includes(letter)) sprite.nextFrame();
        }

    }
}