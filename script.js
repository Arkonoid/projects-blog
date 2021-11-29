//Random Number Generator
function random(min,max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

//Classes
let warrior = {name: 'Warrior', hp: 100, att: 15, arm: 12, spd: 20, magic: 3};
let mage = {name: 'Mage', hp: 50, att: 5, arm: 5, spd: 35, magic: 25};
let rogue = {name: 'Rogue', hp: 30, att: 10, arm: 7, spd: 45, magic: 10}

let class_choice;

//Enemies
let enemy1 = {name: 'Bandit', hp: 35, att: 10, arm: 5, spd: 5, magic: 1};
let enemy2 = {name: 'Monkey', hp: 25, att: 20, arm: 0, spd: 50, magic: 0};
let enemy3 = {name: 'Bat', hp: 15, att: 10, arm: 0, spd: 75, magic: 0};
let enemy4 = {name: 'Cave Troll', hp: 150, att: 40, arm: 5, spd: 0, magic: 3};
let enemy5 = {name: 'Seagull', hp: 15, att: 10, arm: 0, spd: 65, magic: 0};
let enemy6 = {name: 'Giant Crab', hp: 75, att: 10, arm: 15, spd: 0, magic: 0};

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
            battleLoop(enemyChoice);

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
            battleLoop(enemyChoice);

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
            battleLoop(enemyChoice);

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

//Battle
function battleLoop(enemy) {

}
//Debug
$('#random-button').click( ()=>{
    alert("The number is " + random(0,9))
});
$('#class-button').click( ()=>{
    alert("The player's class is " + class_choice.name)
});