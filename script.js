let dice = document.querySelector(".dice");
let img1 = document.querySelector(".dice.img");
let player1 = document.querySelector(".left .score");
let player2 = document.querySelector(".right .score");
let result = document.querySelector('.result');
let again = document.querySelector('#again');
let score1 = 0;
let score2 = 0;
let p1 = true;
let p1_chance = 3;
let p2 = false;
let p2_chance = 0;
let game = true;
let suffle = 0
dice.addEventListener('click', () => {
    if (game == true) {
        const randomeIndex = Math.floor(Math.random() * 6)
        console.log(randomeIndex + 1);
        suffle += 360;
        img1.style.transform = 'rotate('+ suffle +'deg)';
        img1.src = "../icons/n" + (randomeIndex + 1) + ".png";
        
        if (p1 == true) {
            p1_chance -= 1;
            result.textContent = ("Player1 suffled: " + (2-p1_chance+1));
            if (p1_chance < 1) {
                p1 = false;
                p2_chance = 3;
                p2 = true;
            }
            score1 += randomeIndex + 1;
            player1.textContent = score1;
        }
        else if (p2 == true) {
            p2_chance -= 1;
            result.textContent = ("Player2 suffled: " + (2-p2_chance+1));
            if (p2_chance < 1) {
                p2 = false;
                game = false;
            }
            score2 += randomeIndex + 1;
            player2.textContent = score2;
        }

    }
    else {
        if (score1 > score2) {
            result.textContent = "Player 1 won the game.";
            again.style.display = "block";
        }
        else if (score1 < score2) {
            result.textContent = "Player 2 won the game.";
            again.style.display = "block";
        }
        else {
            result.textContent = "Tie";
            again.style.display = "block";
        }
    }
});
again.addEventListener('click', () => {
    score1 = 0;
    score2 = 0;
    player1.textContent = '0';
    player2.textContent = '0';
    result.textContent = '';
    again.style.display = 'none';
    p1 = true;
    p2 = false;
    p1_chance = 3;
    p2_chance = 0;
    game = true;
    suffle = 0;
    img1.style.transform = 'rotate(0deg)'
})