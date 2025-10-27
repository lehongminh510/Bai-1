// var, let,const

var hoten = 'Le Hong Minh';
var tuoi = 20;
var kethon = false;
console.log(hoten);
console.log(tuoi);
console.log(kethon);

// cú pháp hiện đại (let,const) được ưu tiên hơn về let

let hovaTen = 'Le Hong Minh';
hovaTen = 'LE';
console.log(hovaTen);

let x; //undefined do chưa gán giá trị
var y;
//từ khóa khai báo hàm const
const PI = 3.14;
console.log(PI);
const OPENAI_KEY = '';
const APP_OPENWEATHER_KEY ='';

//Template literals
const firstName = `Bob's Name$%^^{math.random() * 10+1}`;
console.log(firstName);

let salary = 1_000_000;
console.log(salary);
if (salary) {
    console.log('Co luong');
}
//nếu salary đúng thì thực hiện console log có lương
txt1="John";
txt2="Smith";
txt3= txt1 +" " + txt2;
console.log(txt3);
typeof "John"

 