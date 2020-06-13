function createGame(){
    const initialStep = 1;
    let currentStep = initialStep;
    let secretWord = "";

    return {
        getStep: () => currentStep,
        setSecretWord: (word) => {
            secretWord = word;
            currentStep++;
        },
        getGaps: () =>  secretWord.split('').map(pos => pos = '')
    }
}