import {useEffect, useState} from 'react';
import {HangImage} from './components/hangImage';
import {letters} from './helpers/letters';
import {getRandomWord} from './helpers/getRandomWord'
import './App.css';


function App() {

  const [word, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [attempts, setAttemps] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  //DETERMINA SI PERDIÓ
  useEffect(()=>{
    if (attempts >= 9){
      setLose(true);
    }
  }, [attempts]);

//DETERMINA SI GANÓ
useEffect(()=>{
const currentHiddenWord = hiddenWord.split(' ').join('');
if(currentHiddenWord === word){
  setWon(true);
}
}, [hiddenWord])
  const checkLetter = (letter: string) => {
    
    if(lose) return;
    if (won) return;
    
    if(!word.includes(letter)) {
      setAttemps(Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');
    
    for(let i = 0; i < word.length; i++){
      if(word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(' '));
  }

  const newGame =() => {
    const newWord = getRandomWord();

    setWord(newWord);
    setHiddenWord('_ '.repeat(newWord.length));
    setAttemps(0);
    setLose(false);
    setWon(false);
  }
  
  return (

  <div className="App">
 
  {/*IMAGENES*/}
  <HangImage imageNumber={attempts}/>

      {/*PALABRA OCULTA*/}
      <h3>{hiddenWord}</h3>

      {/*CONTADOR DE INTENTOS*/}
      <h3>{attempts}</h3>

      {/* MENSAJE SI PERDIÓ*/}
      {
        (lose) 
        ? <h2>Perdió {word}</h2>
        : ''
      }

      {/* MENSAJE SI PERDIÓ*/}
      {
        (won)
          ? <h2>Felicidades, ud ganó</h2>
          : ''
      }

      {/*BOTONES*/}
      {
        letters.map((letter) =>(
          <button
          onClick={()=>checkLetter(letter)}
          key={letter}>
            {letter}
          </button>
        ))
      }

      <br /><br />
      <button onClick={newGame}>Reiniciar Juego</button>

  </div>)
}

export default App
