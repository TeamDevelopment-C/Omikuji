function runFirst(){
    // omikuji.jsのOmikujiクラスをインスタンス化
    var omikuji = new Omikuji();

    // おみくじの中身を決める
    omikuji.drawAFortuneSlip();
    
    // おみくじの結果を表示する関数を実行
    createOmikujiResult(omikuji);
}