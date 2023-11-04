import './App.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

function App() {
  return (
    <div className="wrapper">
      <div className='timer'>
        <header>25 + 5 Clock</header>
        <div className='length-wrap'>
          <div id="break-label">
            <p>Break Length</p>
            <div className="button-wrap">
              <div id="break-decrement"><FaArrowDown /></div>
              <div id="break-length">5</div>
              <div id="break-increment"><FaArrowUp /></div>
            </div>
          </div>
          <div id="session-label">
            <p>Session Length</p>
            <div className='button-wrap'>
              <div id="session-decrement"><FaArrowDown /></div>
              <div id="session-length">25</div>
              <div id="session-increment"><FaArrowUp /></div>
            </div>
          </div>
        </div>
        <div className='timer-wrap'>
          <div id="timer-label">Session</div>
          <div id="time-left">25:00</div>
        </div>
        <div className='timer-control'>
          <button id="start_stop">Start/Stop</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
