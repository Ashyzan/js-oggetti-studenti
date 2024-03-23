console.log('app studenti')

// MILESTONE 1
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


// Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.
// prima ciclate con un ciclo for

// for ( i = 0 ; i < arrayStudenti.length; i++ ) {

//     const singoloStudente = arrayStudenti[i]
//     const nome = singoloStudente.nome
//     const cognome = singoloStudente.cognome
//     const eta = singoloStudente.eta

//     console.log(singoloStudente.nome, singoloStudente.cognome)

// }



// poi commentate il ciclo for e usate il forEach

arrayStudenti.forEach ( function (studente) {

    const nome = studente.nome
    const cognome = studente.cognome
    const eta = studente.eta

    console.log(studente.nome, studente.cognome)


})


// MILESTONE 2
// Dare la possibilità all’utente, attraverso 3 prompt(), 
//di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// creo un nuovo oggetto vuoto e lo popolo con i prompt

const nuovoStudente = {

    nome: prompt('inserisci il tuo nome '),
    cognome: prompt('inserisci il tuo cognome '),
    eta: prompt('inserisci la tua eta ')
}

// stampo il nuovo oggetto
console.log(nuovoStudente)
 
// Aggiungere il nuovo studente all’array di studenti
// = pusho il nuovo oggetto studente nell'array di studenti

arrayStudenti.push(nuovoStudente)

console.log(arrayStudenti)

// Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà nome, cognome, eta
// prima ciclate con un ciclo for

// for ( i = 0 ; i < arrayStudenti.length; i++ ) {

//     const singoloStudente = arrayStudenti[i]
//     const nome = singoloStudente.nome
//     const cognome = singoloStudente.cognome
//     const eta = singoloStudente.eta

//     console.log(singoloStudente.nome, singoloStudente.cognome, singoloStudente.eta)

// }

// poi commentate il ciclo for e usate il forEach

arrayStudenti.forEach ( function (studente) {

    const nome = studente.nome
    const cognome = studente.cognome
    const eta = studente.eta

    console.log(studente.nome, studente.cognome, studente.eta)


})