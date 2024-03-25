// Creare un array di oggetti di studenti.
// Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta

const arrayStudenti = [
    
    {
        nome: 'Piero',
        cognome: 'Cassetta',
        eta: '12',

    },

    {
        nome: 'Lillo',
        cognome: 'Franchi',
        eta: '24',

    },

    {
        nome: 'Zelda',
        cognome: 'Papini',
        eta: '32',

    },


    {
        nome: 'Carla',
        cognome: 'Rossi',
        eta: '15',

    },


    {
        nome: 'Milo',
        cognome: 'Zanicchi',
        eta: '28',

    },

]

// FORM //////////////////////////////////////////////////////////////////////////

// recuperare il nome dall’input 
const nomeElement = document.getElementById ('nome_studente'); // object | null
// recuperare il cognome dall’input 
const cognomeElement = document.getElementById ('cognome_studente');
// recuperare l'età dall’input 
const etaElement = document.getElementById ('eta_studente');
// Collegare il bottone invio
const buttonElement = document.getElementById('submit'); //

// attivare ascolto sul submit del form
buttonElement.addEventListener("click", function () {

    // questo codice verrà eseguito quando l'utente preme bottone

    const nome = nomeElement.value;
    const cognome = cognomeElement.value;
    const eta = etaElement.value;

    // creo un nuovo oggetto vuoto e lo popolo con il submit

    const nuovoStudente = {

    nome: nome,
    cognome: cognome,
    eta: eta
    }

    arrayStudenti.push(nuovoStudente)
    document.getElementById("result").innerHTML = `I dati che hai inserito sono Nome: ${nome}, Cognome: ${cognome} , Età: ${eta}`;

    // stampo array nuovo
    console.log(arrayStudenti)

    for (i = 0 ; i< arrayStudenti.length; i++) {

        const singoloStudente = arrayStudenti[i]
        console.log(singoloStudente)

        const nome = singoloStudente.nome
        const cognome = singoloStudente.cognome
        const eta = singoloStudente.eta


        document.getElementById("students-list").innerHTML += `<li>Nome: ${nome} </li> <li>Cognome: ${cognome} </li> <li>Età: ${eta}</li><br>`;
    
    
    }

    
});