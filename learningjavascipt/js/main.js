{/* <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> */}


// learning classes in java script
class Car {
    constructor(maker, model) {
      this.maker = maker;
      this.model = model;
    }
  
    drive() {
        console.log("Zoom!");
    }
  }

  class Tesla extends Car {
    constructor(model, chargetime) {
        super('Tesla', model);
        this.chargetime = chargetime;
    }

    charge() {
        console.log("Charging...");
    }
}

const tesla = new Tesla('3', 20);
tesla.drive();
tesla.charge();


// prop tytpe


Tesla.prototype = Object.create(Car.prototype);
Tesla.prototype.constructor = Tesla;

Tesla.prototype.charge = function() {
    console.log("Charging...");
}

// const tesla = new Tesla('3', 20);
tesla.drive();
tesla.charge();




let numberWords = [2,'boy',5,'man'];
let newArray = [...numberWords,'this', 'is', 5,4]
console.log(newArray)


//classes
class Human{
    constructor(){
        this.gender = 'female';
        this.race = 'Negroid ';
    }
    printMyPhisique(){
        console.log(this.gender +' '+this.race);
    }
}

class person extends Human{
    constructor(){
        super();
        this.name = 'tofunmi';
        this.age = 23;  
    }

    printMyName (){
        console.log(this.name);
    }
}

let myPerson = new person();
// let myPhisique  = new Human();
myPerson.printMyName();
myPerson.printMyPhisique();
//rest operator

const filter = (...args) => {
    return args.filter(el => el ===2);
}

console.log(filter(2,3,4,5,6))

//array destructuring

const number = [2, 'mfn', 6, '48', 45.4, '4.56'];
[ele1,, ele3, ele4, ele5, ele6] = number;

console.log(ele1, ele3, ele4, ele5, ele6)


//array functions
const digits = [2,3,4,5,6];

const newDigits = digits.map((dig) =>{
    return dig*2
});
console.log(digits);
console.log(newDigits);

const linksWithoutHttp = ['mad_man_of_gadars','harry_potter_and_the_philosophers_stone','star_wars'];

const appndingHttpToNakedLinks  = linksWithoutHttp.map((compeleteLink) => {
    return 'Https://'+compeleteLink+'.com';

});

console.log(linksWithoutHttp);
console.log(appndingHttpToNakedLinks);

class User{
    //constructor is a code that runs when your class ijs first being instanciated
    constructor(username, email, password){
        this.username = username;
        this.email  = email;
        this.passwoed = password;
    }
    //method(functio that belongs to thi class)
    register(){
        console.log(this.username+ ' is now registered')
    }
    static countUsers(){
        console.log('there are 50 registered users')
    }
}

let user1 = new User('tofunmi', 'okedejit@yahoo.com', 'pass1234');
user1.register();
User.countUsers();

class Members extends User{
    constructor(username, email, password, membershipPackage){
        super(username, email, password);
        this.membershipPackage = membershipPackage;
    }
    getPackage (){
        console.log( 'MR '+this.username+" your membership package is the "+ this.membershipPackage+ ' package');
    }
}
 let mike = new Members ('Mike', 'mike@fastmail.com', 'passmaike', 'Gold')
 mike.getPackage();
 
// calling a function from the User class
 mike.register();





// var newItemCounter = 1;
// var newList = document.getElementById('our-list');
// var but = document.getElementById('our-button');
// var headline = document.getElementById('our-headline');

// var lists = document.getElementById('our-list').getElementsByTagName('li');



// for(i=0; i<lists.length; i++){
//     lists[i].addEventListener('click', activate)

// }

// function activate()
//     {

//         headline.innerHTML = this.innerHTML;
//         // alert('click detected on '+i);
//     }


// but.addEventListener('click', createNewItem);
// function createNewItem(){
//     newList.innerHTML+='<li>new something'+ newItemCounter + '</li><hr>';
//     newItemCounter++
// }

//normal functions and arrow functions

// function myName(name){
//     console.log(name);
// }
// myName('tofunmi')

// //arrow function

// const myBestName = (name) =>{
//     console.log(name);
// }

// myBestName('tofunmi okedeji')

//for one argument this is parmited
// const testing = age =>{
//     return age;
// }


// const sentnce ='My age is ' + testing(23);
// console.log(sentnce)

// let multiplication =  (n) =>{
//     console.log(n +' times table')
    
//     for(i=1; i<=12; i++){
//         return n + 'X' + i + " = " + n*i
        
//     }
    
// }

// console.log(multiplication(3))















let newObject = {
    father: 'olaitan',
    mother: 'oyinade',
    numberOfSiblings: '2',
};



var obje = {
    ...newObject,
    name : 'tofunmi',
    OtherName : 'okedeji',
    age : 90,
    children : ['tofunmi', 'aomide', 'omoyeni' ],
    address : {
        HouseNumber : 16,
        street : 'ayanleye street',
        town : 'egan',
        state : 'lagos state',
        country : 'Nigeria'
    },
    FullName: function(){
        return this.name+""+this.OtherName;
    },
    FullAdress: function(){
        return this.address.HouseNumber + this.address.street + this.address.town + this.address.state + this.address.country
    }
}

console.log(obje)




// var brief  = 'my name is '+obje.name+' '+obje.OtherName+' and i am '+obje.age+ ' i live at '+
// obje.address.HouseNumber + obje.address.street;

// console.log(obje.FullAdress())


// //object constructor
// var fruit = new Object();
// fruit.name = ['apple', 'orange', 'bAnnana'];
// fruit.shape = ['goid', 'circulAR', 'cuve' ];

