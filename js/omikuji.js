class Omikuji{
    constructor(){
        this.luck = null;
        this.text = null;
        this.luckyItem = null;
        this.luckyEditor = null;
        this.recommendedWorkLocation = null;
    }

    getLuck(){
        // おみくじの中身を決める
        var luckList = ["大吉", "中吉", "小吉", "小吉", "小吉", "吉", "吉", "吉", "吉", "末吉",
            "末吉", "末吉", "末吉", "凶", "凶", "凶", "大凶", "大凶", "大凶"];
        
        // 0~要素数-1までのランダムな整数を生成
        var randomLuckNumber = Math.floor(Math.random() * luckList.length);
        
        // 生成した整数を利用して結果を取得、結果をluckに保存
        this.luck = luckList[randomLuckNumber];
    }

    getText(){
        // 結果に応じた文章をMapオブジェクトに格納しておく
        const textSet = new Map();
        textSet.set("大吉", "あなたは大吉です");
        textSet.set("中吉", "あなたは中吉です");
        textSet.set("小吉", "あなたは小吉です");
        textSet.set("吉", "あなたは吉です");
        textSet.set("末吉", "あなたは末吉です");
        textSet.set("凶", "あなたは凶です");
        textSet.set("大凶", "あなたは大凶です");

        // 結果で対応する文章を呼び出し、textに保存
        this.text = textSet.get(this.luck);
    }

    getLuckyItem(){
        // ラッキーアイテムのリスト
        var itemList = [
            "猫のぬいぐるみ",
            "トラックボールマウス",
            "ダンベル",
            "四葉のクローバー",
            "木彫りのくま",
            "風船",
            "ベイブレード",
            "リカちゃん人形",
            "ワイヤレスキーボード",
            "ボウリングの玉",
            "USBメモリ",
            "HDMIケーブル",
            "タカアシガニ",
            "藁人形"
            ];

        // 0~要素数-1までのランダムな整数を生成
        var randomLuckyItemNumber = Math.floor(Math.random() * itemList.length);

        // 生成した整数を利用して結果を取得、結果をluckyItemに保存
        this.luckyItem = itemList[randomLuckyItemNumber];
    }

    getLuckyEditor(){
        // ラッキーエディタのリスト
        var editorList = [
            "Visual Studio Code",
            "Atom",
            "Eclipse",
            "Xcode",
            "Emacs",
            "Vim",
            "メモ帳",
            "サクラエディタ",
            "Sublime Text",
            "秀丸エディタ",
            "TeraPad",
            ];

        // 0~要素数-1までのランダムな整数を生成
        var randomLuckyEditorNumber = Math.floor(Math.random() * editorList.length);

        // 生成した整数を利用して結果を取得、結果をluckyItemに保存
        this.luckyEditor = editorList[randomLuckyEditorNumber];
    }
}

// テスト用
var test = new Omikuji();
test.getLuck();
test.getText();
test.getLuckyItem();
test.getLuckyEditor();
console.log(test.luck);
console.log(test.text);
console.log(test.luckyItem);
console.log(test.luckyEditor);