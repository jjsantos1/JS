function operation(x,y){
	total = x + y;
	diff = x - y;
	prod = x * y;
	quo = x / y;
	return;
}
a = parseInt(prompt("Enter first number: "));
b = parseInt(prompt("Enter second number: "));
operation(a,b);
document.write("The sum of two numbers is: " + total + ".<br>");
document.write("The difference of two numbers is: " + diff + ".<br>");
document.write("The product of two numbers is: " + prod + ".<br>");
document.write("The quotient of two numbers is: " + quo + ".");
