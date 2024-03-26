'use strict';

$(function() {
    $('#start_button').on('click', function(){
        ChangeToStart();
    });
});

function ChangeToStart() {
    document.body.classList.remove("start");
    document.getElementById("start").style.display = 'none';
    document.getElementById("game").style.display = 'block';
}

var frame = 800;
var intToString;

let row1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let row2 = row1.concat();
let row3 = row1.concat();
let row4 = row1.concat();
let row5 = row1.concat();
let row6 = row1.concat();
let row7 = row1.concat();
let row8 = row1.concat();
let row9 = row1.concat();
let row10 = row1.concat();
let row11 = row1.concat();
let row12 = row1.concat();
let row13 = row1.concat();
let row14 = row1.concat();
let row15 = row1.concat();
let row16 = row1.concat();
let row17 = row1.concat();
let row18 = row1.concat();
let row19 = row1.concat();
let row20 = row1.concat();
var grid = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13, row14, row15, row16, row17, row18, row19, row20];
var minoBlock1 = [];
var minoBlock2 = [];
var minoBlock3 = [];
var minoBlock4 = [];
var rotate = 0;
var locateX = 4;
var locateY = 2;
var minos = ["Z", "S", "J", "L", "O", "T", "I"];
var nextMinos = minos.concat();
arrayShuffle(minos);
arrayShuffle(nextMinos);
var minosNeverChange = nextMinos.concat();
var placedX = [];
var placedY = [];
var placedColor = [];

setInterval(function() {
    minoClassify();
    minoFall();
    for(let i = 1; i < 11; i++) {
        for(let j = 1; j < 21; j++){
            switch (j) {
                case 1:
                    intToString = "a";
                    break;
                case 2:
                    intToString = "b";
                    break;
                case 3:
                    intToString = "c";
                    break;
                case 4:
                    intToString = "d";
                    break;
                case 5:
                    intToString = "e";
                    break;
                case 6:
                    intToString = "f";
                    break;
                case 7:
                    intToString = "g";
                    break;
                case 8:
                    intToString = "h";
                    break;
                case 9:
                    intToString = "i";
                    break;
                case 10:
                    intToString = "j";
                    break;
                case 11:
                    intToString = "k";
                    break;
                case 12:
                    intToString = "l";
                    break;
                case 13:
                    intToString = "m";
                    break;
                case 14:
                    intToString = "n";
                    break;
                case 15:
                    intToString = "o";
                    break;
                case 16:
                    intToString = "p";
                    break;
                case 17:
                    intToString = "q";
                    break;
                case 18:
                    intToString = "r";
                    break;
                case 19:
                    intToString = "s";
                    break;
                case 20:
                    intToString = "t";
                    break;
            }
            var here = document.getElementById(`${intToString}_${i}`);
            for(let k = 0; k < placedX.length; k++){
                if(i == placedX[k] && j == placedY[k]){
                    grid[i][j] = placedColor[k];
                }
            }
            switch (minos[0]) {
                case "Z":
                    grid[minoBlock1[0]][minoBlock1[1]] = 1;
                    grid[minoBlock2[0]][minoBlock2[1]] = 1;
                    grid[minoBlock3[0]][minoBlock3[1]] = 1;
                    grid[minoBlock4[0]][minoBlock4[1]] = 1;
                    break;
                case "S":
                    grid[minoBlock1[0]][minoBlock1[1]] = 2;
                    grid[minoBlock2[0]][minoBlock2[1]] = 2;
                    grid[minoBlock3[0]][minoBlock3[1]] = 2;
                    grid[minoBlock4[0]][minoBlock4[1]] = 2;
                    break;
                case "J":
                    grid[minoBlock1[0]][minoBlock1[1]] = 3;
                    grid[minoBlock2[0]][minoBlock2[1]] = 3;
                    grid[minoBlock3[0]][minoBlock3[1]] = 3;
                    grid[minoBlock4[0]][minoBlock4[1]] = 3;
                    break;
                case "L":
                    grid[minoBlock1[0]][minoBlock1[1]] = 4;
                    grid[minoBlock2[0]][minoBlock2[1]] = 4;
                    grid[minoBlock3[0]][minoBlock3[1]] = 4;
                    grid[minoBlock4[0]][minoBlock4[1]] = 4;
                    break;
                case "O":
                    grid[minoBlock1[0]][minoBlock1[1]] = 5;
                    grid[minoBlock2[0]][minoBlock2[1]] = 5;
                    grid[minoBlock3[0]][minoBlock3[1]] = 5;
                    grid[minoBlock4[0]][minoBlock4[1]] = 5;
                    break;
                case "T":
                    grid[minoBlock1[0]][minoBlock1[1]] = 6;
                    grid[minoBlock2[0]][minoBlock2[1]] = 6;
                    grid[minoBlock3[0]][minoBlock3[1]] = 6;
                    grid[minoBlock4[0]][minoBlock4[1]] = 6;
                    break;
                case "I":
                    grid[minoBlock1[0]][minoBlock1[1]] = 7;
                    grid[minoBlock2[0]][minoBlock2[1]] = 7;
                    grid[minoBlock3[0]][minoBlock3[1]] = 7;
                    grid[minoBlock4[0]][minoBlock4[1]] = 7;
                    break;
            }
            switch (grid[i][j]) {
                case 0:
                    here.style.backgroundColor = 'white';
                    break;
                case 1:
                    here.style.backgroundColor = 'red';
                    break;
                case 2:
                    here.style.backgroundColor = 'lightgreen';
                    break;
                case 3:
                    here.style.backgroundColor = 'blue';
                    break;
                case 4:
                    here.style.backgroundColor = 'orange';
                    break;
                case 5:
                    here.style.backgroundColor = 'yellow';
                    break;
                case 6:
                    here.style.backgroundColor = 'purple';
                    break;
                case 7:
                    here.style.backgroundColor = 'lightblue';
                    break;
            }
        }
    }
    //todo 他のブラックが下にある判定
    if((minoBlock1[1] == 20 || minoBlock2[1] == 20 || minoBlock3[1] == 20 || minoBlock4[1] == 20) || (placedX[placedY.indexOf(minoBlock1[1] + 1)] == minoBlock1[0] || placedX[placedY.indexOf(minoBlock2[1] + 1)] == minoBlock2[0] || placedX[placedY.indexOf(minoBlock3[1] + 1)] == minoBlock3[0] || placedX[placedY.indexOf(minoBlock4[1] + 1)] == minoBlock4[0])) {
        placedX.push(minoBlock1[0], minoBlock2[0], minoBlock3[0], minoBlock4[0]);
        placedY.push(minoBlock1[1], minoBlock2[1], minoBlock3[1], minoBlock4[1]);
        switch (minos[0]) {
            case "Z":
                placedColor.push(1, 1, 1, 1);
                break;
            case "S":
                placedColor.push(2, 2, 2, 2);
                break;
            case "J":
                placedColor.push(3, 3, 3, 3);
                break;
            case "L":
                placedColor.push(4, 4, 4, 4);
                break;
            case "O":
                placedColor.push(5, 5, 5, 5);
                break;
            case "T":
                placedColor.push(6, 6, 6, 6);
                break;
            case "I":
                placedColor.push(7, 7, 7, 7);
                break;
        }
        minoSort();
        locateX = 4;
        locateY = 1;
    } else {
        grid[minoBlock1[0]][minoBlock1[1]] = 0;
        grid[minoBlock2[0]][minoBlock2[1]] = 0;
        grid[minoBlock3[0]][minoBlock3[1]] = 0;
        grid[minoBlock4[0]][minoBlock4[1]] = 0;
    }
}, frame);

