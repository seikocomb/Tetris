'use strict';

$(function() {
    $('#start_button').on('click', function(){
        document.body.classList.remove("start");
        document.getElementById("start").style.display = 'none';
        document.getElementById("game").style.display = 'block';
        frame = 800;
        lineCounter = 0;
        score = 0;
        down = false;
        spined = false;
        row1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        row2 = row1.concat();
        row3 = row1.concat();
        row4 = row1.concat();
        row5 = row1.concat();
        row6 = row1.concat();
        row7 = row1.concat();
        row8 = row1.concat();
        row9 = row1.concat();
        row10 = row1.concat();
        grid = [row1, row2, row3, row4, row5, row6, row7, row8, row9, row10];
        minoBlock1 = [];
        minoBlock2 = [];
        minoBlock3 = [];
        minoBlock4 = [];
        rotate = 0;
        locateX = 4;
        locateY = 0;
        minos = ["Z", "S", "J", "L", "O", "T", "I"];
        nextMinos = minos.concat();
        arrayShuffle(minos);
        arrayShuffle(nextMinos);
        row1Located = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
        row2Located = row1Located.concat();
        row3Located = row1Located.concat();
        row4Located = row1Located.concat();
        row5Located = row1Located.concat();
        row6Located = row1Located.concat();
        row7Located = row1Located.concat();
        row8Located = row1Located.concat();
        row9Located = row1Located.concat();
        row10Located = row1Located.concat();
        placedXY = [row1Located, row2Located, row3Located, row4Located, row5Located, row6Located, row7Located, row8Located, row9Located, row10Located];
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 20; j++){
                placedXY[i][j] = 0;
            }
        }
        onMinoTime = 0;
        hold_mino = null;
        hold_mino_sub = null;
        gameStart();
        minoClassify();
    });
});

var frame = 800;
var intToString;

var row1, row2, row3, row4, row5, row6, row7, row8, row9, row10;
var grid = [];

var minoBlock1 = [];
var minoBlock2 = [];
var minoBlock3 = [];
var minoBlock4 = [];
var rotate = 0;
var locateX = 5;
var locateY = 1;

var minos = ["Z", "S", "J", "L", "O", "T", "I"];
var nextMinos = minos.concat();
arrayShuffle(minos);
arrayShuffle(nextMinos);
var minosNeverChange = nextMinos.concat();

var minoColor;

var row1Located, row2Located, row3Located, row4Located, row5Located, row6Located, row7Located, row8Located, row9Located, row10Located;
var placedXY = [];

var interval;
var finish;
var onMinoTime;

var down;
var spined;


