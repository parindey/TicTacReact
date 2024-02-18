import React,{useState}from 'react';
import Square from './Square';

function TicTac () {
    const [text,setText] = useState(Array(9).fill(null));
    const [disable,setDisable] = useState(Array(9).fill(false));
    const [turnO,setTurnO] = useState(true);


   function handleClick(i){
    if(calWin(text))
       return;
     text[i]=turnO?'O':'X';
     setText(text);
     setTurnO(!turnO);
     disable[i]=true;
     setDisable(disable);    
   }

   function restart(){
       setTurnO(true);
         setText(Array(9).fill(null));
         setDisable(Array(9).fill(false));
   }

   const winner = calWin(text);
   let status;
   if(winner)
    status=`winnner ${winner}`;
   else
     status=`next player : ${turnO?'O':'X'}`

   function calWin(text){
    const WinPatterns= [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]

    for(let win of WinPatterns){
        const [a,b,c] = win;
        if(text[a]&&text[a]===text[b] && text[a]===text[c])
        return text[a];
    }
      return null;
   }
  return (
    <div className='App1'>
    <div className='row'>
    <Square value={text[0]} disable={disable[0]} showhandleclick={()=>handleClick(0)}/>
    <Square value={text[1]} disable={disable[1]} showhandleclick={()=>handleClick(1)}/>
    <Square value={text[2]} disable={disable[2]} showhandleclick={()=>handleClick(2)}/>
    <Square value={text[3]} disable={disable[3]} showhandleclick={()=>handleClick(3)}/>
    <Square value={text[4]} disable={disable[4]} showhandleclick={()=>handleClick(4)}/>
    <Square value={text[5]} disable={disable[5]} showhandleclick={()=>handleClick(5)}/>
    <Square value={text[6]} disable={disable[6]} showhandleclick={()=>handleClick(6)}/>
    <Square value={text[7]} disable={disable[7]} showhandleclick={()=>handleClick(7)}/>
    <Square value={text[8]} disable={disable[8]} showhandleclick={()=>handleClick(8)}/>
    </div> 
    
    <div>
        <h2 className='text-center'>{status}</h2>
    </div>
    <div className='text-center'>
        <button onClick={restart}>Restart</button>
    </div>

    
    </div>
  )
}

export default TicTac;