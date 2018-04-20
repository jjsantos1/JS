function mult(a,b){
	for(i=1; i<=a; i++){
		for(j=1; j<=b; j++){
			document.write(i + " x " + j + "= " + i*j + "<br>");
		}
	document.write("<br>");
	}	
}
a = parseInt(prompt("Enter first number: "));
b = parseInt(prompt("Enter second dimension: "));
mult(a,b);
