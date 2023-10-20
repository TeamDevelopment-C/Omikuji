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
}

// テスト用
// var test = new Omikuji();
// test.getLuck();
// console.log(test.luck);