function arrayShuffle(array) {
    for(let i = (array.length - 1); 0 < i; i--){
      let r = Math.floor(Math.random() * (i + 1));
      let tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
}

function minoFall(){
    //todo 他のブラックが下にある判定
    if((minoBlock1[1] != 20 && minoBlock2[1] != 20 && minoBlock3[1] != 20 && minoBlock4[1] != 20) && (placedX[placedY.indexOf(minoBlock1[1] + 1)] != minoBlock1[0] && placedX[placedY.indexOf(minoBlock2[1] + 1)] != minoBlock2[0] && placedX[placedY.indexOf(minoBlock3[1] + 1)] != minoBlock3[0] && placedX[placedY.indexOf(minoBlock4[1] + 1)] != minoBlock4[0])){
        locateY ++;
    }
}

function minoSort(){
    for(let i = 0; i < 6; i++) {
        minos[i] = minos[i + 1];
    }
    minos[6] = nextMinos[0];
    if(minosNeverChange[0] == minos[0] && nextMinos[0] == nextMinos[6]) {
        nextMinos = arrayShuffle(minosNeverChange);
        minosNeverChange = nextMinos.concat();
    } else {
        for(let j = 0; j < 6; j++) {
            nextMinos[j] = nextMinos[j + 1];
        }
    }
}

function minoClassify(){
    switch (minos[0]) {
        case "Z":
            switch (rotate){
                case 0:
                    minoBlock1 = [locateX - 1, locateY - 1];
                    minoBlock2 = [locateX, locateY - 1];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX + 1, locateY];
                    break;
                case 1:
                    minoBlock1 = [locateX + 1, locateY - 1];
                    minoBlock2 = [locateX + 1, locateY];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX, locateY + 1];
                    break;
                case 2:
                    minoBlock1 = [locateX + 1, locateY + 1];
                    minoBlock2 = [locateX, locateY + 1];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX - 1, locateY];
                    break;
                case 3:
                    minoBlock1 = [locateX - 1, locateY - 1];
                    minoBlock2 = [locateX - 1, locateY];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX, locateY + 1];
                    break;
            }
            break;
        case "S":
            switch (rotate){
                case 0:
                    minoBlock1 = [locateX + 1, locateY - 1];
                    minoBlock2 = [locateX, locateY - 1];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX - 1, locateY];
                    break;
                case 1:
                    minoBlock1 = [locateX + 1, locateY + 1];
                    minoBlock2 = [locateX + 1, locateY];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX, locateY - 1];
                    break;
                case 2:
                    minoBlock1 = [locateX - 1, locateY + 1];
                    minoBlock2 = [locateX, locateY + 1];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX + 1, locateY];
                    break;
                case 3:
                    minoBlock1 = [locateX - 1, locateY - 1];
                    minoBlock2 = [locateX - 1, locateY];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX, locateY + 1];
                    break;
            }
            break;
        case "J":
            switch (rotate) {
                case 0:
                    minoBlock1 = [locateX - 1, locateY - 1];
                    minoBlock2 = [locateX - 1, locateY];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX + 1, locateY];
                    break;
                case 1:
                    minoBlock1 = [locateX + 1, locateY - 1];
                    minoBlock2 = [locateX, locateY - 1];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX, locateY + 1];
                    break;
                case 2:
                    minoBlock1 = [locateX + 1, locateY + 1];
                    minoBlock2 = [locateX + 1, locateY];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX - 1, locateY];
                    break;
                case 3:
                    minoBlock1 = [locateX - 1, locateY + 1];
                    minoBlock2 = [locateX, locateY + 1];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX, locateY - 1];
                    break;
            }
            break;
        case "L":
            switch (rotate) {
                case 0:
                    minoBlock1 = [locateX + 1, locateY - 1];
                    minoBlock2 = [locateX + 1, locateY];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX - 1, locateY];
                    break;
                case 1:
                    minoBlock1 = [locateX + 1, locateY + 1];
                    minoBlock2 = [locateX, locateY + 1];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX, locateY - 1];
                    break;
                case 2:
                    minoBlock1 = [locateX - 1, locateY + 1];
                    minoBlock2 = [locateX - 1, locateY];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX + 1, locateY];
                    break;
                case 3:
                    minoBlock1 = [locateX - 1, locateY - 1];
                    minoBlock2 = [locateX, locateY - 1];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX, locateY + 1];
                    break;
            }
            break;
        case "O":
            minoBlock1 = [locateX, locateY - 1];
            minoBlock2 = [locateX + 1, locateY - 1];
            minoBlock3 = [locateX, locateY];
            minoBlock4 = [locateX + 1, locateY];
            break;
        case "T":
            switch (rotate) {
                case 0:
                    minoBlock1 = [locateX, locateY - 1];
                    minoBlock2 = [locateX - 1, locateY];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX + 1, locateY];
                    break;
                case 1:
                    minoBlock1 = [locateX + 1, locateY];
                    minoBlock2 = [locateX, locateY - 1];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX, locateY + 1];
                    break;
                case 2:
                    minoBlock1 = [locateX, locateY + 1];
                    minoBlock2 = [locateX + 1, locateY];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX - 1, locateY];
                    break;
                case 3:
                    minoBlock1 = [locateX - 1, locateY];
                    minoBlock2 = [locateX, locateY + 1];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX, locateY - 1];
                    break;
            }
            break;
        case "I":
            switch (rotate) {
                case 0:
                    minoBlock1 = [locateX - 1, locateY];
                    minoBlock2 = [locateX, locateY];
                    minoBlock3 = [locateX + 1, locateY];
                    minoBlock4 = [locateX + 2, locateY];
                    break;
                case 1:
                    minoBlock1 = [locateX, locateY - 1];
                    minoBlock2 = [locateX, locateY];
                    minoBlock3 = [locateX, locateY + 1];
                    minoBlock4 = [locateX, locateY + 2];
                    break;
                case 2:
                    minoBlock1 = [locateX + 1, locateY];
                    minoBlock2 = [locateX, locateY];
                    minoBlock3 = [locateX - 1, locateY];
                    minoBlock4 = [locateX - 2, locateY];
                    break;
                case 3:
                    minoBlock1 = [locateX, locateY + 1];
                    minoBlock2 = [locateX, locateY];
                    minoBlock3 = [locateX, locateY - 1];
                    minoBlock4 = [locateX, locateY - 2];
                    break;
            }
            break;
    }
}