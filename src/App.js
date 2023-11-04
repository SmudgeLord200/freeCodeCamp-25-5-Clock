import { useEffect, useState } from 'react';
import './App.css';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import TimeSetter from './TimeSetter';
import Display from './Display';

const BREAK_LENGTH = 5 * 60;
const SESSION_LENGTH = 25 * 60;
const MIN = 60;
const MAX = 60 * 60;
const INTERVAL = 60;

function App() {
  const [breakLength, setBreakLength] = useState(BREAK_LENGTH);
  const [sessionLength, setSessionLength] = useState(SESSION_LENGTH);
  const [displayState, setDisplayState] = useState({
    time: sessionLength,
    timeType: "Session",
    timerRunning: false,
  });

  useEffect(() => {
    let timerID = 0;
    if (!displayState.timerRunning) return;

    if (displayState.timerRunning) {
      timerID = setInterval(countDown, 1000)
    }

    return () => {
      clearInterval(timerID);
    }
  }, [displayState.timerRunning]);

  useEffect(() => {
    if (displayState.time === 0) {
      const audio = document.getElementById('beep');
      // audio.currentTime = 7;
      audio.play().catch((e) => console.log(e));
      setDisplayState(prev => ({
        ...prev,
        time: prev.timeType === 'Session' ? breakLength : sessionLength,
        timeType: prev.timeType === 'Session' ? 'Break' : 'Session'
      }));
    }
  }, [displayState, breakLength, sessionLength])

  const changeBreakTime = (time) => {
    if (displayState.timerRunning) return;
    setBreakLength(time);
  };

  const changeSessionTime = (time) => {
    if (displayState.timerRunning) return;
    setSessionLength(time);
    setDisplayState(prev => ({
      ...prev,
      time: time,
      timeType: "Session",
      timerRunning: false,
    }))
  };

  const countDown = () => {
    setDisplayState(prev => ({
      ...prev,
      time: prev.time - 1
    }));
  };

  const reset = () => {
    setBreakLength(BREAK_LENGTH);
    setSessionLength(SESSION_LENGTH);
    setDisplayState({
      time: SESSION_LENGTH,
      timeType: "Session",
      timerRunning: false,
    })
    const audio = document.getElementById('beep');
    audio.pause();
    audio.currentTime = 0;
  }

  const startStop = () => {
    setDisplayState(prev => ({
      ...prev,
      timerRunning: !prev.timerRunning,
    }))
  }

  return (
    <div className="wrapper">
      <div className='timer'>
        <header>25 + 5 Clock</header>
        <div className='length-wrap'>
          <div id="break-label">
            <p>Break Length</p>
            <TimeSetter
              time={breakLength}
              setTime={changeBreakTime}
              min={MIN}
              max={MAX}
              interval={INTERVAL}
              type="break"
            />
          </div>
          <div id="session-label">
            <p>Session Length</p>
            <TimeSetter
              time={sessionLength}
              setTime={changeSessionTime}
              min={MIN}
              max={MAX}
              interval={INTERVAL}
              type="session"
            />
          </div>
        </div>
        <Display
          displayState={displayState}
          reset={reset}
          startStop={startStop}
        />
      </div>
      <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
    </div>
  );
}

export default App;
