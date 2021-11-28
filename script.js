//Classes

warrior = {name: 'Warrior', hp: 100, att: 15, arm: 12, spd: 20, magic: 3};
mage = {name: 'Mage', hp: 50, att: 5, arm: 5, spd: 35, magic: 25};
rogue = {name: 'Rogue', hp: 30, att: 10, arm: 7, spd: 45, magic: 10}

let class_choice;

document.getElementById('game-start').addEventListener('click', ()=>{
    document.getElementById('game-start').style.display = 'none';
    document.getElementById('choose-class').style.display = 'block';
    document.getElementById('class-choice').innerHTML = 
        "Choose Class<br>" +
        "------------<br>" +
        "<button type='button' id='choice-warrior'>Warrior</button>" +
        "<button type='button' id='choice-mage'>Mage</button>" +
        "<button type='button' id='choice-rogue'>Rogue</button>";

    $('#choice-warrior').mouseover( ()=>{
        class_choice = warrior;

        document.getElementById('stats').style.display = 'block';
        document.getElementById('stats').innerHTML =
        "HP: " + class_choice.hp + "<br>" +
        "Attack: " + class_choice.att + "<br>" +
        "Armor: " + class_choice.arm + "<br>" +
        "Speed: " + class_choice.spd + "<br>" +
        "Magic: " + class_choice.magic;
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

        if($(window).width() < 700) {
            document.getElementById('mobile-button').style.display = 'block';
        }
    });
        
});