function gameStart(){
    score = 0;
    clearTimeout(interval);
    interval = setTimeout(function tick() {
        if(!((minoBlock1[1] == 19 || minoBlock2[1] == 19 || minoBlock3[1] == 19 || minoBlock4[1] == 19) || (placedXY[minoBlock1[0]][minoBlock1[1] + 1] != 0) || (placedXY[minoBlock2[0]][minoBlock2[1] + 1] != 0) || (placedXY[minoBlock3[0]][minoBlock3[1] + 1] != 0) || (placedXY[minoBlock4[0]][minoBlock4[1] + 1] != 0))){
            locateY ++;
        }
        minoClassify();
        for(let i = 0; i < 10; i++) {
            for(let j = 0; j < 20; j++){
                switch (j) {
                    case 0:
                        intToString = "a";
                        break;
                    case 1:
                        intToString = "b";
                        break;
                    case 2:
                        intToString = "c";
                        break;
                    case 3:
                        intToString = "d";
                        break;
                    case 4:
                        intToString = "e";
                        break;
                    case 5:
                        intToString = "f";
                        break;
                    case 6:
                        intToString = "g";
                        break;
                    case 7:
                        intToString = "h";
                        break;
                    case 8:
                        intToString = "i";
                        break;
                    case 9:
                        intToString = "j";
                        break;
                    case 10:
                        intToString = "k";
                        break;
                    case 11:
                        intToString = "l";
                        break;
                    case 12:
                        intToString = "m";
                        break;
                    case 13:
                        intToString = "n";
                        break;
                    case 14:
                        intToString = "o";
                        break;
                    case 15:
                        intToString = "p";
                        break;
                    case 16:
                        intToString = "q";
                        break;
                    case 17:
                        intToString = "r";
                        break;
                    case 18:
                        intToString = "s";
                        break;
                    case 19:
                        intToString = "t";
                        break;
                }
                var here = document.getElementById(`${intToString}_${i + 1}`);
                grid[i][j] = placedXY[i][j];
                switch (minos[0]) {
                    case "Z":
                        grid[minoBlock1[0]][minoBlock1[1]] = 1;
                        grid[minoBlock2[0]][minoBlock2[1]] = 1;
                        grid[minoBlock3[0]][minoBlock3[1]] = 1;
                        grid[minoBlock4[0]][minoBlock4[1]] = 1;
                        minoColor = 1;
                        break;
                    case "S":
                        grid[minoBlock1[0]][minoBlock1[1]] = 2;
                        grid[minoBlock2[0]][minoBlock2[1]] = 2;
                        grid[minoBlock3[0]][minoBlock3[1]] = 2;
                        grid[minoBlock4[0]][minoBlock4[1]] = 2;
                        minoColor = 2;
                        break;
                    case "J":
                        grid[minoBlock1[0]][minoBlock1[1]] = 3;
                        grid[minoBlock2[0]][minoBlock2[1]] = 3;
                        grid[minoBlock3[0]][minoBlock3[1]] = 3;
                        grid[minoBlock4[0]][minoBlock4[1]] = 3;
                        minoColor = 3;
                        break;
                    case "L":
                        grid[minoBlock1[0]][minoBlock1[1]] = 4;
                        grid[minoBlock2[0]][minoBlock2[1]] = 4;
                        grid[minoBlock3[0]][minoBlock3[1]] = 4;
                        grid[minoBlock4[0]][minoBlock4[1]] = 4;
                        minoColor = 4;
                        break;
                    case "O":
                        grid[minoBlock1[0]][minoBlock1[1]] = 5;
                        grid[minoBlock2[0]][minoBlock2[1]] = 5;
                        grid[minoBlock3[0]][minoBlock3[1]] = 5;
                        grid[minoBlock4[0]][minoBlock4[1]] = 5;
                        minoColor = 5;
                        break;
                    case "T":
                        grid[minoBlock1[0]][minoBlock1[1]] = 6;
                        grid[minoBlock2[0]][minoBlock2[1]] = 6;
                        grid[minoBlock3[0]][minoBlock3[1]] = 6;
                        grid[minoBlock4[0]][minoBlock4[1]] = 6;
                        minoColor = 6;
                        break;
                    case "I":
                        grid[minoBlock1[0]][minoBlock1[1]] = 7;
                        grid[minoBlock2[0]][minoBlock2[1]] = 7;
                        grid[minoBlock3[0]][minoBlock3[1]] = 7;
                        grid[minoBlock4[0]][minoBlock4[1]] = 7;
                        minoColor = 7;
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
        if((minoBlock1[1] == 19 || minoBlock2[1] == 19 || minoBlock3[1] == 19 || minoBlock4[1] == 19) || (placedXY[minoBlock1[0]][minoBlock1[1] + 1] != 0) || (placedXY[minoBlock2[0]][minoBlock2[1] + 1] != 0) || (placedXY[minoBlock3[0]][minoBlock3[1] + 1] != 0) || (placedXY[minoBlock4[0]][minoBlock4[1] + 1] != 0)){
            onMinoTime ++;
            if (down){
                finish();
                down = false;
            } else {
                if(onMinoTime >= 500 / frame + 1){
                    finish();
                }
            }
        } else {
            grid[minoBlock1[0]][minoBlock1[1]] = 0;
            grid[minoBlock2[0]][minoBlock2[1]] = 0;
            grid[minoBlock3[0]][minoBlock3[1]] = 0;
            grid[minoBlock4[0]][minoBlock4[1]] = 0;
        }
        document.getElementById("hold").textContent = `${hold_mino}`;
        document.getElementById("minos").textContent = `${minos[1]} ${minos[2]} ${minos[3]} ${minos[4]} ${minos[5]}`;
        interval = setTimeout(tick, frame);
    }, frame);
}


finish = function() {
    placedXY[minoBlock1[0]][minoBlock1[1]] = minoColor;
    placedXY[minoBlock2[0]][minoBlock2[1]] = minoColor;
    placedXY[minoBlock3[0]][minoBlock3[1]] = minoColor;
    placedXY[minoBlock4[0]][minoBlock4[1]] = minoColor;
    deleteLine();
    minoSort();
    locateX = 4;
    locateY = 0;
    rotate = 0;
    minoClassify();
    onMinoTime = 0;
    spined = false;
    if(placedXY[4][0] != 0){
        document.body.classList.add("start");
        document.getElementById("start").style.display = 'block';
        document.getElementById("game").style.display = 'none';
        frame = Number.MAX_SAFE_INTEGER;
    }
}

var ccw;
var cw;

ccw = function(){
    rotate --;
    if(rotate == -1){
        rotate = 3;
    }
    minoClassify();
    if(onMinoTime > 0){
        spined = true;
    }
    onMinoTime = 0;
}

cw = function(){
    rotate ++;
    if(rotate == 4){
        rotate = 0;
    }
    minoClassify();
    if(onMinoTime > 0){
        spined = true;
    }
    onMinoTime = 0;
}

var Left;
var Right;
var CCW;
var CW;
var Hold;
var hold_mino;
var hold_mino_sub;

Left = function(){
    if(minoBlock1[0] != 0 && minoBlock2[0] != 0 && minoBlock3[0] != 0 && minoBlock4[0] != 0) {
        if(placedXY[minoBlock1[0] - 1][minoBlock1[1]] == 0 && placedXY[minoBlock2[0] - 1][minoBlock2[1]] == 0 && placedXY[minoBlock3[0] - 1][minoBlock3[1]] == 0 && placedXY[minoBlock4[0] - 1][minoBlock4[1]] == 0){
            locateX --;
            minoClassify();
            onMinoTime = 0;
        }
    }
}

Right = function(){
    if(minoBlock1[0] != 9 && minoBlock2[0] != 9 && minoBlock3[0] != 9 && minoBlock4[0] != 9) {
        if(placedXY[minoBlock1[0] + 1][minoBlock1[1]] == 0 && placedXY[minoBlock2[0] + 1][minoBlock2[1]] == 0 && placedXY[minoBlock3[0] + 1][minoBlock3[1]] == 0 && placedXY[minoBlock4[0] + 1][minoBlock4[1]] == 0){
            locateX ++;
            minoClassify();
            onMinoTime = 0;
        }
    }
}

CCW = function(){
    switch(minos[0]){
        case "Z":
            switch(rotate){
                case 0:
                    if(placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 1 >= 0 && locateY + 1 <= 19){
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 1] == 0 && placedXY[locateX + 1][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 1 <= 19 && locateY - 1 >= 0){
                            locateX ++;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 2 <= 19){
                            locateX ++;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 3] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateY -= 2;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 3] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateX ++;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
                case 1:
                    if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 1 <= 19){
                            ccw();
                        }
                    } else if(placedXY[locateX - 2][locateY - 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 2 >= 0 && locateX - 1 >= 0){
                            locateX --;
                            ccw();
                        }
                    } else if(placedXY[locateX - 2][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX - 2 >= 0 && locateY - 2 >= 0){
                            locateX --;
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 2] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY + 2 <= 19){
                            locateY += 2;
                            ccw();
                        }
                    } else if(placedXY[locateX - 2][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0){
                        if(locateX - 2 >= 0 && locateY + 2 <= 19){
                            locateX --;
                            locateY += 2;
                            ccw();
                        }
                    }
                    break;
                case 2:
                    if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX + 1 <= 9 && locateY - 1 >= 0){
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 2] == 0){
                        if(locateX - 1 >= 0 && locateY + 2 <= 19){
                            locateX --;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 3] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateY -= 2;
                            ccw();
                        }
                    } else if(placedXY[locateX + 2][locateY - 3] == 0 && placedXY[locateX + 2][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 1] == 0){
                        if(locateX + 2 <= 9 && locateY - 3 >= 0){
                            locateX ++;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
                case 3:
                    if(placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 1 <= 19){
                            ccw();
                        }
                    } else if(placedXY[locateX + 2][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX + 2 <= 9 && locateY + 1 <= 19){
                            locateX ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY] == 0 && placedXY[locateX + 2][locateY] == 0){
                        if(locateX + 2 <= 9 && locateY - 1 >= 0){
                            locateX ++;
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY + 3 <= 19){
                            locateY += 2;
                            ccw();
                        }
                    } else if(placedXY[locateX + 2][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0){
                        if(locateX + 2 <= 9 && locateY + 3 <= 19){
                            locateX ++;
                            locateY += 2;
                            ccw();
                        }
                    }
                    break;
            }
            break;
        case "S":
            switch(rotate){
                case 0:
                    if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 1 <= 19){
                            locateX ++;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 2] == 0){
                        if(locateX + 1 <= 9 && locateY + 2 <= 19){
                            locateX ++;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 3] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateY -= 2;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 3] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 2] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateX ++;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
                case 1:
                    if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY - 1 >= 0){
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY] == 0 && placedXY[locateX - 2][locateY] == 0){
                        if(locateX - 2 >= 0 && locateY - 1 >= 0){
                            locateX --;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 2][locateY - 1] == 0){
                        if(locateX - 2 >= 0 && locateY - 2 >= 0){
                            locateX --;
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX - 1][locateY + 3] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY + 3 <= 19){
                            locateY += 2;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 3] == 0 && placedXY[locateX - 2][locateY + 3] == 0){
                        if(locateX - 2 >= 0 && locateY + 3 <= 19){
                            locateX --;
                            locateY += 2;
                            ccw();
                        }
                    }
                    break;
                case 2:
                    if(placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 1 <= 19 && locateY - 1 >= 0){
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 1 >= 0 && locateY - 1 >= 0){
                            locateX --;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 1 >= 0 && locateY + 2 <= 19){
                            locateX --;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 3] == 0){
                        if(locateX + 1 <- 9 && locateY - 3 >= 0){
                            locateY -= 2;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 3] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateX --;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
                case 3:
                    if(placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY + 1 <= 19){
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY] == 0 && placedXY[locateX + 2][locateY] == 0){
                        if(locateX + 2 <= 9 && locateY + 1 <= 19){
                            locateX ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY] == 0 && placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 2][locateY - 1] == 0){
                        if(locateX + 2 <= 9 && locateY - 1 >= 0){
                            locateX ++;
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 3] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 2] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY + 3 <= 19){
                            locateY += 2;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX + 2][locateY + 2] == 0){
                        if(locateX + 2 <= 9 && locateY + 3 <= 19){
                            locateX ++;
                            locateY += 2;
                            ccw();
                        }
                    }
                    break;
            }
            break;
        case "J":
            switch(rotate){
                case 0:
                    if(placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX][locateY + 1] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateX - 1 >= 0 && locateY + 1 <= 19){
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 1 <= 19 && locateY - 1 >= 0){
                            locateX ++;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 2 <= 19){
                            locateX ++;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 3] == 0){
                        if(locateY - 3 >= 0){
                            locateY -= 2;
                            ccw();
                        } 
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 3] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateX ++;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
                case 1:
                    if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY - 1 >= 0){
                            ccw();
                        }
                    } else if(placedXY[locateX - 2][locateY - 1] == 0 && placedXY[locateX - 2][locateY] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 2 >= 0 && locateY - 1 >= 0){
                            locateX --;
                            ccw();
                        }
                    } else if(placedXY[locateX - 2][locateY - 2] == 0 && placedXY[locateX - 2][locateY - 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 2 >= 0 && locateY - 2 >= 0){
                            locateX --;
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 2] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY + 2 <= 19){
                            locateY += 2;
                            ccw();
                        }
                    } else if(placedXY[locateX - 2][locateY + 1] == 0 && placedXY[locateX - 2][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0){
                        if(locateX - 2 >= 0 && locateY + 2 <= 19){
                            locateX --;
                            locateY += 2;
                            ccw();
                        }
                    }
                    break;
                case 2:
                    if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX][locateY - 1] == 0 && placedXY[locateX][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 2 <= 19){
                            locateX --;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 3] == 0 && placedXY[locateX][locateY - 3] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateY -= 2;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 3] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateX --;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
                case 3:
                    if(placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY + 1 <= 19){
                            ccw();
                        }
                    } else if(placedXY[locateX + 2][locateY + 1] == 0 && placedXY[locateX + 2][locateY] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX + 2 <= 9 && locateY + 1 <= 19){
                            locateX ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 2][locateY] == 0 && placedXY[locateX + 2][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 1] == 0){
                        if(locateX + 2 <= 9 && locateY - 1 >= 0){
                            locateX ++;
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0){
                        if(locateX + 1 <= 9 && locateX - 2 >= 0 && locateY + 3 <= 19){
                            locateY += 2;
                            ccw();
                        }
                    } else if(placedXY[locateX + 2][locateY + 3] == 0 && placedXY[locateX + 2][locateY + 2] == 0 && placedXY[locateX + 1][locateX + 2] == 0 && placedXY[locateX][locateY + 2] == 0){
                        if(locateX + 2 <= 9 && locateY + 3 <= 19){
                            locateX ++;
                            locateY += 2;
                            ccw();
                        }
                    }
                    break;
            }
            break;
        case "L":
            switch(rotate){
                case 0:
                    if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX][locateY - 1] == 0 && placedXY[locateX][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            locateX ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 2] == 0){
                        if(locateX + 1 <= 9 && locateY + 2 <= 19){
                            locateX ++;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 3] == 0 && placedXY[locateX][locateY - 3] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateY -= 2;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 3] == 0 && placedXY[locateX + 1][locateY - 3] == 0 && placedXY[locateX + 1][locateY - 2] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateX ++;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
                case 1:
                    if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY - 1 >= 0){
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY] == 0 && placedXY[locateX - 2][locateY] == 0){
                        if(locateX - 2 >= 0){
                            locateX --;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 2][locateY - 1] == 0){
                        if(locateX - 2 >= 0 && locateY - 2 >= 0){
                            locateX --;
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 3] == 0 && placedXY[locateX + 1][locateX - 2] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateY -= 2;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 3] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 2][locateY - 2] == 0){
                        if(locateX - 2 >= 0 && locateY - 3 >= 0){
                            locateX --;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
                case 2:
                    if(placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX][locateY + 1] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 1 <= 19 && locateY - 1 >= 0){
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 1 <= 19 && locateY - 1 >= 0){
                            locateX --;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0){
                        if(locateX - 1 >= 0 && locateY + 2 <= 19){
                            locateX --;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX][locateY - 1] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 3] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateY -= 2;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 3] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateX --;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
                case 3:
                    if(placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY + 1 <= 19){
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY] == 0 && placedXY[locateX + 2][locateY] == 0){
                        if(locateX + 2 <= 9){
                            locateX ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 2][locateY - 1] == 0){
                        if(locateX + 2 <= 9 && locateY - 1 >= 0){
                            locateX ++;
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 3] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 2] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY + 3 <= 19){
                            locateY += 2;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 3] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX + 2][locateY + 2] == 0){
                        if(locateX + 2 <= 9 && locateY + 3 <= 19){
                            locateX ++;
                            locateY += 2;
                            ccw();
                        }
                    }
                    break;
            }
            break;
        case "T":
            switch(rotate){
                case 0:
                    if(placedXY[locateX][locateY + 1] == 0){
                        if(locateX + 1 <= 9){
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            locateX ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 2 >= 0)
                            locateX ++;
                            locateY --;
                            ccw();
                    } else if(placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX][locateY + 1] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX][locateY + 3] == 0){
                        if(locateX - 1 >= 0 && locateY + 3 <= 19){
                            locateY += 2;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 3] == 0){
                        if(locateX + 1 <= 9 && locateY + 3 <= 19){
                            locateX ++;
                            locateY += 2;
                            ccw();
                        }
                    }
                    break;
                case 1:
                    if(placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 1 >= 0){
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 2][locateY] == 0){
                        if(locateX + 2 <= 9 && locateY - 1 >= 0){
                            locateX ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 2][locateY + 1] == 0){
                        if(locateX + 2 <= 9 && locateY + 1 <= 19){
                            locateX ++;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 3] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 2] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY - 2 >= 0){
                            locateY -= 2;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 3] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 2][locateY - 2] == 0){
                        if(locateX + 2 <= 9 && locateY - 3 >= 0){
                            locateX ++;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
                case 2:
                    if(placedXY[locateX][locateY - 1] == 0){
                        if(locateY - 1 >= 0){
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 2 >= 0){
                            locateX --;
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX][locateY + 3] == 0){
                        if(locateX + 1 <= 9 && locateY + 3 <= 19){
                            locateY += 2;
                            ccw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 3] == 0){
                        if(locateX - 1 >= 0 && locateY + 3 <= 19){
                            locateX --;
                            locateY += 2;
                            ccw();
                        }
                    }
                    break;
                case 3:
                    if(placedXY[locateX + 1][locateY] == 0){
                        if(locateX + 1 <= 9){
                            ccw();
                        }
                    } else if(placedXY[locateX - 2][locateY] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 2 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 2][locateY + 1] == 0){
                        if(locateX - 2 >= 0 && locateY + 2 <= 19){
                            locateX --;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY - 2 >= 0){
                            locateY -= 2;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 2][locateY - 2] == 0){
                        if(locateX - 2 >= 0 && locateY - 2 >= 0){    
                            locateX --;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
            }
            break;
        case "I":
            switch(rotate){
                case 0:
                    if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX][locateY + 1] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateY + 2 <= 19 && locateY - 1 >= 0){
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 2 <= 19 && locateY - 1 >= 0){
                            locateX --;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 2][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 2][locateY - 1] == 0){
                        if(locateX + 2 <= 9 && locateY + 2 <= 19 && locateY - 1 >= 0){
                            locateX += 2;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 3] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateX --;
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX + 2][locateY + 1] == 0 && placedXY[locateX + 2][locateY + 2] == 0 && placedXY[locateX + 2][locateY + 3] == 0){
                        if(locateX + 2 <= 9 && locateY + 3 <= 19){
                            locateX +- 2;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
                case 1:
                    if(placedXY[locateX - 2][locateY] == 0 && placedXY[locateX - 1][locateY] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX - 2 >= 0 && locateX + 1 <= 9){
                            locateX --;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY] == 0 && placedXY[locateX + 2][locateY] == 0 && placedXY[locateX + 3][locateY] == 0){
                        if(locateX + 3 <= 9){
                            locateX ++;
                            ccw();
                        }
                    } else if(placedXY[locateX - 3][locateY] == 0 && placedXY[locateX - 2][locateY] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 2 >= 0){
                            locateX -= 2;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 2][locateY - 1] == 0 && placedXY[locateX + 3][locateY - 1] == 0){
                        if(locateX + 3 <= 9 && locateY - 1 >= 0){
                            locateX ++;
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX - 3][locateY + 2] == 0 && placedXY[locateX - 2][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0){
                        if(locateX - 3 >= 0 && loca + 2 <= 19){
                            locateX -=2;
                            locateY += 2;
                            ccw();
                        }
                    }
                    break;
                case 2:
                    if(placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 1] == 0 && placedXY[locateX][locateY + 1] == 0){
                        if(locateY - 2 >= 0 && locateY + 1 <= 19){
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 2 >= 0 && locateY + 1 <= 19){
                            locateX ++;
                            locateY --;
                            ccw();
                        }
                    } else if(placedXY[locateX - 2][locateY - 2] == 0 && placedXY[locateX - 2][locateY - 1] == 0 && placedXY[locateX - 2][locateY + 1] == 0){
                        if(locateX - 2 >= 0 && locateY - 2 >= 0 && locateY + 1 <= 19){
                            locateX -= 2;
                            locateY--;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 3] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateX ++;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX - 2][locateY - 3] == 0 && placedXY[locateX - 2][locateY - 2] == 0 && placedXY[locateX - 2][locateY - 1] == 0){
                        if(locateX -2 >= 0 && locateY - 3 >= 0){
                            locateX -= 2;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
                case 3:
                    if(placedXY[locateX + 2][locateY] == 0 && placedXY[locateX + 1][locateY] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX + 2 <= 9 && locateX - 1 >= 0){
                            locateX ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY] == 0 && placedXY[locateX + 2][locateY] == 0 && placedXY[locateX + 3][locateY] == 0){
                        if(locateX + 3 <= 9){
                            locateX += 2;
                            ccw();
                        }
                    } else if(placedXY[locateX - 3][locateY] == 0 && placedXY[locateX - 2][locateY] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 3 >= 0){
                            locateX --;
                            ccw();
                        }
                    } else if(placedXY[locateX - 3][locateY + 1] == 0 && placedXY[locateX - 2][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 3 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            locateY ++;
                            ccw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 2][locateY - 2] == 0 && placedXY[locateX + 3][locateY - 2] == 0){
                        if(locateX + 3 <= 9 && locateY - 2 >= 0){
                            locateX += 2;
                            locateY -= 2;
                            ccw();
                        }
                    }
                    break;
            }
            break;
    }
}

