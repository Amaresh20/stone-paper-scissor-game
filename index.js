
const game = ['stone','paper','scissor']
let YouSelected = ''
let PcSelected = ''
let winner = ""
let cs = document.getElementById('cs').innerText =  Number(localStorage.getItem('cs')) || 0;
let ys = document.getElementById('ys').innerText = Number(localStorage.getItem('ys')) || 0;

document.getElementById('stone').addEventListener('click',()=>{
    YouSelected = game[0];
    gameStart();
})

document.getElementById('scissor').addEventListener('click',()=>{
    YouSelected = game[2];
    gameStart();
})

document.getElementById('paper').addEventListener('click',()=>{
    YouSelected = game[1];
    gameStart();
})

const gameStart = () =>{
    document.querySelector('.toggle').style.display = 'none';
    //   pc pick one from array
    PcSelected = game[Math.floor([Math.random()*3])];
    // append logo to screen
   document.getElementById('pc-logo').innerHTML = logos(PcSelected);
   document.getElementById('you-logo').innerHTML = logos(YouSelected);
  //  reslut
  const res = winners();
  document.getElementById('winner').innerText = res

  if(res === "you win"){
    ys = ys + 1;
  }else if (res === "you lost"){
    cs = cs + 1;
  }

  document.querySelector('.game-div').style.display = 'flex'

  document.getElementById('cs').innerText = cs;
  document.getElementById('ys').innerText = ys;
  // store to local storage
  localStorage.setItem('cs',cs);
  localStorage.setItem('ys',ys);

}

const winners = () =>{
    if(YouSelected === game[0] && PcSelected === game[2] ){
        return "you win";
    }else if(YouSelected === game[0] && PcSelected === game[1]){
        return "you lost"
    }else if(YouSelected === game[1] && PcSelected === game[0]){
        return "you win"
    }else if(YouSelected === game[1] && PcSelected === game[2] ){
        return "you lost"
    }else if(YouSelected === game[2] && PcSelected === game[0]){
        return "you lost"
    }else if(YouSelected === game[2] && PcSelected === game[1]){
        return "you win"
    }else {
        return "tie"
    }
}

const logos = (selected) =>{
    if(selected === game[0]){
        return ` <div
        style="
          background-color: #0074b6;
          border-radius: 50%;
          width: 110px;
          height: 110px;
          display: flex;
          justify-items: center;
          align-items: center;
          padding: 10px;
        "
      >
        <img
          style="
            width: 90px;
            height: 90px;
            background-color: #fff;
            border-radius: 50%;
            padding: 20px;
            margin: auto;
          "
          src="/public/stone.svg"
        />
      </div>
        `
    }
    if(selected === game[2]){
      return `<div
        style="
          background-color: #BD00FF;
          border-radius: 50%;
          width: 110px;
          height: 110px;
          display: flex;
          justify-items: center;
          align-items: center;
          padding: 10px;
        "
      >
        <img
          style="
            width: 90px;
            height: 90px;
            background-color: #fff;
            border-radius: 50%;
            padding: 20px;
            margin: auto;
          "
          src="/public/scissor.svg"
        />
      </div>`
    }

    if(selected === game[1]){
        return `<div
        style="
          width: 110px;
          height: 110px;
          background-color: #FFA943;
          border-radius: 50%;
          display: flex;
          justify-items: center;
          align-items: center;
        "
      >
        <img
          style="
            width: 90px;
            height: 90px;
            background-color: #fff;
            border-radius: 50%;
            padding: 20px;
            margin: auto;
          "
          src="/public/paper.svg"
        />
      </div>`
    }
}

document.querySelector('.rule-btn').addEventListener('click',()=>{
  document.querySelector('.rule-box').style.display = "block";
})

document.querySelector('.cross').addEventListener('click',() =>{
  document.querySelector('.rule-box').style.display = "none";
})

document.getElementById('play-again').addEventListener('click', () =>{
  gameStart();
})