/* <-------------------------------chapter no 1 alerts-------------------------------->
// task no 2
alert("error! please enter a valid password");
// task no 3
alert("welcome to Jsland \n happy coding"); 
// task no 4
alert("welcome to Jsland"); 
alert("happy coding");
// task no 5
console.log("hello....... i run js through my web browser console");
// task no 6
//Practice placement of <script></script> element in following sections of your project in exercise 6:
head */

/* <-------------------------chapter no 2 variables for strings----------------------------->
// task no 1
var username;
// task no 2
var myName="zameer alit tunio";
// task no 3
var message="hello world";
alert(message);
// task no 4
var name="zameer alit tunio";
alert(name);
var age=20;
alert(age);
var qualification="Bacholer in Information Technology (BSIT)";
alert(qualification);
// task no 5
 var v="pizza";
 document.write(v+"<br>");
 var v="pizz";
 document.write(v+"<br>");
 var v="piz";
 document.write(v+"<br>");
 var v="pi";
 document.write(v+"<br>");
 var v="p";
 document.write(v+"<br>");
// task no 6
var email="zameeralitunio@gmail.com";
alert("my email is " + email);
// task no 7
var book="A smarter way to learn JavaScript";
alert("i am tying to learn from book " + book);
// task no 8
document.write("yah! i can write HTML content through JS");
// task no 9
var store="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(store);  */

/* <----------------------------chapter no 2 variables for numbers ----------------------------------->
// task no 1
var age="20";
alert("I am "+age+" years old");
// task no 2
var a=1;
var visit=a++;
alert("you have visited this "+visit+" times");
// task no 3
var birthyear=1999;
document.write("my birth year is "+birthyear);
document.write("<br> data type of my declared is number");
// task no 4
document.write("<br><b>John Doe</b> ordered <b>5 T-shirt(s)</b> on <b>XYZ </b>Clothing store");*/

/* <------------------------------chapter no 4 VARIABLE NAMES: Legal & Illegal ------------------------->
// task no 1
// 5 legal variables
var numbers;
var $;
var _;
var myAlert;
var myname1;
// 5 illegal variables
1 var 1myname;
2 var my name;
3 var alert;
4 var 123;
5 var #@;
document.write("<h1>A heading stating “Rules for naming JS variables</h1><br/><br/>Variable names can only contain numbers, $, and _.For example:$my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or_. For example $name, _name or name<br>");
document.write(" Variable names are case sensitive <br>");
document.write(" Variable names should not be JS keyword");*/

/* <--------------------------------chapter no 5 MATH EXPRESSIONS -------------------------------->
//task no 1
var a=3;
var b=5;
var c=a+b;
document.write("the sum of "+a+" and "+b+" is "+c);
//task no 2
var a=3;
var b=5;
var d=a-b;
var e=a*b;
var f=a/b;
documant.write("the sub of "+a+" and "+b+" is "+d);
document.write("the mult of "+a+" and "+b+" is "+e);
document.write("the div of "+a+" and "+b+" is "+f);
//task no 3
var a=5;
document.write("Value after variable declaration is: "+a);
document.write("<br>Initial Value: "+a);
var b=++a;
document.write("<br>Value after increment is: "+b);
var c=7;
var d=b+c;
document.write("<br>Value after addition is: "+d);
--d;
document.write("<br>Value after decrement is: "+d);
var e=d/3;
document.write("<br>The remainder is : 0");
//task no 4
var store=600;
var total=store*5;
document.write("<br>total cost buy 5 tickets to a movie is "+total);
//task no 5
document.write("<br>Table of 4");
var c;
for(var a=1;a<=10;a++){
    for(var b=1;b<=a;b++){
        c=b*4;}
    document.write("<br>4*"+a+"  "+c);
}
//task no 6
var c=70;
var f=172;
document.write("25 C is "+(f-32)*5/9+"F");
document.write("<br> 70 F is "+(c-32)*5/9+" C");
//task no 7
var a=650;
var b=a*3;
var c=100;
var d=100*7;
var e=100;
var total=b+d+e;
document.write("<br>Price of item 1 is "+a);
document.write("<br>Ordered quantity of item 1 is 3");
document.write("<br>Price of item 2 is "+c);
document.write("<br>Ordered quantity of item 2 is 7");
document.write("<br>Shipping charges is "+e);
document.write("<br>Total cost of your order is "+total);
// task no 8
var total=980;
var obtain=804;
var per=obtain/total*100;
document.write("total marks "+total);
document.write("<br>obtain marks "+obtain);
document.write("<br>percentage "+per);
// task no 9
document.write("totla currency in PKR: "+(10*104.80+25*28));
// task no 10
var a=5;
document.write("yes i perform in one expression"+((a+5)*10)/2);
// task no 11
var cyear=2016;
var byear=1992;
var age=cyear-byear;
document.write("current year  is: "+cyear);
document.write("<br>birth year  is: "+byear);
document.write("<br>your age is: "+age);
// task no 12
var radius=20;
var cir=2*(3.142)*radius;
var area=3.142*radius*radius;
document.write("<br>The circumference is: "+cir);
document.write("<br>The area is: "+area);
// task no 13
var snack="chocolate chip";
var age=15;
var maxage=65;
var perday=3;
var calculate=(maxage-age)*perday;

document.write("<br>favorite snack: "+snack);
document.write("<br>current age: "+age);
document.write("<br>estimated maximum age: "+maxage);
document.write("<br>amount of snaks per day: "+perday);
document.write("<br>You will need "+ calculate+" to last you until the ripe old age of "+maxage);*/

