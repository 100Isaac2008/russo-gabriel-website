const box = document.getElementById('box');
const pulsante = document.getElementById('pulsante');

function coloreCasuale(){
    const lettere='0123456789abcdef'; 
    const colore= '#';

    for (let i = 0; i < 6; i++){
      colore += lettere[Math.floor(Math.random() * 16 )];

    }
    return colore;
}   


    pulsante.addEventlistener('click', function(){
        
        box.style.backgroundColor = colore;

    })


