document.getElementById('box1Button').addEventListener('click', function() {
    //displayVariable('変数1の値');
    //おみくじを引く画面中の関数(1)
});

document.getElementById('box2Button').addEventListener('click', function() {
    //displayVariable('変数2の値');
     //おみくじを引く画面中の関数(2)
});

document.getElementById('box3Button').addEventListener('click', function() {
    //displayVariable('変数3の値');
     //おみくじを引く画面中の関数(3)
});
document.getElementById('box4Button').addEventListener('click', function() {
    //displayVariable('変数4の値')4
    //おみくじを引く画面中の関数(4)
});

document.getElementById('box5Button').addEventListener('click', function() {
    //displayVariable('変数5の値');
     //おみくじを引く画面中の関数(5)
});

document.getElementById('box6Button').addEventListener('click', function() {
    displayVariable('変数6の値');
     //おみくじを引く画面中の関数(6)
});

function displayVariable(variableToDisplay) {
    var outputDiv = document.getElementById('output');
    outputDiv.textContent = '選んだボタンの変数: ' + variableToDisplay;
}


/*
受け取る関数
export function processData(data) {
    console.log("別のファイルで受け取ったデータ: " + data);
}

渡すコード
// processData関数をインポート
import { processData } from './functions.js';

// データを渡す
let myData = "渡したいデータ";
processData(myData);
*/