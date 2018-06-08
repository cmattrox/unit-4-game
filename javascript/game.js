function reset(){
    window.game = { 

    haveAttacked: false,
    haveWon: false,
    haveLoss: false,
    dead: false,
    gameOver: false,

    characters: [
        {
            name: "Obi Wan",
            healthPoints: 160,
            attack: 15,
            counterAttack: 20
        },
        {
            name: "Luke",
            healthPoints: 200,
            attack: 25,
            counterAttack: 15
        },
        {
            name: "Rey",
            healthpoints: 140,
            attack: 10,
            counterAttack: 25
        },
        {
            name: "Ren",
            healthPoints: 150,
            attack: 12,
            counterAttack: 15
        },
        {
            name: "Vader",
            healthpoints: 190,
            attack: 20,
            counterAttack: 20
        },
        {
            name: "Palpatine",
            healthpoints: 130,
            attack: 18,
            counterAttack: 10
        }
    ],
    gameStart: true,
    characterChosen: null,
    enemyChosen: null,
    alreadyFought: [],
    currentAttackPower: null,
    haveWon: false,
}
}
$(document).ready(function(){
    reset ()
    $("#characters").on("click", ".hero", function(){
        var element = $(this);
        var charIndex = element.data("character-index");
        if(!game.characterChosen) {
            game.characterChosen = game.characters.splice(charIndex, 1)[0];
            game.currentAttackPower = game.characterChosen.attack;
            console.log(game.characterChosen);
            console.log(game.currentAttackPower);
        }
        
    })




})
