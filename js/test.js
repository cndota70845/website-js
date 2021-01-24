// while 循环 可以转换为 for 循环
// var i = 100;
// for(;i<10;i++){
//     console.log(i);
// };
// while(i<10){
//     console.log(i++);
// };

//从0累加，总值小于100；
// var total = 0
// while(total < 100 && total+i<100){
//     total = total + i++;
//     console.log(total);
// }

//打印0-100的数字，（）内不能比较，{}内不能i++，i--；
// for(;i--;){
//     console.log(100-i)
// }

//类
// var Book = function(id,bookname,price){
//     //私有属性
//     var name = bookname;
//     //特权方法
//     this.id = id;
//     this.price = price;
//     this.getName = function(){
//         return name;
//     };
//     this.setName = function(newName){
//         name = newName;
//     };
// };
// Book.prototype = {
//     getID : function(){
//         return this.id;
//     }
// };
// var myTest = new Book(1,'嫌疑人X的献身',30)
// myTest.name = '白夜行';
// myTest.setName('十万个为什么');
// console.log(myTest.name,myTest.getName());

//do while do内的语句必定执行一次(不常用)；
// var i = 0;
// do{
//     console.log('开始循环',i);
//     i++;
// }while(i<10);

//10的N次方
// var num = 1;
// for(let k=0;k<5;k++){
//     num*=10;
// };
// console.log(num);
//累加+=，累减-=，累乘*=，累除/=,
// var num = 100,
//     num2 = 100;
//     num3 = 100;
// for(let k = 0;k < 5; k++){
//     num-=10;
//     num2/=2;
//     num3+=10;
// };
// console.log(num,num2,num3);

//随意给一组数,变换顺序；
// var num = 123456789;
// var str = String(num);
// var newNum = 0;
// for(let i = 0; i < str.length; i++){
//     let mul = 1;
//     for(let k = 1; k < i+1 ;k++){
//         mul *= 10;
//     };
//     newNum += parseInt(str[i])*(mul);
// }
// console.log(num,newNum);

//随意给一个数a，判断0-a之间有多少个质数；
// var num = 999;
// var list = [];
// for(let i = 1;i <= num; i++){
//     let kp = 0;
//     for(let k = 1;k <= i; k++){
//         if(i%k===0){
//             kp++;
//         };
//     };
//     if(kp===2){
//         list.push(i);
//     };
// };
// console.log(list);

//typeof()数据类型/显式，隐式转换
// var lei = function(){};
// console.log(typeof(undefined),typeof([1,2,3]),typeof(function(){}),typeof({}),typeof(lei),typeof(null));
// console.log(1-'1',typeof(1-'1'));
// console.log('1'-'1',typeof('1'-'1'));
// console.log(NaN,typeof(NaN));
// console.log(isNaN('你好'));
// console.log(isNaN(null));
// console.log(Number(null),Number(undefined));

//斐波那契数列 求第N位；
// var num = parseInt(window.prompt('N=?'));
// var list = [1,1];
// for(let i = 0; i < num; i++){
//     if(i > 1){
//         list.push(list[i-1]+list[i-2])
//     }
// };
// console.log(list[num-1]);

//第一天给1元，第二天给第一天的双倍，持续一个月；
// var money = 1;
// var total = 0; 
// for(let i = 0; i < 30; i++){
//     if(i>0){
//         money = 2*money;
//     }
//     total += money;
//     console.log(`第${i+1}天`,`须支付${money}元`,`共支付${total}元`);
// };

//函数
test(1,2,3,4,5);
function test(a,b,c){
    console.log(arguments.length);
    console.log(test.length);
}