import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const TimeSetter = ({
    time,
    setTime,
    min,
    max,
    interval,
    type
}) => {
    return (
        <div className="button-wrap">
            <button id={`${type}-decrement`} onClick={() => (time > min ? setTime(time - interval) : null)}><FaArrowDown /></button>
            <div id={`${type}-length`}>{time / interval}</div>
            <button id={`${type}-increment`} onClick={() => (time < max ? setTime(time + interval) : null)}><FaArrowUp /></button>
        </div>
    )
}

export default TimeSetter