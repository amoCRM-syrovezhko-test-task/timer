import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState({s: 3, m: 1, h: 23});
  const [defaultScreen, setDefaultScreen] = useState(true);
  const [interv, setInterv] = useState();
  const [pause, setPause] = useState(false);

  const title = pause ? "продолжить" : "пауза";

  const startFunc = () => {
    if (updateHour > 0 || updateMinute > 0 || updateSecond > 0) {
      run();
      setInterv(setInterval(run, 100)); 
      setDefaultScreen(false);
    }
  }

  var updateHour   = time.h;
  var updateMinute = time.m;
  var updateSecond = time.s;

  const run = () => {
    if (updateSecond === 0) {
      updateMinute--;
      updateSecond = 60;
    }
    updateSecond--;
    if (updateMinute < 0){
      updateHour--;
      updateMinute = 59;
    }
    return setTime({s: updateSecond, m: updateMinute, h: updateHour})
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
      <Display time={time} showBtn={defaultScreen} />
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