/*<-------------------------------------chapter no 6-9 Math expressions------------------------------>
// task no 1
var a=10;
document.write("RESULTS:<br> ");
document.write("the value of a is: "+a);
document.write("<br>........................................");
++a;
document.write("<br>the value of ++a is: "+a);
document.write("<br>now the value of ++a is: "+a);
document.write("<br>........................................");
document.write("<br>the value of a++ is: "+a);
a++;
document.write("<br>now the value of a++ is: "+a);
document.write("<br>........................................");
--a;
document.write("<br>the value of --a is: "+a);
document.write("<br>now the value of --a is: "+a);
document.write("<br>........................................");
document.write("<br>the value of a-- is: "+a);
a--;
document.write("<br>now the value of a-- is: "+a);
document.write("<br>........................................");
// task no 2
var a=2;
var b=1;
document.write("a is "+a);
document.write("b is "+b);
var result=--a - --b + ++b +b--;
document.write("result is  "+result);
// var c=--a;
// var d=c- --b;
// var e=d+ ++b;
// var f=e + b--;
// document.write("--a ="+c);
// document.write("<br>--a - --b ="+d);
// document.write("<br>--a - --b + ++b ="+e);
// document.write("<br>--a - --b + ++b + b-- ="+f);
// task no 3
var name=prompt("enter your name");
alert(name);
// task no 4 5
var c;
var d=+prompt("enter any number");
for(var a=1;a<=10;a++){
    for(var b=1;b<=a;b++){
        c=b*d;}
    document.write("<br>"+d+"*"+a+"  "+c);
}
// task no 6
var a=prompt("subject no 1","enter subject name");
var b=prompt("subject no 2","enter subject name");
var c=prompt("subject no 3","enter subject name");
var total=100+100+100;
var j=100;
var e=+prompt("enter obtain marks of subject "+a);
var f=+prompt("enter obtain marks of subject "+b);
var g=+prompt("enter obtain marks of subject "+c);
var obtain=e+f+g;
var per=obtain/total*100;
document.write("<table><tr><th>subject</th><th>total</th><th>obtain</th><th>percentage</th></tr><tr><td>"+a+"</td><td>"+j+"</td><td>"+e+"</td><td>"+e+"</td></tr><tr><td>"+b+"</td><td>"+j+"</td><td>"+f+"</td><td>"+f+"</td></tr><tr><td>"+c+"</td><td>"+j+"</td><td>"+g+"</td><td>"+g+"</td></tr><tr><td></td><td><b>"+total+"</b></td><td><b>"+obtain+"</b></td><td><b>"+per+"</b></td></b></tr></table>");*/


/*<-----------------------------chapter no 9-11 User Input & Conditional Statement ---------------->
// task no 1
var city=prompt("enter your city name","example:karachi");
if(city==="karachi"){
    document.write(city+" welcome to city of lights");
}
else if(city==="islamabad"){
    document.write(city+" welcome to city of beautifullness");
}
else if(city==="multan"){
    document.write(city+" welcome to city of saints");
}
else if(city==="hyderabad"){
    document.write(city+" welcome to city of Airs");
}
else {
    document.write("welcome to "+city);
}
// task no 2
var gender=prompt("enter your gender","example:male");
if(gender==="male" || gender==="m"){
    document.write("Good Morninig Sir");
}
else if(gender==="female" || gender==="f"){
    document.write("Good Morninig Madam");
}
else {
    alert("please enter valid query");
}
// task no 3
var red=prompt("enter trafffic color RED");
var green=prompt("enter trafffic color GREEN");
var yellow=prompt("enter trafffic color YELLOW");
if(red==="red" && yellow==="yellow" && green==="green"){
document.write("<table border=1 table-stripe cellspacing=0 cellpadding=3 style=' color:blue; font-size:50px;'> <tr><th>Signal color</th><th>Message</th></tr>                                  <tr><td>red</td><td>must stop</td></tr>  <tr><td>yellow</td><td>ready to move</td></tr>  <tr><td>green</td><td>move now</td></tr> </table>   ");}
else {
    alert("please enter correct spelling of colors\n enter all small caps");
}
// task no 4
var fuel=+prompt("enter remaining fuel","for example 0.25 or 1");
if(fuel===1){
    document.write("tank is full");
}
else if(fuel===0.50){
    document.write("the tank is half");
}
else if(fuel===0.25){
    document.write("you need to refill the tank");
}
else{
    document.write(" you entered invalid value");

}
// task no 5
// a:true
// b:false
// c:codition 3 is true
// d:true
// e:not understand the question
// f:true
// task no 6
var e=+prompt("enter obtain marks of subject 1");
var f=+prompt("enter obtain marks of subject 2");
var g=+prompt("enter obtain marks of subject 3");
var total=100+100+100;
var obtain=e+f+g;
var per=obtain/total*100;
document.write("<b><h1>Marksheet</h1></b> ");
document.write("<br><b>total marks</b> "+total);
document.write("<br><b>obtain marks</b> "+obtain);
document.write("<br><b>percentage</b> "+per);
if(per>=80){
    document.write("<br> Grade A-one<br>excelent")
}
else if(per>=70){
    document.write("<br>Grade A<br>Good")
}
else if(per>=60){
    document.write("<br>Grade b<br>you need to improve")
}
else if(per<=40){
    document.write("<br>Grade d<br>Fail")
}
else{
    document.write("<br>ERROR")
}
// task no 7
var a=7;
var b=+prompt("enter number 1 to 10");
if(a===b){
    document.write("bingo ,correct");
}
else if(b===8){
    document.write("close enough");
}
else if(b===6){
    document.write("close enough");
}
else{

    document.write("error");
}
// task no 8
var a=+prompt("enter any number");
if (a%3==0){
document.write("divisable");
}
else {
    document.write("not divisable");
}
// task no 9
var a=+prompt("enter any number");
if(a % 2===0){
    document.write("even");
}
else if(a % 2===1){
    document.write("odd");
}
else{
    document.write("error");  
}
// task no 10
var a=+prompt("enter tem like 40 ");
if (a>=60){
    document.write("today is doomsday");}
else if(a>=40){
    document.write("It is too hot outside");
}
else if (a>=30){
    document.write("The Weather today is Normal.");
}
else if (a>=20){
    document.write("Today’s Weather is cool..");
}
else if (a>=10 || a<=10){
    document.write("OMG! Today’s weather is so Cool.");
}
//task no 11
var a=+prompt("enter number one");
var b=+prompt("enter number two");
var sign=prompt("enter sign like +,-,/,*,%");
var sum=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;
var rem=a%b;
if(sign==="+"){
    document.write(sum);
}
else if(sign==="-"){
    document.write(sub);
}
else if(sign==="*"){
    document.write(mul);
}
else if(sign==="/"){
    document.write(div);
}
else if(sign==="%"){
    document.write(rem);
}
else {
    document.write("error");
}*/

