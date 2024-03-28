// MILESTONE 3
// Creare un array di oggetti di studenti.
// Ogni oggetto studente deve avere tre proprietà:nome, cognome, eta .

const arrayStudenti = [
    
    {
        nome: 'Lillo',
        cognome: 'Calderotti',
        eta: '30',

    },

    {
        nome: 'Elisabetta',
        cognome: 'Zucchi',
        eta: '29',

    },

    {
        nome: 'Pimpa',
        cognome: 'Papini',
        eta: '28',

    },


    {
        nome: 'Imma',
        cognome: 'Tommasi',
        eta: '25',

    },


    {
        nome: 'Milo',
        cognome: 'Zanchi',
        eta: '27',

    },

    {
        nome: 'Carletto',
        cognome: 'Pistillo',
        eta: '23',

    }

]

// Ciclare su tutti gli studenti e stampare, per ognuno di essi, 
// nome, cognome, età tramite sfruttando i componenti bootstrap (ad es. in tabella).

// const studentElement = document.getElementById('student-table')
// console.log(studentElement)

// ciclo su tutto l'array e stampo gli studenti nell'HTML nella tabella
for ( i = 0 ; i < arrayStudenti.length; i++ ) {

    const singoloStudente = arrayStudenti[i]
    
    const nome = singoloStudente.nome
    const cognome = singoloStudente.cognome
    const eta = singoloStudente.eta

    // console.log(nome, cognome, eta)

    // const tableStudentPrint = `
	// <tr>
	//   <td>${nome}</td>
	//   <td>${cognome}</td>
	//   <td>${eta}</td>
	// </tr>`

    // studentElement.innerHTML += tableStudentPrint

    // invoco la funzione per stampare gli studenti nella tabella
    appendStudentHtml(singoloStudente);

}

// creo una funzione che mi stampi l'oggetto studente nella tabella
function appendStudentHtml(student) {
    
    const studentElement = document.getElementById('student-table')
    //console.log(studentElement)
    
	const tableStudentPrint = `
	<tr>
    <td>${student.nome}</td>
    <td>${student.cognome}</td>
    <td>${student.eta}</td>
	</tr>`
    
    studentElement.innerHTML += tableStudentPrint
}

// MILESTONE 4
// Dare la possibilità all’utente di aggiungere un nuovo oggetto studente inserendo nome, cognome ed età tramite form.
// Aggiungere il nuovo studente all’array di studenti.
// Aggiornare l’interfaccia con il nuovo studente.

// mi creo una funzione che accetti un parametro di tipo evento, che impedisca il refresh della pagina e che raccolga le 
// informazioni del form compilate dall'utente

// mi creo una variabile in cui metto il form
const form = document.getElementById("form-studenti");
console.log(form);


// aggiungo l'ascolto di js sul submit del form che si attiva solo se viene cliccato il pulsante invia nuovo studente
form.addEventListener('submit', aggiungiStudente);


//Funzione che accetta un parametro di tipo evento
function aggiungiStudente(e) {
	//Disabilitare la propagazione del submit
    e.preventDefault()
	//Recuperiamo i singoli input per recuperare il valore che viene inserito 
	//alla compilazione del form 
	const name = document.getElementById('name').value;
	const surname = document.getElementById('surname').value;
	const age = document.getElementById('age').value;
	
    //con i valori recuperati dal form si costruisce il nuovo studente
	const nuovoStudente = {
		nome: name,
		cognome: surname,
		eta: age,
	};

	console.log(nuovoStudente);
    
	//Deve pushare il nuovo membro nell'array
	arrayStudenti.push(nuovoStudente);

	console.log(arrayStudenti);

    // stampo il nuovo membro appendendolo nella tabella
	appendStudentHtml(nuovoStudente);

    // resetto il form
    document.getElementById('name').value = ''
	document.getElementById('surname').value = ''
	document.getElementById('age').value = ''
}
