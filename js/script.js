const emailList = ['matteo@gmail.com' , 'luca@gmail.com', 'andrea@gmail.com' , 'arianna@gmail.com' , 'riccardo@gmail.com'];
let userMail = prompt('Dammi la tua mail');
let risultMail = document.getElementById('my-email');

for(let i = 0; i < emailList.length; i++ ){
    if(userMail == (emailList[i])){
        console.log('La tua mail è accettata');
        risultMail.classList.remove('text-warning');
        risultMail.classList.add('text-success');
        risultMail.innerHTML = 'La tua mail è acettata';
        i = emailList.length - 1;
    }else{
        console.log('La tua mail non è accettata!');
        risultMail.classList.add('text-warning');
        risultMail.innerHTML = 'La tua mail non è acettata';
    }
};

//--------------------------ESERCIZIO 2-----------------------------------

const userButtonLancer = document.getElementById('my-button-lancer');
let resultButtnoLancer = document.getElementById('win-or-lose');



userButtonLancer.addEventListener('click' , function(){
    //DO VALORI BASE AI P DEL HTML
    resultButtnoLancer.innerHTML ='il risultato è:\xa0'; 
    document.getElementById('my-number').innerHTML = `il mio numero è:\xa0`;
    document.getElementById('pc-number').innerHTML = `il numero del pc è:\xa0`;
    // CREO LE VARIABILI DI NUMERI RANDOM
    let userNumber = Math.floor((Math.random() * 6) + 1 );
    document.getElementById('my-number').innerHTML += `${userNumber}`;

    let pcNumber = Math.floor((Math.random() * 6) + 1 );
    document.getElementById('pc-number').innerHTML += `${pcNumber}`;
    //PER SICUREZZA LE RIPRODUCO ANCHE SU CONSOLE
    console.log(userNumber);
    console.log(pcNumber);
    //INIZIO IL CILCO PER CONFRONTARE LE 3 CASISTICHE E OTTENERE IL RISSULTATO 
    if(userNumber > pcNumber){
        resultButtnoLancer.classList.remove('text-warning');
        resultButtnoLancer.classList.add('text-success');
        resultButtnoLancer.innerHTML += 'hai vinto!!!';
    }else if( userNumber < pcNumber){
        resultButtnoLancer.classList.remove('text-success');
        resultButtnoLancer.classList.add('text-warning');
        resultButtnoLancer.innerHTML += 'hai perso!!!';
    }else {
        resultButtnoLancer.classList.remove('text-success' , 'text-warning');
        resultButtnoLancer.innerHTML += 'Spareggio, riprova!!!';
    }
});