const btn = document.getElementById('btn-color')
const arrayHex = ['0','1','2','3','4','5','6','7','8','9','A', 'B', 'C', 'D', 'E', 'F']
const span = document.getElementById('color')
const body = document.getElementById('body');
btn.addEventListener('click', function(){
   
    console.log('clicou')

    const randomColor = mudaCor()

    body.style.backgroundColor = `${randomColor}`;
    span.innerHTML =  `${randomColor}`;

    

})


function mudaCor(){
    let novaCor = "#";

    for(let i = 0; i < 6; i++){
        novaCor += arrayHex[Math.floor(Math.random() * arrayHex.length)]
    }   

    console.log(novaCor)
    return novaCor;

}