/*<-----------------------------------chapter no 12-13------------------------------------> 
// task no 1
var a=prompt("check alphabet in assci 65 t0 90 and 97 to 122 ");
var alpha=['a','b'];
if (a>=65 && a<=97){
    document.write("upper case");
}

else if (a>=97 && a<=122){
    document.write("lower case");
}
else{
    document.write("invalid value hint:65 t0 90 or 97 to 122")
}
// task no  2
var a=prompt("enter value 1");
var b=prompt("enter value 2");
if(a>b){
    document.write(a+"is big vlaue than"+b);
}
else if(b>a){
    document.write(b+"is big vlaue than"+a);
}
else {
    document.write("ivalid value enter")
}
// task no 3
var a=prompt("enter value 1");
if (a%2===0){
    document.write("positive integer");
}
else if (a%2===1){
    document.write("negative  integer");
}
else {
    document.write("invalid");
}
// task no 4
var a=prompt("any character");
if (a==="A" || a==="a" && a==="e" || a==="E" && a==="i" || a==="I" && a==="O" || a==="o"  && a==="u" || a==="U"){
    document.write("vowels");
}
else {
    document.write("false");
}
// task no 5
var a="zameer";
var b=prompt("enter  password");
if (a===b){
    document.write("correct");
}
else{
    document.write("incorrect");
}
// task no 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);}
else{
greeting = "Good evening";
}
// task no 7
var b=+prompt("enter hour in 24 format");
if (b===13){
alert(b+"=  1")
}
else if (b===14){
alert(b+"=  2")
}
else if (b===15){
alert(b+"=  3")
}
else if (b===16){
    alert(b+"=  4")
    }
else if (b===17){
alert(b+"=  5")
}
else if (b===18){
alert(b+" =  6")
}
else if (b===19){
alert(b+" =  7")
}
else if (b===20){
alert(b+" =  8")
}
else if (b===21){
alert(b+" =  9")
}
else if (b===22){
alert(b+" =  10")
}
else if (b===23){
alert(b+" =  11")
}
else if (b===24){
alert(b+" =  12")
}
else{alert(b+" =  "+b)}*/
/*<----------------------------------chapter no 14-16 Arrays ----------------------------->
// task no 1
var a=[];
// task no 2
var b=new array();
// task no 3
var c=["zameer"];
// task no 4
var d=[1,2,3];
// task no 5
var e=[true];
// task no 6
var f=["name","phone_no"];
f=[
    {name:"zamer", phone_no:"03087980557"},
    {name:"ali", phone_no:"03087980557"},
    {name:"ahmr", phone_no:"03087980557"},
]
// task no 7
var h=["1)SSC", "2)HSC", "3)BCS","4)BS", "5)BCOM", "6)MS",  "7)M.Phil", "9)PhD"];
alert(h);
// task no 8
var names=["Michael","John","Tony"];
var score=[320,230,480];
document.write("Score of "+names[0] +" is "+score[0]+" = "+(320/500)*100+"%<br>");
document.write("Score of "+names[1] +" is "+score[1]+" = "+(230/500)*100+"%<br>");
document.write("Score of "+names[2] +" is "+score[2]+" = "+(480/500)*100+"%<br>");

// <!-----------------------------I have can't complete becausse shortage of time----------------------------->
//  task no 9
var color=["red","green","blue",];
color.unshift("orange","yellow");
color.shift();
color.pop();
color.splice(2,0,"skyblue");
color.splice(1,3);
alert(color);
var a=prompt("enter your choice color");
var b=prompt("confirm if push(end add),pop(end out),unshift(start out,shift(start add)");

if(b==="add"){
    color.push(a);
    document.write(color);
}
else if(b==="remove"){
    color.pop(a);
    document.write(color);
}
else if(b==="shift"){
    color.shift(a);
    document.write(color);
}
else if(b==="unshift"){
    color.unshift(a);
    document.write(color);
}
else {
    document.write("error");
}
// task no 10
var student=new Array(320,230,480,120);
document.write("marks of students: "+student);
student.sort();
document.write("<br>marks of students in ordered: "+student);
// task no 11
var cities=new Array("Karachi","lahore","islamabad","Quetta","Peshawar");
document.write("cities list:<br>"+cities);
var citiesCopy=cities.slice(0,1);
var a=cities.slice(3,4);
document.write("<br> list of slected cities:<br>"+citiesCopy+" "+a);

// task no 12
var arr = ["This", " is ", " my ", " cat"];
document.write("Array<br>"+arr);
var a=arr.join();
document.write("<br>String<br>"+a);
// task no 13
var devices=["keyboard","mouse","printer","monitor"];
document.write("Devices:<br>"+devices);
document.write("<br>out<br>"+devices.shift());
document.write("<br>out<br>"+devices.shift());
document.write("<br>out<br>"+devices.shift());
document.write("<br>out<br>"+devices.shift());
// task no 14
var devices=["keyboard","mouse","printer","monitor"];
document.write("Devices:<br>"+devices);
document.write("<br>out<br>"+devices.pop());
document.write("<br>out<br>"+devices.pop());
document.write("<br>out<br>"+devices.pop());
document.write("<br>out<br>"+devices.pop());

// task no 15
var a=new Array("Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier");
document.write(a[0]+"<br>"+a[1]+"<br>"+a[2]+"<br>"+a[3]+"<br>"+a[4]+"<br>"+a[5]+"<br>");
*/
/*<-----------------------------------chapter no 17-20------------------------------------> 
// task no 1
var a=[
    [],
    []
];
// task no 2
var a=[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
];
var c=a.join();
for(var b=0;b<3;b++){
document.write(a[b]+"<br>");}
// task no 3
for(a=1;a<=10;a++){
    document.write(a+"<br>");
}
// task no 4
var a=+prompt("enter any number for table");
var b=+prompt("give number for length of table");
for(var c=1; c<=b;c++){
    document.write("table "+a);
    document.write("length "+b);
    document.write(a+" * "+c+" = "+(a*c)+"<br>");
}
// task no 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var a=0;a<fruits.length;a++){
    document.write(fruits[a]+"<br>");
}
for(var a=0;a<fruits.length;a++){
    document.write("element at index "+a+" at "+fruits[a]+"<br>");
}
// task no 6
// a
document.write("<h2>counting</h2>");
for(var a=1;a<=15;a++){
    document.write([a]+",");
}
// b
document.write("<h2>reverse</h2>");
for(var a=15;a>=1;a--){
    document.write([a]+",");
}
// c
document.write("<h2>even</h2>");
for(var a=1;a<=20;a++){
    if (a%2==0){
    document.write(a+",");}
}
// d
document.write("<h2>odd</h2>");
for(var a=1;a<=20;a++){
    if (a%2==1){
    document.write(a+",");}
}
// e
document.write("<h2>series</h2>");
for(var a=1;a<=20;a++){
    if (a%2==0){
    document.write(a+"k"+",");}
}
// task no 7
var b=prompt("Welcome to ABC bakery.what do you want to order sir/ma'am")
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
for(var c=0;c<1;c++){
if(b==="cake"){
    document.write(b+" is avialable at index no "+(1+c));
}
else if(b==="apple pie"){
    document.write(b+" is avialable at index no "+(2+c));
}
else if(b==="cookie"){
    document.write(b+" is avialable at index no "+(3+c));
}
else if(b==="chips"){
    document.write(b+" is avialable at index no "+(4+c));
}
else if(b==="patties"){
    document.write(b+" is avialable at index no "+(5+c));
}
else{
    document.write(b+" is not avaiable in our store ")
}}
// task no 8
var a =[24, 53, 78, 91, 12];
document.write("<br>Array items: "+a+"<br>");
if(a[0]>a[1] && a[0]>a[2] && a[0]>a[3] && a[0]>a[4]){
    document.write("largest number is "+a[0]);
}
else if(a[1]>a[0] && a[1]>a[2] && a[1]>a[3] && a[1]>a[4]){
    document.write("largest number is "+a[1]);
}
else if(a[2]>a[0] && a[2]>a[1] && a[2]>a[3] && a[2]>a[4]){
    document.write("largest number is "+a[2]);
}
else if(a[3]>a[0] && a[3]>a[1] && a[3]>a[2] && a[3]>a[4]){
    document.write("largest number is "+a[3]);
}
else if(a[4]>a[0] && a[4]>a[1] && a[4]>a[2] && a[4]>a[3]){
    document.write("largest number is "+a[4]);
}
// task no 9
var a =[24, 53, 78, 91, 12];
document.write("<br>Array items: "+a+"<br>");
if(a[0]<a[1] && a[0]<a[2] && a[0]<a[3] && a[0]<a[4]){
    document.write("smallest number is "+a[0]);
}
else if(a[1]<a[0] && a[1]<a[2] && a[1]<a[3] && a[1]<a[4]){
    document.write("smallest number is "+a[1]);
}
else if(a[2]<a[0] && a[2]<a[1] && a[2]<a[3] && a[2]<a[4]){
    document.write("smallest number is "+a[2]);
}
else if(a[3]<a[0] && a[3]<a[1] && a[3]<a[2] && a[3]<a[4]){
    document.write("smallest number is "+a[3]);
}
else if(a[4]<a[0] && a[4]<a[1] && a[4]<a[2] && a[4]<a[3]){
    document.write("smallest number is "+a[4]);
}
// task no 10
 for(var a=1; a<=20;a++){
     document.write(a*5+",");
 }
*/

