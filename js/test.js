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

// var n = window.prompt('斐波那契数列');
// function Func(n){
//     while(n>2){
//         return Func(n-1) + Func(n-2);
//     };
//     while(n<=0){
//         return 0;
//     }
//     return 1;
// };
// var a = Func(n);
// console.log(a);

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
// test(1,2,3,4,5);
// function test(a,b,c){
//     console.log(arguments.length);
//     console.log(test.length);
// }

//instanceof函数；
// var A = function(){};
// var FuncB = function(){};
// A.prototype.B = FuncB;
// var a = new A();
// console.log(a instanceof A);

//递归慎用；
//预编译；
// 1.通篇检查语法错误；
// 1.5.预编译；
// 2.解释一行执行一行；

// console.log(a,b,test());
// var a = function(){
//     var a = b = '你好';
//     return a;
// };
// var b = 5;
// function test(){
//     return '世界';
// }
// console.log(window.b);
//函数声明整体提升，变量只有声明是提升的；
//window，全局域对象；
//访问一个对象里不存在的属性。默认为undefined；

//
// function test(a){
//     console.log(a);  
//     c = 0;
//     var c;
//     a = 5;
//     b = 6;
//     console.log(b);
//     function b(){}
//     console.log(b);
// }

// test(2);
// console.log(2,6,6)

// test{
//     a:undefined -> 2 -> 1
// }

//全局上下文 = window；
//1.找变量 2.找函数声明 3.执行；

// function test(){
//     var a = b = 1;
//     return a
// }
// console.log(test(),b)

// var b = 3;
// console.log(a);
// function a(a){
//     console.log(a);
//     var a = 2;
//     console.log(a);
//     function a(){
//         var b = 5;
//         console.log(b);
//     }
// }
// a(1);
// a = 1;
// function test(){
//     console.log(a);
//     a = 2;
//     console.log(a);
//     var a = 3;
//     console.log(a);
// }
// test();
// var a;

// console.log(window.a,undefined,2,3)

// function test(){
//     console.log(b);
//     if(a){
//         var b = 2;
//     }
//     c = 3;
//     console.log(c);
// }

// var a;
// test();
// a = 1;
// console.log(a);

// console.log('undefined',3,1,window.c);

//
// a = 1;
// function test(e){
//     function e(){}
//     arguments[0] = 2;
//     console.log(e);
//     if(a){
//         var b = 3;
//     }
//     var c;
//     a = 4;
//     var a;
//     console.log(b);
//     f = 5;
//     console.log(c);
//     console.log(a);
// }

// var a;
// test(1);
// GO = {
//     a:undefined -> 1;
//     test:function;
// }
// AO = {
    
// }
// console.log()

// var a = false + 1;
// console.log(a+'='+1)

// var b = false == 1;
// //b:false;

// if(typeof(a) && (-true) + (+undefined) + ''){
//     console.log('通过了');
// }
// else{
//     console.log('没通过');
// }
//+undefined:NaN;
//NaN + (-1) = NaN;
//NaN + '' = 'NaN';


// if(1 + 5 * '3' == 16){
//     console.log('通过了');
// }
// else{
//     console.log('没通过');
// }

// console.log(!!' ' +  !!'' - !!false ||'未通过');
//1

//'1'
// window.a || (window.a = '1');
// console.log(window.a);

// function test(){
//     return a;
//     a = 1;
//     function a(){
//         var a =2;
//     }
// }

// console.log(test(),'f(a)');

//自动执行，执行完自动销毁；
//IIFE 立即执行函数；（可做初始化函数）
// (function(){})();

//立即执行函数执行完之后直接销毁；
//表达式后面才能加()执行符号
// var num = (function(a,b){
//     console.log(a + b);
//     return a + b;
// }(2,2)); //w3c建议；

// console.log(num);

// var test = function(){
//     console.log(1);
// }();

// (function test(a,b){
//     console.log(a + b);
// }(10,90));

// console.log(test());
// var a = 0;

