import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { increment, decrement } from "../../helper/timeModify";
import { setReminderData, setTimer } from "../../redux/features/timerSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [timerState, setTimerState] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    notes: ""
  });
  const [targetTimerState, setTargetTimerState] = useState(null);
  const { timer } = useSelector((state) => state.timerSlice);
  const dispatch = useDispatch()
  let navigate = useNavigate()

  useEffect(() => {
    setTimerState(timer);
  }, [timer]);

  const changeTime = (e) => {
    setTargetTimerState(e.target.id);
  };
  const storeData = (e) => {
    e.preventDefault();
    setTimerState({ ...timerState, notes: "" })
    dispatch(setTimer(timerState))
    navigate("/countDown")
  };

  return (
    <div id="mainPage">
      <div id="main-header">
        <h1>CountDown</h1>
        <div id="timer">
          <h2 id="hours" className="display" onClick={changeTime}>
            {timerState.hours}
          </h2>
          <h2 id="minutes" className="display" onClick={changeTime}>
            {timerState.minutes}
          </h2>
          <h2 id="seconds" className="display" onClick={changeTime}>
            {timerState.seconds}
          </h2>
        </div>
      </div>
      <div id="main-body">
        <div id="timerButtons">
          <button className={"button"} onClick={() => { increment(timerState, targetTimerState, setTimerState) }}>
            INCREASE
          </button>
          &nbsp;
          <button className={"button"} onClick={() => { decrement(timerState, targetTimerState, setTimerState) }}>
            DECREASE
          </button>
        </div>
        <form id="CountDownInput" onSubmit={storeData}>
          <input
            type={"text"}
            autoFocus
            name="notes"
            placeholder="Enter Your Data...."
            value={timerState?.notes ? timerState.notes : ""}
            onChange={(e) => setTimerState({ ...timerState, [e.target.name]: e.target.value })}
          />
          <input type="submit" value="SET TIMER" />
        </form>
      </div>
    </div>
  );
};
export default Home;
