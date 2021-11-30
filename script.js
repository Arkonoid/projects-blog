//Variables
let class_choice;
let enemyDefend = false;
let playerDefend = false;
let bigAttack = false;

//Random Number Generator
function random(min,max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

//Classes
let warrior = {name: 'Warrior', hp: 100, att: 15, arm: 12, spd: 20, magic: 3};
let mage = {name: 'Mage', hp: 50, att: 5, arm: 5, spd: 35, magic: 25};
let rogue = {name: 'Rogue', hp: 30, att: 10, arm: 7, spd: 45, magic: 10}
let player;

//Enemies
let enemy1 = {name: 'Bandit', ORIGINAL_HP: 35, hp: 35, att: 10, arm: 5, spd: 5, magic: 1};
let enemy2 = {name: 'Monkey', ORIGINAL_HP: 25, hp: 25, att: 20, arm: 0, spd: 50, magic: 0};
let enemy3 = {name: 'Bat', ORIGINAL_HP: 15, hp: 15, att: 10, arm: 0, spd: 75, magic: 0};
let enemy4 = {name: 'Cave Troll', ORIGINAL_HP: 150, hp: 150, att: 40, arm: 5, spd: 0, magic: 3};
let enemy5 = {name: 'Seagull', ORIGINAL_HP: 15, hp: 15, att: 10, arm: 0, spd: 65, magic: 0};
let enemy6 = {name: 'Giant Crab', ORIGINAL_HP: 75, hp: 75, att: 10, arm: 15, spd: 0, magic: 0};

//Game Start
document.getElementById('game-start').addEventListener('click', ()=>{
    document.getElementById('game-start').style.display = 'none';
    document.getElementById('choose-class').style.display = 'block';
    document.getElementById('class-choice').innerHTML = 
        "Choose Class<br>" +
        "------------<br>" +
        "<button type='button' id='choice-warrior'>Warrior</button>" +
        "<button type='button' id='choice-mage'>Mage</button>" +
        "<button type='button' id='choice-rogue'>Rogue</button>";

    if($(window).width() < 700) {
        $('#choice-warrior').click( ()=> {
            class_choice = warrior;

            document.getElementById('stats').style.display = 'block';
            document.getElementById('stats').innerHTML =
                "HP: " + class_choice.hp + "<br>" +
                "Attack: " + class_choice.att + "<br>" +
                "Armor: " + class_choice.arm + "<br>" +
                "Speed: " + class_choice.spd + "<br>" +
                "Magic: " + class_choice.magic;
            
            document.getElementById('mobile-button').style.display = 'block';
        });

        $('#choice-mage').click( ()=> {
            class_choice = mage;

            document.getElementById('stats').style.display = 'block';
            document.getElementById('stats').innerHTML =
                "HP: " + class_choice.hp + "<br>" +
                "Attack: " + class_choice.att + "<br>" +
                "Armor: " + class_choice.arm + "<br>" +
                "Speed: " + class_choice.spd + "<br>" +
                "Magic: " + class_choice.magic;
            
            document.getElementById('mobile-button').style.display = 'block';
        });

        $('#choice-rogue').click( ()=> {
            class_choice = rogue;

            document.getElementById('stats').style.display = 'block';
            document.getElementById('stats').innerHTML =
                "HP: " + class_choice.hp + "<br>" +
                "Attack: " + class_choice.att + "<br>" +
                "Armor: " + class_choice.arm + "<br>" +
                "Speed: " + class_choice.spd + "<br>" +
                "Magic: " + class_choice.magic;
            
            document.getElementById('mobile-button').style.display = 'block'; 
        });

        $('#mobile-button').click( ()=> {
            document.getElementById('choose-class').style.display = 'none';
            player = class_choice;
            adventureLoop();
        });

    }
    else {
    $('#choice-warrior').mouseover( ()=>{
        class_choice = warrior;

        document.getElementById('stats').style.display = 'block';
        document.getElementById('stats').innerHTML =
        "HP: " + class_choice.hp + "<br>" +
        "Attack: " + class_choice.att + "<br>" +
        "Armor: " + class_choice.arm + "<br>" +
        "Speed: " + class_choice.spd + "<br>" +
        "Magic: " + class_choice.magic;

        $('#choice-warrior').click( ()=>{
            document.getElementById('choose-class').style.display = 'none';
            player = class_choice;
            adventureLoop();
        });
    });

    $('#choice-mage').mouseover( ()=>{
        class_choice = mage;

        document.getElementById('stats').style.display = 'block';
        document.getElementById('stats').innerHTML =
        "HP: " + class_choice.hp + "<br>" +
        "Attack: " + class_choice.att + "<br>" +
        "Armor: " + class_choice.arm + "<br>" +
        "Speed: " + class_choice.spd + "<br>" +
        "Magic: " + class_choice.magic;

        $('#choice-mage').click( ()=>{
            document.getElementById('choose-class').style.display = 'none';
            player = class_choice;
            adventureLoop();
        });
    });

    $('#choice-rogue').mouseover( ()=>{
        class_choice = rogue;

        document.getElementById('stats').style.display = 'block';
        document.getElementById('stats').innerHTML =
        "HP: " + class_choice.hp + "<br>" +
        "Attack: " + class_choice.att + "<br>" +
        "Armor: " + class_choice.arm + "<br>" +
        "Speed: " + class_choice.spd + "<br>" +
        "Magic: " + class_choice.magic;

        $('#choice-rogue').click( ()=>{
            document.getElementById('choose-class').style.display = 'none';
            player = class_choice;
            adventureLoop();
        });
    });
    }
});

//Adventure Loop
function adventureLoop() {

document.getElementById('adventure-text').style.display = 'block';
document.getElementById('adventure-choices').style.display = 'block';

let rng = random(1,3);
let enemyChoice;

switch(rng) {
    case 1:
        $('#adventure-text').html("You find yourself wandering down a forest path...");
        $('#choice1').html("Head further in");
        $('#choice2').html("Turn back");
    
        $('#choice1').click( ()=>{
            rng = random(1,2);
            if (rng === 1) {
                enemyChoice = enemy1;
            }
            else {
                enemyChoice = enemy2;
            }

            $('#adventure-text').html("Oh No! You come across a " + enemyChoice.name + "!");
            document.getElementById('adventure-choices').style.display = 'none';
            document.getElementById('fight-button').style.display = 'block';

            $('#fight-button').click( ()=>{
                document.getElementById('adventure-text').style.display = 'none';
                document.getElementById('fight-button').style.display = 'none';
                battleLoop(enemyChoice);
            });
        });

        $('#choice2').click( ()=>{
            $('#adventure-text').html("You made it out alive! You Win!");

            document.getElementById('reset-button').style.display = 'block';
            document.getElementById('adventure-choices').style.display = 'none';

            $('#reset-button').click( ()=>{
                document.getElementById('choose-class').style.display = 'block';
                document.getElementById('reset-button').style.display = 'none';
                $('#adventure-text').html('');
            });

        });

        break;
    case 2:
        $('#adventure-text').html("You wake up deep in a cave...");
        $('#choice1').html("Head further in");
        $('#choice2').html("Leave the cave");

        $('#choice1').click( ()=>{
            rng = random(3,4);
            if (rng === 3) {
                enemyChoice = enemy3;
            }
            else {
                enemyChoice = enemy4;
            }

            $('#adventure-text').html("Oh No! You come across a " + enemyChoice.name + "!");
            document.getElementById('adventure-choices').style.display = 'none';
            document.getElementById('fight-button').style.display = 'block';

            $('#fight-button').click( ()=>{
                document.getElementById('adventure-text').style.display = 'none';
                document.getElementById('fight-button').style.display = 'none';
                battleLoop(enemyChoice);
            });

        });

        $('#choice2').click( ()=>{
            $('#adventure-text').html("You made it out alive! You Win!");

            document.getElementById('reset-button').style.display = 'block';
            document.getElementById('adventure-choices').style.display = 'none';

            $('#reset-button').click( ()=>{
                document.getElementById('choose-class').style.display = 'block';
                document.getElementById('reset-button').style.display = 'none';
                $('#adventure-text').html('');
            });

        });

        break;
    case 3:
        $('#adventure-text').html("You walk out onto an island beach...");
        $('#choice1').html("Walk along the beach");
        $('#choice2').html("Go back into the jungle");

        $('#choice1').click( ()=>{
            rng = random(5,6);
            if (rng === 5) {
                enemyChoice = enemy5;
            }
            else {
                enemyChoice = enemy6;
            }

            $('#adventure-text').html("Oh No! You come across a " + enemyChoice.name + "!");
            document.getElementById('adventure-choices').style.display = 'none';
            document.getElementById('fight-button').style.display = 'block';

            $('#fight-button').click( ()=>{
                document.getElementById('adventure-text').style.display = 'none';
                document.getElementById('fight-button').style.display = 'none';
                battleLoop(enemyChoice);
            });

        });

        $('#choice2').click( ()=>{
            $('#adventure-text').html("You made it out alive! You Win!");

            document.getElementById('reset-button').style.display = 'block';
            document.getElementById('adventure-choices').style.display = 'none';

            $('#reset-button').click( ()=>{
                document.getElementById('choose-class').style.display = 'block';
                document.getElementById('reset-button').style.display = 'none';
                $('#adventure-text').html('');
            });

        });

        break;
    default:
        alert("Something has gone horribly wrong...")
}

} //End of Adventure Loop

//Battle Loop
function battleLoop(enemy) {
    $('#battle-text').show();
    $('#player-stats').show();
    $('#enemy-stats').show();
    $('#battle-choices').show();

    showStats(enemy);

    //alert("Enemy HP is currently " + enemy.hp);

    $('#battle-text').html("The " + enemy.name + " notices you...");

    $('#option-fight').click( ()=>{
        $('#battle-text').html("You hit the " + enemy.name + " for " + (player.att - enemy.arm) + " damage!");
        enemy.hp -= (player.att - enemy.arm);

        showStats(enemy);

        //alert("Enemy HP is currently " + enemy.hp);

        if (enemy.hp <= 0) {
            winBattle(enemy);
        }

        enemyTurn(enemy);

    });

    $('#option-block').click( ()=>{
        $('#battle-text').html("You increase your defenses for a turn!");

        playerDefend = true;
        player.arm *= 2;

        showStats(enemy);

        //alert("Enemy HP is currently " + enemy.hp);

        if (enemy.hp <= 0) {
            winBattle(enemy);
        }

        enemyTurn(enemy);

        if (playerDefend) {
            player.arm /= 2;
            playerDefend = false;
        }
        
    });

    $('#option-magic').click( ()=>{
        let magicEffect = random(1,6);

        switch(magicEffect){
            case 1: player.hp += player.magic;
                $('#battle-text').html("You feel strange forces increase your HP!");
                break;
            case 2: player.att += player.magic;
                $('#battle-text').html("You feel strange forces increase your Attack!");
                break;
            case 3: player.arm += player.magic;
                $('#battle-text').html("You feel strange forces increase your Armor!");
                break;
            case 4: player.spd += player.magic;
                $('#battle-text').html("You feel strange forces increase your Speed");
                break;
            case 5: player.magic += player.magic;
                $('#battle-text').html("You feel strange forces increase your Magic!");
                break;
            case 6: enemy.hp -= player.magic;
                $('#battle-text').html("You feel strange forces attack the enemy for " + player.magic + " damage!");
                break;
            default:
                alert("Something went terribly wrong.");
        }

        showStats(enemy);

        //alert("Enemy HP is currently " + enemy.hp);

        if (enemy.hp <= 0) {
            winBattle(enemy);
        }

        enemyTurn(enemy);
        

    });

    $('#option-run').click( ()=>{
        let runChance = (player.spd / 2) / 100;
        let runSuccess = random(0,100) / 100;

        //DEBUG alert("RunChance is " + runChance + " and runSuccess is " + runSuccess);

        if (runChance >= runSuccess) {
            $('#battle-text').html("You did it?");
            winBattle(enemy);
        }
        else{
            $('#battle-text').html("You failed to run!");
            
            enemyTurn(enemy);
        }
    });



    

} //End of Battle Loop

//Show Stats
function showStats(enemy) {
    $('#player-stats').html(
        "PLAYER<br>" +
        "----------<br>" +
        "HP: " + player.hp + "<br>" +
        "Attack: " + player.att + "<br>" +
        "Armor: " + player.arm + "<br>" +
        "Speed: " + player.spd + "<br>" +
        "Magic: " + player.magic
    );

    $('#enemy-stats').html(
        enemy.name + "<br>" +
        "----------<br>" +
        "HP: " + enemy.hp + "<br>" +
        "Attack: " + enemy.att + "<br>" +
        "Armor: " + enemy.arm + "<br>" +
        "Speed: " + enemy.spd + "<br>" +
        "Magic: " + enemy.magic
    );
}

//Enemy Turn
function enemyTurn(enemy) {

    if (enemyDefend) {
        enemy.arm /= 2;
        enemyDefend = false;
    }
    
    if (bigAttack) {
        $('#battle-text').html("The " + enemy.name + " lands a collossal blow for " + (enemy.att * 2 - player.arm) + " damage!");
        player.hp -= (enemy.att * 2 - player.arm);
        bigAttack = false;
    }
    else {
        enemyAction = random(1,3);

        switch(enemyAction){

            case 1:
                $('#battle-text').html("The " + enemy.name + "attacks for " + (enemy.att - player.arm) + " damage!");

                player.hp -= (enemy.att - player.arm);
                break;
            case 2:
                $('#battle-text').html("The " + enemy.name + " raises its guard!");

                enemyDefend = true;
                break;
            case 3:
                $('#battle-text').html("The " + enemy.name + " is readying a huge blow!");

                bigAttack = true;
                break;
            default: alert("Something has gone horribly wrong...");
        }
    }

    if(enemyDefend) {
        enemy.arm *= 2;
    }

    showStats(enemy);
}

//Win Function
function winBattle(enemy) {
    $('#battle-text').hide();
    $('#player-stats').hide();
    $('#enemy-stats').hide();
    $('#battle-choices').hide();
    $('#adventure-text').show();
    $('#reset-button').show();

    enemy.hp = enemy.ORIGINAL_HP;

    //alert("Enemy HP is currently " + enemy.hp);

    player = class_choice;

    $('#adventure-text').html("You made it out alive! You Win!");

    $('#reset-button').click( ()=>{
        document.getElementById('choose-class').style.display = 'block';
        $('#choose-class').show();
        $('#reset-button').hide();
        $('#adventure-text').hide();
        $('#adventure-text').html('');
    });
}

//Lose Function
function loseBattle(enemy) {
    $('#battle-text').hide();
    $('#player-stats').hide();
    $('#enemy-stats').hide();
    $('#battle-choices').hide();
    $('#adventure-text').show();
    $('#reset-button').show();

    enemy.hp = enemy.ORIGINAL_HP;

    //alert("Enemy HP is currently " + enemy.hp);

    $('#adventure-text').html("You died to the " + enemy.name + "! You Lose!");

    $('#reset-button').click( ()=>{
        document.getElementById('choose-class').style.display = 'block';
        $('#choose-class').show();
        $('#reset-button').hide();
        $('#adventure-text').hide();
        $('#adventure-text').html('');
    });
}

//Debug
$('#random-button').click( ()=>{
    alert("The number is " + random(0,9));
});
$('#class-button').click( ()=>{
    alert("The player's class is " + player.name);
});
$('#run-button').click( ()=>{
    alert("The player's chance to run is " + player.spd / 2 + "%");
});
$('#runTest-button').click( ()=>{
    alert("The run roll is " + (random(0,100) / 100))
});