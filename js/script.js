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
    resultButtnoLancer.innerHTML ='il risultato è:\xa0'; 
    let userNumber = document.getElementById('my-number');
    userNumber = Math.floor(Math.random() * 11);
    let pcNumber = document.getElementById('pc-number');
    pcNumber = Math.floor(Math.random() * 11);
    userNumber.innerHTML += `${userNumber.value}`;
    pcNumber.innerHTML += `${pcNumber}`;
    console.log(userNumber);
    console.log(pcNumber);
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