/* <----------------chapter no 21 to 25 Strings Methods -------------------->
// task no 1
var a=prompt("enter your first name");
var b=prompt("enter your first name");
var fullName=a+" "+b;
alert("Greetings Mr. "+fullName); 
// task no 2
var a=prompt("Enter Your Favourite Mobile Model Name");
document.write("My favourite phone is: " +a);
var b=a.length;
document.write("<br>Length of String  is: "+b);

// task no 3
var a="Pakistani";
document.write("String: " +a);
var b=a.indexOf("n");
document.write("<br>index of 'n' is: " +b);
// task no 4
var a="hello world";
document.write("String: " +a);
var b=a.lastIndexOf("l");
document.write("<br>Last index of 'l' is: " +b);
// task no 5
var a="Pakistani";
document.write("String: " +a);
var b=a.charAt(3);
document.write("<br>character at index 3 is: " +b);
// task no 6
var a=prompt("enter your first name");
var b=prompt("enter your first name");
alert(a+" "+b);
// task no 7
var a="Hyderabad";
document.write("String: " +a);
var b=a.replace("Hyder","Islam");
document.write("<br>After replacement: " +b);
// task no 8
var a = "Ali and Sami are best friends. They play cricket and football together.";
document.write("String: " +a);
var b=a.replace(/and/g,"&");
document.write("<br>After replacement: " +b);
// task no 9
var a=472;
var a=a.toString();
document.write("value "+a);
document.write("<br>type: string");
var b="472";
var b=Number(b);
document.write("<br>value "+b);
document.write("<br>type: number");

// task no 10
var a=prompt("Enter String");
document.write("user input: "+a);
var a=a.toUpperCase();
document.write("<br>upercase: "+a);
// task no 11
var a=prompt("Enter String");
document.write("user input: "+a);
var a=a.toLowerCase();
document.write("<br>Title case: "+a);
// task no 12
var a=35.36;
document.write("number: "+a);
var b=a.toString();
 b=b.replace(".",'');
document.write("<br>result: "+b);
// task no 13
var a=prompt("enter UserName");
var c=a.split("");
for(var b=0;b<a.length;b++){
    if(c[b]==="!" || c[b]==="@" || c[b]==="." || c[b]===","){
    }
}
alert("invalid UserName");  

// task no 14
var b=prompt("Welcome to ABC bakery.what do you want to order sir/ma'am")
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
for(var c=0;c<1;c++){
if(b==="cake"){
    document.write(b+" is avialable at index no "+(1+c));
}
else if(b==="apple pie"){
    document.write(b+" is avialable at index no "+(2+c));
}
else if(b==="cookie"){
    document.write(b+" is avialable at index no "+(3+c));
}
else if(b==="chips"){
    document.write(b+" is avialable at index no "+(4+c));
}
else if(b==="patties"){
    document.write(b+" is avialable at index no "+(5+c));
}
else{
    document.write("we are sorry The "+b+" is not avaiable in our Bakery ");}
}
// task no 15


// task no 16
var university = "University of Karachi";
university=university.split("");
for(var b=0;b<university.length;b++){
document.write(university[b]+"<br>");
}
// task no 17
var a=prompt("enter string");
document.write("Input string is: "+a);
a=a.split("");
for(var b=a.length-1;b<a.length;b++){
document.write("<br>Last chracter of user input: "+a[b]);}*/
// task no 18


