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

]

// Ciclare su tutti gli studenti e stampare, per ognuno di essi, 
// nome, cognome, età tramite sfruttando i componenti bootstrap (ad es. in tabella).

const studentElement = document.getElementById('student-table')
console.log(studentElement)


for ( i = 0 ; i < arrayStudenti.length; i++ ) {

    const singoloStudente = arrayStudenti[i]
    
    const nome = singoloStudente.nome
    const cognome = singoloStudente.cognome
    const eta = singoloStudente.eta

    console.log(nome, cognome, eta)

    const tableStudentPrint = `
	<tr>
	  <td>${nome}</td>
	  <td>${cognome}</td>
	  <td>${eta}</td>
	</tr>`

    studentElement.innerHTML += tableStudentPrint

}

// MILESTONE 4
// Dare la possibilità all’utente di aggiungere un nuovo oggetto studente inserendo nome, cognome ed età tramite form.
// Aggiungere il nuovo studente all’array di studenti.
// Aggiornare l’interfaccia con il nuovo studente.

