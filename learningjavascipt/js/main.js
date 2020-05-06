

//foreachloop
// var numbers = [2,3,5,6,6,2];

// numbers.forEach(function(number){
//     console.log(number);
// });

console.log('------------------------------')
var lists = [3,4,5,6,4,6,67,5];
lists.reverse()

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


var fruit = 'mangoes' ;
 switch(fruit){
    
     case 'oranges':
        console.log('i love oranges');
         break;
    case 'banana':
        console.log('i love banannas less')
        break;
     case 'apples':
        console.log('i love apples more')

        default:
            console.log('mad man no fruit for your stupid ass')
    
 }




































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