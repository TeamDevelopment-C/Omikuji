class Omikuji{
    constructor(){
        this.luck = null;
        this.text = null;
        this.luckyItem = null;
        this.luckyEditor = null;
        this.recommendedWorkLocation = null;
    }

    // 運勢を決める
    getLuck(){
        // おみくじの中身を決める
        var luckList = ["大吉","大吉", "大吉", "中吉", "中吉", "中吉", "小吉", "小吉", "小吉",
            "吉", "吉", "吉", "吉", "末吉","末吉", "末吉", "末吉"];
        
        // 0~要素数-1までのランダムな整数を生成
        var randomLuckNumber = Math.floor(Math.random() * luckList.length);
        
        // 生成した整数を利用して結果を取得、結果をluckに保存
        this.luck = luckList[randomLuckNumber];
    }

    // 運勢に応じたTextを取得
    getText(){
        // 結果に応じた文章をMapオブジェクトに格納しておく
        const textSet = new Map();
        textSet.set("大吉", "あなたは大吉です。プロジェクトは成功と幸運に恵まれることでしょう。新たなアイデアが溢れ、チーム全体が高いモチベーションを維持し、素晴らしい成果を生み出すでしょう。");
        textSet.set("中吉", "あなたは中吉です。運勢は安定しており、計画通りに進行する可能性が高いです。努力と組織力によって、プロジェクトは順調に進展し、成功を収めるでしょう。");
        textSet.set("小吉", "あなたは小吉です。運勢が穏やかで平凡な一日となるかもしれません。しかし、着実に進むことで小さな成功を重ね、安定感を築くことができます。");
        textSet.set("吉", "あなたは吉です。運勢は普通ですが、前向きな姿勢と努力によって良い結果を得ることができるでしょう。計画通りに進むことが大切です。");
        textSet.set("末吉", "あなたは末吉です。運勢は安定していますが、思ったようには事が進まないこともあるかもしれません。忍耐力と柔軟性が必要ですが、小さな成功や良い出来事に感謝し、着実に進んでいくことが大切です。");

        // 結果で対応する文章を呼び出し、textに保存
        this.text = textSet.get(this.luck);
    }

    // ラッキーアイテムを取得
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

    // ラッキーエディタの取得
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

    // おすすめの作業場所の取得
    getRecommendedWorkLocation(){
        // 作業場所のリスト
        var workLocationList = [
            "家",
            "学校・会社",
            "図書館",
            "カフェ",
            "公園",
            "電車",
            "コワーキングスペース",
        ];

        // 0~要素数-1までのランダムな整数を生成
        var randomLocationNumber = Math.floor(Math.random() * workLocationList.length);

        // 生成した整数を利用して結果を取得、結果をrecomendedWorkLocationに保存
        this.recommendedWorkLocation = workLocationList[randomLocationNumber];
    }

    // 上記の関数を実行する関数
    drawAFortuneSlip(){
        this.getLuck();
        this.getText();
        this.getLuckyItem();
        this.getLuckyEditor();
        this.getRecommendedWorkLocation();
    }
}

// テスト用
// var test = new Omikuji();
// test.drawAFortuneSlip();
// console.log(test.luck);
// console.log(test.text);
// console.log(test.luckyItem);
// console.log(test.luckyEditor);
// console.log(test.recommendedWorkLocation);