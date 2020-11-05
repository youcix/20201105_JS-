// if 語法
// if (布林值) { 程式區塊 }
// 布林值為 true 才會執行 程式區塊
if (true){
    console.log("我是判斷式")
}

// else 否則，語法：
// else { 程式區塊 }
// 布林值為 false 才會執行 else { 程式區塊 }
var price = 100;

if ( price>=200 ){
    console.log("一頓餐費昂貴")
}

else {
    console.log("一頓餐費還可以接受")
}

// else if 語法：
// else if (布林值) {}
// else if 布林值為 true 才會執行 else if () { 程式區塊 }
var score = 15;

if (score>=60){
    console.log("及格")
}

else if (score>=40){
    console.log("打屁股")
}

else {
    console.log("留校打掃")
}

// 陣列：多個相同類型的資料
var boxes = document.getElementsByClassName("box");

console.log (boxes[0]);

boxes[0].innerHTML=("我是盒子");
boxes[1].innerHTML=("我是盒子");
boxes[2].innerHTML=("我是盒子");



// 迴圈 for 語法：
// for (初始值；條件；每次執行)
for (var i=0; i<10; i++) {
    console.log( "迴圈執行次數:"+ i);
}


// 陣列 長度 length ：陣列的數量
console.log("陣列的數量：" + boxes.length);

for (var i=0 ;i<boxes.length;i++){
    boxes[i].innerHTML= ("用迴圈修改內容的盒子"+(i+1));
}