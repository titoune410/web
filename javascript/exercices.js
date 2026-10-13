//
// Nom : exercices.js
// Date et auteur : 30/09/2026 Timothé Adam-Lallemand
//
// Description :
//		Exercices en javascript
//		Calcul de la suite de Fibonacci
//		Ecriture de la fonction range(stop, [start], [step]) qui prend trois
// arguments en paramètre et renvoie le tableau des entiers compris entre
// start (inclus) et stop (exclu) avec un pas de step.
//


// Fonction Appeler_Fibonacci :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//      - lit le rang n dans l'entrée html
//		- appelle la fonction Fibonacci()
function Appeler_Fibonacci()
{
	// lecture de la valeur saisie qui est convertie en nombre
	const n = Number(document.forms["fibonacci"]["n"].value);
	
	// appel de la fonction Fibonacci
	let fibo = Fibonacci(n);
	
	// affichage du résultat dans la page html
	let resultat = document.getElementById("resultat_fibonacci").innerHTML = "Résultat : Fibonacci(" + n + ") = " + fibo;
}

// Retourne/renvoie la suite de Fibonacci au rang n
function Fibonacci(n)
{
	// contrôle du paramètre n
	if (!Number.isInteger(n) || n<0)
	{    
		return undefined;
	}
	
	// cas particulier
	if (n==0)
	{
		return 0;
	}

	// cas général
	let fibo2 = 0;
	let fibo1 = 0;
	let fibo = 1;
	for(let i=1; i<n; i++)
	{
		fibo2 = fibo1;
		fibo1 = fibo;
		fibo = fibo1 + fibo2;
	}
	return fibo; 
}


// Fonction Appeler_Range :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//      - lit les données dans les entrées html
//		- appelle la fonction Range()
function Appeler_Range()
{
	const champStop  = document.forms["range"]["stop"].value;
	const champStart = document.forms["range"]["start"].value;
	const champStep  = document.forms["range"]["step"].value;

	const stop  = Number(champStop);
	const start = (champStart === "") ? undefined : Number(champStart);
	const step  = (champStep  === "") ? undefined : Number(champStep);

	const tableau = Range(stop, start, step);

	document.getElementById("resultat_range").innerHTML = "Range = [" + tableau + "]";
}


// Fonction Range(stop, start=0, step=1)
// Retourne/Renvoie le tableau des entiers compris entre start (inclus) et 
// stop (exclu) avec un pas de step.
function Range(stop, start=0, step=1)
{
	let tab = []; 
	if(start == undefined){
		start = 0;
	}
	if(step == undefined){
		step = 1;
	}
	if(stop <= start){
		return tab;
	}
	for(let i = start; i < stop; i += step){
		tab.push(i);
	}
	return tab; 
}