CW = function(){
    switch(minos[0]){
        case "Z":
            switch(rotate){
                case 0:
                    if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 2] == 0){
                        if(locateX - 1 >= 0 && locateY + 2 <= 19){
                            locateX --;
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 3] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateY -= 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 3] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateX --;
                            locateY -= 2;
                            cw();
                        }
                    }
                    break;
                case 1:
                    if(placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY + 1 <= 19){
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY] == 0 && placedXY[locateX - 2][locateY] == 0){
                        if(locateX - 2 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY] == 0 && placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 2][locateY - 1] == 0){
                        if(locateX - 2 >= 0 && locateY - 1 >= 0){
                            locateX --;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY + 3 <= 19){
                            locateY += 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 3] == 0 && placedXY[locateX - 1][locateY + 3] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 2][locateY + 2] == 0){
                        if(locateX - 2 >= 0 && locateY + 3 <= 19){
                            locateX --;
                            locateY +- 2;
                            cw();
                        }
                    }
                    break;
                case 2:
                    if(placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 1 <= 19 && locateY - 1 >= 0){
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && [locateX + 1][locateY] == 0){
                        if(locateX + 1 <= 9 && locateY - 1 >= 0){
                            locateX ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 2 >= 0){
                            locateX ++;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 3] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateY -= 2;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 3] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateX ++;
                            locateY -= 2;
                            cw();
                        }
                    }
                    break;
                case 3:
                    if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY - 1 >= 0){
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY] == 0 && placedXY[locateX + 2][locateY] == 0){
                        if(locateX + 2 <= 9 && locateY - 1 >= 0){
                            locateX ++;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 2][locateX - 1] == 0){
                        if(locateX + 2 <= 9 && locateY - 2 >= 0){
                            locateX ++;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 2] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY + 3 <= 19){
                            locateY += 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX + 2][locateY + 3] == 0){
                        if(locateX + 2 <= 9 && locateY + 3 <= 19){
                            locateX ++;
                            locateY += 2;
                            cw();
                        }
                    }
                    break;
            }
            break;
        case "S":
            switch(rotate){
                case 0:
                    if(placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX + 1 <= 9 && locateY + 1 <= 19){
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 1 <= 19 && locateY - 1 >= 0){
                            locateX --;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 2 <= 19){
                            locateX --;
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 3] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateY -= 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 3] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateX --;
                            locateY -= 2;
                            cw();
                        }
                    }
                    break;
                case 1:
                    if(placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 1 <= 19){
                            cw();
                        }
                    } else if(placedXY[locateX - 2][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 2 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            cw();
                        }
                    } else if(placedXY[locateX - 2][locateY] == 0 && placedXY[locateX - 1][locateY] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 2 >= 0 && locateY - 1 >= 0){
                            locateX --;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 3] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY + 3 <= 19){
                            locateY += 2;
                            cw();
                        }
                    } else if(placedXY[locateX - 2][locateY + 3] == 0 && placedXY[locateX - 1][locateY + 3] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0){
                        if(locateX - 2 >= 0 && locateY + 3 <= 19){
                            locateX --;
                            locateY += 2;
                            cw();
                        }
                    }
                    break;
                case 2:
                    if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 1 >= 0 && locateY - 1 >= 0){
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            locateX ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 2 <= 19){
                            locateX ++;
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 3] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateY -= 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 3] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateX ++;
                            locateY -= 2;
                            cw();
                        }
                    }
                    break;
                case 3:
                    if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 1 >= 0){
                            cw();
                        }
                    } else if(placedXY[locateX + 2][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX + 2 <= 9 && locateY - 1 >= 0){
                            locateX ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 2][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX + 2 <= 9 && locateY - 2 >= 0){
                            locateX ++;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX - 1][locateY + 3] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY + 3 <= 19){
                            locateY += 2;
                            cw();
                        }
                    } else if(placedXY[locateX + 2][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX][locateY + 3] == 0){
                        if(locateX + 2 <= 9 && locateY + 3 <= 19){
                            locateX ++;
                            locateY += 2;
                            cw();
                        }
                    }
                    break;
            }
            break;
        case "J":
            switch(rotate){
                case 0:
                    if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX][locateY - 1] == 0 && placedXY[locateX][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 1 <= 19 && locateY - 1 >= 0){
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 2 <= 19){
                            locateX --;
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 3] == 0 && placedXY[locateX][locateY - 3] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateY -= 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 3] == 0 && placedXY[locateX - 1][locateY - 3] == 0 && placedXY[locateX - 1][locateY - 2] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateX --;
                            locateY -= 2;
                            cw();
                        }
                    }
                    break;
                case 1:
                    if(placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY + 1 <= 19){
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY] == 0 && placedXY[locateX - 2][locateY] == 0){
                        if(locateX - 2 >= 0){
                            locateX --;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 2][locateY - 1] == 0){
                        if(locateX - 2 >= 0 && locateY - 1 >= 0){
                            locateX --;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY + 3 <= 19){
                            locateY += 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 3] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 2][locateY + 2] == 0){
                        if(locateX - 2 >= 0 && locateY + 3 <= 19){
                            locateX --;
                            locateY +- 2;
                            cw();
                        }
                    }
                    break;
                case 2:
                    if(placedXY[locateX -1][locateY + 1] == 0 && placedXY[locateX][locateY + 1] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 1 <= 19 && locateY - 1 >= 0){
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 1 <= 19 && locateY - 1 >= 0){
                            locateX ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 2] == 0){
                        if(locateX + 1 <= 9 && locateY - 2 >= 0){
                            locateX ++;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 3] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 3 <= 19){
                            locateY += 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 3 <= 19){
                            locateX ++;
                            locateY += 2;
                            cw();
                        }
                    }
                    break;
                case 3:
                    if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY - 1 >= 0){
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY] == 0 && placedXY[locateX + 2][locateY] == 0){
                        if(locateX + 2 <= 9){
                            locateX ++;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 2][locateY - 1] == 0){
                        if(locateX + 2 <= 9 && locateY - 1 >= 0){
                            locateX ++;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 3] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 3] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY + 3 <= 19){
                            locateY += 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX + 2][locateY + 3] == 0){
                        if(locateX + 2 <= 9 && locateY + 3 <= 19){
                            locateX ++;
                            locateY += 2;
                            cw();
                        }
                    }
                    break;
            }
            break;
        case "L":
            switch(rotate){
                case 0:
                    if(placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX][locateY + 1] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 1 <= 19 && locateY - 1 >= 0){
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 1 <= 19 && locateY - 1 >= 0){
                            locateX --;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 2 <= 19){
                            locateX --;
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 3] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateY -= 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 3] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateX --;
                            locateY -= 2;
                            cw();
                        }
                    }
                    break;
                case 1:
                    if(placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY + 1 <= 19){
                            cw();
                        }
                    } else if(placedXY[locateX - 2][locateY + 1] == 0 && placedXY[locateX - 2][locateY] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 2 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            cw();
                        }
                    } else if(placedXY[locateX - 2][locateY] == 0 && placedXY[locateX - 2][locateY - 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 2 >= 0 && locateY - 1 >= 0){
                            locateX --;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 3] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 9 && locateY + 3 <= 19){
                            locateY += 2;
                            cw();
                        }
                    } else if(placedXY[locateX - 2][locateY + 3] == 0 && placedXY[locateX - 2][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX][locateY + 2] == 0){
                        if(locateX - 2 >= 0 && locateY + 3 <= 19){
                            locateX --;
                            locateY += 2;
                            cw();
                        }
                    }
                    break;
                case 2:
                    if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX][locateY - 1] == 0 && placedXY[locateX][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 1 >= 0 && locateY + 1 ){
                            locateX ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 2] == 0){
                        if(locateX + 1 <= 9 && locateY + 2 <= 19){
                            locateX ++;
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 3] == 0 && placedXY[locateX][locateY - 3] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 3 >= 0){
                            locateY -= 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 3] == 0 && placedXY[locateX + 1][locateY - 3] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateX ++;
                            locateY -= 2;
                            cw();
                        }
                    }
                    break;
                case 3:
                    if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY] == 0 && placedXY[locateX - 1][locateY] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY - 1 >= 0){
                            cw();
                        }
                    } else if(placedXY[locateX + 2][locateY - 1] == 0 && placedXY[locateX + 2][locateY] == 0 && placedXY[locateX + 1][locateY] == 0){
                        if(locateX + 2 <= 9 && locateY - 1 >= 0){
                            locateX ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 2][locateY - 2] == 0 && placedXY[locateX + 2][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 1] == 0){
                        if(locateX + 2 <= 9 && locateY - 2 >= 0){
                            locateX ++;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX - 1][locateY + 3] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY + 3 <= 19){
                            locateY += 2;
                            cw();
                        }
                    } else if(placedXY[locateX + 2][locateY + 2] == 0 && placedXY[locateX + 2][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX][locateY + 3] == 0){
                        if(locateX + 2 <= 9 && locateY + 3 <= 19){
                            locateX ++;
                            locateY += 2;
                            cw();
                        }
                    }
                    break;
            }
            break;
        case "T":
            switch(rotate){
                case 0:
                    if(placedXY[locateX][locateY + 1] == 0){
                        if(locateY + 1 <= 19){
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 2 >= 0){
                            locateX --;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX][locateY + 2] == 0 && placedXY[locateX][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 3 <= 19){
                            locateY += 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 3] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 3 <= 19){
                            locateX --;
                            locateY += 2;
                            cw();
                        }
                    }
                    break;
                case 1:
                    if(placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 1 >= 0){
                            cw();
                        }
                    } else if(placedXY[locateX + 2][locateY] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 2 <= 9 && locateY + 1 <= 19){
                            locateX ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX + 2][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 2 <= 9 && locateY + 2 <= 19){
                            locateX ++;
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0){
                        if(locateX + 1 <= 9 && locateX - 1 >= 0 && locateY - 2 >= 0){
                            locateY -= 2;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 2][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0){
                        if(locateX + 2 <= 9 && locateY - 2 >= 0){
                            locateX ++;
                            locateY -= 2;
                            cw();
                        }
                    }
                    break;
                case 2:
                    if(placedXY[locateX][locateY - 1] == 0){
                        if(locateY - 1 >= 0){
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 1 >= 0 && locateY + 1 <= 19){
                            locateX ++;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 2] == 0){
                        if(locateX + 1 <= 9 && locateY - 2 >= 0){
                            locateX ++;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX][locateY + 3] == 0 && placedXY[locateX][locateY + 2] == 0){
                        if(locateX - 1 >= 0 && locateY + 3 <= 9){
                            locateY += 2;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 3] == 0 && placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 3 <= 19){
                            locateX ++;
                            locateY += 2
                            cw();
                        }
                    }
                    break;
                case 3:
                    if(placedXY[locateX + 1][locateY] == 0){
                        if(locateX + 1 <= 9){
                            cw();
                        }
                    } else if(placedXY[locateX - 2][locateY - 1] == 0 && placedXY[locateX - 3][locateY] == 0 && placedXY[locateX - 2][locateY] && placedXY[locateX - 1][locateY] == 0){
                        if(locateX - 3 >= 0 && locateY - 1 >= 0){
                            locateX -= 2;
                            cw();
                        }
                    } else if(placedXY[locateX - 2][locateY] == 0 && placedXY[locateX - 3][locateY + 1] == 0 && placedXY[locateX - 2][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 3 >= 0 && locateY + 1 <= 9){
                            locateX -= 2;
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX][locateY - 3] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 2] == 0){
                        if(locateX - 1 >= 0 && locateX + 1 <= 0 && locateY - 3 >= 0){
                            locateY -= 2;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY - 3] == 0 && placedXY[locateX - 2][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX][locateY - 2] == 0){
                        if(locateX - 2 >= 0 && locateY - 3 >= 0){
                            locateX --;
                            locateY -= 2;
                            cw();
                        }
                    }
                    break;
            }
            break;
        case "I":
            switch(rotate){
                case 0:
                    if(placedXY[locateX + 1][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY + 2 <= 19 && locateY - 1 >= 0){
                            locateX ++;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 2 <= 19 && locateY - 1 >= 0){
                            locateX --;
                            cw();
                        }
                    } else if(placedXY[locateX + 2][locateY + 2] == 0 && placedXY[locateX + 2][locateY + 1] == 0 && placedXY[locateX + 2][locateY - 1] == 0){
                        if(locateX + 2 <= 9 && locateY + 2 <= 19 && locateY - 1 >= 0){
                            locateX += 2;
                            cw();
                        }
                    } else if(placedXY[locateX - 1][locateY + 3] == 0 && placedXY[locateX - 1][locateY + 2] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY + 3 <= 19){
                            locateX --;
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 2][locateY - 3] == 0 && placedXY[locateX + 2][locateY - 2] == 0 && placedXY[locateX + 2][locateY - 1] == 0){
                        if(locateX + 2 <= 9 && locateY - 3 >= 0){
                            locateX += 2;
                            locateY -= 2;
                            cw();
                        }
                    }
                    break;
                case 1:
                    if(placedXY[locateX - 2][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX - 2 >= 0 && locateX + 1 <= 9 && locateY + 1 <= 19){
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX - 3][locateY + 1] == 0 && placedXY[locateX - 2][locateY + 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 3 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX + 3][locateY + 1] == 0 && placedXY[locateX + 2][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 3 <= 9 && locateY + 1 <= 19){
                            locateX += 2;
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX - 3][locateY - 1] == 0 && placedXY[locateX - 2][locateY - 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 3 >= 0 && locateY - 1 >= 0){
                            locateX --;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX + 3][locateY + 2] == 0 && placedXY[locateX + 2][locateY + 2] == 0 && placedXY[locateX + 1][locateY + 2] == 0){
                        if(locateX + 3 <= 9 && locateY + 2 <= 19){
                            locateX += 2;
                            locateY += 2;
                            cw();
                        }
                    }
                    break;
                case 2:
                    if(placedXY[locateX - 1][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY + 1] == 0){
                        if(locateX - 1 >= 0 && locateY - 2 >= 0 && locateY + 1 <= 19){
                            locateX --;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 2 >= 0 && locateY + 1 <= 19){
                            locateX ++;
                            cw();
                        }
                    } else if(placedXY[locateX - 2][locateY - 2] == 0 && placedXY[locateX - 2][locateY - 1] == 0 && placedXY[locateX - 2][locateY + 1] == 0){
                        if(locateX - 2 >= 0 && locateY - 2 >= 0 && locateY + 1 <= 19){
                            locateX -= 2;
                            cw();
                        }
                    } else if(placedXY[locateX + 1][locateY - 3] == 0 && placedXY[locateX + 1][locateY - 2] == 0 && placedXY[locateX + 1][locateY - 1] == 0){
                        if(locateX + 1 <= 9 && locateY - 3 >= 0){
                            locateX ++;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX - 2][locateY + 3] == 0 && placedXY[locateX - 2][locateY + 2] == 0 && placedXY[locateX - 2][locateY + 1] == 0){
                        if(locateX - 2 >= 0 && locateY + 3 <= 19){
                            locateX -= 2;
                            locateY += 2;
                            cw();
                        }
                    }
                    break;
                case 3:
                    if(placedXY[locateX + 2][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX + 2 <= 9 && locateX - 1 >= 0 && locateY - 1 >= 0){
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX - 3][locateY - 1] == 0 && placedXY[locateX - 2][locateY - 1] == 0 && placedXY[locateX - 1][locateY - 1] == 0){
                        if(locateX - 3 >= 0 && locateY - 1 >= 0){
                            locateX -= 2;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX + 3][locateY - 1] == 0 && placedXY[locateX + 2][locateY - 1] == 0 && placedXY[locateX + 1][locateY - 1] == 0){
                        if(locateX + 3 <= 9 && locateY - 1 >= 0){
                            locateX ++;
                            locateY --;
                            cw();
                        }
                    } else if(placedXY[locateX + 3][locateY + 1] == 0 && placedXY[locateX + 2][locateY + 1] == 0 && placedXY[locateX + 1][locateY + 1] == 0){
                        if(locateX + 3 <= 9 && locateY + 1 <= 19){
                            locateX ++;
                            locateY ++;
                            cw();
                        }
                    } else if(placedXY[locateX - 3][locateY - 2] == 0 && placedXY[locateX - 2][locateY - 2] == 0 && placedXY[locateX - 1][locateY - 2] == 0){
                        if(locateX - 3 >= 0 && locateY - 2 >= 0){
                            locateX -= 2;
                            locateY -= 2;
                            cw();
                        }
                    }
                    break;
            }
            break;
    }
}

