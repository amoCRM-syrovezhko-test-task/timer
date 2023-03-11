import './App.css';
import Display from './components/Display';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState({s: 0, m: 0, h: 0});
  const [showBtn, setShowBtn] = useState(true);
  const [pause, setPause] = useState(false);

  let title = pause ? "продолжить" : "пауза";

  return (
    <div className="App">
      <Display time={time} showBtn={showBtn} />
      {showBtn
        ? <Button name={"запуск"}/>
        : <div className='btn-container'>
            <Button name={"стоп"}/>
            <Button name={title} />
          </div>
      }
    </div>
  );
}

export default App;
