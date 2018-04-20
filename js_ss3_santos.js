function menu(a){
	switch (a) {
		case "sunday":
			e = "SINIGANG.";
			break;
		case "monday":
			e = "ADOBO.";
			break;
		case "tuesday":
			e = "KALDERETA.";
			break;
		case "wednesday":
			e = "AFRITADA.";
			break;
		case "thursday":
			e = "MECHADO.";
			break;
		case "friday":
			e = "PAKSIW NA PATA.";
			break;
		case "saturday":
			e = "LIEMPO.";
			break;
		default:
			document.write("The input day is invalid.");
	}
}
day = prompt("Enter the day: ");
cday = day.toUpperCase();
sday = day.toLowerCase();
menu(sday);
document.write("The day is " + cday + " and the menu of the day is " + e);