/* <----------------chapter no 26 to 30 Math Methods --------------------->
// task no 1
var a=+prompt("enter only positive integer(points value)");
document.write("Number value: "+a);
var b=Math.round(a);
document.write("<br>Round off value: "+b);
var c=Math.floor(a);
document.write("<br>Floor value: "+c);
d=Math.ceil(a);
document.write("<br>Ceil value: "+d);
// task no 2
var a=+prompt("enter only negative integer(points value)");
document.write("Number vlaue: "+a);
var b=Math.round(a);
document.write("<br>Round off value: "+b);
var c=Math.floor(a);
document.write("<br>Floor value: "+c);
d=Math.ceil(a);
document.write("<br>Ceil value: "+d);
// task no 3
var a=+prompt("enter only negative value");
var b=Math.abs(a);
document.write("<br>The Absolute Value of "+a+" is "+b);
// task no 4
var a=Math.random()*7;
var b=a.toFixed(0)
var c=Math.random()*7;
var d=c.toFixed(0)
document.write("Random Dice value: "+b)
document.write("<br>Random Dice value: "+d)
// task no 5
var a=Math.random()*2;
var b=a.toFixed(0)
if(b==1){
    document.write(b+"<br>Random coin value is: Heads<br> ")
}
else{
    document.write(b+"<br>Random coin value is: tails ")
}
// task no 6
var a=Math.random()*100;
var b=a.toFixed(0);
document.write("Random Number between 1 to 100: "+b);
// task no 7
var a=+prompt("enter weight in kilograms");
document.write("The of user is "+a+" Kilograms")
// task no 8
var c=+prompt("enter number between 1 to 10");
var a=Math.random()*11;
var b=a.toFixed(0);
if(c===a){
    document.write("Congrats");
}
else{
    alert("try again");
}*/
/*<------------------------------chapter# no 31 to 34 Date Methods------------------------------------------------> 
//  Task no 1
var a=new Date();
document.write(a);
//  Task no 2
var a=new Date();
var b=a.toString();
var c=b.slice(4,7);
alert("Current Month: "+c);
//  Task no 3
var a=new Date();
var b=a.toString();
var c=b.slice(0,3);
alert("Today is: "+c);
//  Task no 4
var a=new Date();
var b=a.toString();
var c=b.slice(0,3);
if (c==="sun" || c==="sat"){
    document.write("its fun day");
}
else {
    document.write("Today is not fun day");
}
// task no 5
var a =new Date();
var b=a.getDate();
if (b<=15){
document.write("First fifteen days of the month");
}
else{
    document.write("Last Days of the month");
}
// task no 6
var a=new Date();
document.write("Current date: "+a);
var b=a.getTime();
document.write("<br>Elapsed miliseconds since january 1,1970: "+b);
var c=a.getTime()/(60*60);
document.write("<br>Elapsed minutes since january 1,1970: "+c);
// task no 7
var a = new Date();
var b=a.toString();
var c=b.slice(15,21);
if (c<="12"){
    document.write("its AM")
}
else{
    document.write("its PM")
}
// task no 8  
var a=new Date("dec 31,2020");
document.write("later date: "+a);
// task no 9
var oldDate=new Date("june 18,2015");
var oldTime=oldDate.getTime();
var currentDate=new Date();
var currenttime=currentDate.getTime();
var pastDays=currenttime-oldTime;
var totalDays=pastDays/(1000*60*60*24);
var totalDays=totalDays.toFixed(0);
document.write(totalDays+" Days passed since 1st Ramadan, 2015 ");
// task no 10
var oldDate=new Date("dec 5,2015 22:50:16");
var oldTime=oldDate.getTime();
var currentDate=new Date();
var currenttime=currentDate.getTime();
var pastDays=currenttime-oldTime;
var totalDays=pastDays/(1000);
var totalDays=totalDays.toFixed(0);
document.write(" on reference date "+oldDate);
document.write("<br>"+totalDays+" Seconds passed since begining of  2015 ");
// task no 11
var a=new Date("dec 5,2015 22:08:16");
document.write("current date: "+a)
var setHour=a.setHours("23")
document.write("<br>1 Hour ago,it was : "+a)
// task no 12
var a=new Date("dec 5,2015");
document.write("current date: "+a)
var b=new Date("dec 5,1915");
document.write("<br>100 years ago,it was: "+b)
// task no 13
var dob=new Date (prompt("jan 1,1999"));
var dobTime=dob.getTime();
var currentDate=new Date();
var currenttime=currentDate.getTime();
var diff=currenttime-dobTime;
var totalAge=diff/(1000*60*60*24*30*12);
var totalAge=totalAge.toFixed(0);
document.write("Your age is: "+totalAge);
dobYear=dob.getFullYear();
document.write("<br>your birth year is: "+dobYear);*/

