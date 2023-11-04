import React from 'react'
import { FaPause, FaPlay, FaUndo } from 'react-icons/fa';

const Display = ({
    displayState,
    reset,
    startStop
}) => {

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? "0" + minutes.toString() : minutes}:${seconds < 10 ? "0" + seconds.toString() : seconds}`;
    };

    return (
        <>
            <div className='timer-wrap'>
                <div id="timer-label">{displayState.timeType}</div>
                <div id="time-left">{formatTime(displayState.time)}</div>
            </div><div className='timer-control'>
                <button id="start_stop" onClick={startStop}>{displayState.timerRunning ? <FaPause /> : <FaPlay />}</button>
                <button id="reset" onClick={reset}><FaUndo /></button>
            </div>
        </>
    )
}

export default Display