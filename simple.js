var price=250;
var productName="pen";
var tax=3;
var total=price*tax;
var s=price+tax;
console.log("total price:"+total);
console.log("price product:"+s);
console.log(price);
console.log(typeof(price));//type of the data 
function add(c,b)//function definition
{
    var v=c+b;
    console.log(v);
}
add(3,2);//function call
function area(len,bre)
{
    var areaOfRect=len*bre;
    console.log("Area of a rectangle is "+areaOfRect);
}
area(5,9)
