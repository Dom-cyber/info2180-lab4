window.onload = begin;

function begin() {
    startGame();
  
    displayXorOwhenClick();
  
    changeStyle();
}


function startGame() {
    let layoutBoard = document.getElementById("board").children;

    for(let i = 0; i < layoutBoard.length; i++) {

        layoutBoard[i].setAttribute("class", "square");

    }
}


let gameplay = new Array();

function displayXorOwhenClick() {

    let square = document.querySelectorAll("#board > div");

    for (let i = 0; i < square.length; i++) {

        square[i].onclick = function() {

            if(gameplay.length === 0 && square[i].innerHTML === "") {

                square[i].classList.add("square", "X");

                square[i].innerHTML = "X";

                gameplay.push("X");

                checkforWinner();

                restart();

            }


            else {


                if (gameplay[gameplay.length - 1] === "X" && square[i].innerHTML === ""){

                    square[i].classList.add("square", "O");

                    square[i].innerHTML = "O";

                    gameplay.push("O");

                    checkforWinner();

                    restart();

                }


                else if (gameplay[gameplay.length - 1] === "O" && square[i].innerHTML === ""){

                    square[i].classList.add("square", "X");

                    square[i].innerHTML = "X";

                    gameplay.push("X");

                    checkforWinner();

                    restart();


                }


            }


        }


    }


}


function changeStyle() {

    let squares = document.getElementById("board").children;

    for (let i = 0; i < squares.length; i++) {

        squares[i].onmouseover = function() {

            squares[i].classList.toggle("hover", true)

        }

        squares[i].onmouseout = function() {

            squares[i].classList.toggle("hover", false)

        }

    }

}


function checkforWinner() {

    let wincells = document.getElementById("board").children;

    if (wincells[0].textContent !== "" && wincells[0].textContent === "X" && wincells[1].textContent === "X" && wincells[2].textContent === "X") {  

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }

    else if (wincells[3].textContent !== "" && wincells[3].textContent === "X" && wincells[4].textContent === "X" && wincells[5].textContent === "X") {

        update.classList.add("status.you-won::before", "status", "you-won", "#status.you-won::after");

        update.innerHTML = "Congratulations! X is the Winner!";

    }

    else if (wincells[6].textContent !== "" && wincells[6].textContent === "X" && wincells[7].textContent === "X" && wincells[8].textContent === "X") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";

    }

    else if (wincells[2].textContent !== "" && wincells[2].textContent === "X" && wincells[4].textContent === "X" && wincells[6].textContent === "X") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";

    }


    else if (wincells[0].textContent !== "" && wincells[0].textContent === "X" && wincells[4].textContent === "X" && wincells[8].textContent === "X") {


        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";

    }


    else if (wincells[0].textContent !== "" && wincells[0].textContent === "X" && wincells[3].textContent === "X" && wincells[6].textContent === "X") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";


    }

    else if (wincells[1].textContent !== "" && wincells[1].textContent === "X" && wincells[4].textContent === "X" && wincells[7].textContent === "X") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";

    }


    else if (wincells[2].textContent !== "" && wincells[2].textContent === "X" && wincells[5].textContent === "X" && wincells[8].textContent === "X") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";

    }


    else if (wincells[0].textContent !== "" && wincells[0].textContent === "O" && wincells[1].textContent === "O" && wincells[2].textContent === "O") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";

    }


    else if (wincells[3].textContent !== "" && wincells[3].textContent === "O" && wincells[4].textContent === "O" && wincells[5].textContent === "O") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";

    }


    else if (wincells[6].textContent !== "" && wincells[6].textContent === "O" && wincells[7].textContent === "O" && wincells[8].textContent === "O") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";

    }


    else if (wincells[2].textContent !== "" && wincells[2].textContent === "O" && wincells[4].textContent === "O" && wincells[6].textContent === "O") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";

    }


    else if (wincells[0].textContent !== "" && wincells[0].textContent === "O" && wincells[4].textContent === "O" && wincells[8].textContent === "O") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";

    }


    else if (wincells[0].textContent !== "" && wincells[0].textContent === "O" && wincells[3].textContent === "O" && wincells[6].textContent === "O") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";

    }


    else if (wincells[1].textContent !== "" && wincells[1].textContent === "O" && wincells[4].textContent === "O" && wincells[7].textContent === "O") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";

    }


    else if (wincells[2] !== "" && wincells[2].textContent === "O" && wincells[5].textContent === "O" && wincells[8].textContent === "O") {

        document.getElementById("status").classList.add("you-won");

        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";

    }

}



function restart() {

    let cellRestart = document.querySelectorAll("#board div");

    document.getElementsByClassName("btn")[0].addEventListener("click", function() {

        gameplay.length = 0;

        for (let j= 0; j < cellRestart.length; j++) {

            cellRestart[j].innerHTML = "";
        }

        document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";

        document.getElementById("status").classList.remove("you-won");


    });


}