// fruit.description = function(){
//     return this.name[0]+':'+ this.shape[0];
// }

// console.log(fruit.description());



// //object constructor pattern 



// function fruit (name, shape, size, color){

//     this.name = name;
//     this.shape = shape;
//     this.size = size;
//     this.color = color;

//     this.description = function()
//     {
//         return this.name+this.shape;
//     }

// }


// var melons = new fruit('water melon','round', 'big', 'green');



// console.log(thise.description());


// function another_function(){
//     var onetxt = document.getElementById('our-headline');
//     onetxt.innerHTML = 'WOULD YOU JST DHUT UP';
// }

// function doClick(){
//     alert('COWARD YOU CLICKED!! ')
// }

// function showdate(){
//     var tim = document.getElementById('time');
//     tim.innerHTML=Date();
// }

// function contract(){
//     var tim = document.getElementById('time');
//     tim.innerHTML='';
// }














//foreachloop
// var numbers = [2,3,5,6,6,2];

// numbers.forEach(function(number){
//     console.log(number);
// });

// console.log('------------------------------')
// var lists = [3,4,5,6,4,6,67,5];
// lists.reverse()

// lists.forEach(function(li){
// console.log(li);
// });


// for(var i=0; i<lists.length; i++){
// console.log(lists[i]);

// }

// for(var i = 0; i<5;i++){
//     console.log(i)

// }

// if(2==2){console.log('Tru')}else{console.log('False')}

// var DadsAge = 90;
// var MumsAge = 80;


// if(DadsAge==MumsAge&&DadsAge>MumsAge){
//     console.log(true)
// }else{
//     console.log(false)    
// }


// var fruit = 'mangoes' ;
//  switch(fruit){
    
//      case 'oranges':
//         console.log('i love oranges');
//          break;
//     case 'banana':
//         console.log('i love banannas less')
//         break;
//      case 'apples':
//         console.log('i love apples more')

//         default:
//             console.log('mad man no fruit for your stupid ass')
    
//  }


// var ourButton =document.getElementById("our-button")
// var headline = document.getElementById("our-headline")
// var listItems = document.getElementById("our-list").getElementsByTagName("li")

// for (i = 0; i < listItems.length; i++) {
//     listItems[i].innerHTML = "HELLO WORLD.";
// }



// for (i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", activateItem)
// }  

// function activateItem() {
//     alert ("click detected")
// }

// console.log("heello world tn is tofunmi");



// for (i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener("click", activateItem)
// }  

// function activateItem() {
//     headline.innerHTML = this.innerHTML;
// }



// ourButton.addEventListener("click", createNewItem)


// function createNewItem(){
//     ourButton.innerHTML = this.innerHTML;
// }


// let name = 'tofunmi';
// let lastName = 'okedeji';
// console.log(name +' '+ lastName);

// iterestRate = 0.3;

// console.log(iterestRate)

// let middleName = 'babajuwon';
// let age = 22;
// let wealth = true;
// let death;
// let sick = null;


// console.log(middleName,age,wealth,death,sick)


// let person  = {
//     name : 'tofunmi okedeji babajuwon',
//     age : 23,
//     hubby : 'making money',
// };

// person.name = 'okedeji babajuwon tofunmi';
// console.log(person.name)




// let dadsDetail = {
//     dadsname:'olaitan',
//     dadsAge:90,
//     dadsWife:'oyin'
// };

// dadsDetail.dadsName='alaba'
// console.log(dadsDetail.dadsName)


// let colors = ['black','pink'];

// console.log(colors[0]);


// function helloname(firstName){
//     console.log('Hello ' +firstName);
// }
 
// helloname('tofunmi')
// let what = helloname('ayomide');

// console.log(what);
// let number1 = '40';
// let number2 = '110';
// alert('my favourite number is ' + number1 + number2);

// var arr = ['green', 'black', 'orange'];
// arr.push('indigo');
// alert(arr[3]);

// for (var i =0; i<10 ; i++){
//     console.log(i);
// }

// var no1 = 2;
// var no2 = 10;
 
// if (no1<=2 || no2==10){
//     console.log(false);
//     alert('it is false');
// }else{
//     console.log(true);
// }

// var fruit = 'py';

// switch(fruit){
//     case fruit ='apple':
//         console.log('fruit is apple');
//         break;
//     case fruit = 'banana':
//         console.log('fruit i banana');
//         break;
//     case fruit = 'mango':
//         alert('the case unfortunately is mango');
//         break
//     default:
//         alert('no option was selected man');
//         console.log('no option wa elected!!!')

// }



// var details = {
//     names:'oyinade okedeji',
//     age:35,
//     quote:'what exactly do you want!!!',
//     children: ['omoyeni','ayomide','tofunmi'],
//     address:{
//         state:'lagos state',
//         country:'Nigeria',
//         town:'igando',
//         streetName:'Ayanleye street',
//         streetNumber:'16',
//     },
//     fullName: function(){
//         return this.names+ this.quote
//     }
// };


// var na = details.names;
// var ag = details.age;
// var quo = details.quote;
// var ch1 = details.children[0];
// var ch2 = details.children[1];
// var ch3 = details.children[2];

// console.log('my mothers name is '+ na+ ' and her age is '+ ag +' her fvourite quote is ' + quo, 'her firt child is named ', ch1, 'and she lives in '+ details.address.streetNumber, details.address.streetName, details.address.town, details.address.state, details.address.country);

// console.log(details.fullName());