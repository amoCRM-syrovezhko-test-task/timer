import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState({s: 3, m: 1, h: 23});
  const [showBtn, setShowBtn] = useState(true);
  const [pause, setPause] = useState(false);

  const title = pause ? "продолжить" : "пауза";

const start = () => {
  run();
  setInterval(run, 100); 
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

  return (
    <div className="App">
      <Display time={time} showBtn={showBtn} />
      {showBtn
        ? <Button name={"запуск"} click={start} />
        : <div className='btn-container'>
            <Button name={"стоп"}/>
            <Button name={title} />
          </div>
      }
    </div>
  );
}

export default App;
