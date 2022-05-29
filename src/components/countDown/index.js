import './countDown.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setTimer } from '../../redux/features/timerSlice';
function CountDown() {
  const [timerState, setTimerState] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const { timer } = useSelector((state) => state.timerSlice);
  const [over,setOver]=useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimerState(timer);
  }, [timer])
  useEffect(()=>{
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  })
useEffect(()=>{

  over && dispatch((setTimer(timerState)))
},[over])

  const tick = () => {
    if (timerState.hours == 0 && timerState.minutes == 0 && timerState.seconds == 0) setOver(true)
    else if (timerState.minutes == 0 && timerState.seconds == 0)
      setTimerState({
        hours: timerState.hours - 1,
        minutes: 59,
        seconds: 59
      });
    else if (timerState.seconds == 0)
      setTimerState({
        hours: timerState.hours,
        minutes: timerState.minutes - 1,
        seconds: 59
      });
    else
      setTimerState({
        hours: timerState.hours,
        minutes: timerState.minutes,
        seconds: timerState.seconds - 1
      });
  };

  return (
    <div className="countDown">
      <div id="hours" className="timeDisplay">{timerState.hours}</div>
      <div id="minutes" className="timeDisplay">{timerState.minutes}</div>
      <div id="seconds" className="timeDisplay">{timerState.seconds}</div>
    </div>
  );
}

export default CountDown;