Hold = function(){
    if(hold_mino == null){
        hold_mino = minos[0];
        minoSort();
    } else {
        hold_mino_sub = minos[0];
        minos[0] = hold_mino;
        hold_mino = hold_mino_sub;
    }
    locateX = 4;
    locateY = 0;
    minoClassify();
}


$(function() {
    $("#left").on('click', function() {
        Left();
    });

    $("#right").on('click', function() {
        Right();
    });

    $("#up").on('click', function() {
        frame = 10;
        down = true;
    });

    document.getElementById("down").addEventListener("mousedown", function() {
        if(score > 1400){
            frame = 225;
        } else if(score > 1200){
            frame = 250;
        } else if(score > 1000){
            frame = 275;
        } else if(score > 800){
            frame = 300;
        } else if(score > 600){
            frame = 325;
        } else if(score > 400){
            frame = 350;
        } else if(score > 200){
            frame = 375;
        } else{
            frame = 400;
        }
    });

    document.getElementById("down").addEventListener("mouseup", function() {
        if(score > 1400){
            frame = 450;
        } else if(score > 1200){
            frame = 500;
        } else if(score > 1000){
            frame = 550;
        } else if(score > 800){
            frame = 600;
        } else if(score > 600){
            frame = 650;
        } else if(score > 400){
            frame = 700;
        } else if(score > 200){
            frame = 750;
        } else{
            frame = 800;
        }
    });

    $("#CCW").on('click', function() {
        CCW();
    });

    $("#CW").on('click', function() {
        CW();
    });

    $("#finish").on('click', function() {
        document.body.classList.add("start");
        document.getElementById("start").style.display = 'block';
        document.getElementById("game").style.display = 'none';
        frame = Number.MAX_SAFE_INTEGER;
    });
});


