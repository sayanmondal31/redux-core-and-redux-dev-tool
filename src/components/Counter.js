import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  // useDispatch is used to set the action to redux
  const dispatch = useDispatch();
  // useSelector takes state from redux store
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  function incrementHandler() {
    dispatch({
      type: "INCREMENT",
    });
  }
  function incrementByFiveHandler() {
    dispatch({
      type: "INCREASE",

      //  payload
      amount: 5,
    });
  }
  function decrementHandler() {
    dispatch({
      type: "DECREMENT",
    });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFiveHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
