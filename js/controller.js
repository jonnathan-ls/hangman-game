function createController(game){

    var $input = $('#entrada');
    var $gaps = $('.lacunas');
    
    const clearInput = () => $input.val("");
    const displayGaps = () => {
        $gaps.empty();
        game.getGaps().forEach(e => $gaps.append($('<li>').addClass('lacuna').text(e)));
    }

    const changePlaceHolder = (text) => $input.attr("placeholder", text);

    const storeSecretWord = () => {
        try {
            const word = $input.val().toLowerCase().trim();
            if (word) {
                changePlaceHolder("Chute");
                game.setSecretWord(word);
                displayGaps();
                clearInput();
                $input.attr("maxlength", "1");
            }
        } catch (error) {
            alert(error.message)
        }
    }

    const restartGame = () => {
        $input.removeAttr("maxlength");
        changePlaceHolder("Palavra Secreta");
        game.restart();
        $gaps.empty();
    }

    const suesKick = () => {
        try {
            game.suesKick($input.val().trim())
            displayGaps();
            clearInput();
            if (game.wonOrLost()) {
                setTimeout(()=>{
                    if (game.won()) alert("Parabéns! Você Acertou");
                    if (game.lost()) alert(":( Que Pena! Não foi dessa vez ... ");
                    restartGame();
                }, 250)
            }
        } catch (error) {
            alert(error.message)
        }
    }

    var inicia = function () {
        $input.keypress(function (event) {
            if (event.which == 13) {
                switch (game.getStep()) {
                    case 1: storeSecretWord(); break;
                    case 2: suesKick(); break;
                }
            }
        });
    }
    return { init: inicia };
}