document.body.addEventListener('keydown', event => {
    if(event.keyCode == 40){
        if(score > 1400){
            frame = 225;
        } else if(score > 1200){
            frame = 250;
        } else if(score > 1000){
            frame = 275;
        } else if(score > 800){
            frame = 300;
        } else if(score > 600){
            frame = 325;
        } else if(score > 400){
            frame = 350;
        } else if(score > 200){
            frame = 375;
        } else{
            frame = 400;
        }
    }
});


document.body.addEventListener('keyup', event => {
    if(event.keyCode == 37){
        Left();
    }
    if(event.keyCode == 39){
        Right();
    }
    if(event.keyCode == 38 || event.keyCode == 32){
        frame = 10;
        down = true;
    }
    if(event.keyCode == 40){
        if(score > 1400){
            frame = 450;
        } else if(score > 1200){
            frame = 500;
        } else if(score > 1000){
            frame = 550;
        } else if(score > 800){
            frame = 600;
        } else if(score > 600){
            frame = 650;
        } else if(score > 400){
            frame = 700;
        } else if(score > 200){
            frame = 750;
        } else{
            frame = 800;
        }
    }
    if(event.key == 'z'){
        CCW();
    }
    if(event.key == 'x'){
        CW();
    }
    if(event.key == 'c'){
        Hold();
    }
});