/* <------------------------- chapter no 35-38 Functions --------------------> 
// task no 1
function currentDate(){
    var a=new Date();
    document.write(a);
}
currentDate();
// task no 2
function greeting(){
    var a=prompt("enter first name");
    var b=prompt("enter last name");
    var c=a+" "+b;
    document.write("Good Morning "+c);
}
greeting();
// task no 3
function add(){
    var a=+prompt("enter number 1");
    var b=+prompt("enter number 2");
    var c= a+b;
    document.write(c);
}
    add();
// task no 4
// function Calc(){
var a=+prompt("enter number one");
var b=+prompt("enter number two");
var sign=prompt("enter sign like +,-,/,*,%");
var sum=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;
var rem=a%b;
if(sign==="+"){
    document.write(sum);
}
else if(sign==="-"){
    document.write(sub);
}
else if(sign==="*"){
    document.write(mul);
}
else if(sign==="/"){
    document.write(div);
}
else if(sign==="%"){
    document.write(rem);
}
else {
    document.write("error");
}
}
Calc();
// task no 5
function square(){
    var a=+prompt("enter num for spuare");
    var b=a*a;
    document.write(b);
}
square();
// task no 6
function factorial(n){
    var answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  var n = +prompt("enter num for factorial");
  answer = factorial(n)
  document.write("The factorial of " + n + " is " + answer);

// task no 7
function counting(){
    var a=+prompt("starting num")
    var b=+prompt("ending num")
    for(a;a<=b;a++){
       document.write(a+"<br>");
    }
}
counting();

// task no 8
function calcHypotenus(base,per) {
    var hypo= base*base  + per*per ;
    alert(hypo+"\n")
    function calcSquare(){
    var squrt= Math.sqrt(base*base  + per*per) ;
    alert(squrt)}
    calcSquare()
}
var base=+prompt("enter base value")
var per=+prompt("enter perpendicular value")
calcHypotenus(base,per);
// task no 9
function area(width,height){
    var area=width*height;
    document.write(area);
}
area(10,20);

// task no 10
function palindrome(){
    var a=prompt("enter word");
    var b=a.split("");
    var c=b.reverse().join("");
if(a===c){
    document.write("palindrome word")
}
else{
    document.write("NOT palindrome word")
}
}
palindrome();

// task no 11
function capitilize(){
    var a=prompt("Enter only one word");
    var b=a.split(" ").toString();
    var d=b[0].toUpperCase()+b.slice(1); ;
        document.write(d);
}
capitilize();

// task no 12
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");
// task no 14
function calcCircumference(){
var radius=20;
var cir=2*(3.142)*radius;
cir=cir.toFixed(2)
document.write("The circumference is: "+cir);
}
function calcArea(){
var radius=20;
var area=3.142*radius*radius;
document.write("<br>The area is: "+area);
}
calcCircumference();
calcArea();*/