// a === 2 || function test1(){
//     console.log(222);
// }();

// function test(a){
//     console.log(222);
// }(6);

//
// function test(){
//     var arr = [];
//     var i = 0;
//     for(; i < 10;i++){
//         (function(j){
//             arr[j] = function(){
//                 document.write((j+1) + ' ');
//             }();
//         }(i))
//     }
    
//     return arr;
// }

// var myArr = test();

// for (let j = 0; j < 10; j++) {
//     myArr[j];
// }

// var fn = (
//     function test1(){
//         return 1;
//     },

//     function test2(){
//         return '2';
//     }
// )();

// console.log(typeof(fn));
//括号内的函数忽略名字；

// var a = 10;

// if(function b(){}){
//     a += typeof(b);
// }

// console.log(a);

//1.累加器 初始值0，执行一次+1，打印；闭包；
//2.缓存器 班级学生名字保存在一个数组里，对象中两个方法，加入、离开，每次加入或离开都需要打印新的学生名单；

// function test(){
//     var arr = ['李红','小明','小张','胖虎','小夫'];
    
//     function add(name){
//         arr.push(name);
//         arr.forEach(element => {
//             console.log(element);
//         });
//     }

//     function cut(name){
//         arr = arr.filter(item => item!==name);
//         arr.forEach(element => {
//             console.log(element);
//         });
//     }

//     function get(){
//         arr.forEach(element => {
//             console.log(element);
//         });
//     }

//     return [get,cut,add];     
// }

// var t = test();
// t[0]();
// t[1]('李红');
// t[2]('新人');

//对象
// var teacher = {
//     name:'张三',
//     age:10,
//     teach:function(){
//         console.log('teach方法');
//     }
// }

// delete teacher.name;
// delete teacher.teach;

// console.log(teacher);

// function test(a,b){
//     this.c = a + b;
//     console.log(this.c,this);
// }
// var b = new test(1,2);
// b;

//包装类  
// var a = '你好世界';
// a.hhh = 123;
// console.log(a.hhh);

// var arr = [1,2,3,4,5];
// arr.length = 2;
// console.log(arr);

// var str = '12345';
// console.log(str.length);
// str.length = 2;
// console.log(str,str.length);

// var name = 'langguiji';
// name += 10;

// var type = new String(typeof(name));

// if(type.length === 6){
//     type.text = 'string';
// }

// console.log(type.text);

// var x = 1,
//     y = z = 0;//x=0;y=0

// function add(n){
//     return n = n +1;
// }

// y = add(x);//y=4;x=1

// function add(n){
//     return n = n + 3;
// }

// z = add(x);//z=4,x=1

// console.log(x,y,z);

// function foo(x){
//     console.log(arguments);
//     return x;
// }

// foo(1,2,3,4,5);

// //1

// function foo(x){
//     console.log(arguments);
//     return x;
// }(1,2,3,4,5);

// //

// (function foo(x){
//     console.log(arguments);
//     return x;
// })(1,2,3,4,5);

// function b(x, y, a){
//     // a = 10;
//     // console.log(arguments[2]);
//     arguments[2] = 10;
//     console.log(a);
// }

// b(1,2,3);

//ascii 码；
// var str = 'a';

// var pos = str.charCodeAt(0);

// console.log(pos);
// function test(val,val1){
//     this.name = val;
//     this.age = val1;
//     this.one = function (){
//         console.log(`我的名字是${this.name},我的年龄是${this.age}`);
//     }
// }

// test.prototype = {
//     newObject:180,
//     newFunc:function(){
//         console.log(this.name,this.age);
//     }
// }

// var val = new test('留言',28);
// val.newFunc();
// console.log(val,val.newObject);

// function Person(){}
// Person.prototype.name = 'zhangsan';
// var p = new Person();
// console.log(p.__proto__);

//循环 遍历 迭代；
// const test = new Function('a','b','c','console.log(a+b+c)');

