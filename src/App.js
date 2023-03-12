import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState({s: 15, m: 36, h: 13});
  const [defaultScreen, setDefaultScreen] = useState(true);
  const [interv, setInterv] = useState();
  const [pause, setPause] = useState(false);

  const title = pause ? "продолжить" : "пауза";

  const startFunc = () => {
    if (time.h > 0 || time.m > 0 || time.s > 0) {
      run();
      setInterv(setInterval(run, 1000)); 
      setDefaultScreen(false);
    }
  }

  const run = () => {
    if (time.s === 0) {
      time.m--;
      time.s = 60;
    }
    time.s--;
    if (time.m < 0){
      time.h--;
      time.m = 59;
    }
    return setTime({s: time.s, m: time.m, h: time.h})
  }
  
  const pauseFunc = () => {
    if (!pause) {
      clearInterval(interv);
      setPause(!pause)
    } else {
      startFunc();
      setPause(!pause)
    }
  }

  const stopFunc = () => {
    clearInterval(interv);
    setTime({s: 0, m: 0, h: 0});
    setDefaultScreen(true);
  }


  return (
    <div className="App">
      <Display
        time={time}
        setTime={setTime}
        showBtn={defaultScreen} />
      {defaultScreen
        ? <Button name={"запуск"} click={startFunc} />
        : <div className='btn-container'>
            <Button name={"стоп"} click={stopFunc} />
            <Button name={title} click={pauseFunc} />
          </div>
      }
    </div>
  );
}

export default App;