/*<=================Chapter no 38 to 42 Events ====================> 
// task no 1
function power1(){
    var a=document.getElementById('1').value
    var b=document.getElementById('2').value
var c=Math.pow(a,b);
alert(c)}

// task no 2
function leapYear(){
var year=document.getElementById('year').value
if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
{
    alert(year+" is a leap year");  
}
else
{
    alert(year+" is not a leap year");  
}
}*/
// // task no 3
// function T_area(){
// var S;
// var a=document.getElementById('1').value
// var a=parseInt(a)
// var b=document.getElementById('2').value
// var b=parseInt(b)
// var c=document.getElementById('3').value
// var c=parseInt(c)
//     function whereas(){
//          S=(a+b+c)/2
//         
//     }
//     whereas()
// var A=Math.sqrt(S*(S-a)*(S-b)*(S-c))
// alert(A)
// }
// // task no 4
// function Main_Function(){
// var average;
// var per;
// var s1=document.getElementById('1').value
// s1=parseInt(s1)
// var s2=document.getElementById('2').value
// s2=parseInt(s2)
// var s3=document.getElementById('3').value
// s3=parseInt(s3)

// var total=s1+s2+s3
//     function average1(){
//         average=(total/300)*100
//         average=average.toFixed(0)
//         return average;
//     }
//     function per1(){
//         per=(total/300)*100
//         per=per.toFixed(0)
//         return per;
//     }
// document.write("Total marks="+total)
// document.write("<br>Average of marks="+average1()+"%")
// document.write("<br>Percentage of marks="+per1()+"%")
// }

// // task no 5
// const indexOf = (word, character) => {
//     for (var i = 0; i < word.length; i++) {
//       if (word[i] === character) {
//         return i;
//       }
//     }
  
//     return -1;
//   }
//   console.log(indexOf("zameer","m"))
// task no 6
// const indexOf = (word, character) => {
//     for (var i = 0; i < word.length; i++) {
//       if (word[i] === "a" || "e" || "i" || "o" || "u") {
//         return i=" ";
//       }
//     }
  
//     return -1;
//   }
//   console.log(indexOf("zameer"))
// // task no 7
// function ch_vowels(){
//     var text="Pleases read this application and give me gratuity"
//     for (var i = 0; i < text.length; i++) {
//               if (text[i] === "ea") {
//                 console.log(i);
//               }
// }}
// ch_vowels()

// // task no 8
// var a=+prompt('enter distance betwenn 2 cities')
// var T_km=a;
// function M(){
//     var km=T_km*1000
//     return km;
// }
// function Inch(){
//     var ki=T_km*39370.1
//     return ki;
// }
// function C_M(){
//     var kcm=T_km*100000
//     return kcm
// }
// function feet(){
//     var kf=T_km*3280.32
//     return kf
// }
// document.write("total distance in meters="+M())
// document.write("<br>total distance in Inches="+Inch())
// document.write("<br>total distance in Centimeters="+C_M())
// document.write("<br>total distance in feet="+feet())

// task no 9

/*<=================Chapter no 43 to 48 Events ====================> 
// task no 1
function click1(){
    alert("Be Alert")
}

// task no 2
function message1(){
    alert('thank you for purchasing mobile from us')
}

// task no 3
function Deletebtn1(){
    var student=document.getElementById('1')
    student.innerHTML=''
}
function Deletebtn2(){
    var student=document.getElementById('2')
    student.innerHTML=''
}
function Deletebtn3(){
    var student=document.getElementById('3')
    student.innerHTML=''
}
function Deletebtn4(){
    var student=document.getElementById('4')
    student.innerHTML=''
}

// task no 4
function Image(id,srcs){
    var img=document.getElementById(id)
    img.src=srcs
}

// task no 5
var counter=0
var count=document.getElementById('count')

function iBtn(){
counter++
count.innerHTML=counter
}
function dBtn(){
    counter--
    if(counter <= 0){
        counter=0;
    }
    count.innerHTML=counter
}
function reSet(){
    counter=0
    count.innerHTML=counter
}
*/

