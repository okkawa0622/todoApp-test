/**
 * varは再宣言が可能
 * letは再宣言が不可能
 * constは再宣言も上書きも不可能
 * ※ただしconstで定義したオブジェクト及び配列はプロパティの変更が可能
 */
// var val1 = "var変数";
// val1 = "var変数は上書き可能";
// var val1 = "var変数は際宣言可能";
// console.log(val1);

// let val2 = "let変数";
// val2 = "let変数は上書き可能";
// console.log(val2);
// const val3 = "const変数";
// console.log(val3);

// const val4 = {
//   name: "じゃけえ",
//   age: 28
// };
// val4.name = "jak";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "おくかわ";
// const age = 23;
// // 「私の名前はおくかわです。年齢は　２3歳です。」

// //従来
// const message1 =
//   "従来のやつ：私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `テンプレート版:私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です。"));

// const func1 = function(str){
//   return str;
// }

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "おくかわ",
//   age: 23
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["おくかわ", 23];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `分割代入:名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "新規") => console.log(`こんにちは、${name}さん。`);
// sayHello("okukawa");

/**
 * スプレッド構文 ...
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// '='でコピーすると参照を引き継いだままコピーされてしまうためエラーの原因になることがある。
// const arr8 = [...arr4];
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8[0]);
// console.log(arr4[0]);

/**
 * mapやfilterを使用した配列の処理
 */
// const nameArr = ["たなか", "山田", "おくかわ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// // mapを使用した例
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// fileter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "おくかわ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件が trueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです。" : "falseです。";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattednum =
//   typeof num === "number" ? num.toLocaleString() : "数値を設定してください。";
// console.log(formattednum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です。";
// };
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueです。");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueです。");
// }

// "||" は 左側がfalseなら右側を返す。
// const num = 100;
// const fee = num || "金額未設定です。";
// console.log(fee);

// "&&" は左側がtrueなら右側を返す。
// const num2 = null;
// const fee2 = num2 && "何か設定されました。";
// console.log(fee2);
