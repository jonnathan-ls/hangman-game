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
        const word = $input.val().toLowerCase();
        if (word) {
            changePlaceHolder("Chute");
            game.setSecretWord(word);
            displayGaps();
            clearInput();
            $input.attr("maxlength", "1");
        }
    }

    const suesKick = () => {
        game.suesKick($input.val().trim())
        displayGaps();
        clearInput();

        if (game.wonOrLost()) {
            if (game.won()) alert("Parabéns! Você Acertou");
            if (game.lost()) alert(":( Que Pena! Não foi dessa vez ... ");
            $input.removeAttr("maxlength");
            changePlaceHolder("Palavra Secreta");
            game.restart();
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