/*<===============chapter no 49 to 52 Events ===================> */
// // task no 1
// function submitbtn(){
// var name=document.getElementById("name")
// console.log(name.value)
// var email=document.getElementById("email")
// var ph=document.getElementById("ph")
// var pass=document.getElementById("pass")
// var subbtn=document.getElementById("subbtn")

// var showname=document.getElementById("show-name")
// var showemail=document.getElementById("show-email")
// var showph=document.getElementById("show-ph")
// var showpass=document.getElementById("show-pass")
// var show=document.getElementById("show")

// var textN="name: "
// var textE="email: "
// var textPH="Phone: "
// var textP="Password: "
//     if(subbtn){
//         showname.innerHTML=textN+name.value
//         showemail.innerHTML=textE+email.value
//         showph.innerHTML=textPH+ph.value
//         showpass.innerHTML=textP+pass.value
//         name.value=""
//         email.value=""
//         ph.value=""
//         pass.value=""
//     }
// }

// // task no 2
// function para(){
//     var p=document.getElementById("para");
//     p.innerHTML="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque perspiciatis reiciendis accusantium soluta perferendis quidem nemo asperiores corporis sed, eligendi laborum. Quibusdam facilis recusandae dolorem laudantium a culpa necessitatibus esse.<br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque perspiciatis reiciendis accusantium soluta perferendis quidem nemo asperiores corporis sed, eligendi laborum. Quibusdam facilis recusandae dolorem laudantium a culpa necessitatibus esse. <br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque perspiciatis reiciendis accusantium soluta perferendis quidem nemo asperiores corporis sed, eligendi laborum. Quibusdam facilis recusandae dolorem laudantium a culpa necessitatibus esse. <br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque perspiciatis reiciendis accusantium soluta perferendis quidem nemo asperiores corporis sed, eligendi laborum. Quibusdam facilis recusandae dolorem laudantium a culpa necessitatibus esse. <br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque perspiciatis reiciendis accusantium soluta perferendis quidem nemo asperiores corporis sed, eligendi laborum. Quibusdam facilis recusandae dolorem laudantium a culpa necessitatibus esse. <br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque perspiciatis reiciendis accusantium soluta perferendis quidem nemo asperiores corporis sed, eligendi laborum. Quibusdam facilis recusandae dolorem laudantium a culpa necessitatibus esse. <br>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque perspiciatis reiciendis accusantium soluta perferendis quidem nemo asperiores corporis sed, eligendi laborum. Quibusdam facilis recusandae dolorem laudantium a culpa necessitatibus esse."
// }

// // task no 3
// function submitbtn(){
//     var rollno=document.getElementById("rollno")
//     var name=document.getElementById("name")
//     var ph=document.getElementById("ph")
//     var classs=document.getElementById("classs")
//     alert(name.value)

//     var subbtn=document.getElementById("subbtn")
//     var tr=document.getElementById("tr")

//     var r1=document.getElementById("r-1")
//     var rname=document.getElementById("r-name")
//     var rph=document.getElementById("r-ph")
//     var rclass=document.getElementById("r-class")
    
//         if(subbtn){
//             r1.innerHTML=rollno.value
//             rname.innerHTML=name.value
//             rph.innerHTML=ph.value
//             rclass.innerHTML=classs.value
//             name.value=""
//             rollno.value=""
//             ph.value=""
//             classs.value=""
//         }
//     }
//     function Deletebtn1(){
//         var student=document.getElementById('1')
//         student.innerHTML=''
//     }
//     function Deletebtn2(){
//         var student=document.getElementById('2')
//         student.innerHTML=''
//     }
//     function Deletebtn3(){
//         var student=document.getElementById('3')
//         student.innerHTML=''
//     }
//     function Deletebtn4(){
//         var student=document.getElementById('4')
//         student.innerHTML=''
//     }

/*<================Chapter no 58 to 67 DOM ===================> 
// task no 1
// 1
var main_content=document.getElementById('main-content')
// 2
console.log(main_content.childNodes)
// 3
var render_class=document.getElementsByClassName("render")
console.log(render_class)
// 4
var f_name=document.getElementById('first-name')
f_name.value="zameer";
// 5
var l_name=document.getElementById('last-name')
l_name.value="Tunio";
var email=document.getElementById('email')
email.value="zameeralitunio@gmail.com";

// task no 2
// 1
var form_content=document.getElementById('form-content')
console.log(form_content.nodeType)
// 2
var last_name=document.getElementById('lastName')
console.log(last_name.nodeType)
console.log(last_name.childNodes)
// 3
// not understand this question
// 4
console.log(main_content.firstChild)
console.log(main_content.lastChild)
// 5
console.log(last_name.nextSibling)
console.log(last_name.previousSibling)
// 6
console.log(main_content.parentNode)
console.log(main_content.nodeType)  */
