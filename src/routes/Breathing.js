import { useState, useEffect, useRef } from "react";
import BreathingPanel from "../ui/BreathingPanel";
import Button from "../ui/Button";
const Breathing = (props) => {
  const isAdding = useRef(true);
  const isInhaling = useRef(true);
  // const isHolding = useRef(false);
  const [startBreathing, setStartBreathing] = useState(false);
  const [pauseBreathing, setPauseBreathing] = useState(false);
  const [time, setTime] = useState(0);
  const [rounds, setRounds] = useState(0);

  const pauseResumeBreathHandler = () => {
    setPauseBreathing(!pauseBreathing);
    if (!pauseBreathing) {
      setStartBreathing(false);
      // isAdding.current = true;
      // isInhaling.current = true;
    } else {
      setStartBreathing(true);
    }
  };

  const startStopResetBreathHandler = (evt) => {
    if (evt.target.innerHTML === "Start") {
      setStartBreathing(true);
    }
    if (evt.target.innerHTML === "Stop") {
      setStartBreathing(false);
    }
    setTime(0);
    setRounds(0);
    isAdding.current = true;
    isInhaling.current = true;
  };

  useEffect(() => {
    if (!startBreathing) {
      return;
    }
    const interval = setInterval(() => {
      if (time < 6 && time >= 0 && isAdding.current) {
        console.log("adding");
        if (time === 5.5) {
          isAdding.current = !isAdding.current;
          isInhaling.current = !isInhaling.current;
          // isHolding.current = !isHolding.current;
        }
        setTime((curr) => curr + 0.5);
      }

      if (time <= 6 && time >= 0.5 && !isAdding.current) {
        console.log("removing");
        setTime((curr) => curr - 0.5);
      }

      // if (isHolding.current) {
      //   setTime(time + 0.5);
      //   console.log(isHolding.current);
      //   isHolding.current = !isHolding.current;
      // }

      if (!isAdding.current) {
        console.log("removing");
        if (time === 0.0) {
          isAdding.current = !isAdding.current;
          isInhaling.current = !isInhaling.current;
          setRounds((curr) => curr + 1);
        }
        // setTime(time - 0.5);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isAdding, time, startBreathing, rounds]);
  // };

  return (
    <section>
      <BreathingPanel rounds={rounds} time={time} isInhaling={isInhaling} />
      <article className="flex justify-around">
        <Button onClick={startStopResetBreathHandler} value="Start" />
        <Button
          onClick={pauseResumeBreathHandler}
          value={`${pauseBreathing ? "Resume" : "Pause"}`}
        />
        <Button onClick={startStopResetBreathHandler} value="Stop" />
        <Button onClick={startStopResetBreathHandler} value="Reset" />
      </article>
    </section>
  );
};

export default Breathing;
