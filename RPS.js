const score = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };
  updateElement();
  function updateElement() {
    document.querySelector('.JS-score').innerHTML = `Wins: ${score.win}, Loses: ${score.lose}, Ties: ${score.tie}`;
  }
   function pickaMove() 
    {               
                    let randomnum = Math.random();
                    let computermove = '';
                    if(randomnum>=0 && randomnum<1/3)
                    {
                      computermove = 'ROCK';
                    }else if(randomnum>=1/3 && randomnum <2/3)
                    {
                      computermove = 'PAPER';
                    }else 
                    {
                      computermove = 'SCISSOR';
                    }
                    return computermove;
   }
  function playaMove(move)
  {             let computermove = pickaMove();
                let result = '';
                if(move === 'ROCK') 
                {
                    if(computermove === 'ROCK')
                    {
                      result = 'Tie'
                    } else if(computermove === 'PAPER')
                    {
                      result = 'You Lose!';
                    } else
                    {
                      result = 'You Win!';
                    }
                  } else if(move === 'PAPER')
                  {
                    if(computermove === 'ROCK')
                    {
                      result = 'You Win!';
                    } else if(computermove === 'PAPER')
                    {
                      result = 'Tie';
                    } else
                    {
                      result = 'You Lose!';
                    }
                  } else if (move === 'SCISSOR') 
                  {
                    if(computermove === 'ROCK')
                    {
                      result = 'You Lose!'
                    } else if(computermove === 'PAPER')
                    {
                      result = 'You Win!';
                    } else
                    {
                      result = 'Tie';
                    }
                  }
                  if(result === 'You Win!'){
                    score.win += 1;
                  } else if(result === 'You Lose!'){
                    score.lose += 1;
                  } else if(result === 'Tie'){
                    score.tie += 1;
                  }
                  localStorage.setItem('score',JSON.stringify(score));
                  document.querySelector('.JS-result').innerHTML = `${result}`;
                  document.querySelector('.JS-moves').innerHTML = `You <img class="moves-img" src =moves_img/${move}.png>  <img class="moves-img" src=moves_img/${computermove}.png>computer`;
                  updateElement();
                  /*alert(`You picked ${move}. I picked ${computermove}. ${result}\nWINS: ${score.win}, LOSES: ${score.lose}, TIES: ${score.tie}`);*/
     
  }