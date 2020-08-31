var score = 0
const init = ()=>{
    
    printToDom('score', score);
    buttonEvents();

}
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}
const buttonEvents = ()=>{
    document.getElementById('increase').addEventListener('click', increaseFunc )
  
  document.getElementById('decrease').addEventListener('click', decreaseFunc)
  document.getElementById('reset').addEventListener('click', resetNum)
  }

const colorChanger = ()=> {
    
        if (score < 0) {
            document.getElementById('score').style.color = 'red';
        }
        else if(score === 0){
            document.getElementById('score').style.color = 'black'
        }
        else if(score > 0){
            document.getElementById('score').style.color = 'green'
        }
}

const increaseFunc = () =>{
    
        document.getElementById("score").innerHTML = score++;
       colorChanger()
      }
     
    
const decreaseFunc = () =>{
    document.getElementById("score").innerHTML = score--;
    colorChanger()
}
const resetNum = () =>{
    score = 0
    document.getElementById("score").innerHTML = score;
    colorChanger()
}


init()