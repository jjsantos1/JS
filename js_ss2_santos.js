function grade(x){
	if (x<=100 && x>=0)
		if (x<92)
			if (x<88)
				if (x<84)
					if (x<80)
						if (x<76)
							if (x<72)
								if (x<68)
									if (x<64)
										if (x<60)
											document.write("Singko! 5.0! Fail!");
										else
											document.write("Tres! Passing!");
									else
										document.write("2.75! Fair!");
								else
									document.write("2.5! Sufficient!");
							else
								document.write("2.25! Satisfactory!");
						else
							document.write("2.0! Very satisfactory!");
					else
						document.write("1.75! Good!");
				else
					document.write("1.5! Very Good!");
			else
				document.write("1.25! Outstanding!");
		else
			document.write("1.0! Excellent!");
	else
		document.write("Not valid input");
	return;
}
a = parseFloat(prompt("Enter grade: "));
b = a.toFixed(2);
grade(b);