var lines = [];
var lineCounter = 0;
var linePerOnce = 0;
var score = 0;
var back_to_back = false;
var Tspin_mini;
var condition1 = false;
var condition2 = false;
var condition3 = false;
var condition4 = false;
var conditions = [condition1, condition2, condition3, condition4];

Tspin_mini = function(){
    console.log("Tspin Mini");
    if(back_to_back){
        score += ((900 - frame) * 2) / 10;
    }
    back_to_back = true;
}


function deleteLine(){
    linePerOnce = 0;
    for(let i = 0; i < 20; i++) {
        lines = [];
        for(let j = 0; j < 10; j++) {
            if(placedXY[j][i] != 0) {
                lines.push(i);
            }
        }
        if(lines.length == 10) {
            for(let l = lines[0] - 1; l > 1; l--){
                for(let m = 0; m < 10; m++){
                    placedXY[m][l + 1] = placedXY[m][l];
                    placedXY[m][1] = 0; 
                }
            }
            lineCounter ++;
            linePerOnce ++;
            score += (900 - frame) / 10;
        }
    }
    if(linePerOnce == 4){
        console.log('Tetris');
        if(back_to_back){
            score += ((900 - frame) * 12) / 10;
        } else{
            score += ((900 - frame) * 8) / 10;
        }
        back_to_back = true;
    } else if(spined && minos[0] == "T"){
        if(linePerOnce >= 1){
            if(locateY == 19){ 
                if(grid[locateX - 1][locateY - 1] != 0 || grid[locateX + 1][locateY - 1] != 0){
                    Tspin_mini();
                }
            } else if(locateX == 0){
                if(grid[locateX + 1][locateY - 1] != 0 || grid[locateX + 1][locateY + 1] != 0){
                    Tspin_mini();
                }
            } else if(locateX == 9){
                if(grid[locateX - 1][locateY + 1] != 0 || grid[locateX - 1][locateY - 1] != 0){
                    Tspin_mini();
                }
            } else {
                if(grid[locateX - 1][locateY - 1] != 0){
                    condition1 = true;
                }
                if(grid[locateX + 1][locateY - 1] != 0){
                    condition2 = true;
                }
                if(grid[locateX - 1][locateY + 1] != 0){
                    condition3 = true;
                }
                if(grid[locateX + 1][locateY + 1] != 0){
                    condition4 = true;
                }
                conditions = [condition1, condition2, condition3, condition4];
                if (conditions.filter((value)  => value == true).length >= 3){
                    if(back_to_back){
                        if(linePerOnce == 1){
                            console.log("Tspin Single");
                            score += ((900 - frame) * 6) / 10;
                        } else if(linePerOnce == 2){
                            console.log("Tspin Double");
                            score += ((900 - frame) * 9) / 10;
                        } else{
                            console.log("Tspin Triple");
                            score += ((900 - frame) * 12) / 10;
                        }
                    } else{
                        if(linePerOnce == 1){
                            console.log("Tspin Single");
                            score += ((900 - frame) * 4) / 10;
                        } else if(linePerOnce == 2){
                            console.log("Tspin Double");
                            score += ((900 - frame) * 6) / 10;
                        } else{
                            console.log("Tspin Triple");
                            score += ((900 - frame) * 8) / 10;
                        }
                    }
                }
                condition1, condition2, condition3, condition4 = false;
            }
        }
    } else{
        back_to_back = false;
    }
    if(placedXY.find(item => item !== 0) === undefined){
        console.log("Perfect Clear");
        score += (900 - frame);
    }
    document.getElementById("score").textContent = `SCORE: ${score}`;
    if(score > 1400){
        frame = 450;
    } else if(score > 1200){
        frame = 500;
    } else if(score > 1000){
        frame = 550;
    } else if(score > 800){
        frame = 600;
    } else if(score > 600){
        frame = 650;
    } else if(score > 400){
        frame = 700;
    } else if(score > 200){
        frame = 750;
    } else{
        frame = 800;
    }
}


function arrayShuffle(array) {
    for(let i = (array.length - 1); 0 < i; i--){
      let r = Math.floor(Math.random() * (i + 1));
      let tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
}


function minoSort(){
    for(let i = 0; i < 6; i++) {
        minos[i] = minos[i + 1];
    }
    minos[6] = nextMinos[0];
    if(nextMinos[0] == nextMinos[6]) {
        nextMinos = arrayShuffle(minosNeverChange);
        //minosNeverChange = nextMinos.concat();
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
                    minoBlock1 = [locateX - 1, locateY + 1];
                    minoBlock2 = [locateX - 1, locateY];
                    minoBlock3 = [locateX, locateY];
                    minoBlock4 = [locateX, locateY - 1];
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