// test(1,2,3);
//valueOf() 方法返回 Array 对象的原始值
// var a = ['1','2','3','4'];
// var b = a.valueOf();
// console.log(typeof(b));

//toString方法可以转换进制；
// var num = 18;
// var num2 = -18;
// console.log(num.toString(2));
// console.log(num2.toString(2));
// console.log(NaN.toString(2));
// console.log(Infinity.toString(2));

//按非位  ~

// var num  = 1010;
// console.log(~num);

//布尔操作
// console.log(!Infinity);

// var a = Boolean(undefined);
// console.log(typeof(a),a);
// console.log(!!a);
// console.log(true && true);

// const obj = {
//     name:'nihao',
//     age:68
// };

// const tpl = {
//     name:'buhao',
//     age:0
// }

// var a = 9;
// // var c = obj && tpl;
// // var d = true && null;
// var b = (a===9) && tpl;

// 非空判断函数；
// 如果第一个操作决定了结果，永远不会执行第二个；
// function test(opt){
//     var a = opt.con?opt.con && opt.val:opt.val;
//     if(!a == true && a !== 0){//排除undefined,null,NaN,空字符串
//         return;
//     }
//     else{
//         return a;
//     }
// }
// var a = 10;
// var b = 123;
// console.log(b);
// const newVal = test({con:a===10,val:{name:'李白',skill:'醉剑式'}});
// b = newVal == undefined?b:newVal;
// console.log(b);

//指数 指数赋值
// console.log(Infinity % Math.pow(3,100));
// var o = Math.pow(3,100);
// let jojo = 19;
// jojo **= 2;
// console.log(o,jojo);

//string + number = str
// str = 12 + null;
// num = 12 + false;
// Str = '12' - '';
// Num = '12' - '5';
// console.log(str,num,Str,Num);

//charCodeAt(index)函数
// const c1 = '你';
// const c2 = '我';
// console.log(c1.charCodeAt(),c2.charCodeAt());

// 生成从minNum到maxNum的随机数(整数)
// function Random(min,max){
//     if(min>=max){
//         return window.alert("error");
//     }
//     else{
//         const Min = String(min).length;
//         const Max = String(max).length;
//         if(Max > Min){

//         }
//         else if(Max === Min){
//             for (let )
//         }
//     }
// }

// function getRandomInt(min,max){
//     return Math.floor(Math.random()*(max-min+1))+min;
// }

// // var res = window.prompt().split(',');
// // console.log(Random(res[0],res[1]));
// console.log(getRandomInt(1,5));

// for (let index in window) {
//     console.log(index,window[index]);
// }

// test: for(const key of [1,2,3,4]){
//     console.log(key);
// }

//标签会识别下一个for语句；
// test:
// for(let i = 1; i <= 100; i++){
//     test1:
//     for(let j = 1; j < 4; j++){
//         if(i % 3 != 0){
//             continue test;
//         }
//         else if(i === 66){
//             break test1;
//         }
//         console.log(i);
//     }
// }

// switch('hello world'){
//     case 'hello' + ' world':
//         console.log('Greet');
//         break;
//     case 'goodbye':
//         console.log('Close');
//         break;
//     default:
//         console.log('No message');
// }
// var num = 20;
// switch(true){
//     case num < 0:
//         console.log('<');
//         break;
//     case num >= 0 && num < 10:
//         console.log('jjj');
//         break;
//     case num >= 10:
//         console.log('hhhh');
//         break;
// }

//原始值 primitive value;
//引用值 refere value;

// let Person = new Object;
// var person = new Object;
// function test(val){s
//     val.name = 'liuyan';
// }
// test(Person);
// console.log(Person);

// console.log(Person instanceof Array);
// console.log(window.person);

// eval('let a = 1, b = 2; console.log(a + b)');

// function test(val){
//     try{
//         console.log(val);
//     }
//     catch(e){
//         console.log(e);
//     }
// }

// test(window.hhhh);
// console.log(typeof(a));
// var a = 10;
// let b = 100;
// const c = 'nini';
// c = 'niniww';

