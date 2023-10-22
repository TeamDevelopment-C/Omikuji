function createOmikujiResult(omikuji){
    // h1要素とh4要素を作成
    let resultLuck = document.createElement("h1");
    let resultText = document.createElement("h4");
    let resultItem = document.createElement("h4");
    let resultEditor = document.createElement("h4");
    let resultLocation = document.createElement("h4");

    // おみくじの結果を格納
    resultLuck.innerHTML = omikuji.luck;
    resultText.innerHTML = omikuji.text;
    resultItem.innerHTML = omikuji.luckyItem;
    resultEditor.innerHTML = omikuji.luckyEditor;
    resultLocation.innerHTML = omikuji.recommendedWorkLocation;

    // おみくじの結果を表示
    document.getElementById('result').append(resultLuck);
    document.getElementById('description1').append(resultText);
    document.getElementById('description2').append(resultItem);
    document.getElementById('description3').append(resultEditor);
    document.getElementById('description4').append(resultLocation);
}