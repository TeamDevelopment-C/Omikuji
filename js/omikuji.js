class Omikuji{
    constructor(){
        this.luck = null;
        this.text = null;
        this.luckyItem = null;
        this.luckyEditor = null;
        this.recommendedWorkLocation = null;
    }

    getLuck(){
        // 0~18までのランダムな整数を生成
        var randomLuckNumber = Math.floor(Math.random() * 19);

        // 要素数19の運勢リスト
        var luckList = ["大吉", "中吉", "小吉", "小吉", "小吉", "吉", "吉", "吉", "吉", "末吉",
            "末吉", "末吉", "末吉", "凶", "凶", "凶", "大凶", "大凶", "大凶"];
        
        // 結果をluckに保存
        this.luck = luckList[randomLuckNumber];
    }
}

// テスト用
// var test = new Omikuji();
// test.getLuck();
// console.log(test.luck);