//const 可以改键值，object.freeze可以锁定；
// const p = Object.freeze({
//     name:'nihao',
//     age:9090
// })
// p.age = 18;
// console.log(p);

//jar
// function Car(){}

// Car.prototype.name = 'mazda';

// var car = new Car();

// Car.prototype = {
//     name:'Benz'
// }

// console.log(car);

// function Vsd(){}

// Vsd.prototype.name = 'lis';

// var v = new Vsd();

// Vsd.prototype.name = 'Pis';

// console.log(v);

//Date函数；
// let date = new Date('10:50:20 5/23/2020');
// console.log(date,typeof(date));
// let date2 = new Date(Date.UTC(2020,4,23,10,50,20));
// console.log(date2);
// let today = new Date(Date.now());
// console.log(today.toString());//有时区；24时制；
// console.log(today.toLocaleString())//分上下午；
// console.log(today.valueOf());//显示毫秒数；
// console.log(today.toDateString());
// console.log(today.toTimeString());
// console.log(date.toLocaleDateString());//yyyy/mm/hh;
// console.log(today.toLocaleTimeString());//am/pm time;
// console.log(today.toUTCString());

//RegExp 正则表达式；
// let pattern1 = /at/g;
// console.log(pattern1);

// var str = 'abcdefg';
// console.log(str.substring(1));


//字符串练习
// var a = 'liuyanwudidanhsahsladhndlsahldhndaldhlahlnajdlajsldjdlasnajsdkajdljsnsjdljaljalsdndjaljdldajn';

// function test () {
//     var arr = [],
//         num = 0,
//         arg = arguments;

//     function trans () {
//         if(num < arg[0].length && arg[0].indexOf(arg[1],num) > 0){
//             let val = arg[0].indexOf(arg[1],num);
//             arr.push(val);
//             num = val + 1;
//             trans ();
//         }
//         else{
//             return console.log(arr);
//         }
//     }

//     return trans();
// }

// test(a, 'n');

//trim()
// var a = '       liuyanlovebasketball      ';
// let b = a.trim();
// let c = b.repeat(17);

// console.log(a,a.length);
// console.log(b,b.length);
// console.log(c,c.length);

//padStart(); padEnd();

// var str = '你的上次不是单纯不能把多次举办冬季课程的花费时间和副驾驶副驾驶尽快发货时间发';
// let str1 = str.padStart(100,'.');
// let str2 = str.padEnd(100,'.');

// console.log(str1);
// console.log(str2);

// let text = 'cat kyu liu hhhh hdj kkkk cat lll cat';
// let pattern = /cat/g;

// let matches = text.match(pattern);

// console.log(matches);

// var a = {
//     name:'liuyan',
//     age:20
// } 

// // console.log(Object.prototype.toString.call(a));

// let b = [1,2,3];

// console.log(window.a,window.b);

//Set函数去重；
//
// let arr = [1,1,2,3,4,5,5,6];
// let arr2 = [...new Set(arr)];
// let arr3 = arr.reduce(function(ar,cur = 5) {
//     if(!ar.includes(cur)) {
//       ar.push(cur)
//     }
//     return ar
//   },[])

// console.log(arr,arr2,arr3);

// 这种方法会有一个问题：[1,'1']会被当做相同元素，最终输入[1]
// let arr = [1,1,2,3,4,5,5,6]
// let arr2 = arr.filter(test);

// function test(element) {
//     return element >= 5;
// }

// console.log(arr2);

//继承
function Teacher(){
    this.name = 'Mr Li';
    this.skill = 'JAVA';
}

Teacher.prototype = {
    pSkill: 'JS/JQ'
}

var t = new Teacher();
console.log(t);

function Student(){
    this.name = 'Mr. Wang';
}
function Buffer(){}
Buffer.prototype = Teacher.prototype;
var buffer = new Buffer();

Student.prototype = buffer;
var s = new Student();
console.log(s);